"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Play, RotateCcw } from "lucide-react";

// Game Constants
const GRAVITY = 0.5;
const JUMP_FORCE = -12;
const OBSTACLE_SPEED = 6;
const SPAWN_RATE = 1400;
const PLAYER_X = 50; // pixels from left
const PLAYER_SIZE = 40;
const OBSTACLE_WIDTH = 30;
const OBSTACLE_HEIGHT = 50;

export default function MiniGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  // Render State
  const [renderPlayerY, setRenderPlayerY] = useState(0);
  const [renderObstacles, setRenderObstacles] = useState<{ id: number; x: number }[]>([]);

  // Physics Refs (Source of Truth)
  const playerYRef = useRef(0);
  const velocityRef = useRef(0);
  const obstaclesRef = useRef<{ id: number; x: number; passed?: boolean }[]>([]);
  const scoreRef = useRef(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<number>(null);
  const obstacleIdRef = useRef(0);
  const lastSpawnTimeRef = useRef(0);

  const startGame = () => {
    playerYRef.current = 0;
    velocityRef.current = 0;
    obstaclesRef.current = [];
    scoreRef.current = 0;
    lastSpawnTimeRef.current = performance.now();
    
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    setRenderPlayerY(0);
    setRenderObstacles([]);
  };

  const jump = useCallback(() => {
    if (!isPlaying) {
      if (gameOver) startGame();
      else startGame();
      return;
    }
    // Only jump if on ground
    if (playerYRef.current === 0) {
      velocityRef.current = JUMP_FORCE;
    }
  }, [isPlaying, gameOver]);

  const endGame = useCallback(() => {
    setIsPlaying(false);
    setGameOver(true);
    if (scoreRef.current > highScore) {
      setHighScore(scoreRef.current);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#1A237E', '#4D6FFF']
      });
    }
  }, [highScore]);

  // Input listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump]);

  // Game Loop
  useEffect(() => {
    if (!isPlaying) return;

    let lastTime = performance.now();

    const loop = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Physics - Player
      velocityRef.current += GRAVITY;
      playerYRef.current += velocityRef.current;

      if (playerYRef.current >= 0) {
        playerYRef.current = 0;
        velocityRef.current = 0;
      }

      // Physics - Obstacles
      obstaclesRef.current = obstaclesRef.current
        .map(o => ({ ...o, x: o.x - OBSTACLE_SPEED }))
        .filter(o => o.x > -100);

      // Spawn Logic
      if (time - lastSpawnTimeRef.current > SPAWN_RATE) {
        obstaclesRef.current.push({
          id: obstacleIdRef.current++,
          x: containerRef.current?.clientWidth || 800
        });
        lastSpawnTimeRef.current = time;
      }

      // Collision Check
      const isColliding = obstaclesRef.current.some(o => {
        const withinX = o.x < PLAYER_X + PLAYER_SIZE - 10 && o.x + OBSTACLE_WIDTH > PLAYER_X + 10;
        const withinY = playerYRef.current > -OBSTACLE_HEIGHT + 10;
        return withinX && withinY;
      });

      if (isColliding) {
        endGame();
        return;
      }

      // Score Logic
      obstaclesRef.current.forEach(o => {
        if (!o.passed && o.x < PLAYER_X) {
          o.passed = true;
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }
      });

      // Sync to React state for rendering
      setRenderPlayerY(playerYRef.current);
      setRenderObstacles([...obstaclesRef.current]);

      gameLoopRef.current = requestAnimationFrame(loop);
    };

    gameLoopRef.current = requestAnimationFrame(loop);
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [isPlaying, endGame]);

  return (
    <div className="w-full max-w-2xl px-4">
      <div 
        ref={containerRef}
        onClick={jump}
        className="relative w-full h-48 bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden cursor-pointer group select-none transition-all hover:border-white/10"
      >
        {/* Game Area */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Ground */}
          <div className="absolute bottom-0 w-full h-[1px] bg-white/5 shadow-[0_-4px_10px_rgba(255,255,255,0.02)]" />
          
          {/* Player (UniLoomy Icon Placeholder) */}
          <motion.div 
            className="absolute left-[50px] w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shadow-[0_0_25px_rgba(77,111,255,0.2)] border border-white/10"
            style={{ bottom: -renderPlayerY }}
          >
            <div className="w-5 h-5 rounded-full bg-white/10" />
          </motion.div>

          {/* Obstacles */}
          {renderObstacles.map((obs) => (
            <div 
              key={obs.id}
              className="absolute bottom-0 w-[30px] h-[50px] bg-gradient-to-t from-white/10 to-transparent border-t border-x border-white/10 rounded-t-sm"
              style={{ left: obs.x }}
            />
          ))}
        </div>

        {/* HUD */}
        <div className="absolute top-4 left-6 flex flex-col gap-0.5 z-10 pointer-events-none">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Score</span>
          <span className="text-xl font-black text-white">{score}</span>
        </div>
        
        {highScore > 0 && (
          <div className="absolute top-4 right-6 text-right pointer-events-none z-10">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">High Score</span>
            <div className="text-xs font-black text-primary-light uppercase tracking-widest">{highScore}</div>
          </div>
        )}

        {/* UI Overlays */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center z-20 p-6"
            >
              <div className="text-center mb-6">
                <h4 className="text-2xl font-black text-white tracking-tight mb-1">
                  {gameOver ? "CRASHED!" : "READY TO LOOM?"}
                </h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                  {gameOver ? `LAST SCORE: ${score}` : "CLICK OR SPACE TO JUMP"}
                </p>
              </div>
              
              <button 
                onClick={(e) => { e.stopPropagation(); startGame(); }}
                className="px-10 py-3 rounded-xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                {gameOver ? <RotateCcw className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                {gameOver ? "Try Again" : "Play Runner"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

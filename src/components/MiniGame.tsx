"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Play, RotateCcw, Zap, Star } from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────────
const GRAVITY        = 0.55;
const JUMP_FORCE     = -13;
const DOUBLE_JUMP_F  = -11;
const PLAYER_X       = 70;
const PLAYER_W       = 36;
const PLAYER_H       = 36;
const GROUND_H       = 40;
const BASE_SPEED     = 5;
const BASE_SPAWN     = 1600;
const COIN_SIZE      = 18;

type Obstacle = { id: number; x: number; w: number; h: number; type: "short" | "tall" | "wide"; passed?: boolean };
type Coin     = { id: number; x: number; y: number; collected?: boolean };
type Particle = { id: number; x: number; y: number; vx: number; vy: number; life: number; color: string };

// ── Speed helpers ──────────────────────────────────────────────────────────────
function getSpeed(score: number) { return BASE_SPEED + Math.floor(score / 5) * 0.4; }
function getSpawnRate(score: number) { return Math.max(900, BASE_SPAWN - Math.floor(score / 5) * 60); }

// ── Obstacle presets ───────────────────────────────────────────────────────────
const OBS_PRESETS = {
  short: { w: 28, h: 38 },
  tall:  { w: 24, h: 68 },
  wide:  { w: 56, h: 30 },
};
function randomObstacle(): "short" | "tall" | "wide" {
  const r = Math.random();
  return r < 0.5 ? "short" : r < 0.8 ? "tall" : "wide";
}

export default function MiniGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameLoopRef  = useRef<number>(null);

  // ── Physics refs ───────────────────────────────────────────────────────────
  const playerYRef        = useRef(0);        // distance above ground (0 = on ground)
  const velocityRef       = useRef(0);
  const jumpsLeftRef      = useRef(2);        // double-jump counter
  const obstaclesRef      = useRef<Obstacle[]>([]);
  const coinsRef          = useRef<Coin[]>([]);
  const particlesRef      = useRef<Particle[]>([]);
  const scoreRef          = useRef(0);
  const coinsRef2         = useRef(0);        // coin count
  const lastSpawnRef      = useRef(0);
  const lastCoinSpawnRef  = useRef(0);
  const obstacleIdRef     = useRef(0);
  const coinIdRef         = useRef(0);
  const particleIdRef     = useRef(0);
  const frameRef          = useRef(0);

  // ── React state (only for rendering) ──────────────────────────────────────
  const [isPlaying,      setIsPlaying]      = useState(false);
  const [gameOver,       setGameOver]       = useState(false);
  const [highScore,      setHighScore]      = useState(0);
  const [score,          setScore]          = useState(0);
  const [coinCount,      setCoinCount]      = useState(0);
  const [levelLabel,     setLevelLabel]     = useState("");

  // Render snapshots
  const [rPlayerY,    setRPlayerY]    = useState(0);
  const [rObstacles,  setRObstacles]  = useState<Obstacle[]>([]);
  const [rCoins,      setRCoins]      = useState<Coin[]>([]);
  const [rParticles,  setRParticles]  = useState<Particle[]>([]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const spawnParticles = useCallback((x: number, y: number, color = "#4D6FFF") => {
    for (let i = 0; i < 8; i++) {
      particlesRef.current.push({
        id: particleIdRef.current++,
        x, y,
        vx: (Math.random() - 0.5) * 5,
        vy: -(Math.random() * 4 + 1),
        life: 1,
        color,
      });
    }
  }, []);

  const canvasH = () => containerRef.current?.clientHeight ?? 240;
  const groundY = () => canvasH() - GROUND_H;

  // ── Start ──────────────────────────────────────────────────────────────────
  const startGame = useCallback(() => {
    playerYRef.current     = 0;
    velocityRef.current    = 0;
    jumpsLeftRef.current   = 2;
    obstaclesRef.current   = [];
    coinsRef.current       = [];
    particlesRef.current   = [];
    scoreRef.current       = 0;
    coinsRef2.current      = 0;
    lastSpawnRef.current   = performance.now();
    lastCoinSpawnRef.current = performance.now();
    frameRef.current       = 0;

    setScore(0); setCoinCount(0); setGameOver(false); setIsPlaying(true);
    setRPlayerY(0); setRObstacles([]); setRCoins([]); setRParticles([]);
    setLevelLabel("");
  }, []);

  // ── Jump ──────────────────────────────────────────────────────────────────
  const jump = useCallback(() => {
    if (!isPlaying) { startGame(); return; }
    if (jumpsLeftRef.current > 0) {
      const isDoubleJump = jumpsLeftRef.current === 1;
      velocityRef.current  = isDoubleJump ? DOUBLE_JUMP_F : JUMP_FORCE;
      jumpsLeftRef.current -= 1;
      if (isDoubleJump) {
        const gY = groundY();
        spawnParticles(PLAYER_X + PLAYER_W / 2, gY - PLAYER_H - playerYRef.current, "#4D6FFF");
      }
    }
  }, [isPlaying, startGame, spawnParticles]);

  // ── End ───────────────────────────────────────────────────────────────────
  const endGame = useCallback(() => {
    setIsPlaying(false);
    setGameOver(true);
    setHighScore(prev => {
      const next = Math.max(prev, scoreRef.current);
      if (scoreRef.current > prev) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.55 }, colors: ["#1A237E", "#4D6FFF", "#94a3b8"] });
      }
      return next;
    });
  }, []);

  // ── Input ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") { e.preventDefault(); jump(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [jump]);

  // ── Game loop ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isPlaying) return;

    const loop = (time: number) => {
      frameRef.current++;
      const speed     = getSpeed(scoreRef.current);
      const spawnRate = getSpawnRate(scoreRef.current);
      const gY        = groundY();

      // Player physics
      const wasInAir = playerYRef.current < -1;   // was off the ground last frame
      velocityRef.current  += GRAVITY;
      playerYRef.current   += velocityRef.current;
      if (playerYRef.current >= 0) {
        if (wasInAir) {
          // just landed — only spawn particles when actually coming from air
          spawnParticles(PLAYER_X + PLAYER_W / 2, gY, "#94a3b8");
        }
        playerYRef.current    = 0;
        velocityRef.current   = 0;
        jumpsLeftRef.current  = 2;
      }

      // Obstacles
      obstaclesRef.current = obstaclesRef.current
        .map(o => ({ ...o, x: o.x - speed }))
        .filter(o => o.x > -120);

      // Spawn obstacle
      if (time - lastSpawnRef.current > spawnRate) {
        const type = randomObstacle();
        obstaclesRef.current.push({
          id: obstacleIdRef.current++, x: (containerRef.current?.clientWidth ?? 900) + 20,
          w: OBS_PRESETS[type].w, h: OBS_PRESETS[type].h, type,
        });
        lastSpawnRef.current = time;
      }

      // Coins – spawn between obstacles, random heights
      if (time - lastCoinSpawnRef.current > spawnRate * 0.7) {
        coinsRef.current.push({
          id: coinIdRef.current++,
          x: (containerRef.current?.clientWidth ?? 900) + 40,
          y: gY - PLAYER_H - Math.random() * 60 - 20,
        });
        lastCoinSpawnRef.current = time;
      }
      coinsRef.current = coinsRef.current
        .map(c => ({ ...c, x: c.x - speed }))
        .filter(c => c.x > -40);

      // Collision: obstacles
      // playerYRef is NEGATIVE when in air (JUMP_FORCE=-13, gravity=+0.55)
      // Screen coords (from top): player bottom = gY + playerY, player top = gY + playerY - PLAYER_H
      const pLeft  = PLAYER_X + 5;
      const pRight = PLAYER_X + PLAYER_W - 5;
      const pBot   = gY + playerYRef.current;          // correct: negative playerY → higher on screen
      const pTop   = gY + playerYRef.current - PLAYER_H;

      const hit = obstaclesRef.current.some(o => {
        const oLeft = o.x, oRight = o.x + o.w, oTop = gY - o.h;
        return pRight > oLeft && pLeft < oRight && pBot > oTop;
      });
      if (hit) { endGame(); return; }

      // Collision: coins
      coinsRef.current.forEach(c => {
        if (!c.collected) {
          const cLeft = c.x, cRight = c.x + COIN_SIZE, cTop = c.y, cBot = c.y + COIN_SIZE;
          if (pRight > cLeft && pLeft < cRight && pBot > cTop && pTop < cBot) {
            c.collected = true;
            coinsRef2.current++;
            setCoinCount(coinsRef2.current);
            spawnParticles(c.x + COIN_SIZE / 2, c.y, "#FFD700");
          }
        }
      });
      coinsRef.current = coinsRef.current.filter(c => !c.collected);

      // Score
      obstaclesRef.current.forEach(o => {
        if (!o.passed && o.x + o.w < PLAYER_X) {
          o.passed = true;
          scoreRef.current++;
          setScore(scoreRef.current);
          // Milestone
          if (scoreRef.current % 5 === 0) {
            setLevelLabel(`Level up!`);
            setTimeout(() => setLevelLabel(""), 1200);
          }
        }
      });

      // Particles
      particlesRef.current = particlesRef.current
        .map(p => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, vy: p.vy + 0.25, life: p.life - 0.06 }))
        .filter(p => p.life > 0);

      // Sync render
      setRPlayerY(playerYRef.current);
      setRObstacles([...obstaclesRef.current]);
      setRCoins([...coinsRef.current]);
      setRParticles([...particlesRef.current]);

      gameLoopRef.current = requestAnimationFrame(loop);
    };

    gameLoopRef.current = requestAnimationFrame(loop);
    return () => { if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current); };
  }, [isPlaying, endGame, spawnParticles]);

  const gH = containerRef.current?.clientHeight ?? 240;
  const gY  = gH - GROUND_H;
  const level = Math.floor(scoreRef.current / 5) + 1;

  return (
    <div className="w-full">
      {/* ── Game Canvas ──────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        onClick={jump}
        className="relative w-full h-64 md:h-72 cursor-pointer rounded-2xl overflow-hidden select-none border border-slate-200 hover:border-primary/30 transition-colors shadow-inner"
        style={{ background: "linear-gradient(to bottom, #f1f5f9 20%, #e2e8f0 100%)" }}
      >
        {/* Scrolling ground grid */}
        <div
          className="absolute bottom-0 w-full pointer-events-none"
          style={{
            height: GROUND_H,
            background: "linear-gradient(to top, rgba(77,111,255,0.1) 0%, transparent 100%)",
            borderTop: "1px solid rgba(77,111,255,0.15)",
          }}
        >
          {/* Perspective lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 h-full"
              style={{
                left: `${(i / 8) * 100}%`,
                width: 1,
                background: "rgba(77,111,255,0.06)",
              }}
            />
          ))}
        </div>

        {/* Background stars / dust */}
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary pointer-events-none"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${(i * 7.3 + 3) % 100}%`,
              top: `${(i * 17 + 5) % 60}%`,
              opacity: 0.15 + (i % 4) * 0.05,
            }}
          />
        ))}

        {/* Player */}
        <motion.div
          className="absolute rounded-xl overflow-hidden"
          style={{
            width: PLAYER_W,
            height: PLAYER_H,
            left: PLAYER_X,
            bottom: GROUND_H - rPlayerY,
            boxShadow: `0 0 ${20 + Math.abs(rPlayerY) * 0.4}px rgba(77,111,255,0.7)`,
            filter: "drop-shadow(0 0 6px rgba(77,111,255,0.8))",
          }}
          animate={{ rotate: isPlaying && playerYRef.current < -2 ? -10 : 0 }}
          transition={{ duration: 0.12 }}
        >
          <Image
            src="/assets/icon.png"
            alt="Uniloomy"
            width={PLAYER_W}
            height={PLAYER_H}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>

        {/* Obstacles */}
        {rObstacles.map(o => (
          <div
            key={o.id}
            className="absolute"
            style={{
              bottom: GROUND_H,
              left: o.x,
              width: o.w,
              height: o.h,
              background: o.type === "tall"
                ? "linear-gradient(to top, rgba(26,35,126,0.8), rgba(77,111,255,0.4))"
                : "linear-gradient(to top, rgba(77,111,255,0.6), rgba(26,35,126,0.3))",
              borderTop: "2px solid rgba(77,111,255,0.6)",
              borderLeft: "1px solid rgba(77,111,255,0.3)",
              borderRight: "1px solid rgba(77,111,255,0.3)",
              borderRadius: "4px 4px 0 0",
              boxShadow: "0 0 12px rgba(77,111,255,0.3)",
            }}
          />
        ))}

        {/* Coins */}
        {rCoins.map(c => (
          <motion.div
            key={c.id}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: COIN_SIZE,
              height: COIN_SIZE,
              left: c.x,
              top: c.y,
              background: "radial-gradient(circle, #FFD700, #FFA500)",
              boxShadow: "0 0 10px rgba(255,215,0,0.6)",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <Star className="w-2.5 h-2.5 text-amber-900 fill-current" />
          </motion.div>
        ))}

        {/* Particles */}
        {rParticles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 5,
              height: 5,
              left: p.x,
              top: p.y,
              background: p.color,
              opacity: p.life,
              boxShadow: `0 0 6px ${p.color}`,
            }}
          />
        ))}

        {/* HUD */}
        <div className="absolute top-3 left-4 z-10 pointer-events-none flex flex-col gap-0.5">
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em]">Score</span>
          <span className="text-2xl font-black text-slate-900 leading-none">{score}</span>
        </div>

        <div className="absolute top-3 right-4 z-10 pointer-events-none text-right flex flex-col gap-0.5">
          {highScore > 0 && (
            <>
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em]">Best</span>
              <span className="text-xs font-black text-primary">{highScore}</span>
            </>
          )}
        </div>

        {/* Level + Coin HUD */}
        {isPlaying && (
          <div className="absolute bottom-[44px] right-4 z-10 pointer-events-none flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Star className="w-2.5 h-2.5 text-amber-400 fill-current" />
              <span className="text-[10px] font-black text-amber-400">{coinCount}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-2.5 h-2.5 text-primary-light" />
              <span className="text-[10px] font-black text-primary-light">Lv {level}</span>
            </div>
          </div>
        )}

        {/* Level-up flash */}
        <AnimatePresence>
          {levelLabel && (
            <motion.div
              key="level"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
            >
              <div className="px-6 py-2 rounded-full bg-primary-light/90 text-white text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/40">
                ⚡ {levelLabel}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay: Start / Game Over */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5"
              style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)" }}
            >
              {gameOver && (
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">CRASHED!</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
                    Score: {score} &nbsp;·&nbsp; Coins: {coinCount}
                  </span>
                  {score === highScore && highScore > 0 && (
                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest mt-1">🏆 New High Score!</span>
                  )}
                </div>
              )}
              {!gameOver && (
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="text-2xl font-black text-slate-900 tracking-tight">Uniloomy Runner</span>
                  <div className="flex gap-3 mt-1 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>Space / Tap = Jump</span>
                    <span>·</span>
                    <span>Double Jump ↑↑</span>
                    <span>·</span>
                    <span>Collect ⭐</span>
                  </div>
                </div>
              )}
              <button
                onClick={e => { e.stopPropagation(); startGame(); }}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-black text-xs uppercase tracking-widest hover:bg-primary-light hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
              >
                {gameOver ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                {gameOver ? "Try Again" : "Start Running"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls hint */}
      <div className="flex items-center justify-center gap-6 mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        <span>Space / Click</span>
        <span className="text-slate-300">|</span>
        <span>Double Jump</span>
        <span className="text-slate-300">|</span>
        <span>Collect Coins</span>
        <span className="text-slate-300">|</span>
        <span>Speed Increases</span>
      </div>
    </div>
  );
}

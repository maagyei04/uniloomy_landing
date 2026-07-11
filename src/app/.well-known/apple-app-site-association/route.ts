import { NextResponse } from "next/server";

// Served at /.well-known/apple-app-site-association — enables iOS Universal
// Links so links to uniloomy.com open directly in the Uniloomy app.
// appID is "<Apple Team ID>.<iOS bundle identifier>" — must match the Team ID
// on the Apple Developer account that signs the Uniloomy app.
export function GET() {
  return NextResponse.json(
    {
      applinks: {
        apps: [],
        details: [
          {
            appID: "C6Y7YRPXR8.com.michantech.uniloomy",
            paths: ["/*"],
          },
        ],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

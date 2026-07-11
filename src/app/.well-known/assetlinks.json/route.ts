import { NextResponse } from "next/server";

// Served at /.well-known/assetlinks.json — enables Android App Links so
// links to uniloomy.com open directly in the Uniloomy app.
const SHA256_CERT_FINGERPRINT =
  "41:C7:FB:C5:9D:AC:AE:4F:B3:52:C3:63:D9:AD:B8:67:13:8A:B8:FA:8F:C9:BA:80:D0:3F:E2:2E:72:8E:7C:11";

export function GET() {
  return NextResponse.json(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.michantech.uniloomy",
          sha256_cert_fingerprints: [SHA256_CERT_FINGERPRINT],
        },
      },
    ],
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

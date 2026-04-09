import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://uniloomy.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Uniloomy — Learn Smarter. Earn Bigger. Connect Deeper.",
    template: "%s | Uniloomy",
  },
  description:
    "Uniloomy is Ghana's all-in-one university super-app. Access AI study tools, earn Looms rewards, buy & sell in the student marketplace, find campus gigs, and connect with students across universities.",
  keywords: [
    "Uniloomy",
    "university app Ghana",
    "student app Ghana",
    "campus app",
    "student marketplace Ghana",
    "student gigs Ghana",
    "study tools Ghana",
    "UniClips",
    "campus social app",
    "Looms rewards",
    "University of Ghana app",
    "KNUST app",
    "student housing Ghana",
    "learn earn connect",
    "Ghanaian student platform",
  ],
  authors: [{ name: "Uniloomy Technologies Ltd", url: BASE_URL }],
  creator: "Uniloomy Technologies Ltd",
  publisher: "Uniloomy Technologies Ltd",
  applicationName: "Uniloomy",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Education, Social, Marketplace",

  // Favicon / Icons
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/icon.png?v=2", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
  },

  // Open Graph (Facebook, WhatsApp, LinkedIn sharing)
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: BASE_URL,
    siteName: "Uniloomy",
    title: "Uniloomy — Learn Smarter. Earn Bigger. Connect Deeper.",
    description:
      "Ghana's all-in-one university super-app. Study smarter with AI tools, earn Looms rewards, use the student marketplace, find campus gigs, watch UniClips, and connect with students across universities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uniloomy — The Super App for University Students",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    site: "@uniloomy",
    creator: "@uniloomy",
    title: "Uniloomy — Learn Smarter. Earn Bigger. Connect Deeper.",
    description:
      "Ghana's all-in-one university super-app. AI study tools, student marketplace, campus gigs, UniClips, Looms rewards, and more.",
    images: ["/og-image.png"],
  },

  // PWA / Mobile meta
  manifest: "/manifest.json",
  themeColor: "#1A237E",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical
  alternates: {
    canonical: BASE_URL,
  },

  // Verification (add keys when verified)
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_KEY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Uniloomy",
              url: BASE_URL,
              logo: `${BASE_URL}/icon.png`,
              description:
                "Ghana's all-in-one university super-app for learning, earning, and connecting.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GH",
              },
              sameAs: [
                "https://twitter.com/uniloomy",
                "https://linkedin.com/company/uniloomy",
              ],
            }),
          }}
        />
        {/* Structured Data — MobileApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Uniloomy",
              operatingSystem: "iOS, Android",
              applicationCategory: "EducationApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "GHS",
              },
              description:
                "Uniloomy is the all-in-one university super-app for Ghanaian students — AI study tools, marketplace, gigs, social feed, UniClips, and Looms rewards.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

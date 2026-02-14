import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import localfont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Footer from "@/components/blocks/footer";
import Header from "@/components/blocks/header";
import BottomNav from "@/components/blocks/bottom-nav";
import BottomGradient from "@/components/BottomGradient";
import ConsoleBrand from "@/components/ConsoleBrand";
import { ProgressiveBlur } from "@/components/ui/skiper-ui/skiper41";
// import GlobalBackground from "@/components/GlobalBackground";
import PWA from "@/components/PWA";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Studio V19",
  description: "V19 Agency Portfolio",
  applicationName: "V19",
  manifest: "/manifest.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    title: "V19",
    statusBarStyle: "black-translucent",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  subsets: ["latin"], 
});



const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  display: "swap",
  subsets: ["latin"], 
});

const satoshi = localfont({
  variable: "--font-satoshi",
  weight: "900",
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${satoshi.variable} ${bricolage.variable} ${jakartaSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* Console brand logs */}
          <ConsoleBrand />
          <PWA />
          {/* <GlobalBackground /> */}
          <Header />
          <div>
            {children}
            <Analytics />
          </div>
          
          <ProgressiveBlur
            height="80px"
            position="bottom"
            blurAmount="14px"
            className="fixed bottom-0 left-0 right-0 z-30"
          />
          
          <Toaster position="bottom-center" />
          {/* <BottomGradient/> */}
          <BottomNav/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

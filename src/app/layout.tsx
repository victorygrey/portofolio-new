import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhamad Faizal Hamzah Sudiro — Web & Mobile Developer",
  description:
    "Portfolio of Muhamad Faizal Hamzah Sudiro, a Web & Mobile Developer based in Bandung specializing in modern web applications, Python automation, and visual design.",
  keywords: [
    "Web Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "Portfolio",
    "Software Engineer",
    "Bandung",
  ],
  authors: [{ name: "Muhamad Faizal Hamzah Sudiro" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E0D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-[var(--paper)] text-[var(--ink)] selection:bg-[#D4A373]/25 selection:text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}

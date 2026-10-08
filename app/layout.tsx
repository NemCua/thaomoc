import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "thaomoc — Creative Technology for Live Content",
  description: "AI video localization, voice dubbing, interactive livestream games, and developer APIs for modern creators.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

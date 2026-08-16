import type { Metadata } from "next";
import "./globals.css";
import { LoadingProvider } from "@/context/LoadingProvider";

export const metadata: Metadata = {
  title: "Vansh Rana | Software Engineer & System Architect",
  description:
    "Portfolio of Vansh Rana — Software Engineer & System Architect. High-performance distributed backend architectures, full-stack systems, Fastify OSS maintainer, and hackathon winner.",
  keywords: [
    "Vansh Rana",
    "Software Engineer",
    "System Architect",
    "Full-Stack Developer",
    "Fastify",
    "Rust",
    "Next.js",
    "Portfolio",
    "Distributed Systems",
  ],
  authors: [{ name: "Vansh Rana" }],
  openGraph: {
    title: "Vansh Rana | Software Engineer & System Architect",
    description:
      "Bridging the gap between robust backend logic and elegant 3D frontend experiences.",
    type: "website",
    url: "https://vanshrana.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AosInit } from "@/components/AosInit";
import { Header, Footer, CustomCursor, SplashScreen } from "@/components/SiteComponents";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vansh Rana | Software Engineer",
  description: "Portfolio of Vansh Rana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface transition-colors duration-500 overflow-x-hidden font-body-md">
        <AosInit />
        <CustomCursor />
        <SplashScreen />
        <Header />
        <div className="overflow-x-hidden w-full relative flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
              for(let registration of registrations) {
                registration.unregister();
              }
            });
          }
        `}} />
      </body>
    </html>
  );
}


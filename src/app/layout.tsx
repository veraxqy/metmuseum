import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetMuseuem Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export function Header() {
  return (
    <header className="w-full bg-red-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold">MetMuseum Search</h1>
      </div>
  </header>
  )
}

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center text-gray-600 text-sm py-4 mt-10 border-t">
      Desenvolvido por <span className="font-medium text-gray-800"><a href="https://github.com/veraxqy">@veraxqy</a></span>
  </footer>
  )
}
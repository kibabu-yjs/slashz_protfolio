import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Muhammad",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-transparent`}>
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}

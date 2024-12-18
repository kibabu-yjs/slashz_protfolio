import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const comf = Comfortaa({
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
      <body className={`${comf.className} bg-transparent`}>
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}

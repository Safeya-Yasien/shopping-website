import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { TopHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping Website",
  description: "Shopping Website for ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />

        {children}
      </body>
    </html>
  );
}

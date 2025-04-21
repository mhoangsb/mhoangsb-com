import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "mhoangsb",
  description: "mhoangsb website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-gray-950 text-[#aaa] antialiased`}>
        {children}
      </body>
    </html>
  );
}

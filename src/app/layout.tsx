import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { CurrentLanguageProvider } from "@/contexts/CurrentLanguageContext";
import { Suspense } from "react";

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
        <div className="mx-auto mb-20 mt-10 max-w-2xl px-4">
          <Suspense>
            <CurrentLanguageProvider>{children}</CurrentLanguageProvider>
          </Suspense>
        </div>
      </body>
    </html>
  );
}

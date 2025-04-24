import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { CurrentLanguageProvider } from "@/contexts/CurrentLanguageContext";
import { Suspense } from "react";

const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "mhoangsb | Frontend Developer",
  description:
    "The personal portfolio of mhoangsb, showcasing work as a frontend developer.",
  keywords: [
    "frontend developer",
    "mhoangsb",
    "portfolio",
    "React",
    "Angular",
    "web developer",
  ],
  authors: [{ name: "mhoangsb", url: "https://mhoangsb.com" }],
  openGraph: {
    title: "mhoangsb | Frontend Developer",
    description:
      "The personal portfolio of mhoangsb, showcasing work as a frontend developer.",
    url: "https://mhoangsb.com",
    siteName: "mhoangsb portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mhoangsb | Frontend Developer",
    description:
      "The personal portfolio of mhoangsb, showcasing work as a frontend developer.",
  },
  metadataBase: new URL("https://mhoangsb.com"),
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

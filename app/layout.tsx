import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable for Inter
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans", // Define a CSS variable for Plus Jakarta Sans
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code", // Define a CSS variable for Fira Code
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indrapay",
  description: "Cross-border payment for African businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={` ${inter.variable} ${plusJakartaSans.variable} ${firaCode.variable}`}
    >
      <body className="font-inter overflow-x-hidden">{children}</body>
    </html>
  );
}

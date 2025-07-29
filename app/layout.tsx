import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeAnimated } from "@/components/animated/home-animated";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const description = "Cross-border payment for African businesses";

export const metadata: Metadata = {
  title: `Indrapay - ${description}`,
  description,
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
      <body className="font-inter overflow-x-hidden">
        <HomeAnimated>
          <Header />
          {children}
          <Footer />
        </HomeAnimated>
      </body>
    </html>
  );
}

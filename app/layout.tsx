import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Providers from '@/containers/providers'
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import Footer from "@/components/footer";

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "Rodgers Munene",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-200
        text-gray-950 relative dark:bg-gray-900 dark:text-gray-50
        dark:text-opacity-90 antialiased`}
      >
         <Providers>
           <Navbar />
           {children}
           <Footer />
           <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}

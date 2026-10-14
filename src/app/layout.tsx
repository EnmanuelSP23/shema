import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/hooks/useCart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloralWelcome from "@/components/FloralWelcome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHEMA - Makeup Collection",
  description: "Multiply Your Beauty - Premium makeup, body care, and accessories",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var m=new Date().getMonth();document.documentElement.dataset.season=(m>=8&&m<=10)?"fall":"summer";}catch(e){}`,
          }}
        />
        <CartProvider>
          <div id="site-content" className="flex flex-col flex-grow">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <FloralWelcome />
        </CartProvider>
      </body>
    </html>
  );
}

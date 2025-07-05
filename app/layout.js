import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: "Sell Your Car Online - Best Price Instantly",
  description:"Sell your car online at the best price with instant valuation, free inspection & same-day payment. Hassle-free, safe & secure car selling experience.",
  openGraph: {
    title: "Sell Your Car Online - Best Price Guaranteed",
    description:"Get the highest price for your used car online. Free valuation, instant payment & hassle-free process. Safe & trusted platform to sell your car today.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

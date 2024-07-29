import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vehicle Vista",
  description: "Vehicle and vehicle equipment web",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-y-smooth">
      <body className={rubik.className}>
        <main className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

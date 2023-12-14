"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./api/AuthContext";
import Header from "@/app/components/Header";
import RepositoryActionBar from "./components/RepositoryActionBar";
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen flex flex-col`}>

        <AuthContextProvider>
          <Theme>
            <div className="sticky top-0 z-50">
              <Header />
            </div>
            <main className="h-full pt-20 relative">{children}</main>
          </Theme>
        </AuthContextProvider>
      </body>
    </html>
  );
}

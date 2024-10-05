import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AppWalletProvider } from "../components/wallets/solanaWalletProvider";
import { DarkModeProvider } from "./LandingPage/DarkMode";
import { TanstackQueryProvider } from "./tanstack-query-provider";
import { ProgramContextProvider } from "@/context/program.context";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peer Protocol",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanstackQueryProvider>
        <AppWalletProvider>
          <ProgramContextProvider>
            <DarkModeProvider>
              <body className={inter.className}>{children}</body>
              <ToastContainer />
            </DarkModeProvider>
          </ProgramContextProvider>
        </AppWalletProvider>
      </TanstackQueryProvider>
    </html>
  );
}

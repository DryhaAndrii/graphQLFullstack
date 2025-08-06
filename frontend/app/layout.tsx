import { Montserrat } from "next/font/google";

import { ThemeProvider } from "./components/ui/theme/theme";
import Toaster from "./components/ui/toaster/toaster";
import { ApolloWrapper } from "@/apollo/apolloWrapper";
import HooksCaller from "./components/hooksCaller";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-body-gradient min-h-dvh flex items-center justify-center`}
      >
        <Toaster />

        <ThemeProvider>
          <ApolloWrapper>
            <HooksCaller />
            {children}
          </ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

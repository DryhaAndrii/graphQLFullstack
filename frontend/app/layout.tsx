import { Montserrat } from "next/font/google";

import { ThemeProvider } from "./components/theme/theme";
import Toaster from "./components/toaster/toaster";
import { ApolloWrapper } from "@/apollo/apolloWrapper";

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
          <ApolloWrapper>{children}</ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

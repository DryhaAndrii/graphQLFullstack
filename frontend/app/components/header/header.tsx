"use client";
import { Roboto } from "next/font/google";

import { ThemeSwitcher } from "@/app/components/theme/theme";
import HamburgerMenu from "../ui/hamburgerMenu/hamburgerMenu";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function Header() {
  return (
    <header className="relative flex flex-col justify-between items-center gap-2 min-h-10">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <h2
        className={`${roboto.className} w-full text-center text-5xl drop-shadow-textShadow text-foreground`}
      >
        SomeTitle
      </h2>
      {/* Button that open hamburger menu */}
      <div className="top-1/2 right-0 absolute size-10 -translate-y-1/2">
        <HamburgerMenu>
          <ThemeSwitcher />
        </HamburgerMenu>
      </div>
    </header>
  );
}

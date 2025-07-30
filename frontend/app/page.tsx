import { IconHeart } from "@tabler/icons-react";
import { ThemeSwitcher } from "./components/ui/theme/theme";
export default function Home() {
  return (
    <div className="bg-blue-500 w-20 h-20">
      <IconHeart size={24} stroke={2} />
      <ThemeSwitcher />
    </div>
  );
}

"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import useSound from "use-sound";
import { ThemeToggleButton5 } from "@/components/ui/skiper-ui/skiper4";
import { useThemeToggle } from "@/components/ui/skiper-ui/skiper26";

export function ThemeSwitcher() {
  const { isDark, toggleTheme: toggleThemeFromSkiper } = useThemeToggle({
    variant: "circle",
    start: "bottom-left",
  });
  const [mounted, setMounted] = React.useState(false);
  const [click] = useSound("/click.wav", { volume: 0.20 });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    toggleThemeFromSkiper();
    click();
  };

  return (
    <>
      <div
          className={`flex items-center gap-2 rounded-xl px-4 py-3 text-center transition-all duration-300 hover:bg-foreground/5 hover:text-foreground/90 relative cursor-pointer`}
          onClick={toggleTheme}
        >
          <Sun className="size-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute size-6 -rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
    </>
  );

  // return (
  //   <ThemeToggleButton5
  //     isDark={isDark}
  //     onToggle={toggleTheme}
  //     className="size-10 p-2"
  //   />
  // );
}

export default ThemeSwitcher;

import React from "react";
import {
  Search,
  Bell,
  Menu,
  Sun,
  Moon,
  History,
  Bookmark,
  Sidebar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

interface HeaderProps {
  onToggleSidebar?: () => void;
  onToggleNotifications?: () => void;
}

export function Header({
  onToggleSidebar,
  onToggleNotifications,
}: HeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-14 border-b border-border bg-background px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onToggleSidebar}>
            <Sidebar className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Star className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Dashboards</span>
          <span>/</span>
          <span className="text-foreground">Default</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="w-60 pl-9 h-9 bg-muted border-none rounded-lg"
          />
          <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1a px-1.5 font-mono text-[16px] font-medium text-muted-foreground opacity-100">
            ⌘/
          </kbd>
        </div>

        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button variant="ghost" size="sm">
            <History className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onToggleNotifications}>
            <Sidebar className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

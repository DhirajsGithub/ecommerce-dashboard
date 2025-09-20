import React from 'react';
import { Search, Bell, Menu, Sun, Moon, History, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';

interface HeaderProps {
  onToggleSidebar?: () => void;
  onToggleNotifications?: () => void;
}

export function Header({ onToggleSidebar, onToggleNotifications }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-14 border-b border-border bg-background px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onToggleSidebar}>
          <Menu className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Bookmark className="h-4 w-4" />
        </Button>
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
            className="w-80 pl-9 h-9 bg-muted/50"
          />
          <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            ⌘K
          </kbd>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        
        <Button variant="ghost" size="sm">
          <History className="h-4 w-4" />
        </Button>
        
        <Button variant="ghost" size="sm" onClick={onToggleNotifications}>
          <Bell className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
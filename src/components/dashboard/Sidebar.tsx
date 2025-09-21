import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  BarChart3,
  FolderOpen,
  Star,
  Clock,
  User,
  Settings,
  Building,
  FileText,
  Users,
  ShoppingCart,
  GraduationCap,
  Bookmark,
  Home,
  PieChart,
  TrendingUp,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
  onToggle?: () => void;
  dashboard: string;
  setDashboard: React.Dispatch<React.SetStateAction<string>>;
}

const navItems = [
  {
    title: "Favorites",
    items: [
      { title: "Overview", icon: Home, active: false },
      { title: "Projects", key : 'projects', icon: FolderOpen, active: false },
    ],
  },
  {
    title: "Recently",
    items: [],
  },
  {
    title: "Dashboards",
    items: [
      { title: "Default", icon: Home, active: true },
      { title: "eCommerce", icon: ShoppingCart, active: false },
      { title: "Projects", icon: FolderOpen, active: false },
      { title: "Online Courses", icon: GraduationCap, active: false },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        title: "User Profile",
        icon: User,
        active: false,
        children: [
          { title: "Overview", active: false },
          { title: "Projects", active: false },
          { title: "Campaigns", active: false },
          { title: "Documents", active: false },
          { title: "Followers", active: false },
        ],
      },
      { title: "Account", icon: Settings, active: false },
      { title: "Corporate", icon: Building, active: false },
      { title: "Blog", icon: FileText, active: false },
      { title: "Social", icon: Users, active: false },
    ],
  },
];

export function Sidebar({
  className,
  collapsed = false,
  setDashboard,
  dashboard,
}: SidebarProps) {
  return (
    <div
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border flex flex-col",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Logo */}
      <div className="p-4 border-sidebar-border">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={"https://randomuser.me/api/portraits/men/85.jpg"}
            />
          </Avatar>
          {!collapsed && (
            <span className="font-semibold text-sidebar-foreground">
              ByeWind
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="space-y-6">
          {navItems.map((section) => (
            <div key={section.title}>
              {!collapsed && (
                <h3 className="text-xs font-medium text-sidebar-foreground/60 uppercase tracking-wider mb-2 px-2">
                  {section.title}
                </h3>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <div key={item.title}>
                    {item.children ? (
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "w-full justify-between text-left font-normal h-8 px-2",
                              "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4" />
                              {!collapsed && (
                                <span className="text-sm">{item.title}</span>
                              )}
                            </div>
                            {!collapsed && <ChevronDown className="h-3 w-3" />}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="ml-6 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Button
                              key={child.title}
                              variant="ghost"
                              size="sm"
                              className={cn(
                                "w-full justify-start text-left font-normal h-7 px-2",
                                "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                              )}
                            >
                              {child.title}
                            </Button>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "w-full justify-start text-left font-normal h-8 px-2",
                          (item.title === dashboard && item.key !== 'projects')
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                        onClick={() => {
                          setDashboard(item.title);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {!collapsed && (
                            <span className="text-sm">{item.title}</span>
                          )}
                        </div>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  Search,
  Plus,
  Menu,
  ArrowUpDown,
  Filter,
  ListFilter,
} from "lucide-react";

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onAdd?: () => void;
  onMenu?: () => void;
  onSort?: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search",
  onSearch,
  onAdd,
  onMenu,
  onSort,
}) => {
  return (
    <div className="flex items-center gap-3 p-2 bg-card rounded-lg justify-between">
      {/* Left side icons */}
      <div className="flex items-center gap-1">
        <button
          onClick={onAdd}
          className="p-1 hover:bg-accent rounded-md transition-colors"
          aria-label="Add"
        >
          <Plus className="h-4 w-4 text-muted-foreground" />
        </button>

        <button
          onClick={onMenu}
          className="p-1 hover:bg-accent rounded-md transition-colors"
          aria-label="Menu"
        >
          <ListFilter className="h-4 w-4 text-muted-foreground" />
        </button>

        <button
          onClick={onSort}
          className="p-1 hover:bg-accent rounded-md transition-colors"
          aria-label="Sort"
        >
          <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Search input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;

import React from "react";
import SearchBox from "./ui/search-box";

const Projects = () => {
  const handleSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleAdd = () => {
    console.log("Add clicked");
  };

  const handleMenu = () => {
    console.log("Menu clicked");
  };

  const handleSort = () => {
    console.log("Sort clicked");
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-6">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-foreground">Projects</h2>
        </div>

        {/* Search Box */}
        <div className="mb-6">
          <SearchBox
            placeholder="Search"
            onSearch={handleSearch}
            onAdd={handleAdd}
            onMenu={handleMenu}
            onSort={handleSort}
          />
        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Projects;

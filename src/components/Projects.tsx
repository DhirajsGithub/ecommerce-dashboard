import React from "react";
import SearchBox from "./ui/search-box";
import ProjectsTable from "./ui/projects-table";

const Projects = () => {
  const projects = [
    {
      orderId: "#CMP801",
      user: "Natali Craig",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress" as const,
    },
    {
      orderId: "#CMP802",
      user: "Kate Morrison",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete" as const,
    },
    {
      orderId: "#CMP803",
      user: "Drew Cano",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      project: "Client Project",
      address: "Bogwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending" as const,
    },
    {
      orderId: "#CMP804",
      user: "Orlando Diggs",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved" as const,
    },
    {
      orderId: "#CMP805",
      user: "Andi Lane",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected" as const,
    },
    {
      orderId: "#CMP806",
      user: "Marcus Johnson",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      project: "E-commerce Platform",
      address: "Sunset Boulevard Los Angeles",
      date: "2 hours ago",
      status: "In Progress" as const,
    },
    {
      orderId: "#CMP807",
      user: "Sarah Williams",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      project: "Mobile App Design",
      address: "Broadway New York",
      date: "3 hours ago",
      status: "Complete" as const,
    },
    {
      orderId: "#CMP808",
      user: "David Chen",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      project: "API Integration",
      address: "Tech Street Seattle",
      date: "4 hours ago",
      status: "Pending" as const,
    },
    {
      orderId: "#CMP809",
      user: "Emily Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      project: "Data Analytics Dashboard",
      address: "Innovation Drive Austin",
      date: "5 hours ago",
      status: "Approved" as const,
    },
    {
      orderId: "#CMP810",
      user: "Michael Thompson",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      project: "Cloud Migration",
      address: "Digital Avenue Miami",
      date: "6 hours ago",
      status: "Rejected" as const,
    },
    {
      orderId: "#CMP811",
      user: "Lisa Anderson",
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      project: "User Authentication System",
      address: "Security Lane Denver",
      date: "7 hours ago",
      status: "In Progress" as const,
    },
    {
      orderId: "#CMP812",
      user: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      project: "Payment Gateway",
      address: "Finance Street Chicago",
      date: "8 hours ago",
      status: "Complete" as const,
    },
    {
      orderId: "#CMP813",
      user: "Maria Garcia",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      project: "Content Management System",
      address: "Media Boulevard Phoenix",
      date: "9 hours ago",
      status: "Pending" as const,
    },
    {
      orderId: "#CMP814",
      user: "Robert Brown",
      avatar: "https://randomuser.me/api/portraits/men/89.jpg",
      project: "Real-time Chat Application",
      address: "Communication Road Boston",
      date: "10 hours ago",
      status: "Approved" as const,
    },
    {
      orderId: "#CMP815",
      user: "Jennifer Davis",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      project: "Machine Learning Model",
      address: "AI Avenue San Diego",
      date: "11 hours ago",
      status: "Rejected" as const,
    },
    {
      orderId: "#CMP816",
      user: "Christopher Miller",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      project: "Blockchain Integration",
      address: "Crypto Street Las Vegas",
      date: "12 hours ago",
      status: "In Progress" as const,
    },
    {
      orderId: "#CMP817",
      user: "Amanda Taylor",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      project: "IoT Dashboard",
      address: "Smart City Portland",
      date: "13 hours ago",
      status: "Complete" as const,
    },
    {
      orderId: "#CMP818",
      user: "Daniel Martinez",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      project: "Video Streaming Platform",
      address: "Entertainment Way Nashville",
      date: "14 hours ago",
      status: "Pending" as const,
    },
    {
      orderId: "#CMP819",
      user: "Jessica White",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      project: "Social Media Analytics",
      address: "Network Drive Orlando",
      date: "15 hours ago",
      status: "Approved" as const,
    },
    {
      orderId: "#CMP820",
      user: "Kevin Lee",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      project: "Cybersecurity Framework",
      address: "Protection Lane Kansas City",
      date: "16 hours ago",
      status: "Rejected" as const,
    },
    {
      orderId: "#CMP821",
      user: "Rachel Green",
      avatar: "https://randomuser.me/api/portraits/women/19.jpg",
      project: "Database Optimization",
      address: "Data Street Minneapolis",
      date: "17 hours ago",
      status: "In Progress" as const,
    },
    {
      orderId: "#CMP822",
      user: "Thomas Anderson",
      avatar: "https://randomuser.me/api/portraits/men/82.jpg",
      project: "Web Scraping Tool",
      address: "Automation Avenue Detroit",
      date: "18 hours ago",
      status: "Complete" as const,
    },
    {
      orderId: "#CMP823",
      user: "Sophie Turner",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      project: "Email Marketing Platform",
      address: "Campaign Road Cleveland",
      date: "19 hours ago",
      status: "Pending" as const,
    },
    {
      orderId: "#CMP824",
      user: "Alexander Smith",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
      project: "Inventory Management System",
      address: "Warehouse Way Tampa",
      date: "20 hours ago",
      status: "Approved" as const,
    },
    {
      orderId: "#CMP825",
      user: "Olivia Johnson",
      avatar: "https://randomuser.me/api/portraits/women/74.jpg",
      project: "Customer Support Portal",
      address: "Service Street Pittsburgh",
      date: "21 hours ago",
      status: "Rejected" as const,
    },
    {
      orderId: "#CMP826",
      user: "William Davis",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      project: "Financial Reporting Tool",
      address: "Accounting Avenue Salt Lake City",
      date: "22 hours ago",
      status: "In Progress" as const,
    },
    {
      orderId: "#CMP827",
      user: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      project: "Project Management Dashboard",
      address: "Planning Lane Milwaukee",
      date: "23 hours ago",
      status: "Complete" as const,
    },
    {
      orderId: "#CMP828",
      user: "Benjamin Brown",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      project: "HR Management System",
      address: "Personnel Road Albuquerque",
      date: "1 day ago",
      status: "Pending" as const,
    },
    {
      orderId: "#CMP829",
      user: "Grace Miller",
      avatar: "https://randomuser.me/api/portraits/women/57.jpg",
      project: "Document Management System",
      address: "Archive Avenue Tucson",
      date: "1 day ago",
      status: "Approved" as const,
    },
    {
      orderId: "#CMP830",
      user: "Henry Taylor",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      project: "Quality Assurance Platform",
      address: "Testing Street Fresno",
      date: "1 day ago",
      status: "Rejected" as const,
    },
  ];

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

        {/* Projects Table */}
        <ProjectsTable projects={projects} />
      </div>
    </div>
  );
};

export default Projects;

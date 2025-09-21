import React, { useState, useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Pagination from "./pagination";

interface Project {
  orderId: string;
  user: string;
  avatar: string;
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

interface ProjectsTableProps {
  projects: Project[];
  itemsPerPage?: number;
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ 
  projects, 
  itemsPerPage = 10 
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [projects, currentPage, itemsPerPage]);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRows(new Set(paginatedProjects.map((project) => project.orderId)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleRowSelect = (orderId: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(orderId);
    } else {
      newSelected.delete(orderId);
    }
    setSelectedRows(newSelected);
    setSelectAll(newSelected.size === paginatedProjects.length);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedRows(new Set());
    setSelectAll(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete":
        return "text-[#4AA785]";
      case "Approved":
        return "text-[#FFC555]";
      case "In Progress":
        return "text-[#8A8CD9]";
      case "Pending":
        return "text-[#59A8D4]";
      case "Rejected":
        return "text-[rgba(28,28,28,0.40)]";
      default:
        return "text-gray-600";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "Complete":
        return "bg-[#4AA785]";
      case "Approved":
        return "bg-[#FFC555]";
      case "In Progress":
        return "bg-[#8A8CD9]";
      case "Pending":
        return "bg-[#59A8D4]";
      case "Rejected":
        return "bg-[rgba(28,28,28,0.40)]";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 min-w-[48px]">
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAll}
                aria-label="Select all projects"
              />
            </TableHead>
            <TableHead className="min-w-[100px]">Order ID</TableHead>
            <TableHead className="min-w-[200px]">User</TableHead>
            <TableHead className="min-w-[150px]">Project</TableHead>
            <TableHead className="min-w-[180px]">Address</TableHead>
            <TableHead className="min-w-[120px]">Date</TableHead>
            <TableHead className="min-w-[140px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedProjects.map((project) => (
            <TableRow key={project.orderId}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.has(project.orderId)}
                  onCheckedChange={(checked) =>
                    handleRowSelect(project.orderId, checked as boolean)
                  }
                  aria-label={`Select ${project.orderId}`}
                />
              </TableCell>
              <TableCell className="text-foreground">
                {project.orderId}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={project.avatar} alt={project.user} />
                    <AvatarFallback>
                      {project.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-foreground">{project.user}</span>
                </div>
              </TableCell>
              <TableCell className="text-foreground">{project.project}</TableCell>
              <TableCell className="text-muted-foreground">
                {project.address}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {project.date}
              </TableCell>
              <TableCell className="whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusDotColor(project.status)}`}></div>
                  <span className={`text-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProjectsTable;

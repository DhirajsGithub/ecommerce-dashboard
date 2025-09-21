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
  itemsPerPage = 5 
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

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Complete":
      case "Approved":
        return "default";
      case "In Progress":
        return "secondary";
      case "Pending":
        return "outline";
      case "Rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete":
      case "Approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAll}
                aria-label="Select all projects"
              />
            </TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
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
              <TableCell className="font-medium text-foreground">
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
              <TableCell>
                <Badge
                  variant={getStatusVariant(project.status)}
                  className={`${getStatusColor(project.status)} border`}
                >
                  {project.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
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

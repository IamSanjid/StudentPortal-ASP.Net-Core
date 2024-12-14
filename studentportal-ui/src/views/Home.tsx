"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"
import { Class, Student, StudentInfo } from "@/lib/data"
import { getFormattedDate, getHost } from "@/lib/utils"

export const columns: ColumnDef<StudentInfo>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="text-left">{row.original.data.name}</div>
    ),
  },
  {
    accessorKey: "class",
    header: "Class",
    cell: ({ row }) => (
      <div className="text-left">{row.original.class.name}</div>
    ),
  },
  {
    accessorKey: "dob",
    header: "DOB",
    cell: ({ row }) => (
      <div className="text-left">{getFormattedDate(row.original.data.dob)}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="text-left">{row.original.data.gender == 0 ? "Male" : "Female"}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const student = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="dark bg-border text-foreground" asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark bg-border text-foreground" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link to={`/edit/${student.data.id}`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={`/details/${student.data.id}`}>Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={async () => {
              try {
                const response = await fetch(getHost() + `/api/StudentTable/${student.data.id}`, {
                  method: 'DELETE'
                });
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }

                alert("Successfully deleted the student...");
              } catch (error) {
                console.error('Error deleting student:', error);
                alert('Failed to delete the student.');
              }

              window.location.reload();
            }}>
              <p className="text-red-500 cursor-pointer">Delete</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function Home() {
  const [data, setData] = React.useState<StudentInfo[]>([]);
  const [classes, setClasses] = React.useState<Class[]>([]);

  React.useEffect(() => {
    fetch(getHost() + '/api/ClassTable')
      .then((res) => {
        try {
          return res.json();
        } catch {
          return [];
        }
      })
      .then((classes: Class[]) => {
        console.log(classes);
        setClasses(classes);
      });
  }, []);

  React.useEffect(() => {
    fetch(getHost() + '/api/StudentTable')
      .then((res) => {
        try {
          return res.json();
        } catch {
          return [];
        }
      })
      .then((students: Student[]) => {
        console.log(students);
        let studentCols = new Array<StudentInfo>();
        for (var student of students) {
          const foundClass = classes.find(cl => cl.id == student.classId);
          if (!foundClass) {
            continue;
          }
          studentCols.push({
            data: student,
            class: foundClass,
          });
        }
        setData(studentCols);
      });
  }, [classes]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {},
  });

  return (
    <div className="dark justify-center flex bg-background text-foreground h-screen w-full">
      <div className="container overflow-x-auto">
        <div className="rounded-md border">
          <Table className="dark">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="space-x-2">
            <Link to={`/add`}>
              <Button
                variant="outline"
                size="sm"
              >
                Add new
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.reload()}
            >
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

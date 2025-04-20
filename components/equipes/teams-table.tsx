"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type Team = {
  id: string
  name: string
  members: number
  status: "active" | "maintenance"
  assignedPoints: number
  lastCollection: string
  vehicle: string
}

const data: Team[] = [
  {
    id: "1",
    name: "Equipe A",
    members: 4,
    status: "active",
    assignedPoints: 12,
    lastCollection: "2024-06-15",
    vehicle: "Caminhão 001",
  },
  {
    id: "2",
    name: "Equipe B",
    members: 3,
    status: "active",
    assignedPoints: 10,
    lastCollection: "2024-06-15",
    vehicle: "Caminhão 002",
  },
  {
    id: "3",
    name: "Equipe C",
    members: 4,
    status: "active",
    assignedPoints: 8,
    lastCollection: "2024-06-14",
    vehicle: "Caminhão 003",
  },
  {
    id: "4",
    name: "Equipe D",
    members: 3,
    status: "active",
    assignedPoints: 7,
    lastCollection: "2024-06-14",
    vehicle: "Caminhão 004",
  },
  {
    id: "5",
    name: "Equipe E",
    members: 4,
    status: "maintenance",
    assignedPoints: 0,
    lastCollection: "2024-06-10",
    vehicle: "Caminhão 005",
  },
  {
    id: "6",
    name: "Equipe F",
    members: 3,
    status: "active",
    assignedPoints: 5,
    lastCollection: "2024-06-15",
    vehicle: "Caminhão 006",
  },
  {
    id: "7",
    name: "Equipe G",
    members: 4,
    status: "maintenance",
    assignedPoints: 0,
    lastCollection: "2024-06-08",
    vehicle: "Caminhão 007",
  },
  {
    id: "8",
    name: "Equipe H",
    members: 3,
    status: "active",
    assignedPoints: 6,
    lastCollection: "2024-06-15",
    vehicle: "Caminhão 008",
  },
  {
    id: "9",
    name: "Equipe I",
    members: 4,
    status: "active",
    assignedPoints: 9,
    lastCollection: "2024-06-14",
    vehicle: "Caminhão 009",
  },
  {
    id: "10",
    name: "Equipe J",
    members: 3,
    status: "maintenance",
    assignedPoints: 0,
    lastCollection: "2024-06-05",
    vehicle: "Caminhão 010",
  },
]

export const columns: ColumnDef<Team>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar todos"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecionar linha"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "members",
    header: "Membros",
    cell: ({ row }) => <div>{row.getValue("members")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={status === "active" ? "default" : "secondary"}
          className={status === "active" ? "bg-[#4caf50]" : ""}
        >
          {status === "active" ? "Ativo" : "Em Manutenção"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "assignedPoints",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Pontos Atribuídos
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => <div>{row.getValue("assignedPoints")}</div>,
  },
  {
    accessorKey: "vehicle",
    header: "Veículo",
    cell: ({ row }) => <div>{row.getValue("vehicle")}</div>,
  },
  {
    accessorKey: "lastCollection",
    header: "Última Coleta",
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastCollection") as string)
      return <div>{date.toLocaleDateString("pt-BR")}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const team = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(team.id)}>Copiar ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Editar equipe</DropdownMenuItem>
            <DropdownMenuItem>Gerenciar membros</DropdownMenuItem>
            <DropdownMenuItem>Realocar equipe</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              {team.status === "active" ? "Colocar em manutenção" : "Ativar"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function TeamsTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Filtrar equipes..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="pl-8"
          />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Próximo
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-green-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Nenhum resultado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de {table.getFilteredRowModel().rows.length} linha(s)
          selecionada(s).
        </div>
      </div>
    </div>
  )
}

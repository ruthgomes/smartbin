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

type Alert = {
  id: string
  pointName: string
  level: number
  status: "critical" | "warning" | "normal"
  team: string
  createdAt: string
  address: string
}

const data: Alert[] = [
  {
    id: "1",
    pointName: "Ponto Central",
    level: 85,
    status: "critical",
    team: "Equipe A",
    createdAt: "2024-06-15T10:30:00",
    address: "Av. Paulista, 1000",
  },
  {
    id: "2",
    pointName: "Ponto Norte",
    level: 75,
    status: "warning",
    team: "Equipe B",
    createdAt: "2024-06-15T09:45:00",
    address: "Rua Augusta, 500",
  },
  {
    id: "3",
    pointName: "Ponto Leste",
    level: 82,
    status: "critical",
    team: "Equipe C",
    createdAt: "2024-06-14T16:20:00",
    address: "Rua Oscar Freire, 300",
  },
  {
    id: "4",
    pointName: "Ponto Oeste",
    level: 65,
    status: "warning",
    team: "Equipe A",
    createdAt: "2024-06-14T14:10:00",
    address: "Av. Rebouças, 1200",
  },
  {
    id: "5",
    pointName: "Ponto Sudeste",
    level: 90,
    status: "critical",
    team: "Equipe D",
    createdAt: "2024-06-13T11:05:00",
    address: "Av. Paulista, 2500",
  },
  {
    id: "6",
    pointName: "Ponto Noroeste",
    level: 60,
    status: "warning",
    team: "Equipe B",
    createdAt: "2024-06-13T10:30:00",
    address: "Rua Haddock Lobo, 400",
  },
  {
    id: "7",
    pointName: "Ponto Sudoeste",
    level: 70,
    status: "warning",
    team: "Equipe C",
    createdAt: "2024-06-12T09:15:00",
    address: "Av. Nove de Julho, 1500",
  },
]

export const columns: ColumnDef<Alert>[] = [
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
    accessorKey: "pointName",
    header: "Ponto de Coleta",
    cell: ({ row }) => <div>{row.getValue("pointName")}</div>,
  },
  {
    accessorKey: "address",
    header: "Endereço",
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Nível
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const level = row.getValue("level") as number
      const status = row.original.status

      let color = "bg-green-500"
      if (status === "critical") {
        color = "bg-red-500"
      } else if (status === "warning") {
        color = "bg-yellow-500"
      }

      return (
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${level}%` }}></div>
          </div>
          <span>{level}%</span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string

      if (status === "critical") {
        return <Badge variant="destructive">Crítico</Badge>
      } else if (status === "warning") {
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            Alerta
          </Badge>
        )
      } else {
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
            Normal
          </Badge>
        )
      }
    },
  },
  {
    accessorKey: "team",
    header: "Equipe Responsável",
    cell: ({ row }) => <div>{row.getValue("team")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Data do Alerta",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt") as string)
      return <div>{date.toLocaleString("pt-BR")}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const alert = row.original

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(alert.id)}>Copiar ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Atribuir equipe</DropdownMenuItem>
            <DropdownMenuItem>Registrar coleta</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Marcar como resolvido</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function AlertsTable() {
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
            placeholder="Filtrar alertas..."
            value={(table.getColumn("pointName")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("pointName")?.setFilterValue(event.target.value)}
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

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

type CollectionPoint = {
  id: string
  name: string
  address: string
  status: "active" | "inactive"
  capacity: number
  currentLevel: number
  team: string
  lastCollection: string
}

const data: CollectionPoint[] = [
  {
    id: "1",
    name: "Ponto Central",
    address: "Av. Paulista, 1000",
    status: "active",
    capacity: 500,
    currentLevel: 320,
    team: "Equipe A",
    lastCollection: "2024-06-15",
  },
  {
    id: "2",
    name: "Ponto Norte",
    address: "Rua Augusta, 500",
    status: "active",
    capacity: 300,
    currentLevel: 150,
    team: "Equipe B",
    lastCollection: "2024-06-14",
  },
  {
    id: "3",
    name: "Ponto Sul",
    address: "Av. Brigadeiro Faria Lima, 2000",
    status: "inactive",
    capacity: 400,
    currentLevel: 0,
    team: "Não atribuído",
    lastCollection: "2024-06-01",
  },
  {
    id: "4",
    name: "Ponto Leste",
    address: "Rua Oscar Freire, 300",
    status: "active",
    capacity: 350,
    currentLevel: 280,
    team: "Equipe C",
    lastCollection: "2024-06-12",
  },
  {
    id: "5",
    name: "Ponto Oeste",
    address: "Av. Rebouças, 1200",
    status: "active",
    capacity: 450,
    currentLevel: 200,
    team: "Equipe A",
    lastCollection: "2024-06-13",
  },
  {
    id: "6",
    name: "Ponto Nordeste",
    address: "Rua da Consolação, 800",
    status: "inactive",
    capacity: 300,
    currentLevel: 0,
    team: "Não atribuído",
    lastCollection: "2024-05-30",
  },
  {
    id: "7",
    name: "Ponto Sudeste",
    address: "Av. Paulista, 2500",
    status: "active",
    capacity: 500,
    currentLevel: 450,
    team: "Equipe D",
    lastCollection: "2024-06-10",
  },
  {
    id: "8",
    name: "Ponto Noroeste",
    address: "Rua Haddock Lobo, 400",
    status: "active",
    capacity: 350,
    currentLevel: 100,
    team: "Equipe B",
    lastCollection: "2024-06-11",
  },
  {
    id: "9",
    name: "Ponto Sudoeste",
    address: "Av. Nove de Julho, 1500",
    status: "active",
    capacity: 400,
    currentLevel: 380,
    team: "Equipe C",
    lastCollection: "2024-06-09",
  },
  {
    id: "10",
    name: "Ponto Centro-Oeste",
    address: "Rua Augusta, 1200",
    status: "inactive",
    capacity: 300,
    currentLevel: 0,
    team: "Não atribuído",
    lastCollection: "2024-05-25",
  },
]

export const columns: ColumnDef<CollectionPoint>[] = [
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
    accessorKey: "address",
    header: "Endereço",
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
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
          {status === "active" ? "Ativo" : "Inativo"}
        </Badge>
      )
    },
  },
  {
    accessorKey: "currentLevel",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Nível Atual
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const currentLevel = row.getValue("currentLevel") as number
      const capacity = row.original.capacity
      const percentage = Math.round((currentLevel / capacity) * 100)

      let color = "bg-green-500"
      if (percentage > 80) {
        color = "bg-red-500"
      } else if (percentage > 50) {
        color = "bg-yellow-500"
      }

      return (
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
          </div>
          <span>{percentage}%</span>
        </div>
      )
    },
  },
  {
    accessorKey: "team",
    header: "Equipe Responsável",
    cell: ({ row }) => <div>{row.getValue("team")}</div>,
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
      const point = row.original

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(point.id)}>Copiar ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Editar ponto</DropdownMenuItem>
            <DropdownMenuItem>Atribuir equipe</DropdownMenuItem>
            <DropdownMenuItem>Registrar coleta</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              {point.status === "active" ? "Desativar" : "Ativar"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function CollectionPointsTable() {
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
            placeholder="Filtrar pontos..."
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

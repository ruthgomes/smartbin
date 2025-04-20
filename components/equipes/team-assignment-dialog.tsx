"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function TeamAssignmentDialog() {
  const [team, setTeam] = useState("")
  const [point, setPoint] = useState("")
  const [open, setOpen] = useState(false)

  const handleSubmit = () => {
    // Aqui seria implementada a lógica para atribuir a equipe ao ponto
    console.log(`Atribuindo equipe ${team} ao ponto ${point}`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full border-green-200 hover:bg-green-50 hover:text-[#4caf50]">
          Realocar Equipe
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Realocar Equipe</DialogTitle>
          <DialogDescription>Selecione uma equipe e um ponto de coleta para realizar a realocação.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="team" className="text-right">
              Equipe
            </Label>
            <Select value={team} onValueChange={setTeam}>
              <SelectTrigger id="team" className="col-span-3">
                <SelectValue placeholder="Selecione uma equipe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Equipe A</SelectItem>
                <SelectItem value="2">Equipe B</SelectItem>
                <SelectItem value="3">Equipe C</SelectItem>
                <SelectItem value="4">Equipe D</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="point" className="text-right">
              Ponto
            </Label>
            <Select value={point} onValueChange={setPoint}>
              <SelectTrigger id="point" className="col-span-3">
                <SelectValue placeholder="Selecione um ponto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Ponto Central</SelectItem>
                <SelectItem value="2">Ponto Norte</SelectItem>
                <SelectItem value="4">Ponto Leste</SelectItem>
                <SelectItem value="7">Ponto Sudeste</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={!team || !point}>
            Confirmar Realocação
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

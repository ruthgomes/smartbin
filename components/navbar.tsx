"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Restaurar os links de Sobre e Contato como âncoras
  const routes = [
    { href: "/", label: "Home" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#contato", label: "Contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-500">SmartBin</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-500",
                pathname === route.href ? "text-green-500" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-green-500 hover:bg-green-600">
            <Link href="/login">Login</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-500",
                  pathname === route.href ? "text-green-500" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button asChild variant="default" className="mt-2 bg-green-500 hover:bg-green-600">
              <Link href="/login">Login</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

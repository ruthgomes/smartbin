"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlertTriangle, BarChart3, Home, LogOut, MapPin, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Equipes",
    href: "/dashboard/equipes",
    icon: Users,
  },
  {
    name: "Pontos de Coleta",
    href: "/dashboard/pontos",
    icon: MapPin,
  },
  {
    name: "Alertas",
    href: "/dashboard/alertas",
    icon: AlertTriangle,
  },
  {
    name: "Relatórios",
    href: "/dashboard/relatorios",
    icon: BarChart3,
  },
  {
    name: "Configurações",
    href: "/dashboard/configuracoes",
    icon: Settings,
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!collapsed && <span className="text-xl font-bold text-green-500">SmartBin</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-gray-100"
          aria-label={collapsed ? "Expandir menu" : "Colapsar menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {collapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive ? "bg-green-50 text-green-600" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <link.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{link.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-2 border-t border-gray-200">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Sair</span>}
        </Link>
      </div>
    </div>
  )
}

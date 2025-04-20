import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import DashboardSidebar from "@/components/dashboard/sidebar"

const inter = Inter({ subsets: ["latin"] })

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <div className="flex h-screen">
          <DashboardSidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </ThemeProvider>
    </div>
  )
}

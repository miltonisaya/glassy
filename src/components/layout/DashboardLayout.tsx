import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Toolbar } from './Toolbar'
import { Footer } from './Footer'

interface DashboardLayoutProps {
  children: ReactNode
  title?: string
  subtitle?: string
  activeNavItem?: string
}

export function DashboardLayout({
  children,
  title,
  subtitle,
  activeNavItem,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange-100/25 rounded-full blur-3xl" />
      </div>

      {/* Sidebar */}
      <div className="relative z-10 h-screen sticky top-0">
        <Sidebar activeItem={activeNavItem} />
      </div>

      {/* Main column */}
      <div className="relative z-10 flex flex-col flex-1 min-w-0 h-screen">
        <Toolbar title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

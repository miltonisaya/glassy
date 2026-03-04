import { Bell, Search, ChevronDown } from 'lucide-react'

interface ToolbarProps {
  title?: string
  subtitle?: string
}

export function Toolbar({ title = 'Dashboard', subtitle = 'Welcome back, John' }: ToolbarProps) {
  return (
    <header className="h-16 bg-white/30 backdrop-blur-xl border-b border-white/50 flex items-center justify-between px-6 flex-shrink-0">
      {/* Page title */}
      <div>
        <h1 className="text-base font-semibold text-gray-900 leading-tight">{title}</h1>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-white/50 border border-white/60 rounded-xl px-3 py-2">
          <Search size={15} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-36"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 bg-white/50 border border-white/60 rounded-xl flex items-center justify-center hover:bg-white/70 transition-all cursor-pointer">
          <Bell size={16} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 bg-white/50 border border-white/60 rounded-xl px-3 py-2 hover:bg-white/70 transition-all cursor-pointer">
          <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
            JD
          </div>
          <ChevronDown size={14} className="text-gray-500" />
        </button>
      </div>
    </header>
  )
}

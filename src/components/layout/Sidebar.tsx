import { Home, BarChart2, FileText, Settings, Users, Leaf } from 'lucide-react'

const NAV_ITEMS = [
  { icon: Home, label: 'Dashboard' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Users, label: 'Farmers' },
  { icon: FileText, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
]

interface SidebarProps {
  activeItem?: string
  onNavigate?: (item: string) => void
}

export function Sidebar({ activeItem = 'Dashboard', onNavigate }: SidebarProps) {
  return (
    <aside className="h-full w-60 bg-white/30 backdrop-blur-xl border-r border-white/50 flex flex-col flex-shrink-0">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/30">
        <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <Leaf className="text-white" size={18} />
        </div>
        <span className="font-bold text-gray-900 text-lg">Tembea</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ icon: Icon, label }) => {
          const isActive = label === activeItem
          return (
            <button
              key={label}
              onClick={() => onNavigate?.(label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-500/15 text-amber-700 border border-amber-500/20'
                  : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>

      {/* User profile */}
      <div className="px-3 py-4 border-t border-white/30">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50 cursor-pointer transition-all">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@tembea.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

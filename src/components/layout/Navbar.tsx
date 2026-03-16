import { Button } from '../ui/Button'

const NAV_LINKS = ['Explore', 'Activities', 'Destinations', 'Plans']

interface NavbarProps {
  activeLink?: string
  onNavigate?: (page: string) => void
}

export function Navbar({ activeLink = 'Solutions', onNavigate }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-white/15">
      {/* Logo */}
      <div className="w-11 h-11 bg-white rounded-full overflow-hidden shadow-md flex-shrink-0">
        <img src="/logo.png" alt="Tembea" className="w-full h-full object-contain" />
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link} className="relative">
            <button className="text-white/90 hover:text-white font-medium text-sm transition-colors cursor-pointer">
              {link}
            </button>
            {link === activeLink && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-forest-400 rounded-full" />
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button variant="white" withArrow onClick={() => onNavigate?.('auth')}>
        Sign In
      </Button>
    </nav>
  )
}

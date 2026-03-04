const FOOTER_LINKS = ['Privacy', 'Terms', 'Support']

export function Footer() {
  return (
    <footer className="h-12 bg-white/30 backdrop-blur-xl border-t border-white/50 flex items-center justify-between px-6 flex-shrink-0">
      <p className="text-xs text-gray-500">© 2026 Glassy. All rights reserved.</p>
      <div className="flex items-center gap-4">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

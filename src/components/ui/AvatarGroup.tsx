const AVATAR_COLORS = ['bg-amber-500', 'bg-teal-600', 'bg-orange-500']
const AVATAR_INITIALS = ['JD', 'MK', 'AB']

interface AvatarGroupProps {
  label: string
}

export function AvatarGroup({ label }: AvatarGroupProps) {
  return (
    <div className="flex items-center gap-2.5 bg-white/90 rounded-full pl-2 pr-4 py-1.5">
      <div className="flex -space-x-2">
        {AVATAR_INITIALS.map((initial, i) => (
          <div
            key={i}
            className={`w-7 h-7 ${AVATAR_COLORS[i]} rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shrink-0`}
          >
            {initial}
          </div>
        ))}
      </div>
      <span className="text-gray-700 text-sm font-medium">{label}</span>
    </div>
  )
}

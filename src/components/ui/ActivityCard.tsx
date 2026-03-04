import type { ReactNode } from 'react'
import { MapPin, Clock, Users, Star } from 'lucide-react'
import type { Activity, ActivityCategory } from '../../data/activities'
import { GlassCard } from './GlassCard'

const CATEGORY_BADGE: Record<ActivityCategory, string> = {
  Safari: 'bg-amber-600/80 text-white',
  'Cultural Tour': 'bg-orange-600/80 text-white',
  'Local Food': 'bg-red-500/80 text-white',
  'Day Trip': 'bg-sky-600/80 text-white',
  Beach: 'bg-teal-600/80 text-white',
  'City Tour': 'bg-indigo-600/80 text-white',
}

interface ActivityCardProps {
  activity: Activity
  onBook?: (id: string) => void
}

export function ActivityCard({ activity, onBook }: ActivityCardProps) {
  return (
    <GlassCard className="overflow-hidden flex flex-col group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

        {/* Category */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${CATEGORY_BADGE[activity.category]}`}
        >
          {activity.category}
        </span>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="fill-yellow-400 text-yellow-400" size={11} />
          <span className="text-xs font-semibold text-gray-800">{activity.rating}</span>
          <span className="text-[11px] text-gray-500">({activity.reviewCount})</span>
        </div>

        {/* Location on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/90 text-xs">
          <MapPin size={12} />
          <span>{activity.location}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-semibold text-gray-900 leading-snug">{activity.title}</h3>

        {/* Info pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <InfoPill icon={<Clock size={12} />}>{activity.duration}</InfoPill>
          <InfoPill icon={<Users size={12} />}>
            {activity.minPax}–{activity.maxPax} pax
          </InfoPill>
        </div>

        {/* Includes */}
        <div className="flex flex-wrap gap-1.5">
          {activity.includes.map((item) => (
            <span
              key={item}
              className="text-[11px] bg-gray-200/60 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="leading-tight">
            <span className="text-xs text-gray-400">From</span>
            <div>
              <span className="text-xl font-bold text-gray-900">
                {activity.currency === 'USD' ? '$' : activity.currency}
                {activity.pricePerPerson}
              </span>
              <span className="text-xs text-gray-400 ml-0.5">/person</span>
            </div>
          </div>
          <button
            onClick={() => onBook?.(activity.id)}
            className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-full hover:bg-amber-600 transition-colors cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </GlassCard>
  )
}

function InfoPill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100/80 text-gray-600 text-xs rounded-full">
      {icon}
      {children}
    </span>
  )
}

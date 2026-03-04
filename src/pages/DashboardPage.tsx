import { TrendingUp, CalendarDays, DollarSign, ListChecks, Star, MapPin, Users, Clock } from 'lucide-react'
import { DashboardLayout } from '../components/layout'
import { GlassCard } from '../components/ui'
import { ACTIVITIES } from '../data/activities'

const STATS = [
  { label: 'Total Bookings', value: '1,284', change: '+18%', icon: CalendarDays, color: 'text-amber-600', bg: 'bg-amber-500/10' },
  { label: 'Active Listings', value: '24', change: '+3', icon: ListChecks, color: 'text-teal-600', bg: 'bg-teal-500/10' },
  { label: 'Monthly Revenue', value: '$8,420', change: '+24%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-500/10' },
  { label: 'Avg. Growth', value: '18.5%', change: '+3%', icon: TrendingUp, color: 'text-sky-600', bg: 'bg-sky-500/10' },
]

const RECENT_BOOKINGS = [
  { name: 'Sarah Johnson', activity: 'Serengeti Safari Adventure', pax: 4, amount: 1800, status: 'Confirmed', avatar: 'SJ' },
  { name: 'Marcus Oduya', activity: 'Maasai Cultural Immersion', pax: 2, amount: 170, status: 'Confirmed', avatar: 'MO' },
  { name: 'Lena Fischer', activity: 'Stone Town Street Food Safari', pax: 3, amount: 135, status: 'Pending', avatar: 'LF' },
  { name: 'James Kariuki', activity: 'Kilimanjaro Foothills Hike', pax: 2, amount: 240, status: 'Confirmed', avatar: 'JK' },
  { name: 'Amara Diallo', activity: 'Zanzibar Beach & Snorkel', pax: 6, amount: 1080, status: 'Pending', avatar: 'AD' },
]

const STATUS_STYLES = {
  Confirmed: 'bg-emerald-500/15 text-emerald-700',
  Pending: 'bg-amber-500/15 text-amber-700',
}

export function DashboardPage() {
  return (
    <DashboardLayout title="Overview" subtitle="Welcome back, John" activeNavItem="Overview">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {STATS.map(({ label, value, change, icon: Icon, color, bg }) => (
          <GlassCard key={label} className="p-5">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center`}>
                <Icon size={20} className={color} />
              </div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">
                {change}
              </span>
            </div>
            <p className={`text-2xl font-bold ${color} mb-1`}>{value}</p>
            <p className="text-sm text-gray-500">{label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Bookings */}
        <GlassCard className="lg:col-span-2 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-5">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 text-xs border-b border-gray-200/60">
                  <th className="pb-3 font-medium">Traveler</th>
                  <th className="pb-3 font-medium">Activity</th>
                  <th className="pb-3 font-medium text-center">Pax</th>
                  <th className="pb-3 font-medium text-right">Amount</th>
                  <th className="pb-3 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/40">
                {RECENT_BOOKINGS.map(({ name, activity, pax, amount, status, avatar }) => (
                  <tr key={name} className="hover:bg-white/30 transition-colors">
                    <td className="py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                          {avatar}
                        </div>
                        <span className="font-medium text-gray-800 whitespace-nowrap">{name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-gray-500 max-w-[180px] truncate pr-4">{activity}</td>
                    <td className="py-3 text-center text-gray-700 font-medium">{pax}</td>
                    <td className="py-3 text-right font-semibold text-gray-800">${amount}</td>
                    <td className="py-3 text-right">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[status as keyof typeof STATUS_STYLES]}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* My Top Listings */}
        <GlassCard className="p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-5">My Top Listings</h2>
          <ul className="space-y-4">
            {ACTIVITIES.slice(0, 4).map((activity) => (
              <li key={activity.id} className="flex items-start gap-3">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{activity.title}</p>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-500">
                    <span className="flex items-center gap-0.5">
                      <MapPin size={10} /> {activity.location.split(',')[0]}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Clock size={10} /> {activity.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="flex items-center gap-0.5 text-xs">
                      <Star className="fill-yellow-400 text-yellow-400" size={10} />
                      <span className="text-gray-600">{activity.rating}</span>
                    </span>
                    <span className="text-xs font-semibold text-gray-700">${activity.pricePerPerson}/pax</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 border border-amber-300/60 rounded-xl text-sm text-amber-700 hover:bg-amber-50/50 transition-all cursor-pointer"
            onClick={() => {}}
          >
            <Users size={15} />
            View All Listings
          </button>
        </GlassCard>
      </div>
    </DashboardLayout>
  )
}

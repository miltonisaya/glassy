import { Sparkles, Star, ArrowDown, Search, MapPin, Binoculars, Landmark, Utensils, Compass, Waves, Building2 } from 'lucide-react'
import { Navbar } from '../components/layout'
import { Badge, Button, AvatarGroup, ActivityCard } from '../components/ui'
import { ACTIVITIES } from '../data/activities'

interface LandingPageProps {
  onNavigate: (page: string) => void
}

const FEATURED_ACTIVITIES = ACTIVITIES.slice(0, 4)

const CATEGORIES = [
  { label: 'Safari', icon: Binoculars },
  { label: 'Cultural Tour', icon: Landmark },
  { label: 'Local Food', icon: Utensils },
  { label: 'Day Trip', icon: Compass },
  { label: 'Beach', icon: Waves },
  { label: 'City Tour', icon: Building2 },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Browse Experiences',
    description: 'Search hundreds of curated activities across top destinations — safaris, cultural tours, food trails, and more.',
  },
  {
    step: '02',
    title: 'Book Your Spot',
    description: 'Choose your dates, select the number of pax, and secure your booking in minutes with safe checkout.',
  },
  {
    step: '03',
    title: 'Live the Adventure',
    description: 'Show up and let your expert local guide take care of everything. Just bring your curiosity.',
  },
]

const PLANS = [
  {
    name: 'Explorer',
    price: 0,
    description: 'Perfect for occasional travelers',
    features: ['Browse all activities', 'Up to 2 bookings/month', 'Email support', 'Basic itinerary view'],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Adventurer',
    price: 29,
    description: 'For the frequent traveler',
    features: ['Unlimited bookings', 'Priority support', 'Full itinerary details', 'Exclusive member deals', 'Early access to new experiences'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Operator',
    price: 49,
    description: 'List and manage your experiences',
    features: ['List unlimited activities', 'Booking management dashboard', 'Analytics & revenue reports', 'Dedicated account manager', 'Promoted listings'],
    cta: 'Start Listing',
    highlighted: false,
  },
]

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-sand-50 relative">
      {/* Fixed background blobs — visible through all sections */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-forest-700/45 via-forest-500/30 to-forest-800/40" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-125 bg-forest-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-sand-400/20 rounded-full blur-3xl" />
      </div>

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-5xl bg-black/25 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <Navbar onNavigate={onNavigate} activeLink="Explore" />

          {/* Hero content */}
          <div className="px-8 pt-14 pb-14 text-center text-white">
            <div className="flex justify-center mb-6">
              <Badge icon={<Sparkles size={14} />}>Explore the World</Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
              Discover Extraordinary
              <br />
              Experiences.
            </h1>

            <p className="text-white/65 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              From thrilling safaris to cultural immersions — find, book, and live
              your perfect adventure.
            </p>

            {/* Search bar */}
            <div className="max-w-2xl mx-auto flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-3 py-2">
              <div className="flex-1 flex items-center gap-2 px-3">
                <MapPin size={15} className="text-white/50 shrink-0" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="bg-transparent text-sm text-white placeholder-white/50 outline-none w-full"
                />
              </div>
              <div className="w-px h-5 bg-white/20 shrink-0" />
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search size={15} className="text-white/50 shrink-0" />
                <input
                  type="text"
                  placeholder="Activity type..."
                  className="bg-transparent text-sm text-white placeholder-white/50 outline-none w-full"
                />
              </div>
              <button
                onClick={() => onNavigate('auth')}
                className="shrink-0 bg-white text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Explore
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/15 px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/60">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
              <ArrowDown size={14} />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span><strong className="text-white">500+</strong> Destinations</span>
                <span><strong className="text-white">1.2k+</strong> Activities</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="fill-yellow-400 text-yellow-400" size={15} />
                <span className="text-white font-semibold text-sm">4.9</span>
              </div>
              <AvatarGroup label="50k+ Travelers" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED ACTIVITIES ───────────────────────────────────── */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Experiences</h2>
            <p className="text-gray-500">Handpicked adventures loved by our travelers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_ACTIVITIES.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="primary" withArrow onClick={() => onNavigate('auth')}>
              Browse All Activities
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ────────────────────────────────────────────── */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {CATEGORIES.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 flex flex-col items-center gap-2 hover:bg-white/60 cursor-pointer transition-all group"
              >
                <Icon size={26} className="text-forest-500 group-hover:text-forest-600 transition-colors" />
                <span className="text-xs font-medium text-gray-700 text-center leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-14 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map(({ step, title, description }, i) => (
              <div key={step} className="relative text-center">
                {/* Connector line */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-px bg-gray-300/60" />
                )}
                <div className="w-12 h-12 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLANS ─────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Simple, Transparent Pricing</h2>
            <p className="text-gray-500">Start for free. Upgrade when you're ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map(({ name, price, description, features, cta, highlighted }) => (
              <div
                key={name}
                className={`rounded-2xl p-6 flex flex-col gap-4 border transition-all ${
                  highlighted
                    ? 'bg-linear-to-br from-forest-500 to-forest-700 text-white border-forest-400 shadow-2xl scale-[1.02]'
                    : 'bg-white/40 backdrop-blur-xl border-white/60'
                }`}
              >
                <div>
                  <p className={`text-sm font-medium mb-1 ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    {name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-extrabold ${highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {price === 0 ? 'Free' : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className={`text-sm mb-1.5 ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                        /month
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mt-1 ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    {description}
                  </p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${highlighted ? 'bg-white/25 text-white' : 'bg-forest-100 text-forest-700'}`}>
                        ✓
                      </span>
                      <span className={highlighted ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onNavigate('auth')}
                  className={`w-full py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    highlighted
                      ? 'bg-white text-forest-600 hover:bg-forest-50'
                      : 'bg-forest-500 text-white hover:bg-forest-600'
                  }`}
                >
                  {cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer className="relative py-10 px-6 border-t border-gray-200/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2026 Tembea. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact', 'Support'].map((link) => (
              <a key={link} href="#" className="text-sm text-gray-400 hover:text-forest-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

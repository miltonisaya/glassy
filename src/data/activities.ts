export type ActivityCategory =
  | 'Safari'
  | 'Cultural Tour'
  | 'Local Food'
  | 'Day Trip'
  | 'Beach'
  | 'City Tour'

export interface Activity {
  id: string
  title: string
  category: ActivityCategory
  location: string
  image: string
  duration: string
  maxPax: number
  minPax: number
  pricePerPerson: number
  currency: string
  rating: number
  reviewCount: number
  description: string
  includes: string[]
}

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Serengeti Safari Adventure',
    category: 'Safari',
    location: 'Serengeti, Tanzania',
    image: 'https://picsum.photos/seed/serengeti/800/500',
    duration: '3 Days',
    maxPax: 8,
    minPax: 2,
    pricePerPerson: 450,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 234,
    description:
      'Witness the iconic Great Migration and encounter the Big Five in one of Africa\'s most spectacular wilderness areas.',
    includes: ['4x4 Transport', 'Lodge', 'Expert Guide', 'All Meals'],
  },
  {
    id: '2',
    title: 'Maasai Cultural Immersion',
    category: 'Cultural Tour',
    location: 'Ngorongoro, Tanzania',
    image: 'https://picsum.photos/seed/maasai/800/500',
    duration: '1 Day',
    maxPax: 12,
    minPax: 2,
    pricePerPerson: 85,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 156,
    description:
      'Live a day with the Maasai tribe — learn traditional dances, beadwork, and hear stories passed down through generations.',
    includes: ['Transport', 'Guide', 'Lunch', 'Cultural Activities'],
  },
  {
    id: '3',
    title: 'Stone Town Street Food Safari',
    category: 'Local Food',
    location: 'Stone Town, Zanzibar',
    image: 'https://picsum.photos/seed/zanzibarfood/800/500',
    duration: '4 Hours',
    maxPax: 10,
    minPax: 1,
    pricePerPerson: 45,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 312,
    description:
      'Taste your way through Zanzibar\'s spice-scented alleyways — from Urojo soup to fresh seafood and sweet coconut treats.',
    includes: ['10+ Food Tastings', 'Local Guide', 'Recipe Card'],
  },
  {
    id: '4',
    title: 'Kilimanjaro Foothills Hike',
    category: 'Day Trip',
    location: 'Kilimanjaro, Tanzania',
    image: 'https://picsum.photos/seed/kilimanjaro/800/500',
    duration: '1 Day',
    maxPax: 6,
    minPax: 2,
    pricePerPerson: 120,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 89,
    description:
      'Trek through rainforest and moorland on the lower slopes of Africa\'s highest peak, with stunning views of the glaciers above.',
    includes: ['Transport', 'Guide', 'Packed Lunch', 'Hiking Gear'],
  },
  {
    id: '5',
    title: 'Zanzibar Beach & Snorkel',
    category: 'Beach',
    location: 'Nungwi, Zanzibar',
    image: 'https://picsum.photos/seed/nungwi/800/500',
    duration: '2 Days',
    maxPax: 20,
    minPax: 1,
    pricePerPerson: 180,
    currency: 'USD',
    rating: 4.6,
    reviewCount: 445,
    description:
      'Relax on powder-white beaches and snorkel through vivid coral reefs in the crystal-clear waters of the Indian Ocean.',
    includes: ['Transport', 'Beach Hotel', 'Snorkel Gear', 'Boat Trip'],
  },
  {
    id: '6',
    title: 'Dar es Salaam City Discovery',
    category: 'City Tour',
    location: 'Dar es Salaam, Tanzania',
    image: 'https://picsum.photos/seed/daressalaam/800/500',
    duration: '6 Hours',
    maxPax: 15,
    minPax: 1,
    pricePerPerson: 60,
    currency: 'USD',
    rating: 4.5,
    reviewCount: 178,
    description:
      'Explore Dar\'s vibrant markets, colonial architecture, and waterfront — ending at a rooftop spot with views over the harbour.',
    includes: ['Air-Conditioned Transport', 'Guide', 'Entry Fees', 'Refreshments'],
  },
]

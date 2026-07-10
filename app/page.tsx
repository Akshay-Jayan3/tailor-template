import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery, { type GalleryPiece } from '@/components/Gallery'
import Craft from '@/components/Craft'
import Conviction from '@/components/Conviction'
import Contact from '@/components/Contact'
import ScrollMotion from '@/components/ScrollMotion'
import { portfolioPieces as fallbackPieces } from '@/lib/site'
import { supabase } from '@/lib/supabase'

// Portfolio/Services/Testimonials are editable live from the app —
// don't cache this page, always fetch fresh from Supabase.
export const revalidate = 0

const CATEGORY_LABELS: Record<string, string> = {
  blouse: 'Blouse',
  churidar: 'Churidar',
  saree: 'Saree Blouse',
  pavada: 'Nighty / Frock',
  other: 'Custom Piece',
}

async function getGalleryItems(): Promise<GalleryPiece[]> {
  if (!supabase) {
    return fallbackPieces.map((p) => ({ name: p.name, desc: p.desc, src: `/images/works/${p.image}` }))
  }

  const { data, error } = await supabase
    .from('portfolio_items')
    .select('photo_url, caption, category')
    .eq('visible', true)
    .order('display_order')

  if (error || !data || data.length === 0) {
    return fallbackPieces.map((p) => ({ name: p.name, desc: p.desc, src: `/images/works/${p.image}` }))
  }

  return data.map((item) => ({
    name: CATEGORY_LABELS[item.category] ?? item.category,
    desc: item.caption ?? '',
    src: item.photo_url,
  }))
}

export default async function Home() {
  const galleryItems = await getGalleryItems()

  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Gallery items={galleryItems} />
      <Craft />
      <Conviction />
      <Contact />
      <ScrollMotion />
    </main>
  )
}

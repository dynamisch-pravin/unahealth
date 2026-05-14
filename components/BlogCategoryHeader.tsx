import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Props {
  title: string
  description: string
}

export default function BlogCategoryHeader({ title, description }: Props) {
  return (
    <section className="pt-36 pb-16" style={{ backgroundColor: '#0F2B5B' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(255,255,255,0.40)' }}>
          <Link href="/resources/blog" className="hover:text-white transition-colors">Resources</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'rgba(255,255,255,0.70)' }}>{title}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg" style={{ color: 'rgba(255,255,255,0.60)' }}>{description}</p>
      </div>
    </section>
  )
}

import { Calendar, Tag } from 'lucide-react'

interface Props {
  date: string
  categories: string[]
}

export default function PostMeta({ date, categories }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <span className="flex items-center gap-1.5 text-xs text-slate-400">
        <Calendar size={12} />
        {date}
      </span>
      {categories.map(cat => (
        <span key={cat} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
          style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.25)', background: 'rgba(233,56,77,0.05)' }}>
          <Tag size={10} />
          {cat}
        </span>
      ))}
    </div>
  )
}

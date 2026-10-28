import { useEffect, useMemo, useState } from 'react'
import { categoryLabels, statusLabels, subjects, type Category, type Subject } from '../data/subjects'

type Filter = 'all' | 'live' | Category

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All subjects' },
  { id: 'live', label: 'Live now' },
  { id: 'caps', label: categoryLabels.caps },
  { id: 'elective', label: categoryLabels.elective },
  { id: 'skills', label: categoryLabels.skills },
]

function matches(subject: Subject, filter: Filter, query: string) {
  if (filter === 'live' && subject.status !== 'live') return false
  if (filter !== 'all' && filter !== 'live' && subject.category !== filter) return false
  if (!query) return true
  const haystack = `${subject.name} ${subject.group} ${subject.blurb}`.toLowerCase()
  return query
    .toLowerCase()
    .split(/\s+/)
    .every((word) => haystack.includes(word))
}

export function SubjectCard({ subject }: { subject: Subject }) {
  const live = subject.status === 'live'
  const body = (
    <>
      <div className="card-top">
        <span className="card-icon" aria-hidden="true">
          {subject.icon}
        </span>
        <span className={`badge badge-${subject.status}`}>{statusLabels[subject.status]}</span>
      </div>
      <h3>{subject.name}</h3>
      <p className="card-meta">
        {categoryLabels[subject.category]} · {subject.group}
        {subject.phase ? ` · ${subject.phase}` : ''}
      </p>
      <p className="card-blurb">{subject.blurb}</p>
      {live && (
        <span className="card-cta">
          Start learning <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  )

  return live ? (
    <a
      className={`card card-${subject.category} card-live`}
      href={subject.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${subject.name} (opens in a new tab)`}
    >
      {body}
    </a>
  ) : (
    <div className={`card card-${subject.category}`}>{body}</div>
  )
}

export default function SubjectExplorer() {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  // Other sections can jump straight to the Mzansi Skills view.
  useEffect(() => {
    const showSkills = () => {
      setFilter('skills')
      setQuery('')
    }
    window.addEventListener('show-skills', showSkills)
    return () => window.removeEventListener('show-skills', showSkills)
  }, [])

  const visible = useMemo(() => {
    const q = query.trim()
    // Live apps first, then alphabetical within each status.
    return subjects
      .filter((s) => matches(s, filter, q))
      .sort((a, b) => (a.status === b.status ? a.name.localeCompare(b.name) : a.status === 'live' ? -1 : 1))
  }, [filter, query])

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: subjects.length, live: 0, caps: 0, elective: 0, skills: 0 }
    for (const s of subjects) {
      c[s.category]++
      if (s.status === 'live') c.live++
    }
    return c
  }, [])

  return (
    <section id="subjects" className="section">
      <div className="container">
        <p className="eyebrow">Subject catalogue</p>
        <h2>Everything we offer — and everything on the way</h2>
        <p className="lede">
          Every CAPS subject, the electives schools offer, and our own Mzansi Skills modules. Subjects marked{' '}
          <strong>Live now</strong> open straight into the learning app.
        </p>

        <div className="explorer-controls">
          <div className="chips" role="tablist" aria-label="Filter subjects">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={`chip${filter === f.id ? ' chip-active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
                <span className="chip-count">{counts[f.id]}</span>
              </button>
            ))}
          </div>
          <label className="search">
            <span className="visually-hidden">Search subjects</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              placeholder="Search e.g. maths, solar, isiZulu…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        <p className="result-count" aria-live="polite">
          Showing {visible.length} of {subjects.length}
        </p>

        {visible.length > 0 ? (
          <div className="grid">
            {visible.map((s) => (
              <SubjectCard key={s.id} subject={s} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p>
              No subjects match “{query}”. Can’t find what you need?{' '}
              <a href="#join">Tell us what to build next.</a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

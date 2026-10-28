import { useEffect, useState } from 'react'
import SubjectExplorer, { SubjectCard } from './components/SubjectExplorer'
import { subjects } from './data/subjects'

const liveSubjects = subjects.filter((s) => s.status === 'live')
const capsCount = subjects.filter((s) => s.category === 'caps').length
const skillsCount = subjects.filter((s) => s.category === 'skills').length

const navLinks = [
  { href: '#mission', label: 'Mission' },
  { href: '#skills', label: 'Real-world skills' },
  { href: '#subjects', label: 'Subjects' },
  { href: '#roadmap', label: 'Roadmap' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" width={32} height={32} />
          <span>
            Mzansi <strong>School</strong>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="visually-hidden">Menu</span>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav id="site-nav" className={`site-nav${open ? ' open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#live" className="btn btn-small" onClick={() => setOpen(false)}>
            Start learning
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="flag-stripe" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Free · CAPS-aligned · Made in South Africa</p>
          <h1>
            Quality education should be <span className="highlight">free</span> for every learner in Mzansi.
          </h1>
          <p className="lede">
            Mzansi School brings every CAPS subject together in one place — plus practical, real-world skills that
            school doesn’t always teach. No fees. No paywalls. Just learning.
          </p>
          <div className="hero-actions">
            <a href="#live" className="btn">
              Start learning now
            </a>
            <a href="#subjects" className="btn btn-ghost">
              Browse all subjects
            </a>
          </div>
        </div>
        <ul className="stats" aria-label="Mzansi School at a glance">
          <li>
            <strong>{liveSubjects.length}</strong>
            <span>subjects live today</span>
          </li>
          <li>
            <strong>{capsCount}</strong>
            <span>CAPS subjects mapped</span>
          </li>
          <li>
            <strong>{skillsCount}</strong>
            <span>real-world skills modules</span>
          </li>
          <li>
            <strong>R0</strong>
            <span>cost to learners, always</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

function LiveNow() {
  return (
    <section id="live" className="section section-tint">
      <div className="container">
        <p className="eyebrow">Live now</p>
        <h2>Jump straight into a subject</h2>
        <p className="lede">
          These study companions are finished and free to use today. Each one opens in a new tab — pick a subject
          and start.
        </p>
        <div className="grid grid-live">
          {liveSubjects.map((s) => (
            <SubjectCard key={s.id} subject={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

const missionPoints = [
  {
    icon: '🆓',
    title: 'Free, for good',
    text: 'Where you live or what your family earns should never decide what you can learn. Everything here is free to every learner.',
  },
  {
    icon: '📘',
    title: 'Built on CAPS',
    text: 'Our subjects follow the national CAPS curriculum, so what you study here lines up with what you’re taught in class and examined on.',
  },
  {
    icon: '📱',
    title: 'Made for real conditions',
    text: 'Designed for the phones learners actually have and the data they can afford, so learning fits around real life.',
  },
  {
    icon: '🤝',
    title: 'For learners, parents & teachers',
    text: 'Learners can study on their own, parents can help at home, and teachers can point their classes to a trusted resource.',
  },
]

function Mission() {
  return (
    <section id="mission" className="section">
      <div className="container">
        <div className="split">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Opening the door to learning — for everyone</h2>
            <p className="lede">
              Too many South African learners are held back by the cost of extra lessons, textbooks and study
              guides. We believe great learning material is a public good.
            </p>
            <p>
              Mzansi School is our answer: a growing home for free, curriculum-aligned study companions across every
              subject — built in South Africa, for South Africa. We’re starting with the subjects learners ask for
              most and working our way through the whole curriculum.
            </p>
          </div>
          <div className="feature-grid">
            {missionPoints.map((p) => (
              <div key={p.title} className="feature">
                <span className="feature-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const pillars = [
  {
    icon: '🛠️',
    title: 'Vocational learning',
    text: 'Electrical, solar, plumbing, mechanics and more — practical trades that lead straight to apprenticeships and work.',
  },
  {
    icon: '💸',
    title: 'Life & money skills',
    text: 'Budgeting, banking, tax, credit and your rights — the things everyone needs to know as an adult.',
  },
  {
    icon: '💡',
    title: 'Work & enterprise',
    text: 'CVs, interviews, starting a small business and speaking with confidence — skills for earning a living.',
  },
  {
    icon: '🌐',
    title: 'Digital future',
    text: 'Coding, AI, and staying safe online — so learners can take part in the digital economy, not just watch it.',
  },
]

function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <p className="eyebrow">Beyond the classroom</p>
        <h2>Real-world skills that change lives</h2>
        <p className="lede">
          A matric certificate matters — but so does knowing how to fix, build, earn and manage money. Alongside the
          CAPS curriculum we’re creating <strong>Mzansi Skills</strong>: our own short, practical modules that prepare
          young people for work, enterprise and adult life.
        </p>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <div key={p.title} className="pillar">
              <span className="feature-icon" aria-hidden="true">
                {p.icon}
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <a href="#subjects" className="btn btn-gold" onClick={() => window.dispatchEvent(new Event('show-skills'))}>
          See the Mzansi Skills modules
        </a>
      </div>
    </section>
  )
}

const roadmap = [
  {
    step: '01',
    title: 'Core FET subjects',
    status: 'done',
    text: 'English, Mathematics, Physical Sciences, Accounting, Geography and Information Technology — live and free.',
  },
  {
    step: '02',
    title: 'The full CAPS curriculum',
    status: 'next',
    text: 'Every remaining Grade 10–12 subject, including Afrikaans and all African languages, then the Intermediate and Senior Phases.',
  },
  {
    step: '03',
    title: 'Electives & technical subjects',
    status: 'later',
    text: 'Technical, agricultural, services and creative-arts subjects, so every learner’s subject choice is covered.',
  },
  {
    step: '04',
    title: 'Mzansi Skills',
    status: 'later',
    text: 'Our own practical modules on money, trades, digital skills, enterprise and wellbeing.',
  },
]

function Roadmap() {
  return (
    <section id="roadmap" className="section section-tint">
      <div className="container">
        <p className="eyebrow">Roadmap</p>
        <h2>How we’re getting there</h2>
        <ol className="roadmap">
          {roadmap.map((r) => (
            <li key={r.step} className={`road-${r.status}`}>
              <span className="road-step">{r.step}</span>
              <div>
                <h3>
                  {r.title}
                  {r.status === 'done' && <span className="badge badge-live">Done</span>}
                  {r.status === 'next' && <span className="badge badge-soon">Up next</span>}
                </h3>
                <p>{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Join() {
  const [copied, setCopied] = useState(false)

  async function share() {
    const data = {
      title: 'Mzansi School',
      text: 'Free, CAPS-aligned learning for every South African learner.',
      url: window.location.origin,
    }
    try {
      if (navigator.share) {
        await navigator.share(data)
        return
      }
      await navigator.clipboard.writeText(data.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Share sheet dismissed or clipboard unavailable — nothing to do.
    }
  }

  return (
    <section id="join" className="section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <h2>Help us reach every learner</h2>
            <p>
              The best way to support free education is to spread the word. Share Mzansi School with a learner,
              parent, teacher or school group — every share puts free learning in someone’s hands.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-gold" onClick={share}>
              {copied ? 'Link copied!' : 'Share Mzansi School'}
            </button>
            <a href="#live" className="btn btn-ghost-light">
              Start learning
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a href="#top" className="brand">
            <img src="/favicon.svg" alt="" width={28} height={28} />
            <span>
              Mzansi <strong>School</strong>
            </span>
          </a>
          <p>Free education for every South African learner.</p>
        </div>
        <div>
          <h4>Live subjects</h4>
          <ul>
            {liveSubjects.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-note">
        <p>
          Content is aligned to the Curriculum and Assessment Policy Statement (CAPS). Mzansi School is an independent
          project and is not affiliated with the Department of Basic Education.
        </p>
        <p>© {new Date().getFullYear()} Mzansi School</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <LiveNow />
        <Mission />
        <Skills />
        <SubjectExplorer />
        <Roadmap />
        <Join />
      </main>
      <Footer />
    </>
  )
}

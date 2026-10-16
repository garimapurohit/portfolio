import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Asterisk,
  ExternalLink,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import { achievements, competitiveProfiles, contacts, notebookNotes, profile, skills, timeline } from './data/profile.js'
import { projects } from './data/projects.js'

const navItems = [
  { label: 'Archive', href: '#archive' },
  { label: 'Field notes', href: '#about' },
  { label: 'Index', href: '#index' },
  { label: 'Contact', href: '#contact' },
]

function useProjectRoute() {
  const readProject = () => new URLSearchParams(window.location.search).get('project')
  const [projectId, setProjectId] = useState(readProject)

  useEffect(() => {
    const syncRoute = () => setProjectId(readProject())
    window.addEventListener('popstate', syncRoute)
    return () => window.removeEventListener('popstate', syncRoute)
  }, [])

  const openProject = useCallback((id) => {
    const url = new URL(window.location.href)
    url.searchParams.set('project', id)
    window.history.pushState({}, '', url)
    setProjectId(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const closeProject = useCallback(() => {
    const url = new URL(window.location.href)
    url.searchParams.delete('project')
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    setProjectId(null)
  }, [])

  return { projectId, openProject, closeProject }
}

function SectionHeading({ eyebrow, title, index, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span>{index}</span>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  )
}

function Header({ dark, setDark, menuOpen, setMenuOpen }) {
  return (
    <>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" />
      </div>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="G Archive, back to top">
          <span>G</span><i>/</i><span>ARCHIVE</span>
        </a>
        <span className="masthead-descriptor">{profile.descriptor}</span>
        <nav className={menuOpen ? 'desktop-nav is-open' : 'desktop-nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <div className="masthead-actions">
          <span className="availability"><i />{profile.availability}</span>
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
            title={`Switch to ${dark ? 'light' : 'dark'} theme`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
    </>
  )
}

function Hero({ onDiscover }) {
  return (
    <section className="hero page-wrap" id="top">
      <div className="hero-kicker">
        <span className="eyebrow"><span>Vol. 01</span> A living record of learning</span>
        <span className="mono">INDEPENDENT / NO. 01</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-overline">INFORMATION TECHNOLOGY <span>—</span> CLASS OF {profile.graduation}</p>
          <h1><span>HELLO,</span><br /><em>I’M GARIMA.</em></h1>
          <div className="hero-statement">
            <span className="statement-mark"><Asterisk size={25} strokeWidth={1.4} /></span>
            <p>{profile.statement}</p>
          </div>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-ink" href="#archive">Explore selected work <ArrowDown size={16} /></a>
            <a className="text-link" href="#contact">Say hello <ArrowRight size={15} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract archive illustration" role="img">
          <div className="art-topline"><span>SUBJECT / GP-026</span><span>FIG. 01</span></div>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun"><span>G</span></div>
          <div className="art-cross cross-one">+</div>
          <div className="art-cross cross-two">+</div>
          <div className="art-note note-one">curious by design</div>
          <div className="art-note note-two">always in progress ↗</div>
          <div className="art-bottomline"><span>BUILD / LEARN / REPEAT</span><span>EST. MMXXVI</span></div>
          <span className="art-index">01—03</span>
        </div>
      </div>
      <div className="hero-foot">
        <span>AN OPEN INDEX OF THINGS MADE, LEARNED &amp; STILL IN MOTION</span>
        <button className="discovery-button" type="button" onClick={onDiscover}>
          <span className="discovery-spark">✳</span> Pull a note from the archive <ArrowRight size={14} />
        </button>
      </div>
      <a className="vertical-stamp" href="#archive" aria-label="Scroll to the archive">SCROLL TO EXPLORE ↓</a>
    </section>
  )
}

function ProjectArtwork({ variant }) {
  if (variant === 'pulse') {
    return (
      <div className="artwork artwork-pulse" aria-hidden="true">
        <span className="blood-label blood-label-donor">DONOR <b>A+</b></span>
        <span className="blood-label blood-label-request">REQUEST <b>A+</b></span>
        <svg className="blood-bag" viewBox="0 0 150 190" role="presentation">
          <path className="bag-outline" d="M57 16h36v19l16 17v103a15 15 0 0 1-15 15H56a15 15 0 0 1-15-15V52l16-17z" />
          <path className="bag-fluid" d="M46 92h58v63a10 10 0 0 1-10 10H56a10 10 0 0 1-10-10z" />
          <path className="bag-detail" d="M57 16h36v19H57zM57 52h36M67 16V7h16v9" />
          <path className="bag-tube" d="M75 170v13h13" />
          <circle className="bag-plus-disc" cx="75" cy="111" r="17" />
          <path className="bag-plus" d="M75 102v18M66 111h18" />
        </svg>
        <span className="blood-caption">A MATCH CAN MAKE A DIFFERENCE</span>
      </div>
    )
  }
  if (variant === 'trail') {
    return (
      <div className="artwork artwork-trail" aria-hidden="true">
        <div className="trail-label">TINY / TRAIL</div>
        <div className="trail-link">long-link.example/path</div>
        <div className="trail-arrow">↓</div>
        <div className="trail-short">tiny.tl / a7k2</div>
        <span className="trail-stat">↗ 128 clicks</span>
      </div>
    )
  }
  return (
    <div className="artwork artwork-meter" aria-hidden="true">
      <div className="meter-paper">
        <span className="meter-title">METER READING</span>
        <span className="meter-number">08 4 2 1</span>
        <div className="meter-rule" />
        <span className="meter-upload">＋ &nbsp; IMAGE ATTACHED</span>
      </div>
      <div className="meter-stamp">SUBMITTED</div>
    </div>
  )
}

function ProjectEntry({ project, onOpen, reducedMotion }) {
  return (
    <motion.article
      className={`project-entry project-${project.visual}`}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-visual">
        <ProjectArtwork variant={project.visual} />
        <span className="project-index">{project.number} / {projects.length.toString().padStart(2, '0')}</span>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-body">
        <div className="project-heading">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          <button
            type="button"
            className="round-arrow"
            onClick={() => onOpen(project.id)}
            aria-label={`Open ${project.name} project details`}
          ><ArrowUp size={18} /></button>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label={`${project.name} technologies`}>
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <button type="button" className="project-open" onClick={() => onOpen(project.id)}>
          Read project file <ArrowRight size={14} />
        </button>
      </div>
    </motion.article>
  )
}

function Archive({ onOpen, reducedMotion }) {
  return (
    <section className="section page-wrap archive-section" id="archive">
      <SectionHeading
        index="01"
        eyebrow="Selected files"
        title={<>The work, <em>in progress.</em></>}
        note="A few practical problems, explored through software. Open a file for the details."
      />
      <div className="archive-topline"><span>PROJECT INDEX</span><span>PROJECT / INTERNSHIP</span><span>{projects.length} ENTRIES</span></div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectEntry key={project.id} project={project} onOpen={onOpen} reducedMotion={reducedMotion} />
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section page-wrap about-section" id="about">
      <SectionHeading index="02" eyebrow="Field notes" title={<>A little about <em>the maker.</em></>} />
      <div className="about-layout">
        <p className="about-lede">I like the moment a fuzzy idea becomes a thing someone can actually use.</p>
        <div className="about-detail">
          <p>I’m pursuing a B.Tech in Information Technology at BPIT, affiliated with Guru Gobind Singh Indraprastha University (GGSIPU). My current CGPA is {profile.cgpa}, and I’m interested in software engineering, full-stack development, and the problem-solving underneath both.</p>
          <p>So far, I’ve worked on a team blood-donation platform, a URL-shortening backend, and a self-meter reading application during my Tata Power-DDL internship. I also enjoy competitive programming, where I’ve solved {profile.dsaCount} problems across online judges.</p>
          <a className="text-link" href="#index">Take a look at my working index <ArrowRight size={15} /></a>
        </div>
        <div className="about-side-note"><span>PERSONAL MARGIN NOTE</span><p>Make it work.<br />Understand why.<br /><i>Make it clearer.</i></p><Asterisk size={22} /></div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section page-wrap skills-section" id="index">
      <SectionHeading index="03" eyebrow="Engineering index" title={<>Tools of the <em>trade.</em></>} note="A working list, not a set of badges. Familiarity varies by technology." />
      <div className="skills-list">
        {skills.map((group) => (
          <div className="skill-row" key={group.index}>
            <span className="skill-number">{group.index}</span>
            <h3>{group.title}</h3>
            <div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            <p>{group.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <section className="section page-wrap timeline-section" id="timeline">
      <SectionHeading index="04" eyebrow="Chronology" title={<>Still becoming, <em>year by year.</em></>} />
      <div className="timeline-list">
        <div className="timeline-events">
          {timeline.map((item) => (
            <article className={`timeline-item accent-${item.accent}`} key={`${item.year}-${item.title}`}>
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-copy"><h3>{item.title}</h3><span>{item.place}</span><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
        <aside className="timeline-aside" aria-label="Academic and competitive programming highlights">
          <div className="achievement-board">
            <span className="competitive-heading">ACADEMIC SNAPSHOT</span>
            <div className="cgpa-highlight"><span>CURRENT CGPA</span><b>{profile.cgpa}</b></div>
            {achievements.map((achievement) => (
              <div className="competitive-row" key={achievement.label}>
                <span>{achievement.label}</span><b>{achievement.value}</b>
              </div>
            ))}
            <div className="dsa-highlight"><b>{profile.dsaCount}</b><span>problems solved<br />across online judges</span></div>
          </div>
          <div className="competitive-index">
            <span className="competitive-heading">COMPETITIVE PROGRAMMING</span>
            {competitiveProfiles.map((entry) => (
              <a className="competitive-row competitive-link" key={entry.platform} href={entry.href} target="_blank" rel="noreferrer">
                <span>{entry.platform}</span><b>{entry.standing}<ExternalLink size={11} /></b>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

function Notebook({ onDiscover, currentNote }) {
  return (
    <section className="section page-wrap notebook-section" id="notebook">
      <SectionHeading index="05" eyebrow="The notebook" title={<>Notes from <em>the desk.</em></>} note="Small observations from projects and learning. These are working notes, not published essays." />
      <div className="notebook-grid">
        {notebookNotes.map((note, index) => (
          <article className={`note-card note-card-${index + 1}`} key={note.title}>
            <div className="note-meta"><span>{note.label}</span><span>{note.topic}</span></div>
            <h3>{note.title}</h3>
            <p>{note.summary}</p>
            <span className="note-index">N° 0{index + 1}</span>
          </article>
        ))}
      </div>
      <div className="notebook-prompt" aria-live="polite">
        <span className="prompt-star">✳</span>
        <p>{currentNote ? <><span>FROM THE ARCHIVE:</span> {currentNote}</> : 'There’s always another question worth following.'}</p>
        <button type="button" className="text-link" onClick={onDiscover}>Find a note <ArrowRight size={14} /></button>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="page-wrap contact-inner">
        <p className="eyebrow"><span>06</span> The correspondence desk</p>
        <h2>Have a good<br /><em>problem?</em></h2>
        <div className="contact-bottom">
          <p>I’d love to hear about internship opportunities, thoughtful teams, or something interesting you’re building.</p>
          <div className="contact-links">
            {contacts.map((contact) => (
              <div className="contact-link-row" key={contact.key}>
                <span>{contact.label}</span>
                {contact.value ? (
                  <a href={contact.key === 'email' ? `mailto:${contact.value}` : contact.value} target={contact.key === 'email' ? undefined : '_blank'} rel="noreferrer">
                    {contact.key === 'email' ? contact.value : 'Open profile'} <ExternalLink size={13} />
                  </a>
                ) : <span className="unconfigured">{contact.display}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="contact-colophon"><span>G / ARCHIVE</span><span>MADE WITH CURIOSITY · 2026</span><a href="#top">Back to the beginning ↑</a></div>
      </div>
    </section>
  )
}

function ProjectDetail({ project, onClose }) {
  const shouldReduceMotion = useReducedMotion()
  const panelRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    panelRef.current?.querySelector('.detail-back')?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'Tab') {
        const focusable = panelRef.current?.querySelectorAll('a[href], button:not([disabled])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.classList.add('detail-open')
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('detail-open')
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  if (!project) return null

  return (
    <motion.div
      className="detail-overlay"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
    >
      <div className="detail-panel" ref={panelRef}>
        <div className="detail-topbar">
          <button type="button" className="detail-back" onClick={onClose}><ArrowLeft size={16} /> Back to archive</button>
          <span>FILE {project.number} / {projects.length.toString().padStart(2, '0')}</span>
          <button type="button" className="icon-button detail-close" onClick={onClose} aria-label="Close project details"><X size={18} /></button>
        </div>
        <div className={`detail-art detail-${project.visual}`}><ProjectArtwork variant={project.visual} /></div>
        <div className="detail-content">
          <p className="eyebrow"><span>{project.status}</span>{project.category}</p>
          <h2 id="detail-title">{project.name}</h2>
          <p className="detail-description">{project.description}</p>
          <div className="detail-columns">
            <div>
              <h3>My contribution</h3>
              <p>{project.role}</p>
              <h3>In the build</h3>
              <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              {project.future && <p className="future-note"><span>Possible next exploration</span>{project.future.replace('Possible next exploration: ', '')}</p>}
            </div>
            <div className="detail-aside">
              <h3>Technology notes</h3>
              <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <h3>Project links</h3>
              {project.github || project.demo ? (
                <div className="detail-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13} /></a>}
                </div>
              ) : <p className="unconfigured">Project links not provided yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('archive-theme') === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentNote, setCurrentNote] = useState('')
  const [showTop, setShowTop] = useState(false)
  const { projectId, openProject, closeProject } = useProjectRoute()
  const reducedMotion = useReducedMotion()
  const activeProject = projects.find((project) => project.id === projectId)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('archive-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
      setShowTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const discoverNote = () => {
    const options = notebookNotes.filter((note) => note.title !== currentNote)
    const note = options[Math.floor(Math.random() * options.length)]
    setCurrentNote(note.title)
    document.querySelector('#notebook')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="site-shell">
      <Header dark={dark} setDark={setDark} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero onDiscover={discoverNote} />
        <Archive onOpen={openProject} reducedMotion={reducedMotion} />
        <About />
        <Skills />
        <Timeline />
        <Notebook onDiscover={discoverNote} currentNote={currentNote} />
        <Contact />
      </main>
      <footer className="page-wrap footer">
        <span>AN OPEN ARCHIVE — UPDATED AS I GO.</span>
        <span>GARIMA PUROHIT <Asterisk size={13} /></span>
        <span>INDEPENDENTLY MADE</span>
      </footer>
      {activeProject && <ProjectDetail key={activeProject.id} project={activeProject} onClose={closeProject} />}
      <button
        type="button"
        className={`back-to-top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      ><ArrowUp size={16} /></button>
      <span className="sr-only" aria-live="polite">{projectId ? `Project details opened: ${activeProject?.name ?? 'not found'}` : ''}</span>
    </div>
  )
}

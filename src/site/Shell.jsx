import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { copy, profile } from '../content/portfolio'
import { ScrollEffects, ScrollTop } from './Effects'

export default function Shell({ lang, setLang, children }) {
  const [open, setOpen] = useState(false)
  const c = copy[lang]
  const nav = [['/', c.nav.home], ['/research/spme-moi-ms', c.nav.research], ['/experience', c.nav.experience], ['/patent-research', c.nav.patents], ['/about', c.nav.about]]
  return <>
    <ScrollTop/><ScrollEffects/>
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Furkan Karaman home"><span className="brand-mark">FK</span><span><strong>Furkan Karaman</strong><small>Analytical Chemistry</small></span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {nav.map(([url,label]) => <NavLink key={url} to={url} end={url === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <button className="language" onClick={() => setLang(lang === 'en' ? 'tr' : 'en')} aria-label={lang === 'en' ? 'Türkçeye geç' : 'Switch to English'}><span className={lang === 'en' ? 'active' : ''}>EN</span><i>/</i><span className={lang === 'tr' ? 'active' : ''}>TR</span></button>
      </nav>
    </header>
    <main id="main-content">{children}</main>
    <footer><div><span className="brand-mark small">FK</span><p>{c.footer}</p></div><div className="footer-links"><a href={'mailto:' + profile.email}>Email</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
  </>
}

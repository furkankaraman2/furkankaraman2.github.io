import { Link } from 'react-router-dom'
import { ArrowRight, Atom, Beaker, BookOpen, Check, Microscope, ShieldCheck } from 'lucide-react'
import { copy, experiences, profile, researchMetrics } from '../content/portfolio'
import { ContactStrip, Eyebrow, LineArt, SectionHead } from '../site/components'
import { t } from '../site/utils'

export default function Home({ lang }) {
  const c=copy[lang]
  return <>
    <section className="hero">
      <div className="hero-grid"/>
      <div className="hero-copy" data-reveal>
        <Eyebrow>{c.hero.eyebrow}</Eyebrow><h1>{c.hero.title}</h1><p className="hero-intro">{c.hero.intro}</p>
        <div className="actions"><Link className="button primary" to="/research/spme-moi-ms">{c.hero.primary}<ArrowRight/></Link><Link className="button ghost" to="/experience">{c.hero.secondary}</Link></div>
        <p className="availability"><span/>{c.hero.availability}</p>
      </div>
      <div className="portrait-wrap" data-reveal><LineArt variant="spme"/><div className="portrait-card">{profile.showProfilePhoto && <img src={profile.photo} alt="Furkan Karaman"/>}<div className="portrait-caption"><small>FURKAN KARAMAN</small><strong>{lang==='en'?'Chemistry Graduate':'Kimya Mezunu'}</strong><span>{profile.location}</span></div></div></div>
      <div className="scroll-cue"><span/>{lang==='en'?'SCROLL TO EXPLORE':'KEŞFETMEK İÇİN KAYDIR'}</div>
    </section>

    <section className="home-research section-pad">
      <SectionHead eyebrow={c.labels.featured} title={c.home.researchTitle} body={c.home.researchBody}/>
      <div className="research-feature" data-reveal>
        <div className="feature-media" data-parallax><img src="/images/research/spme/fiber-interface.webp" alt={lang==='en'?'SPME fiber photographed during the project':'Proje sırasında fotoğraflanan SPME fiber'}/><span>SPME · MOI–MS</span></div>
        <div className="feature-content"><span className="number">01</span><h3>{c.research.title}</h3><p>{c.research.contribution}</p><div className="metric-strip">{researchMetrics.map(m=><div key={m.value}><strong>{m.value}</strong><span>{t(m.label,lang)}</span></div>)}</div><Link className="text-link" to="/research/spme-moi-ms">{c.labels.readStory}<ArrowRight/></Link></div>
      </div>
    </section>

    <section className="experience-teaser section-pad">
      <SectionHead eyebrow={c.labels.selected} title={c.home.expTitle} body={c.home.expBody}/>
      <div className="experience-grid">{experiences.filter(e=>e.visible).sort((a,b)=>a.order-b.order).map((e,i)=><Link data-reveal className={'experience-card ' + e.type} to={e.route || '/experience/' + e.slug} key={e.slug}><span className="card-num">0{i+1}</span><div className="icon-ring">{e.type==='research'?<Atom/>:e.type==='biological'?<Microscope/>:e.type==='geochemical'?<Beaker/>:<BookOpen/>}</div><small>{t(e.date,lang)}</small><h3>{t(e.title,lang)}</h3><h4>{t(e.institution,lang)}</h4><p>{t(e.summary,lang)}</p><span className="card-arrow"><ArrowRight/></span></Link>)}</div>
    </section>

    <section className="integrity section-pad" data-reveal><ShieldCheck/><div><Eyebrow>{c.labels.evidence}</Eyebrow><h2>{c.home.principlesTitle}</h2><p>{c.home.principlesBody}</p></div><div className="integrity-list"><span><Check/>{lang==='en'?'Report-grounded technical claims':'Rapor temelli teknik iddialar'}</span><span><Check/>{lang==='en'?'Original figures used selectively':'Orijinal görseller seçici kullanılır'}</span><span><Check/>{lang==='en'?'Raw reports remain unpublished':'Ham raporlar yayımlanmaz'}</span></div></section>
    <ContactStrip lang={lang}/>
  </>
}

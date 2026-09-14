import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ArrowRight, Atom, Beaker, BookOpen, Check, ChevronRight, Download, ExternalLink, GitBranch, Mail, Menu, Microscope, Phone, ShieldCheck, X } from 'lucide-react'
import { copy, education, experiences, interests, phases, profile, reports, researchMetrics, writingTopics } from './content/portfolio'

const t = (value, lang) => typeof value === 'string' ? value : value[lang]

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Shell({ lang, setLang, children }) {
  const [open, setOpen] = useState(false)
  const c = copy[lang]
  const nav = [['/', c.nav.home], ['/research/spme-moi-ms', c.nav.research], ['/experience', c.nav.experience], ['/scientific-writing', c.nav.writing], ['/reports', c.nav.reports], ['/about', c.nav.about]]
  return <>
    <ScrollTop />
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Furkan Karaman home"><span className="brand-mark">FK</span><span><strong>Furkan Karaman</strong><small>Analytical Chemistry</small></span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {nav.map(([url, label]) => <NavLink key={url} to={url} end={url === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <button className="language" onClick={() => setLang(lang === 'en' ? 'tr' : 'en')} aria-label={lang === 'en' ? 'Türkçeye geç' : 'Switch to English'}><span className={lang === 'en' ? 'active' : ''}>EN</span><i>/</i><span className={lang === 'tr' ? 'active' : ''}>TR</span></button>
      </nav>
    </header>
    <main id="main-content">{children}</main>
    <footer><div><span className="brand-mark small">FK</span><p>{c.footer}</p></div><div className="footer-links"><a href={`mailto:${profile.email}`}>Email</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div></footer>
  </>
}

function Eyebrow({ children }) { return <p className="eyebrow"><span />{children}</p> }
function SectionHead({ eyebrow, title, body }) { return <div className="section-head">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{body && <p>{body}</p>}</div> }
function MethodTags({ items }) { return <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div> }
function Workflow({ steps }) { return <div className="workflow">{steps.map((step, i) => <div className="workflow-step" key={step}><span>{String(i + 1).padStart(2, '0')}</span><strong>{step}</strong>{i < steps.length - 1 && <ChevronRight aria-hidden="true" />}</div>)}</div> }

function Home({ lang }) {
  const c = copy[lang]
  return <>
    <section className="hero">
      <div className="hero-noise" />
      <div className="hero-copy">
        <Eyebrow>{c.hero.eyebrow}</Eyebrow>
        <h1>{c.hero.title}</h1>
        <p className="hero-intro">{c.hero.intro}</p>
        <div className="actions"><Link className="button primary" to="/research/spme-moi-ms">{c.hero.primary}<ArrowRight /></Link><Link className="button ghost" to="/experience">{c.hero.secondary}</Link></div>
        <p className="availability"><span />{c.hero.availability}</p>
      </div>
      <div className="portrait-wrap">
        <div className="orbit one"/><div className="orbit two"/>
        <div className="portrait-card">{profile.showProfilePhoto && <img src={profile.photo} alt="Furkan Karaman" />}<div className="portrait-caption"><small>FURKAN KARAMAN</small><strong>{lang === 'en' ? 'Chemistry Graduate' : 'Kimya Lisans Mezunu'}</strong><span>{profile.location}</span></div></div>
        <div className="molecule molecule-a"><i/><i/><i/><i/></div>
      </div>
      <div className="hero-index">01 <span>/</span> 04</div>
    </section>

    <section className="home-research section-pad">
      <SectionHead eyebrow={c.labels.featured} title={c.home.researchTitle} body={c.home.researchBody}/>
      <div className="research-feature">
        <div className="fiber-visual" aria-hidden="true"><div className="fiber"><span/><span/><span/><span/><span/></div><div className="signal signal-one"/><div className="signal signal-two"/><p>SPME</p><b>MOI—MS</b></div>
        <div className="feature-content"><span className="number">01</span><h3>{c.research.title}</h3><p>{c.research.contribution}</p><div className="metric-strip">{researchMetrics.map(m => <div key={m.value}><strong>{m.value}</strong><span>{t(m.label, lang)}</span></div>)}</div><Link className="text-link" to="/research/spme-moi-ms">{c.hero.primary}<ArrowRight /></Link></div>
      </div>
    </section>

    <section className="experience-teaser section-pad">
      <SectionHead eyebrow={c.labels.selected} title={c.home.expTitle} body={c.home.expBody}/>
      <div className="experience-grid">{experiences.filter(e => e.visible).map((e, i) => <Link className={`experience-card ${e.type}`} to={`/experience/${e.slug}`} key={e.slug}><span className="card-num">0{i+1}</span><div className="icon-ring">{e.type === 'biological' ? <Atom/> : e.type === 'geochemical' ? <Beaker/> : <Microscope/>}</div><small>{t(e.date, lang)}</small><h3>{t(e.title, lang)}</h3><h4>{t(e.institution, lang)}</h4><p>{t(e.summary, lang)}</p><span className="card-arrow"><ArrowRight/></span></Link>)}</div>
    </section>

    <section className="integrity section-pad"><ShieldCheck/><div><Eyebrow>{c.labels.evidence}</Eyebrow><h2>{c.home.principlesTitle}</h2><p>{c.home.principlesBody}</p></div><div className="integrity-list"><span><Check/>Documents reviewed</span><span><Check/>Contribution levels stated</span><span><Check/>Clinical claims qualified</span></div></section>
    <ContactStrip lang={lang}/>
  </>
}

function Research({ lang }) {
  const c = copy[lang]
  return <>
    <PageHero eyebrow={c.research.eyebrow} title={c.research.title} intro={c.research.subtitle} icon={<Atom/>}/>
    <section className="metrics section-pad">{researchMetrics.map(m => <div key={m.value}><strong>{m.value}</strong><span>{t(m.label, lang)}</span></div>)}</section>
    <section className="two-col section-pad"><div><Eyebrow>01 · CONTEXT</Eyebrow><h2>{c.research.problemTitle}</h2></div><div><p className="large-copy">{c.research.problem}</p><p className="caution"><ShieldCheck/>{c.research.caution}</p></div></section>
    <section className="approach section-pad"><SectionHead eyebrow="02 · METHOD" title={c.research.approachTitle}/><Workflow steps={['Biological sample', 'SPME extraction', 'Acidified desorption', 'MOI interface', 'Mass spectrometry', 'Histidine response']}/><div className="contribution"><div className="contribution-icon"><Microscope/></div><div><h3>{c.labels.role}</h3><p>{c.research.contribution}</p></div></div></section>
    <section className="phase-section section-pad"><SectionHead eyebrow="03 · EVALUATION" title={c.research.phaseTitle}/><div className="phase-layout"><div className="phase-bars">{phases.map(p => <div className={p.selected ? 'phase selected' : 'phase'} key={p.name}><div className="bar-meta"><strong>{p.name}</strong><span>{p.rsd}% RSD</span></div><div className="bar-track"><i style={{width: `${p.amount/7*100}%`}}/></div><small>{p.amount.toFixed(2)} ng · recovery {p.recovery.toFixed(2)}</small></div>)}</div><div className="selected-phase"><span>SELECTED PHASE</span><h3>HLB-SAX</h3><p>{lang === 'en' ? 'Lowest variability among the three evaluated coatings, supporting the most precise and reproducible response.' : 'Değerlendirilen üç kaplama arasında en düşük değişkenlik; en hassas ve tekrarlanabilir yanıtı destekledi.'}</p></div></div></section>
    <section className="optimization section-pad"><SectionHead eyebrow="04 · RESULTS" title={c.research.optimizationTitle}/><div className="result-grid"><ResultCard number="01" title={lang === 'en' ? 'Extraction' : 'Ekstraksiyon'} value="5 min" text={lang === 'en' ? 'Highest response among 2, 5, 15, 30 and 60 minutes.' : '2, 5, 15, 30 ve 60 dakika arasında en yüksek yanıt.'}/><ResultCard number="02" title={lang === 'en' ? 'Desorption' : 'Desorpsiyon'} value="1 min" text={lang === 'en' ? 'Highest response among 1, 5, 10, 20 and 30 minutes.' : '1, 5, 10, 20 ve 30 dakika arasında en yüksek yanıt.'}/><ResultCard number="03" title={lang === 'en' ? 'Solvent' : 'Çözücü'} value="40:40:20" text="ACN / MeOH / H₂O · 0.1% formic acid"/></div></section>
    <section className="calibration section-pad"><div><Eyebrow>05 · QUANTITATION</Eyebrow><h2>{c.research.calibrationTitle}</h2><p>{lang === 'en' ? 'Six-point curve: 25, 50, 100, 250, 500 and 1000 ppb.' : 'Altı noktalı eğri: 25, 50, 100, 250, 500 ve 1000 ppb.'}</p><div className="equation">y = 1505.6x − 36145 <span>R² = 0.987</span></div></div><CalibrationChart/></section>
    <section className="report-panel section-pad"><BookOpen/><div><span>{c.labels.original}</span><h2>{c.labels.protected}</h2><p>{c.research.reportText}</p></div><span className="status">PREVIEW</span></section>
  </>
}

function CalibrationChart() { const pts=[[24,172],[48,164],[72,154],[113,140],[208,103],[388,30]]; return <svg className="chart" viewBox="0 0 430 220" role="img" aria-label="Six point L-histidine calibration chart"><path d="M24 180H410M24 180V18"/><path className="trend" d="M24 174L394 28"/>{pts.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="6"/>)}<text x="180" y="212">Concentration (ppb)</text><text x="31" y="25">Peak area</text></svg> }
function ResultCard({number,title,value,text}) { return <article className="result-card"><span>{number}</span><h3>{title}</h3><strong>{value}</strong><p>{text}</p></article> }

function ExperienceIndex({lang}) { const c=copy[lang]; return <><PageHero eyebrow="EXPERIENCE · ANALYTICAL WORKFLOWS" title={c.experience.title} intro={c.experience.intro} icon={<Beaker/>}/><section className="experience-list section-pad">{experiences.filter(e=>e.visible).sort((a,b)=>a.order-b.order).map((e,i)=><Link to={`/experience/${e.slug}`} className="experience-row" key={e.slug}><span>0{i+1}</span><div><small>{t(e.date,lang)}</small><h2>{t(e.title,lang)}</h2><p>{t(e.institution,lang)}</p></div><div className="row-tags">{e.methods.slice(0,3).map(m=><i key={m}>{m}</i>)}</div><ArrowRight/></Link>)}</section></> }

function ExperienceDetail({lang}) {
  const {slug}=useParams(); const e=experiences.find(x=>x.slug===slug); const c=copy[lang]
  if(!e) return <NotFound lang={lang}/>
  return <><PageHero eyebrow={`${t(e.date,lang)} · ${e.type.toUpperCase()}`} title={t(e.title,lang)} intro={t(e.institution,lang)} icon={e.type==='biological'?<Atom/>:e.type==='geochemical'?<Beaker/>:<Microscope/>}/><section className="two-col section-pad"><div><Eyebrow>01 · OVERVIEW</Eyebrow><h2>{t(e.title,lang)}</h2></div><div><p className="large-copy">{t(e.summary,lang)}</p><div className="contribution compact"><div className="contribution-icon"><Check/></div><div><h3>{c.experience.contribution}</h3><p>{t(e.role,lang)}</p></div></div></div></section><section className="approach section-pad"><SectionHead eyebrow="02 · PROCESS" title={c.labels.workflow}/><Workflow steps={e.workflow}/></section><section className="methods section-pad"><SectionHead eyebrow="03 · TECHNICAL SCOPE" title={c.labels.methods}/><MethodTags items={e.methods}/>{slug==='doping-control'&&<p className="sensitivity"><ShieldCheck/>{lang==='en'?'Institution-specific procedures, sample information and raw instrument screens are intentionally not published.':'Kuruma özgü prosedürler, numune bilgileri ve ham cihaz ekranları bilinçli olarak yayımlanmamaktadır.'}</p>}{slug==='mta'&&<p className="sensitivity"><ShieldCheck/>{lang==='en'?'XRD and MLA are classified separately as observation visits, not hands-on operation.':'XRD ve MLA, uygulamalı cihaz kullanımı değil gözlem ziyareti olarak ayrı sınıflandırılmıştır.'}</p>}</section></>
}

function Writing({lang}) { const c=copy[lang]; return <><PageHero eyebrow={c.writing.eyebrow} title={c.writing.title} intro={c.writing.intro} icon={<BookOpen/>}/><section className="writing-flow section-pad"><Workflow steps={['University research','Technology transfer office','Intellectual property','Patent & funding','Industry partnership','Commercialization']}/></section><section className="two-col section-pad"><div><Eyebrow>01 · SCOPE</Eyebrow><h2>{c.writing.scopeTitle}</h2><MethodTags items={writingTopics}/></div><div><Eyebrow>02 · CASE ANALYSIS</Eyebrow><h2>{c.writing.caseTitle}</h2><p className="large-copy">{c.writing.caseBody}</p><p className="caution"><ShieldCheck/>{c.writing.integrity}</p></div></section></> }

function Reports({lang}) { return <><PageHero eyebrow="CONTROLLED DOCUMENT ACCESS" title={lang==='en'?'Reports & selected evidence':'Raporlar ve seçilmiş kanıtlar'} intro={lang==='en'?'Original reports remain unchanged. Public access is set per document according to evidential value, institutional sensitivity and third-party content.':'Orijinal raporlar değiştirilmeden korunur. Kamusal erişim; kanıt değeri, kurumsal hassasiyet ve üçüncü taraf içeriklere göre belge bazında belirlenir.'} icon={<BookOpen/>}/><section className="report-list section-pad">{reports.filter(r=>r.visible).sort((a,b)=>a.order-b.order).map((r,i)=><article className="report-card" key={r.id}><div className="report-number">0{i+1}</div><div><small>{t(r.type,lang)}</small><h2>{t(r.title,lang)}</h2><p>{t(r.summary,lang)}</p>{r.pages.length>0&&<MethodTags items={r.pages}/>}</div><div className={`access ${r.access}`}>{r.access==='preview'?(lang==='en'?'SELECTED PREVIEW':'SEÇİLMİŞ ÖNİZLEME'):(lang==='en'?'FULL REPORT PRIVATE':'TAM RAPOR GİZLİ')}</div>{r.access==='preview'&&<div className="watermark">FURKAN KARAMAN · PROFESSIONAL PORTFOLIO</div>}</article>)}</section></> }

function About({lang}) { const c=copy[lang]; return <><section className="about-hero section-pad"><div className="about-photo"><img src={profile.photo} alt="Furkan Karaman"/></div><div><Eyebrow>ABOUT · FURKAN KARAMAN</Eyebrow><h1>{c.about.title}</h1><p>{c.about.intro}</p><div className="actions"><a className="button primary" href={profile.cv} download>{c.labels.download}<Download/></a><a className="button outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ExternalLink/></a></div></div></section><section className="education section-pad"><SectionHead eyebrow="01" title={c.labels.education}/><div>{education.map(x=><article key={x.school}><span>{t(x.date,lang)}</span><h3>{t(x.degree,lang)}</h3><p>{x.school}</p></article>)}</div></section><section className="beyond section-pad"><SectionHead eyebrow="02" title={c.labels.beyond}/><div className="interest-grid">{interests.map((x,i)=><article key={x.en}><span>0{i+1}</span><p>{t(x,lang)}</p></article>)}</div></section><ContactStrip lang={lang}/></> }

function ContactStrip({lang}) { const c=copy[lang]; return <section className="contact-strip"><div><Eyebrow>{c.labels.contact}</Eyebrow><h2>{c.about.contactBody}</h2><p>{c.about.privacy}</p></div><div className="contact-actions"><a href={`mailto:${profile.email}`}><Mail/><span>{profile.email}</span></a><a href={`tel:${profile.phone.replace(/\s/g,'')}`}><Phone/><span>{profile.phone}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink/><span>LinkedIn</span></a><a href={profile.github} target="_blank" rel="noreferrer"><GitBranch/><span>GitHub</span></a></div></section> }
function PageHero({eyebrow,title,intro,icon}) { return <section className="page-hero"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p></div><div className="page-icon">{icon}<span/><span/></div></section> }
function NotFound({lang}) { return <section className="not-found"><h1>404</h1><p>{lang==='en'?'This page could not be found.':'Bu sayfa bulunamadı.'}</p><Link className="button primary" to="/">Home</Link></section> }

export default function App() {
  const [lang,setLang]=useState(()=>localStorage.getItem('portfolio-language')||'en')
  useEffect(()=>{localStorage.setItem('portfolio-language',lang);document.documentElement.lang=lang},[lang])
  const shell=useMemo(()=>({lang,setLang}),[lang])
  return <Shell {...shell}><Routes><Route path="/" element={<Home lang={lang}/>}/><Route path="/research" element={<Research lang={lang}/>}/><Route path="/research/spme-moi-ms" element={<Research lang={lang}/>}/><Route path="/experience" element={<ExperienceIndex lang={lang}/>}/><Route path="/experience/:slug" element={<ExperienceDetail lang={lang}/>}/><Route path="/scientific-writing" element={<Writing lang={lang}/>}/><Route path="/reports" element={<Reports lang={lang}/>}/><Route path="/about" element={<About lang={lang}/>}/><Route path="*" element={<NotFound lang={lang}/>}/></Routes></Shell>
}

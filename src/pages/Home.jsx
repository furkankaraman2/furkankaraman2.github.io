import { Link } from 'react-router-dom'
import { ArrowRight, Atom, Beaker, BookOpen, Check, Microscope, ShieldCheck } from 'lucide-react'
import { copy, experiences, profile, researchMetrics, researchStory } from '../content/portfolio'
import { ContactStrip, Eyebrow, LineArt, SectionHead } from '../site/components'
import { t } from '../site/utils'

export default function Home({ lang }) {
  const c=copy[lang]
  const doping=experiences.find(x=>x.slug==='doping-control')
  const mta=experiences.find(x=>x.slug==='mta')
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
        <div className="feature-media premium-illustration" data-parallax><img loading="lazy" decoding="async" width="1200" height="860" src="/images/illustrations/spme-editorial.svg" alt={lang==='en'?'Editorial scientific illustration of SPME extraction, desorption and MOI-MS detection':'SPME ekstraksiyonu, desorpsiyon ve MOI-MS tespitini anlatan bilimsel illüstrasyon'}/><span>SPME · MOI–MS</span></div>
        <div className="feature-content"><span className="number">01</span><h3>{c.research.title}</h3><p>{c.research.contribution}</p><div className="metric-strip">{researchMetrics.map(m=><div key={m.value}><strong>{m.value}</strong><span>{t(m.label,lang)}</span></div>)}</div><Link className="text-link" to="/research/spme-moi-ms">{c.labels.readStory}<ArrowRight/></Link></div>
      </div>
    </section>

    <section className="home-spme-journey section-pad">
      <SectionHead eyebrow={lang==='en'?'SPME · TEN-PART STORY':'SPME · 10 BÖLÜMLÜ HİKÂYE'} title={lang==='en'?'The research page is structured as a scientific narrative, not a CV repeat.':'Araştırma sayfası CV tekrarı değil, bilimsel bir hikâye olarak kurgulandı.'} body={lang==='en'?'A visitor can move from the clinical motivation to coating chemistry, calibration, phase selection, desorption and the final compact workflow.':'Ziyaretçi klinik motivasyondan kaplama kimyasına, kalibrasyona, faz seçimine, desorpsiyona ve final kompakt iş akışına kadar süreci adım adım takip edebilir.'}/>
      <div className="journey-grid">
        {[0,2,4,6,9].map((idx)=><Link to={'/research/spme-moi-ms#story-'+researchStory[idx].id} className="journey-card" data-reveal key={researchStory[idx].id}>
          <span>{String(idx+1).padStart(2,'0')}</span>
          <strong>{t(researchStory[idx].short,lang)}</strong>
          <p>{t(researchStory[idx].title,lang)}</p>
          <ArrowRight/>
        </Link>)}
      </div>
    </section>

    <section className="experience-teaser section-pad">
      <SectionHead eyebrow={c.labels.selected} title={c.home.expTitle} body={c.home.expBody}/>
      <div className="experience-grid">{experiences.filter(e=>e.visible).sort((a,b)=>a.order-b.order).map((e,i)=><Link data-reveal className={'experience-card ' + e.type} to={e.route || '/experience/' + e.slug} key={e.slug}><span className="card-num">0{i+1}</span><div className="icon-ring">{e.type==='research'?<Atom/>:e.type==='biological'?<Microscope/>:e.type==='geochemical'?<Beaker/>:<BookOpen/>}</div><small>{t(e.date,lang)}</small><h3>{t(e.title,lang)}</h3><h4>{t(e.institution,lang)}</h4><p>{t(e.summary,lang)}</p><span className="card-arrow"><ArrowRight/></span></Link>)}</div>
    </section>

    <section className="home-doping-feature section-pad">
      <div className="home-doping-copy" data-reveal><Eyebrow>{lang==='en'?'ANTI-DOPING LABORATORY EXPERIENCE':'DOPİNG KONTROL LABORATUVAR DENEYİMİ'}</Eyebrow><h2>{lang==='en'?'One placement, multiple analytical languages':'Tek bir staj, birden fazla analitik yaklaşım'}</h2><p>{t(doping.summary,lang)}</p><div className="doping-mini-flow">{[0,3,7,9].map(idx=><Link to={'/experience/doping-control#story-'+doping.sections[idx].id} key={doping.sections[idx].id}><span>{String(idx+1).padStart(2,'0')}</span><strong>{t(doping.sections[idx].short,lang)}</strong></Link>)}</div><Link className="button outline" to="/experience/doping-control">{lang==='en'?'Explore the ten-part case study':'10 bölümlü vaka çalışmasını incele'}<ArrowRight/></Link></div>
      <div className="home-doping-media premium-illustration" data-reveal data-parallax><img loading="lazy" decoding="async" width="1200" height="860" src="/images/illustrations/doping-editorial.svg" alt={lang==='en'?'Editorial scientific illustration of anti-doping analytical workflows':'Doping kontrol analitik iş akışlarını anlatan bilimsel illüstrasyon'}/><div className="doping-media-overlay"><LineArt variant="triplequad"/><span>LC-MS/MS · GC-MS/MS · LC-HRMS · GC-C-IRMS</span></div></div>
    </section>

    <section className="home-mta-feature section-pad">
      <div className="home-mta-media premium-illustration" data-reveal data-parallax><img loading="lazy" decoding="async" width="1200" height="860" src="/images/illustrations/mta-editorial.svg" alt={lang==='en'?'Editorial scientific illustration of geochemical sample preparation and elemental analysis':'Jeokimyasal numune hazırlama ve elementel analizi anlatan bilimsel illüstrasyon'}/><div className="mta-media-overlay"><LineArt variant="plasma"/><span>XRF · ICP-OES · ICP-MS · GRAVIMETRY · TGA</span></div></div>
      <div className="home-mta-copy" data-reveal><Eyebrow>{lang==='en'?'GEOCHEMICAL & MATERIAL ANALYSIS':'JEOKİMYASAL & MALZEME ANALİZİ'}</Eyebrow><h2>{lang==='en'?'From coded geological samples to elemental and thermal characterization':'Kodlanmış jeolojik numuneden elementel ve termal karakterizasyona'}</h2><p>{t(mta.summary,lang)}</p><div className="mta-mini-flow">{[1,3,5,9].map(idx=><Link to={'/experience/mta#story-'+mta.sections[idx].id} key={mta.sections[idx].id}><span>{String(idx+1).padStart(2,'0')}</span><strong>{t(mta.sections[idx].short,lang)}</strong></Link>)}</div><Link className="button outline" to="/experience/mta">{lang==='en'?'Explore the ten-part MTA case study':'10 bölümlü MTA vaka çalışmasını incele'}<ArrowRight/></Link></div>
    </section>

    <section className="integrity section-pad" data-reveal><ShieldCheck/><div><Eyebrow>{c.labels.evidence}</Eyebrow><h2>{c.home.principlesTitle}</h2><p>{c.home.principlesBody}</p></div><div className="integrity-list"><span><Check/>{lang==='en'?'Report-grounded technical claims':'Rapor temelli teknik iddialar'}</span><span><Check/>{lang==='en'?'Original figures used selectively':'Orijinal görseller seçici kullanılır'}</span><span><Check/>{lang==='en'?'Raw reports remain unpublished':'Ham raporlar yayımlanmaz'}</span></div></section>
    <ContactStrip lang={lang}/>
  </>
}

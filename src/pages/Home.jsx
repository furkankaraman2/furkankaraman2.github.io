import { Link } from 'react-router-dom'
import { ArrowRight, Atom, Beaker, BookOpen, Check, Microscope, ShieldCheck } from 'lucide-react'
import { copy, experiences, patentSections, profile } from '../content/portfolio'
import { realPhotos } from '../content/imageCredits'
import { ContactStrip, Eyebrow, LineArt, PhotoCredit, SectionHead } from '../site/components'
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

    <section className="experience-teaser section-pad">
      <SectionHead eyebrow={c.labels.selected} title={c.home.expTitle} body={c.home.expBody}/>
      <div className="experience-grid">{experiences.filter(e=>e.visible).sort((a,b)=>a.order-b.order).map((e,i)=><Link data-reveal className={'experience-card ' + e.type} to={e.route || '/experience/' + e.slug} key={e.slug}><span className="card-num">0{i+1}</span><div className="icon-ring">{e.type==='research'?<Atom/>:e.type==='biological'?<Microscope/>:e.type==='geochemical'?<Beaker/>:<BookOpen/>}</div><small>{t(e.date,lang)}</small><h3>{t(e.title,lang)}</h3><h4>{t(e.institution,lang)}</h4><p>{t(e.summary,lang)}</p><span className="card-arrow"><ArrowRight/></span></Link>)}</div>
    </section>

    <section className="home-doping-feature section-pad">
      <div className="home-doping-copy" data-reveal><Eyebrow>{lang==='en'?'ANTI-DOPING LABORATORY EXPERIENCE':'DOPİNG KONTROL LABORATUVAR DENEYİMİ'}</Eyebrow><h2>{lang==='en'?'One placement, multiple analytical languages':'Tek bir staj, birden fazla analitik yaklaşım'}</h2><p>{t(doping.summary,lang)}</p><div className="doping-mini-flow">{[0,3,7,9].map(idx=><Link to={'/experience/doping-control#story-'+doping.sections[idx].id} key={doping.sections[idx].id}><span>{String(idx+1).padStart(2,'0')}</span><strong>{t(doping.sections[idx].short,lang)}</strong></Link>)}</div><Link className="button outline" to="/experience/doping-control">{lang==='en'?'Explore the ten-part case study':'10 bölümlü vaka çalışmasını incele'}<ArrowRight/></Link></div>
      <div className="home-doping-media real-photo-feature" data-reveal data-parallax><img loading="lazy" decoding="async" width="1200" height="860" src={realPhotos.lcms} alt={lang==='en'?'Representative real LC–MS laboratory instrumentation':'Temsilî gerçek LC–MS laboratuvar cihazı'}/><div className="doping-media-overlay"><span>LC-MS/MS · GC-MS/MS · LC-HRMS · GC-C-IRMS</span></div><PhotoCredit src={realPhotos.lcms}/></div>
    </section>

    <section className="home-mta-feature section-pad">
      <div className="home-mta-media real-photo-feature" data-reveal data-parallax><img loading="lazy" decoding="async" width="1200" height="860" src={realPhotos.icpmsPrep} alt={lang==='en'?'Representative real laboratory sample preparation for ICP-MS analysis':'ICP-MS analizi için temsilî gerçek laboratuvar numune hazırlama'}/><div className="mta-media-overlay"><span>XRF · ICP-OES · ICP-MS · GRAVIMETRY · TGA</span></div><PhotoCredit src={realPhotos.icpmsPrep}/></div>
      <div className="home-mta-copy" data-reveal><Eyebrow>{lang==='en'?'GEOCHEMICAL & MATERIAL ANALYSIS':'JEOKİMYASAL & MALZEME ANALİZİ'}</Eyebrow><h2>{lang==='en'?'From coded geological samples to elemental and thermal characterization':'Kodlanmış jeolojik numuneden elementel ve termal karakterizasyona'}</h2><p>{t(mta.summary,lang)}</p><div className="mta-mini-flow">{[1,3,5,9].map(idx=><Link to={'/experience/mta#story-'+mta.sections[idx].id} key={mta.sections[idx].id}><span>{String(idx+1).padStart(2,'0')}</span><strong>{t(mta.sections[idx].short,lang)}</strong></Link>)}</div><Link className="button outline" to="/experience/mta">{lang==='en'?'Explore the ten-part MTA case study':'10 bölümlü MTA vaka çalışmasını incele'}<ArrowRight/></Link></div>
    </section>

    <section className="home-patent-feature section-pad">
      <div className="home-patent-copy" data-reveal><Eyebrow>{lang==='en'?'PATENT & TECHNOLOGY-TRANSFER RESEARCH':'PATENT & TEKNOLOJİ TRANSFERİ ARAŞTIRMASI'}</Eyebrow><h2>{lang==='en'?'A scientific result is only the beginning of the commercialization story':'Bilimsel sonuç, ticarileştirme hikâyesinin yalnızca başlangıcı'}</h2><p>{lang==='en'?'My elective-course term paper examines how academic research can move through intellectual-property protection, TTO evaluation, entrepreneurship, financing and pharmaceutical partnership. The Dermis Pharma / Dermalix case provides the practical thread for that journey.':'Seçmeli ders dönem çalışmam, akademik araştırmanın fikri mülkiyet koruması, TTO değerlendirmesi, girişimcilik, finansman ve ilaç sektörü ortaklığı üzerinden nasıl ilerleyebileceğini inceliyor. Dermis Pharma / Dermalix vakası bu yolculuğun somut omurgasını oluşturuyor.'}</p><div className="patent-mini-flow">{[0,2,6,9].map(idx=><Link to={'/patent-research#story-'+patentSections[idx].id} key={patentSections[idx].id}><span>{String(idx+1).padStart(2,'0')}</span><strong>{t(patentSections[idx].short,lang)}</strong></Link>)}</div><Link className="button outline" to="/patent-research">{lang==='en'?'Explore the ten-part technology-transfer case study':'10 bölümlü teknoloji transferi çalışmasını incele'}<ArrowRight/></Link></div>
      <div className="home-patent-media real-photo-feature" data-reveal data-parallax><img loading="lazy" decoding="async" width="1200" height="860" src={realPhotos.labNotebook} alt={lang==='en'?'Representative real research notebook and scientific documentation':'Temsilî gerçek araştırma defteri ve bilimsel dokümantasyon'}/><div className="patent-media-overlay"><span>IP · TTO · SPIN-OFF · FUNDING · PHARMA PARTNERSHIP</span></div><PhotoCredit src={realPhotos.labNotebook}/></div>
    </section>

    <section className="integrity section-pad" data-reveal><ShieldCheck/><div><Eyebrow>{c.labels.evidence}</Eyebrow><h2>{c.home.principlesTitle}</h2><p>{c.home.principlesBody}</p></div><div className="integrity-list"><span><Check/>{lang==='en'?'Report-grounded technical claims':'Rapor temelli teknik iddialar'}</span><span><Check/>{lang==='en'?'Original figures used selectively':'Orijinal görseller seçici kullanılır'}</span><span><Check/>{lang==='en'?'Raw reports remain unpublished':'Ham raporlar yayımlanmaz'}</span></div></section>
    <ContactStrip lang={lang}/>
  </>
}

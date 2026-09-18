import { ShieldCheck } from 'lucide-react'
import { copy, patentSections } from '../content/portfolio'
import { realPhotos } from '../content/imageCredits'
import { ContactStrip, Eyebrow, LineArt, PageHero, PhotoCredit, SectionHead, StorySection } from '../site/components'
import { t } from '../site/utils'

export default function PatentResearch({lang}) {
  const c=copy[lang]
  return <>
    <PageHero eyebrow={c.patents.eyebrow} title={c.patents.title} intro={c.patents.intro} art="patent" image={realPhotos.labNotebook} imageAlt={lang==='en'?'Representative real research notebook and scientific documentation':'Temsilî gerçek araştırma defteri ve bilimsel dokümantasyon'}/>
    <section className="patent-map section-pad" data-reveal>
      <div><Eyebrow>{lang==='en'?'THE QUESTION':'ARAŞTIRMA SORUSU'}</Eyebrow><h2>{lang==='en'?'What has to happen between a laboratory result and a real healthcare product?':'Laboratuvar sonucu ile gerçek bir sağlık ürünü arasında nelerin gerçekleşmesi gerekir?'}</h2><p>{lang==='en'?'My term paper treats commercialization as a connected system: patent strategy, technology assessment, financing, entrepreneurship and industry partnership have to mature together. The Dermis Pharma / Dermalix case became a practical way to trace those decisions across time.':'Dönem çalışmam ticarileşmeyi bağlantılı bir sistem olarak ele alıyor: patent stratejisi, teknoloji değerlendirmesi, finansman, girişimcilik ve sektör ortaklığı birlikte olgunlaşmalı. Dermis Pharma / Dermalix vakası bu kararları zaman içinde izlemek için somut bir örnek sağladı.'}</p></div>
      <div className="patent-map-art real-photo-feature"><img loading="eager" decoding="async" width="1200" height="860" src={realPhotos.labNotebook} alt={lang==='en'?'Representative real research notebook and scientific documentation':'Temsilî gerçek araştırma defteri ve bilimsel dokümantasyon'}/><PhotoCredit src={realPhotos.labNotebook}/></div>
    </section>

    <section className="narrative-title patent-narrative-title section-pad">
      <SectionHead eyebrow={lang==='en'?'TEN-PART TECHNOLOGY-TRANSFER STORY':'10 BÖLÜMLÜ TEKNOLOJİ TRANSFERİ HİKÂYESİ'} title={lang==='en'?'Follow the path from academic research to patents, spin-off formation, pharma partnership and market entry':'Akademik araştırmadan patente, spin-off şirketleşmeye, ilaç sektörü ortaklığına ve pazara kadar süreci takip et'} body={lang==='en'?'The page is organized as a connected commercialization narrative rather than a list of patent terms.':'Sayfa patent terimleri listesi gibi değil, birbirine bağlı bir ticarileştirme hikâyesi olarak kurgulandı.'}/>
      <nav className="story-index patent-story-index" aria-label={lang==='en'?'Patent research case-study sections':'Patent araştırması vaka çalışması bölümleri'}>{patentSections.map((item,i)=><a href={'#story-'+item.id} key={item.id}><span>{String(i+1).padStart(2,'0')}</span>{t(item.short,lang)}</a>)}</nav>
    </section>

    <section className="patent-process-ribbon section-pad" data-reveal>
      {[
        {n:'01',en:'Research',tr:'Araştırma',art:'workflow'},
        {n:'02',en:'IP protection',tr:'IP koruması',art:'patent'},
        {n:'03',en:'TTO assessment',tr:'TTO değerlendirmesi',art:'tto'},
        {n:'04',en:'Spin-off / funding',tr:'Spin-off / fon',art:'spin'},
        {n:'05',en:'Pharma partner',tr:'İlaç ortağı',art:'industry'}
      ].map(x=><div key={x.n}><span>{x.n}</span><LineArt variant={x.art}/><strong>{lang==='en'?x.en:x.tr}</strong></div>)}
    </section>

    <div className="case-study-stack patent-stack">{patentSections.map((item,i)=><StorySection key={item.id} item={item} lang={lang} index={i} dark={i===3 || i===8}/>)}</div>

    <section className="integrity-note section-pad" data-reveal><ShieldCheck/><div><Eyebrow>{lang==='en'?'ACADEMIC INTEGRITY':'AKADEMİK AÇIKLIK'}</Eyebrow><h2>{lang==='en'?'A case-study analysis, not a personal patent claim':'Vaka analizi; kişisel patent iddiası değil'}</h2><p>{c.patents.integrity}</p></div></section>
    <ContactStrip lang={lang}/>
  </>
}

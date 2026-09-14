import { ShieldCheck } from 'lucide-react'
import { copy, patentSections } from '../content/portfolio'
import { ContactStrip, Eyebrow, LineArt, PageHero, StorySection } from '../site/components'

export default function PatentResearch({lang}) {
  const c=copy[lang]
  return <>
    <PageHero eyebrow={c.patents.eyebrow} title={c.patents.title} intro={c.patents.intro} art="patent"/>
    <section className="patent-map section-pad" data-reveal><div><Eyebrow>{lang==='en'?'THE QUESTION':'ARAŞTIRMA SORUSU'}</Eyebrow><h2>{lang==='en'?'What has to happen between a laboratory result and a real product?':'Laboratuvar sonucu ile gerçek ürün arasında nelerin gerçekleşmesi gerekir?'}</h2><p>{lang==='en'?'My term paper treats commercialization as a connected system: intellectual-property strategy, technology assessment, financing and industry partnership have to mature together. The Dermalix case became a practical way to trace those decisions across time.':'Dönem çalışmam ticarileşmeyi bağlantılı bir sistem olarak ele alıyor: fikri mülkiyet stratejisi, teknoloji değerlendirmesi, finansman ve sektör ortaklığı birlikte olgunlaşmalı. Dermalix vakası bu kararları zaman içinde izlemek için pratik bir örnek sağladı.'}</p></div><LineArt variant="tto"/></section>
    <div className="case-study-stack patent-stack">{patentSections.map((item,i)=><StorySection key={item.eyebrow} item={item} lang={lang} index={i} dark={i===3}/>)}</div>
    <section className="integrity-note section-pad" data-reveal><ShieldCheck/><div><Eyebrow>{lang==='en'?'ACADEMIC INTEGRITY':'AKADEMİK AÇIKLIK'}</Eyebrow><h2>{lang==='en'?'A case-study analysis, not a personal patent claim':'Vaka analizi; kişisel patent iddiası değil'}</h2><p>{c.patents.integrity}</p></div></section>
    <ContactStrip lang={lang}/>
  </>
}

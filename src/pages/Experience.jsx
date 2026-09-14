import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { copy, experiences } from '../content/portfolio'
import { ContactStrip, Eyebrow, LineArt, MethodTags, NotFound, PageHero, SectionHead, StorySection } from '../site/components'
import { t } from '../site/utils'

export function ExperienceIndex({lang}) {
  const c=copy[lang]
  return <><PageHero eyebrow="EXPERIENCE · ANALYTICAL WORKFLOWS" title={c.experience.title} intro={c.experience.intro} art="sample"/><section className="experience-list section-pad">{experiences.filter(e=>e.visible).sort((a,b)=>a.order-b.order).map((e,i)=><Link data-reveal to={e.route || '/experience/' + e.slug} className="experience-row" key={e.slug}><span>0{i+1}</span><div><small>{t(e.date,lang)}</small><h2>{t(e.title,lang)}</h2><p>{t(e.institution,lang)}</p></div><div className="row-tags">{e.methods.slice(0,4).map(m=><i key={m}>{m}</i>)}</div><ArrowRight/></Link>)}</section><ContactStrip lang={lang}/></>
}

export function ExperienceDetail({lang}) {
  const {slug}=useParams()
  const e=experiences.find(x=>x.slug===slug)
  const c=copy[lang]
  if(!e) return <NotFound lang={lang}/>
  const art=slug==='doping-control'?'doping':slug==='mta'?'rock':'qc'
  return <>
    <PageHero eyebrow={t(e.date,lang) + ' · ' + t(e.institution,lang)} title={t(e.title,lang)} intro={t(e.summary,lang)} art={art}/>
    <section className="experience-overview two-col section-pad" data-reveal><div><Eyebrow>{lang==='en'?'01 · MY ROLE / CONTRIBUTION':'01 · ROLÜM / KATKIM'}</Eyebrow><h2>{lang==='en'?'What I worked on':'Neler üzerinde çalıştım?'}</h2></div><div><p className="large-copy">{t(e.role,lang)}</p><MethodTags items={e.methods}/></div></section>
    <section className="workflow-band section-pad" data-reveal><SectionHead eyebrow={lang==='en'?'02 · ANALYTICAL WORKFLOW':'02 · ANALİTİK İŞ AKIŞI'} title={c.labels.workflow}/><div className="process-line">{e.workflow.map((step,i)=><div key={i}><span>{String(i+1).padStart(2,'0')}</span><strong>{t(step,lang)}</strong></div>)}</div></section>
    {e.sections?.length ? <div className="case-study-stack">{e.sections.map((item,i)=><StorySection key={item.eyebrow} item={item} lang={lang} index={i} dark={(slug==='doping-control'&&i===2)||(slug==='mta'&&i===2)}/>)}</div> : <section className="story-section section-pad" data-reveal><div className="story-copy"><Eyebrow>03 · CLINICAL LABORATORY</Eyebrow><h2>{lang==='en'?'An early foundation in routine laboratory discipline':'Rutin laboratuvar disiplininde erken bir temel'}</h2><p>{t(e.summary,lang)}</p><p>{t(e.role,lang)}</p></div><LineArt variant="qc"/></section>}
    <section className="skills-band section-pad" data-reveal><div><Eyebrow>{lang==='en'?'SKILLS DEMONSTRATED':'GÖSTERİLEN YETKİNLİKLER'}</Eyebrow><h2>{lang==='en'?'What this experience added to my analytical toolkit':'Bu deneyimin analitik yetkinliklerime katkısı'}</h2></div><MethodTags items={e.methods}/></section>
    <ContactStrip lang={lang}/>
  </>
}

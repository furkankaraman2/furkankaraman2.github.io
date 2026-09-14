import { useState } from 'react'
import { ChevronDown, ShieldCheck } from 'lucide-react'
import { copy, phases, researchMetrics, researchWorkflow } from '../content/portfolio'
import { ContactStrip, Eyebrow, PageHero, SectionHead, StoryMedia, StorySection } from '../site/components'
import { t } from '../site/utils'

function ExpandableWorkflow({lang}) {
  const [active,setActive]=useState(researchWorkflow[0].id)
  const item=researchWorkflow.find(x=>x.id===active)||researchWorkflow[0]
  return <div className="interactive-method" data-reveal><div className="workflow-nodes" role="tablist" aria-label="Research workflow">{researchWorkflow.map((step,i)=><button key={step.id} className={active===step.id?'workflow-node active':'workflow-node'} onClick={()=>setActive(step.id)} aria-selected={active===step.id} role="tab"><span>{String(i+1).padStart(2,'0')}</span><strong>{t(step.short,lang)}</strong><ChevronDown/></button>)}</div><div className="workflow-detail" role="tabpanel" key={item.id}><div><Eyebrow>{lang==='en'?'OPEN METHOD NOTE':'AÇIK YÖNTEM NOTU'}</Eyebrow><h3>{t(item.title,lang)}</h3>{t(item.text,lang).map((p,i)=><p key={i}>{p}</p>)}</div><StoryMedia item={item} lang={lang}/></div></div>
}

export default function Research({lang}) {
  const c=copy[lang]
  return <>
    <PageHero eyebrow={c.research.eyebrow} title={c.research.title} intro={c.research.subtitle} art="spme"/>
    <section className="metrics section-pad">{researchMetrics.map(m=><div data-reveal key={m.value}><strong>{m.value}</strong><span>{t(m.label,lang)}</span></div>)}</section>
    <section className="research-intro two-col section-pad" data-reveal><div><Eyebrow>01 · CONTEXT</Eyebrow><h2>{c.research.problemTitle}</h2></div><div><p className="large-copy">{c.research.problem}</p><p className="caution"><ShieldCheck/>{c.research.caution}</p></div></section>
    <section className="method-explorer section-pad"><SectionHead eyebrow="02 · INTERACTIVE METHOD" title={lang==='en'?'Explore the project step by step':'Projeyi adım adım incele'} body={lang==='en'?'Select a stage to open the underlying chemistry, experimental reasoning and report evidence.':'Alttaki kimyayı, deneysel gerekçeyi ve rapor kanıtını görmek için bir aşama seçin.'}/><ExpandableWorkflow lang={lang}/></section>
    <section className="narrative-title section-pad"><SectionHead eyebrow="03 · RESEARCH STORY" title={lang==='en'?'From coating chemistry to a short analytical sequence':'Kaplama kimyasından kısa analitik diziye'} body={c.labels.sourceNote}/></section>
    {researchWorkflow.slice(1).map((item,i)=><StorySection key={item.id} item={{...item,paragraphs:item.text}} lang={lang} index={i} dark={i===2}/>) }
    <section className="phase-summary section-pad" data-reveal><SectionHead eyebrow="04 · VERIFIED PHASE COMPARISON" title={lang==='en'?'Reproducibility drove the coating decision':'Kaplama kararını tekrarlanabilirlik belirledi'}/><div className="phase-layout"><div className="phase-bars">{phases.map(p=><div className={p.selected?'phase selected':'phase'} key={p.name}><div className="bar-meta"><strong>{p.name}</strong><span>{p.rsd}% RSD</span></div><div className="bar-track"><i style={{width:(p.amount/7*100) + '%'}}/></div><small>{p.amount.toFixed(2)} ng · recovery {p.recovery.toFixed(2)}</small></div>)}</div><div className="selected-phase"><span>{lang==='en'?'SELECTED PHASE':'SEÇİLEN FAZ'}</span><h3>HLB-SAX</h3><p>{lang==='en'?'13% RSD was the lowest variability in the three-phase comparison, supporting HLB-SAX for subsequent optimization.':'Üç fazlı karşılaştırmada %13 RSD en düşük değişkenliği verdi ve sonraki optimizasyonlarda HLB-SAX seçimini destekledi.'}</p></div></div></section>
    <ContactStrip lang={lang}/>
  </>
}

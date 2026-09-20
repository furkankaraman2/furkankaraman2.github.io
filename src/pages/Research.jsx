import { useState } from 'react'
import { ChevronDown, ShieldCheck } from 'lucide-react'
import { copy, phases, researchFeatureMedia, researchMetrics, researchStory, researchWorkflow } from '../content/portfolio'
import { ContactStrip, Eyebrow, PageHero, SectionHead, StoryMedia, StorySection } from '../site/components'
import { t } from '../site/utils'

function ExpandableWorkflow({lang}) {
  const [active,setActive]=useState(researchWorkflow[0].id)
  const item=researchWorkflow.find(x=>x.id===active)||researchWorkflow[0]
  return <div className="interactive-method" data-reveal>
    <div className="workflow-nodes" role="tablist" aria-label="Research workflow">
      {researchWorkflow.map((step,i)=><button key={step.id} className={active===step.id?'workflow-node active':'workflow-node'} onClick={()=>setActive(step.id)} aria-selected={active===step.id} role="tab">
        <span>{String(i+1).padStart(2,'0')}</span><strong>{t(step.short,lang)}</strong><ChevronDown/>
      </button>)}
    </div>
    <div className="workflow-detail" role="tabpanel" key={item.id}>
      <div><Eyebrow>{item.eyebrow}</Eyebrow><h3>{t(item.title,lang)}</h3>{t(item.text,lang).map((p,i)=><p key={i}>{p}</p>)}</div>
      <StoryMedia item={item} lang={lang}/>
    </div>
  </div>
}

export default function Research({lang}) {
  const c=copy[lang]
  return <>
    <PageHero eyebrow={c.research.eyebrow} title={c.research.title} intro={c.research.subtitle} art="spme" image={researchFeatureMedia.hlbStructure} imageAlt={lang==='en'?'HLB extractive-phase structure used in my SPME research':'SPME araştırmamda kullanılan HLB ekstraktif faz yapısı'}/>
    <section className="metrics section-pad">{researchMetrics.map(m=><div data-reveal key={m.value}><strong>{m.value}</strong><span>{t(m.label,lang)}</span></div>)}</section>

    <section className="research-intro two-col section-pad" data-reveal>
      <div><Eyebrow>{lang==='en'?'PROJECT POSITIONING':'PROJENİN KONUMU'}</Eyebrow><h2>{c.research.problemTitle}</h2></div>
      <div><p className="large-copy">{c.research.problem}</p><p className="caution"><ShieldCheck/>{c.research.caution}</p></div>
    </section>

    <section className="method-explorer section-pad">
      <SectionHead eyebrow={lang==='en'?'INTERACTIVE METHOD':'İNTERAKTİF YÖNTEM'} title={lang==='en'?'Open the method, one analytical decision at a time':'Yöntemi analitik kararlar üzerinden adım adım aç'} body={lang==='en'?'Each node expands into the chemistry, experimental reasoning and report-grounded evidence behind that stage.':'Her düğüm; ilgili aşamanın arkasındaki kimyayı, deneysel gerekçeyi ve rapora dayanan kanıtı birkaç paragraflık içerikle açar.'}/>
      <ExpandableWorkflow lang={lang}/>
    </section>

    <section className="narrative-title section-pad">
      <SectionHead eyebrow={lang==='en'?'TEN-PART RESEARCH STORY':'10 BÖLÜMLÜ ARAŞTIRMA HİKÂYESİ'} title={lang==='en'?'Follow the project from clinical motivation to the final analytical sequence':'Projeyi klinik motivasyondan final analitik iş akışına kadar takip et'} body={c.labels.sourceNote}/>
      <nav className="story-index" aria-label={lang==='en'?'Research story sections':'Araştırma bölümleri'}>
        {researchStory.map((item,i)=><a href={'#story-'+item.id} key={item.id}><span>{String(i+1).padStart(2,'0')}</span>{t(item.short,lang)}</a>)}
      </nav>
    </section>

    <div className="case-study-stack spme-story">
      {researchStory.map((item,i)=><StorySection key={item.id} item={item} lang={lang} index={i} dark={i===3 || i===8}/>)}
    </div>

    <section className="phase-summary section-pad" data-reveal>
      <SectionHead eyebrow={lang==='en'?'VERIFIED PHASE COMPARISON':'DOĞRULANMIŞ FAZ KARŞILAŞTIRMASI'} title={lang==='en'?'Reproducibility drove the coating decision':'Kaplama kararını tekrarlanabilirlik belirledi'}/>
      <div className="phase-layout">
        <div className="phase-bars">{phases.map(p=><div className={p.selected?'phase selected':'phase'} key={p.name}><div className="bar-meta"><strong>{p.name}</strong><span>{p.rsd}% RSD</span></div><div className="bar-track"><i style={{width:(p.amount/7*100) + '%'}}/></div><small>{p.amount.toFixed(2)} ng · recovery {p.recovery.toFixed(2)}</small></div>)}</div>
        <div className="selected-phase"><span>{lang==='en'?'SELECTED PHASE':'SEÇİLEN FAZ'}</span><h3>HLB-SAX</h3><p>{lang==='en'?'The lowest variability in the three-phase comparison supported HLB-SAX for the later optimization work.':'Üç fazlı karşılaştırmadaki en düşük değişkenlik, sonraki optimizasyonlar için HLB-SAX seçimini destekledi.'}</p></div>
      </div>
    </section>
    <ContactStrip lang={lang}/>
  </>
}

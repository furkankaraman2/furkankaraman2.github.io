import { Download, ExternalLink } from 'lucide-react'
import { copy, education, interests, profile } from '../content/portfolio'
import { ContactStrip, Eyebrow, SectionHead } from '../site/components'
import { t } from '../site/utils'

export default function About({lang}) {
  const c=copy[lang]
  return <>
    <section className="about-hero section-pad"><div className="about-photo" data-reveal><img src={profile.photo} alt="Furkan Karaman"/></div><div data-reveal><Eyebrow>ABOUT · FURKAN KARAMAN</Eyebrow><h1>{c.about.title}</h1><p>{c.about.intro}</p><div className="actions"><a className="button primary" href={profile.cv} download>{c.labels.download}<Download/></a><a className="button outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ExternalLink/></a></div></div></section>
    <section className="education section-pad"><SectionHead eyebrow="01" title={c.labels.education}/><div>{education.map(x=><article data-reveal key={x.school}><span>{t(x.date,lang)}</span><h3>{t(x.degree,lang)}</h3><p>{x.school}</p></article>)}</div></section>
    <section className="beyond section-pad"><SectionHead eyebrow="02" title={c.labels.beyond}/><div className="interest-grid">{interests.map((x,i)=><article data-reveal key={x.en}><span>0{i+1}</span><p>{t(x,lang)}</p></article>)}</div></section>
    <ContactStrip lang={lang}/>
  </>
}

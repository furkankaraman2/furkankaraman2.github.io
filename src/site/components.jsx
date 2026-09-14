import { Link } from 'react-router-dom'
import { ExternalLink, Mail, Phone } from 'lucide-react'
import { copy, profile } from '../content/portfolio'
import { t } from './utils'

export function Eyebrow({ children }) { return <p className="eyebrow"><span/>{children}</p> }
export function SectionHead({ eyebrow, title, body }) { return <div className="section-head" data-reveal>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{body && <p>{body}</p>}</div> }
export function MethodTags({ items }) { return <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div> }

export function LineArt({ variant = 'spme', label }) {
  const c = { fill:'none', stroke:'currentColor', strokeWidth:1.7, strokeLinecap:'round', strokeLinejoin:'round' }
  const arts = {
    spme:<><path {...c} d="M72 22v128M64 37h16M64 118h16M98 46c32 0 32 31 64 31s32-31 64-31M98 126c32 0 32-31 64-31s32 31 64 31"/><circle {...c} cx="72" cy="68" r="23"/><circle {...c} cx="72" cy="68" r="8"/><path {...c} d="M226 46v80M216 46h20M216 126h20M158 77v18"/></>,
    mh:<><path {...c} d="M38 80h44l14-28 18 58 17-30h36l14-18h45"/><circle {...c} cx="202" cy="62" r="23"/><path {...c} d="M202 39v46M179 62h46M47 130c34-20 55-17 84 0 29 17 51 20 90 0"/></>,
    doping:<><path {...c} d="M54 35h48v110H54zM60 50h36M60 62h36M123 52h62v52h-62zM154 104v42M138 146h32"/><path {...c} d="M198 38c-14 19-14 33 0 50 14-17 14-31 0-50zM189 111h18M189 125h18M189 139h18"/></>,
    sample:<><path {...c} d="M45 42h36l-6 94H51zM119 42h36l-6 94h-24zM193 42h36l-6 94h-24z"/><path {...c} d="M39 43h48M113 43h48M187 43h48M55 112h17M129 87h17M203 67h17"/></>,
    ms:<><path {...c} d="M35 86h44l18-35 17 69 21-44 17 18 19-36 22 61 16-33h38"/><path {...c} d="M34 143h204M53 143v-18M91 143v-35M129 143v-25M167 143v-50M205 143v-29"/></>,
    qc:<><circle {...c} cx="84" cy="89" r="46"/><path {...c} d="M62 91l15 15 31-36M143 46h74v23h-74zM143 82h74v23h-74zM143 118h74v23h-74z"/></>,
    rock:<><path {...c} d="M40 128l24-54 29 15 19-48 38 32 32-14 45 69zM68 99l19 29M112 80l15 48M157 74l7 54M199 86l-9 42"/></>,
    xrf:<><path {...c} d="M46 48l54 38-54 38M100 86h38M139 44v84M154 54l64 0M154 75h42M154 96h56M154 117h32"/><circle {...c} cx="139" cy="86" r="11"/></>,
    plasma:<><path {...c} d="M76 26c28 34-6 49 20 76 21 22 17 47-5 59 48-10 62-41 37-67-18-19 8-34-8-61-8 21-19 29-44-7z"/><path {...c} d="M149 49h75M149 73h53M149 97h67M149 121h44M149 145h61"/></>,
    icp:<><path {...c} d="M39 87h46M85 57h34v60H85zM119 87h37M156 45l58 42-58 42zM214 87h30M48 72v30M57 65v44M66 72v30"/></>,
    coal:<><path {...c} d="M43 126l25-67 31 22 30-42 42 35 36-13 29 65zM71 145h139M90 126v19M129 126v19M168 126v19"/><circle {...c} cx="217" cy="42" r="18"/><path {...c} d="M217 16v9M217 59v9M191 42h9M234 42h9"/></>,
    patent:<><path {...c} d="M48 36h111v116H48zM67 59h74M67 79h74M67 99h52M67 119h63"/><path {...c} d="M173 55h48v70h-48zM183 70h28M183 86h28M183 102h19M159 88h14"/></>,
    tto:<><circle {...c} cx="62" cy="88" r="27"/><circle {...c} cx="130" cy="45" r="27"/><circle {...c} cx="202" cy="88" r="27"/><circle {...c} cx="130" cy="135" r="27"/><path {...c} d="M86 72l21-14M153 59l26 14M179 104l-25 17M106 119l-21-16"/></>,
    spin:<><path {...c} d="M49 136V82h46v54M95 136V53h53v83M148 136V91h54v45M38 136h180"/><path {...c} d="M63 82V63h18v19M112 53V33h19v20M165 91V70h20v21"/></>,
    globe:<><circle {...c} cx="130" cy="87" r="65"/><path {...c} d="M65 87h130M130 22c-34 28-34 102 0 130M130 22c34 28 34 102 0 130M82 49c27 18 70 18 96 0M82 125c27-18 70-18 96 0"/></>,
    industry:<><path {...c} d="M41 140V78l46 24V72l50 29V56h76v84zM158 79h16M183 79h16M158 100h16M183 100h16M158 121h16M183 121h16M72 62V37h20v36"/></>
  }
  return <div className={'line-art line-art-' + variant} aria-label={label || ''} role="img" data-parallax><svg viewBox="0 0 260 180" aria-hidden="true">{arts[variant] || arts.spme}</svg></div>
}

export function PageHero({ eyebrow, title, intro, art='spme' }) {
  return <section className="page-hero"><div data-reveal><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p></div><LineArt variant={art}/></section>
}

export function StoryMedia({ item, lang }) {
  if (item.image) return <figure className="story-figure" data-parallax><div className="image-frame"><img src={item.image} alt={t(item.caption,lang) || t(item.title,lang)}/></div>{item.caption && <figcaption><span>FIG.</span>{t(item.caption,lang)}</figcaption>}</figure>
  return <LineArt variant={item.art || 'spme'} label={t(item.title,lang)}/>
}

export function StorySection({ item, lang, index, dark=false }) {
  const paragraphs = item.paragraphs ? t(item.paragraphs,lang) : t(item.text,lang)
  return <section className={'story-section section-pad ' + (index % 2 ? 'reverse ' : '') + (dark ? 'dark' : '')} data-reveal><div className="story-copy"><Eyebrow>{item.eyebrow}</Eyebrow><h2>{t(item.title,lang)}</h2>{paragraphs?.map((p,i)=><p key={i}>{p}</p>)}</div><StoryMedia item={item} lang={lang}/></section>
}

export function ContactStrip({lang}) {
  const c=copy[lang]
  return <section className="contact-strip" data-reveal><div><Eyebrow>{c.labels.contact}</Eyebrow><h2>{c.about.contactBody}</h2><p>{c.about.privacy}</p></div><div className="contact-actions"><a href={'mailto:' + profile.email}><Mail/><span>{profile.email}</span></a><a href={'tel:' + profile.phone.replace(/s/g,'')}><Phone/><span>{profile.phone}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink/><span>LinkedIn</span></a></div></section>
}

export function NotFound({lang}) { return <section className="not-found"><h1>404</h1><p>{lang==='en'?'This page could not be found.':'Bu sayfa bulunamadı.'}</p><Link className="button primary" to="/">Home</Link></section> }

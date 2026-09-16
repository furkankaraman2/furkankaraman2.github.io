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
    calibration:<><path {...c} d="M40 140h82V55M49 126l20-24 17 11 25-42"/><circle {...c} cx="49" cy="126" r="3"/><circle {...c} cx="69" cy="102" r="3"/><circle {...c} cx="86" cy="113" r="3"/><circle {...c} cx="111" cy="71" r="3"/><path {...c} d="M151 48h68M151 73h68M151 98h68M151 123h68"/><path {...c} d="M159 48v75M182 48v75M205 48v75"/></>,
    triplequad:<><path {...c} d="M30 89h31M61 61h42v56H61zM103 89h27M130 63h30v52h-30zM160 89h28M188 61h42v56h-42zM230 89h16"/><path {...c} d="M74 72l16 34M90 72l-16 34M141 74l8 15-8 15M201 72l16 34M217 72l-16 34"/></>,
    hrms:<><path {...c} d="M38 142h190M50 142V98M72 142V62M94 142V121M116 142V47M138 142V86M160 142V34M182 142V112M204 142V73"/><path {...c} d="M45 46c22 15 44 5 63 24 20 20 38 11 52-2 17-15 33-13 61 5"/><circle {...c} cx="160" cy="34" r="7"/></>,
    hplc:<><path {...c} d="M45 54h64v79H45zM54 67h46M54 82h46M54 97h46M54 112h46M130 43h27v99h-27zM157 92h43"/><path {...c} d="M200 61h24v62h-24M175 55v74M167 55h16M167 129h16"/></>,
    isotope:<><path {...c} d="M37 126h35l13-64 17 64h21l12-43 13 43h27l14-77 18 77h37"/><circle {...c} cx="86" cy="62" r="9"/><circle {...c} cx="190" cy="49" r="9"/><path {...c} d="M44 150h172M58 150v-12M91 150v-20M124 150v-12M157 150v-26M190 150v-18M223 150v-11"/><text x="75" y="49" fill="currentColor" fontSize="12">¹²C</text><text x="181" y="35" fill="currentColor" fontSize="12">¹³C</text></>,
    electrophoresis:<><path {...c} d="M45 39h78v103H45zM55 52h58M55 65h58M55 78h58M55 91h58M55 104h58M55 117h58"/><path {...c} d="M150 45h70v92h-70zM161 61h9M181 61h18M161 79h26M161 97h13M181 97h22M161 115h33"/><path {...c} d="M84 142v20M71 162h26"/></>,
    blood:<><path {...c} d="M72 32c0 0-34 40-34 72a34 34 0 0 0 68 0c0-32-34-72-34-72z"/><circle {...c} cx="72" cy="104" r="14"/><path {...c} d="M130 139h93M142 125l17-22 19 11 19-35 17 17M142 59h81M142 79h56M142 99h73"/><circle {...c} cx="159" cy="103" r="3"/><circle {...c} cx="178" cy="114" r="3"/><circle {...c} cx="197" cy="79" r="3"/><circle {...c} cx="214" cy="96" r="3"/></>,
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
    workflow:<><circle {...c} cx="52" cy="90" r="25"/><circle {...c} cx="130" cy="90" r="25"/><circle {...c} cx="208" cy="90" r="25"/><path {...c} d="M77 90h28M102 84l7 6-7 6M155 90h28M180 84l7 6-7 6M45 79h14M45 90h14M45 101h14M124 78v24M136 78v24M199 79l18 11-18 11z"/></>,
    selectivity:<><circle {...c} cx="130" cy="90" r="24"/><path {...c} d="M121 84l9-8 10 7-3 12-13 1zM130 66v-18M130 114v18M106 90H82M154 90h24"/><circle {...c} cx="64" cy="90" r="18"/><circle {...c} cx="196" cy="90" r="18"/><path {...c} d="M55 83h18M55 97h18M188 83h16M188 97h16M130 48c-10-14-22-20-36-18M130 132c12 13 25 19 39 16"/></>,
    coating:<><path {...c} d="M72 24v124M64 38h16M62 111h20M105 42h72v72h-72zM116 55h50M116 68h50M116 81h50M116 94h50M72 82h33"/><path {...c} d="M191 41v70M183 49h16M183 103h16M191 111v35M176 146h30"/></>,
    histidine:<><path {...c} d="M62 88l20-31h34l18 31-18 31H82zM116 57l22-17 24 12 4 28-21 17M166 80l26 14M192 94l18-10M192 94l17 11"/><text x="46" y="92" fill="currentColor" fontSize="14">NH₃⁺</text><text x="211" y="88" fill="currentColor" fontSize="14">COO⁻</text><text x="120" y="40" fill="currentColor" fontSize="13">imidazole</text></>,
    solvent:<><path {...c} d="M93 32c0 0-36 43-36 76a36 36 0 0 0 72 0c0-33-36-76-36-76zM150 50h71M150 78h51M150 106h63M150 134h44"/><path {...c} d="M78 111c10 10 22 10 32 0M148 92l-13 10M135 102l8 8M135 102l-9-2"/></>,
    furnace:<><path {...c} d="M52 38h156v111H52zM66 55h128v72H66zM78 68h104M78 82h104M78 96h104M78 110h104"/><path {...c} d="M104 141h52M115 127v14M145 127v14M89 25h82M100 25v13M160 25v13"/></>,
    titration:<><path {...c} d="M76 27h22v88H76zM70 27h34M87 115v20M69 135h36M86 62h13"/><path {...c} d="M153 40v68c0 18 13 29 31 29s31-11 31-29V40M145 40h78M164 71h40M174 96h20"/><path {...c} d="M95 76h54M142 70l8 6-8 6"/></>,
    thermal:<><path {...c} d="M43 137h179M55 121l25-9 18-36 19 30 21-56 18 49 20-24 23 37"/><path {...c} d="M55 43h45M55 55h31M188 41c18 17 18 35 0 52-18-17-18-35 0-52zM188 93v27"/><circle {...c} cx="188" cy="129" r="8"/></>,
    pycnometer:<><path {...c} d="M44 120h60V65H44zM52 75h44M120 48h68v83h-68zM130 60h48M154 131v17M138 148h32"/><circle {...c} cx="210" cy="91" r="24"/><path {...c} d="M210 67v48M186 91h48M104 91h16"/></>,
    industry:<><path {...c} d="M41 140V78l46 24V72l50 29V56h76v84zM158 79h16M183 79h16M158 100h16M183 100h16M158 121h16M183 121h16M72 62V37h20v36"/></>
  }
  return <div className={'line-art line-art-' + variant} aria-label={label || ''} role="img" data-parallax><svg viewBox="0 0 260 180" aria-hidden="true">{arts[variant] || arts.spme}</svg></div>
}

export function PageHero({ eyebrow, title, intro, art='spme' }) {
  return <section className="page-hero"><div data-reveal><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p></div><LineArt variant={art}/></section>
}

export function StoryMedia({ item, lang }) {
  if (item.images?.length) return <div className="story-media-gallery" data-parallax>{item.images.map((media,i)=><figure className="story-figure" key={media.src}><div className="image-frame report-frame"><img loading="lazy" decoding="async" src={media.src} alt={t(media.caption,lang) || t(item.title,lang)}/></div>{media.caption && <figcaption><span>FIG. {i+1}</span>{t(media.caption,lang)}</figcaption>}</figure>)}</div>
  if (item.image) return <figure className="story-figure" data-parallax><div className={'image-frame ' + (item.image.includes('/illustrations/') ? 'vector-frame' : 'report-frame')}><img loading="lazy" decoding="async" src={item.image} alt={t(item.caption,lang) || t(item.title,lang)}/></div>{item.caption && <figcaption><span>FIG.</span>{t(item.caption,lang)}</figcaption>}</figure>
  return <LineArt variant={item.art || 'spme'} label={t(item.title,lang)}/>
}

export function StorySection({ item, lang, index, dark=false }) {
  const paragraphs = item.paragraphs ? t(item.paragraphs,lang) : t(item.text,lang)
  return <section id={item.id ? 'story-'+item.id : undefined} className={'story-section science-story section-pad ' + (index % 2 ? 'reverse ' : '') + (dark ? 'dark' : '')} data-reveal><div className="story-copy"><Eyebrow>{item.eyebrow}</Eyebrow><h2>{t(item.title,lang)}</h2>{paragraphs?.map((p,i)=><p key={i}>{p}</p>)}</div><StoryMedia item={item} lang={lang}/></section>
}

export function ContactStrip({lang}) {
  const c=copy[lang]
  return <section className="contact-strip" data-reveal><div><Eyebrow>{c.labels.contact}</Eyebrow><h2>{c.about.contactBody}</h2><p>{c.about.privacy}</p></div><div className="contact-actions"><a href={'mailto:' + profile.email}><Mail/><span>{profile.email}</span></a><a href={'tel:' + profile.phone.replace(/\s/g,'')}><Phone/><span>{profile.phone}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink/><span>LinkedIn</span></a></div></section>
}

export function NotFound({lang}) { return <section className="not-found"><h1>404</h1><p>{lang==='en'?'This page could not be found.':'Bu sayfa bulunamadı.'}</p><Link className="button primary" to="/">Home</Link></section> }

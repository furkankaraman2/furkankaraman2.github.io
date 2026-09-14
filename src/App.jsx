import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Shell from './site/Shell'
import { NotFound } from './site/components'
import Home from './pages/Home'
import Research from './pages/Research'
import { ExperienceDetail, ExperienceIndex } from './pages/Experience'
import PatentResearch from './pages/PatentResearch'
import About from './pages/About'

export default function App() {
  const [lang,setLang]=useState(()=>localStorage.getItem('portfolio-language')||'en')
  useEffect(()=>{localStorage.setItem('portfolio-language',lang);document.documentElement.lang=lang},[lang])
  const shell=useMemo(()=>({lang,setLang}),[lang])
  return <Shell {...shell}><Routes>
    <Route path="/" element={<Home lang={lang}/>}/>
    <Route path="/research" element={<Research lang={lang}/>}/>
    <Route path="/research/spme-moi-ms" element={<Research lang={lang}/>}/>
    <Route path="/experience" element={<ExperienceIndex lang={lang}/>}/>
    <Route path="/experience/:slug" element={<ExperienceDetail lang={lang}/>}/>
    <Route path="/patent-research" element={<PatentResearch lang={lang}/>}/>
    <Route path="/scientific-writing" element={<PatentResearch lang={lang}/>}/>
    <Route path="/about" element={<About lang={lang}/>}/>
    <Route path="*" element={<NotFound lang={lang}/>}/>
  </Routes></Shell>
}

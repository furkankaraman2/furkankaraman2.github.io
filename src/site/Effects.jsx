import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export function ScrollEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible') })
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    let raf = 0
    let lastY = window.scrollY
    const update = () => {
      const now = window.scrollY
      document.documentElement.dataset.scrollDirection = now >= lastY ? 'down' : 'up'
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      document.documentElement.style.setProperty('--scroll-progress', Math.min(1, Math.max(0, now / max)).toFixed(4))
      lastY = now
      document.querySelectorAll('[data-parallax]').forEach(el => {
        const rect = el.getBoundingClientRect()
        const delta = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
        el.style.setProperty('--parallax-y', Math.max(-34, Math.min(34, delta * -42)) + 'px')
      })
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [pathname])
  return null
}

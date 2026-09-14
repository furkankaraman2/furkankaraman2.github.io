import { describe, expect, it } from 'vitest'
import { copy, experiences, phases, profile, researchMetrics } from './portfolio'

describe('portfolio content integrity', () => {
  it('provides complete bilingual core copy', () => {
    for (const lang of ['en', 'tr']) {
      expect(copy[lang].hero.title).toBeTruthy()
      expect(copy[lang].research.title).toBeTruthy()
      expect(copy[lang].experience.title).toBeTruthy()
      expect(copy[lang].about.title).toBeTruthy()
    }
  })

  it('keeps all experiences uniquely addressable and access-controlled', () => {
    expect(new Set(experiences.map(x => x.slug)).size).toBe(experiences.length)
    expect(experiences.every(x => ['full', 'preview', 'hidden'].includes(x.reportAccess))).toBe(true)
    expect(experiences.find(x => x.slug === 'doping-control').reportAccess).toBe('hidden')
    expect(experiences.find(x => x.slug === 'mta').reportAccess).toBe('hidden')
  })

  it('retains the verified research figures', () => {
    expect(researchMetrics.map(x => x.value)).toEqual(['0.987', '13%', '5 min', '1 min'])
    expect(phases.find(x => x.selected)).toMatchObject({ name: 'HLB-SAX', rsd: 13, amount: 6.10, recovery: 0.16 })
  })

  it('uses the confirmed public contact and repository identity', () => {
    expect(profile.github).toContain('furkankaraman2')
    expect(profile.email).toBe('chemist.furkan2@gmail.com')
  })
})

import { describe, expect, it } from 'vitest'
import { copy, experiences, patentSections, phases, profile, researchMetrics, researchWorkflow } from './portfolio'

describe('portfolio content integrity', () => {
  it('provides bilingual core copy and revised navigation', () => {
    for (const lang of ['en', 'tr']) {
      expect(copy[lang].hero.title).toBeTruthy()
      expect(copy[lang].research.title).toBeTruthy()
      expect(copy[lang].experience.title).toBeTruthy()
      expect(copy[lang].patents.title).toBeTruthy()
      expect(copy[lang].about.title).toBeTruthy()
      expect(copy[lang].nav.reports).toBeUndefined()
    }
  })
  it('keeps GitHub and raw-report URLs out of public profile data', () => {
    expect(profile.github).toBeUndefined()
    expect(profile.email).toBe('chemist.furkan2@gmail.com')
  })
  it('includes SPME in experience and long case studies for major placements', () => {
    expect(experiences[0]).toMatchObject({ slug: 'spme-moi-ms', route: '/research/spme-moi-ms' })
    expect(experiences.find(x => x.slug === 'doping-control').sections.length).toBeGreaterThanOrEqual(4)
    expect(experiences.find(x => x.slug === 'mta').sections.length).toBeGreaterThanOrEqual(5)
  })
  it('retains verified SPME figures', () => {
    expect(researchMetrics.map(x => x.value)).toEqual(['0.987', '13%', '5 min', '1 min'])
    expect(phases.find(x => x.selected)).toMatchObject({ name: 'HLB-SAX', rsd: 13, amount: 6.10, recovery: 0.16 })
    expect(researchWorkflow.length).toBeGreaterThanOrEqual(6)
  })
  it('expands patent research into a multi-part case study', () => expect(patentSections.length).toBeGreaterThanOrEqual(5))
})

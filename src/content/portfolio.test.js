import { describe, expect, it } from 'vitest'
import { existsSync, readdirSync } from 'node:fs'
import { copy, experiences, patentSections, phases, profile, researchMetrics, researchStory, researchWorkflow } from './portfolio'

describe('portfolio content integrity', () => {
  it('provides natural bilingual core copy and no Reports navigation', () => {
    for (const lang of ['en', 'tr']) {
      expect(copy[lang].hero.title).toBeTruthy()
      expect(copy[lang].research.title).toBeTruthy()
      expect(copy[lang].experience.title).toBeTruthy()
      expect(copy[lang].patents.title).toBeTruthy()
      expect(copy[lang].about.contactBody.length).toBeGreaterThan(180)
      expect(copy[lang].nav.reports).toBeUndefined()
    }
  })

  it('keeps public GitHub routing and raw reports out of the portfolio', () => {
    expect(profile.github).toBeUndefined()
    expect(profile.email).toBe('chemist.furkan2@gmail.com')
    expect(readdirSync('public/documents')).toEqual(['Furkan_Karaman_CV.pdf'])
  })

  it('uses one central SPME experience entry that routes to the research case study', () => {
    expect(experiences[0]).toMatchObject({ slug: 'spme-moi-ms', route: '/research/spme-moi-ms' })
    expect(experiences[0].title.en).toContain('Method Development')
  })

  it('expands the major laboratory placements into long case studies', () => {
    expect(experiences.find(x => x.slug === 'doping-control').sections.length).toBeGreaterThanOrEqual(6)
    expect(experiences.find(x => x.slug === 'mta').sections.length).toBeGreaterThanOrEqual(7)
  })

  it('retains verified SPME figures and a ten-part bilingual research story', () => {
    expect(researchMetrics.map(x => x.value)).toEqual(['0.987', '13%', '5 min', '1 min'])
    expect(phases.find(x => x.selected)).toMatchObject({ name: 'HLB-SAX', rsd: 13, amount: 6.10, recovery: 0.16 })
    expect(researchStory).toHaveLength(10)
    expect(researchWorkflow.length).toBeGreaterThanOrEqual(6)
    expect(researchStory.map(x => x.id)).toEqual(expect.arrayContaining(['clinical-context','spme-moi-concept','extractive-phases','calibration','phase-selection','desorption','final-workflow']))
    for (const item of researchStory) {
      expect(item.title.en.length).toBeGreaterThan(20)
      expect(item.title.tr.length).toBeGreaterThan(20)
      expect(item.text.en.length).toBeGreaterThanOrEqual(2)
      expect(item.text.tr.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('uses curated report visuals that are actually present in public assets', () => {
    for (const path of [
      'public/images/research/spme/fiber-interface.webp',
      'public/images/research/spme/calibration.webp',
      'public/images/research/spme/phase-comparison.webp',
      'public/images/experience/doping/lc-ms.webp',
      'public/images/experience/mta/xrf.webp',
      'public/images/patent/dermalix.webp',
    ]) expect(existsSync(path)).toBe(true)
  })

  it('expands patent research into a multi-part technology-transfer case study', () => {
    expect(patentSections.length).toBeGreaterThanOrEqual(7)
  })
})

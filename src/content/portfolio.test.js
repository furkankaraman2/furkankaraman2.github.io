import { describe, expect, it } from 'vitest'
import { existsSync, readdirSync } from 'node:fs'
import { copy, experiences, patentSections, phases, profile, researchMetrics, researchStory, researchWorkflow } from './portfolio'
import { imageCredits, realPhotos } from './imageCredits'

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

  it('uses licensed real photography for Doping and Patent, original MTA internship photos, and leaves SPME media untouched', () => {
    const doping = experiences.find(x => x.slug === 'doping-control')
    const mta = experiences.find(x => x.slug === 'mta')

    for (const item of [...doping.sections, ...patentSections]) {
      expect(item.image).toMatch(/^https:\/\/upload\.wikimedia\.org\//)
      expect(item.image).not.toContain('/images/illustrations/')
      expect(item.caption.en).toMatch(/Representative|representative/)
      expect(imageCredits[item.image]).toBeTruthy()
    }

    expect(doping.sections.find(x => x.id === 'lc-msms').image).toBe(realPhotos.lcms)
    expect(doping.sections.find(x => x.id === 'gc-msms').image).toBe(realPhotos.gcms)
    expect(doping.sections.find(x => x.id === 'peptides-hrms').image).toBe(realPhotos.qtof)
    expect(doping.sections.find(x => x.id === 'isotope-ratio').image).toBe(realPhotos.irms)

    expect(mta.heroImage).toBe('/media/mta/mta-01.jpg?v=20260920-1')
    expect(mta.roleImages.map(x => x.src)).toEqual(['/media/mta/mta-02.webp?v=20260920-1', '/media/mta/mta-03.webp?v=20260920-1'])
    const mtaImages = Object.fromEntries(mta.sections.map(item => [item.id, item.images?.map(x => x.src)]))
    expect(mtaImages).toMatchObject({
      'laboratory-scope': ['/media/mta/mta-04.webp?v=20260920-1', '/media/mta/mta-05.webp?v=20260920-1', '/media/mta/mta-06.webp?v=20260920-1'],
      'sample-traceability': ['/media/mta/mta-07.webp?v=20260920-1'],
      'xrf-preparation': ['/media/mta/mta-08.webp?v=20260920-1'],
      'xrf-analysis': ['/media/mta/mta-09.webp?v=20260920-1', '/media/mta/mta-10.webp?v=20260920-1'],
      'digestion-icpms': ['/media/mta/mta-11.webp?v=20260920-1'],
      'icp-oes': ['/media/mta/mta-04.webp?v=20260920-1'],
      'wet-chemistry-foundation': ['/media/mta/mta-10.webp?v=20260920-1'],
      'wet-chemistry-diversity': ['/media/mta/mta-12.webp?v=20260920-1', '/media/mta/mta-13.webp?v=20260920-1'],
      'coal-thermal': ['/media/mta/mta-14.webp?v=20260920-1', '/media/mta/mta-15.webp?v=20260920-1'],
      'coal-characterization': ['/media/mta/mta-16.webp?v=20260920-1', '/media/mta/mta-17.webp?v=20260920-1', '/media/mta/mta-18.webp?v=20260920-1', '/media/mta/mta-19.webp?v=20260920-1'],
    })
    expect(JSON.stringify(mta)).not.toMatch(/XRD|MLA/)
    for (const file of ['mta-01.jpg', ...Array.from({ length: 18 }, (_, i) => `mta-${String(i + 2).padStart(2, '0')}.webp`)]) {
      expect(existsSync(`public/media/mta/${file}`)).toBe(true)
    }

    expect(researchStory.find(x => x.id === 'spme-moi-concept').image).toBe('/images/research/spme/moi-ms-open-port-interface.webp')
  })

  it('uses one central SPME experience entry that routes to the research case study', () => {
    expect(experiences[0]).toMatchObject({ slug: 'spme-moi-ms', route: '/research/spme-moi-ms' })
    expect(experiences[0].title.en).toContain('Method Development')
  })

  it('expands the major laboratory placements into long case studies', () => {
    const doping = experiences.find(x => x.slug === 'doping-control')
    expect(doping.sections).toHaveLength(10)
    expect(doping.sections.map(x => x.id)).toEqual(expect.arrayContaining(['laboratory-chain','front-end-quality','controls-calibration','lc-msms','gc-msms','peptides-hrms','hplc-irms-prep','isotope-ratio','epo-analysis','athlete-passport']))
    for (const item of doping.sections) {
      expect(item.title.en.length).toBeGreaterThan(25)
      expect(item.title.tr.length).toBeGreaterThan(25)
      expect(item.paragraphs.en).toHaveLength(2)
      expect(item.paragraphs.tr).toHaveLength(2)
    }
    expect(doping.methods).toEqual(expect.arrayContaining(['LC-MS/MS','GC-MS/MS','LC-HRMS','GC-C-IRMS','SAR-PAGE / Immunoblotting','Athlete Biological Passport']))

    const mta = experiences.find(x => x.slug === 'mta')
    expect(mta.sections).toHaveLength(10)
    expect(mta.sections.map(x => x.id)).toEqual(expect.arrayContaining(['laboratory-scope','sample-traceability','xrf-preparation','xrf-analysis','digestion-icpms','icp-oes','wet-chemistry-foundation','wet-chemistry-diversity','coal-thermal','coal-characterization']))
    for (const item of mta.sections) {
      expect(item.title.en.length).toBeGreaterThan(25)
      expect(item.title.tr.length).toBeGreaterThan(25)
      expect(item.paragraphs.en).toHaveLength(2)
      expect(item.paragraphs.tr).toHaveLength(2)
    }
    expect(mta.methods).toEqual(expect.arrayContaining(['XRF','ICP-OES','ICP-MS','TGA','CHN elemental analysis','Helium pycnometry']))
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
    expect(researchStory.find(x => x.id === 'fiber-fabrication').image).toBe('/images/research/spme/spme-dip-coating.webp')
    expect(researchStory.find(x => x.id === 'histidine-chemistry').image).toBe('/images/research/spme/histidine-pka.webp')
    expect(researchStory.find(x => x.id === 'calibration').image).toBe('/images/research/spme/histidine-calibration.webp')
    expect(researchStory.find(x => x.id === 'phase-selection').image).toBe('/images/research/spme/extractive-phase-comparison.webp')
    const context = researchStory.find(x => x.id === 'clinical-context')
    expect(context.images.map(x => x.src)).toEqual([
      '/images/research/spme/malignant-hyperthermia-overview.webp',
      '/images/research/spme/calcium-homeostasis-context.webp',
    ])
    expect(researchStory.find(x => x.id === 'spme-moi-concept').image).toBe('/images/research/spme/moi-ms-open-port-interface.webp')
    expect(researchStory.find(x => x.id === 'spme-principle').images.map(x => x.src)).toEqual([
      '/images/research/spme/spme-method-workflow.webp',
      '/images/research/spme/spme-fiber-geometry.webp',
    ])
    expect(researchStory.find(x => x.id === 'extractive-phases').image).toBe('/images/research/spme/extractive-phase-results-table.webp')
    expect(researchStory.find(x => x.id === 'desorption').images).toHaveLength(1)
    expect(researchStory.find(x => x.id === 'desorption').images[0].src).toBe('/images/research/spme/desorption-solvent-screening.webp')
    expect(researchStory.find(x => x.id === 'final-workflow').image).toBe('/images/research/spme/desorption-time-optimization.webp')
  })

  it('uses scalable premium scientific visuals that are actually present in public assets', () => {
    for (const path of [
      'public/images/illustrations/spme-editorial.svg',
      'public/images/illustrations/doping-editorial.svg',
      'public/images/illustrations/mta-editorial.svg',
      'public/images/illustrations/patent-editorial.svg',
      'public/images/illustrations/patent-science.svg',
      'public/images/illustrations/patent-assessment.svg',
      'public/images/illustrations/patent-spinout.svg',
      'public/images/illustrations/patent-global-partnership.svg',
      'public/images/illustrations/spme-calibration-vector.svg',
      'public/images/illustrations/spme-phase-comparison-vector.svg',
      'public/images/illustrations/spme-desorption-vector.svg',
      'public/images/research/spme/malignant-hyperthermia-overview.webp',
      'public/images/research/spme/calcium-homeostasis-context.webp',
      'public/images/research/spme/spme-method-workflow.webp',
      'public/images/research/spme/moi-ms-open-port-interface.webp',
      'public/images/research/spme/spme-fiber-geometry.webp',
      'public/images/research/spme/extractive-phase-results-table.webp',
      'public/images/research/spme/spme-dip-coating.webp',
      'public/images/research/spme/histidine-pka.webp',
      'public/images/research/spme/histidine-calibration.webp',
      'public/images/research/spme/extractive-phase-comparison.webp',
      'public/images/research/spme/desorption-solvent-screening.webp',
      'public/images/research/spme/desorption-time-optimization.webp',
    ]) expect(existsSync(path)).toBe(true)
  })

  it('expands patent research into a ten-part bilingual technology-transfer case study', () => {
    expect(patentSections).toHaveLength(10)
    expect(patentSections.map(x => x.id)).toEqual(expect.arrayContaining(['research-question','patent-framework','tto-ebiltem','dermalix-science','ip-protection','technology-assessment','commercialization-options','dermis-pharma','global-ip-partnership','market-impact']))
    for (const item of patentSections) {
      expect(item.title.en.length).toBeGreaterThan(25)
      expect(item.title.tr.length).toBeGreaterThan(25)
      expect(item.paragraphs.en).toHaveLength(2)
      expect(item.paragraphs.tr).toHaveLength(2)
    }
  })
})

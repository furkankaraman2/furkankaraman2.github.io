// @vitest-environment jsdom
import React from 'react'
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

beforeAll(() => {
  window.scrollTo = vi.fn()
  window.matchMedia = vi.fn().mockImplementation(() => ({
    matches: false,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  global.requestAnimationFrame = cb => setTimeout(cb, 0)
  global.cancelAnimationFrame = id => clearTimeout(id)
})

afterEach(() => cleanup())

beforeEach(() => {
  localStorage.clear()
  document.documentElement.lang = 'en'
})

describe('portfolio functionality', () => {
  it('opens substantive SPME workflow panels', () => {
    render(<MemoryRouter initialEntries={['/research/spme-moi-ms']}><App /></MemoryRouter>)
    const tab = screen.getByRole('tab', { name: /Desorption/i })
    fireEvent.click(tab)
    expect(screen.getAllByRole('heading', { name: /The solvent had to disrupt the same ionic interaction/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/ACN\/MeOH\/H₂O \(40:40:20/i).length).toBeGreaterThan(0)
  })

  it('switches the research page naturally between English and Turkish', () => {
    render(<MemoryRouter initialEntries={['/research/spme-moi-ms']}><App /></MemoryRouter>)
    fireEvent.click(screen.getByRole('button', { name: 'Türkçeye geç' }))
    expect(screen.getByRole('heading', { level: 1, name: /L-histidin tayini için SPME–MOI–MS/i })).toBeInTheDocument()
    expect(localStorage.getItem('portfolio-language')).toBe('tr')
  })

  it('renders the expanded SPME context and workflow figures with bilingual scientific captions', () => {
    render(<MemoryRouter initialEntries={['/research/spme-moi-ms']}><App /></MemoryRouter>)
    const assertFigure = (pattern, src) => {
      const matches = screen.getAllByAltText(pattern)
      expect(matches.length).toBeGreaterThan(0)
      expect(matches[0]).toHaveAttribute('src', src)
    }
    assertFigure(/Malignant Hyperthermia overview used to introduce the clinical context/i, '/images/research/spme/malignant-hyperthermia-overview.webp')
    assertFigure(/Calcium-homeostasis schematic highlighting RYR\/SERCA/i, '/images/research/spme/calcium-homeostasis-context.webp')
    assertFigure(/Microfluidic open-port \/ bio-SPME interface schematic/i, '/images/research/spme/moi-ms-open-port-interface.webp')
    assertFigure(/SPME method workflow: pre-conditioning/i, '/images/research/spme/spme-method-workflow.webp')
    assertFigure(/SPME fiber geometry shown for the project/i, '/images/research/spme/spme-fiber-geometry.webp')
    assertFigure(/Summary table for the HLB, PMAA and SAX\/HLB-SAX comparison/i, '/images/research/spme/extractive-phase-results-table.webp')
    assertFigure(/Time-dependent first\/second desorption response at 1, 5, 10, 20 and 30 minutes/i, '/images/research/spme/desorption-time-optimization.webp')
    fireEvent.click(screen.getByRole('button', { name: 'Türkçeye geç' }))
    expect(screen.getAllByAltText(/Akut kriz sırasında görülebilen hızlı vücut sıcaklığı artışını/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/Akış izolasyonu, kısa fiber desorpsiyonu/i).length).toBeGreaterThan(0)
    expect(screen.getAllByAltText(/Seçilen 1 dakikalık desorpsiyon koşulu/i).length).toBeGreaterThan(0)
  })

  it('keeps the homepage compact while preserving the full SPME case study', () => {
    const { unmount } = render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.queryByText(/FEATURED RESEARCH/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/A method-development project built around selective sampling and direct mass spectrometry/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/SPME · TEN-PART STORY/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/The research page is structured as a scientific narrative, not a CV repeat/i)).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Türkçeye geç' }))
    expect(screen.queryByText(/SPME · 10 BÖLÜMLÜ HİKÂYE/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Araştırma sayfası CV tekrarı değil, bilimsel bir hikâye olarak kurgulandı/i)).not.toBeInTheDocument()
    unmount()
    localStorage.setItem('portfolio-language', 'en')

    render(<MemoryRouter initialEntries={['/research/spme-moi-ms']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: /SPME–MOI–MS method development for L-histidine/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Desorption/i })).toBeInTheDocument()
  })

  it('shows SPME as a real Experience entry that routes to the central research case study', () => {
    render(<MemoryRouter initialEntries={['/experience']}><App /></MemoryRouter>)
    const link = screen.getByRole('link', { name: /Student Researcher – SPME–MOI–MS Method Development/i })
    expect(link).toHaveAttribute('href', '/research/spme-moi-ms')
  })

  it('renders the ten-part anti-doping laboratory story and switches it to Turkish', () => {
    render(<MemoryRouter initialEntries={['/experience/doping-control']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Anti-doping analysis is a controlled evidence chain/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /EPO analysis/i })).toHaveAttribute('href', '#story-epo-analysis')
    fireEvent.click(screen.getByRole('button', { name: 'Türkçeye geç' }))
    expect(screen.getByRole('heading', { name: /Doping kontrol analizi tek bir cihaz sonucundan değil/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Sporcu biyolojik pasaportu/i).length).toBeGreaterThan(0)
  })

  it('renders the ten-part MTA geochemical story and switches it to Turkish', () => {
    render(<MemoryRouter initialEntries={['/experience/mta']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /Thirty working days connected geochemical analysis/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /C\/S, CHN & density/i })).toHaveAttribute('href', '#story-coal-characterization')
    fireEvent.click(screen.getByRole('button', { name: 'Türkçeye geç' }))
    expect(screen.getByRole('heading', { name: /Otuz iş günü jeokimyasal analiz/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Cu, Fe, W ve B/i).length).toBeGreaterThan(0)
  })

  it('renders the ten-part patent and technology-transfer story and switches it to Turkish', () => {
    render(<MemoryRouter initialEntries={['/patent-research']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /How does university research become a real healthcare product/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Global IP & pharma partner/i })).toHaveAttribute('href', '#story-global-ip-partnership')
    fireEvent.click(screen.getByRole('button', { name: 'Türkçeye geç' }))
    expect(screen.getByRole('heading', { name: /Üniversite araştırması gerçek bir sağlık ürününe nasıl dönüşür/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Bilimden pazara/i).length).toBeGreaterThan(0)
  })

  it('surfaces patent research from both Home and Experience without presenting it as a laboratory placement', () => {
    const { unmount } = render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getByRole('link', { name: /Explore the ten-part technology-transfer case study/i })).toHaveAttribute('href', '/patent-research')
    unmount()
    render(<MemoryRouter initialEntries={['/experience']}><App /></MemoryRouter>)
    expect(screen.getByText(/ACADEMIC RESEARCH · INNOVATION PERSPECTIVE/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Open ten-part technology-transfer study/i })).toHaveAttribute('href', '/patent-research')
  })

  it('renders the professional analytical/R&D CTA without a GitHub call-to-action', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getAllByText(/My experience spans analytical chemistry, mass spectrometry/i).length).toBeGreaterThan(0)
    expect(screen.queryByRole('link', { name: /GitHub/i })).not.toBeInTheDocument()
  })
})

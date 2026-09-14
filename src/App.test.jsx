// @vitest-environment jsdom
import React from 'react'
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
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

beforeEach(() => {
  localStorage.clear()
  document.documentElement.lang = 'en'
})

describe('portfolio functionality', () => {
  it('opens substantive SPME workflow panels', () => {
    render(<MemoryRouter initialEntries={['/research/spme-moi-ms']}><App /></MemoryRouter>)
    const tab = screen.getByRole('tab', { name: /Desorption optimization/i })
    fireEvent.click(tab)
    expect(screen.getByRole('heading', { name: /Releasing histidine meant deliberately weakening/i })).toBeInTheDocument()
    expect(screen.getByText(/ACN\/MeOH\/H₂O \(40:40:20/i)).toBeInTheDocument()
  })

  it('switches the research page naturally between English and Turkish', () => {
    render(<MemoryRouter initialEntries={['/research/spme-moi-ms']}><App /></MemoryRouter>)
    fireEvent.click(screen.getByRole('button', { name: 'Türkçeye geç' }))
    expect(screen.getByRole('heading', { level: 1, name: /L-histidin tayini için SPME–MOI–MS/i })).toBeInTheDocument()
    expect(localStorage.getItem('portfolio-language')).toBe('tr')
  })

  it('shows SPME as a real Experience entry that routes to the central research case study', () => {
    render(<MemoryRouter initialEntries={['/experience']}><App /></MemoryRouter>)
    const link = screen.getByRole('link', { name: /Student Researcher – SPME–MOI–MS Method Development/i })
    expect(link).toHaveAttribute('href', '/research/spme-moi-ms')
  })

  it('renders the professional analytical/R&D CTA without a GitHub call-to-action', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getByText(/My experience spans analytical chemistry, mass spectrometry/i)).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /GitHub/i })).not.toBeInTheDocument()
  })
})

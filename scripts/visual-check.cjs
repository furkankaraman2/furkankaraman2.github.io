const { chromium } = require('playwright')
const fs = require('fs')

const routes = ['/', '/research/spme-moi-ms', '/experience', '/experience/doping-control', '/experience/mta', '/experience/clinical-biochemistry', '/scientific-writing', '/about']

async function run() {
  fs.mkdirSync('qa', { recursive: true })
  const browser = await chromium.launch({ headless: true, executablePath: chromium.executablePath() })
  const results = []
  for (const device of [{name:'desktop', width:1440, height:1000}, {name:'mobile', width:390, height:844}]) {
    const page = await browser.newPage({ viewport: { width: device.width, height: device.height }, deviceScaleFactor: 1 })
    const errors = []
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
    page.on('pageerror', e => errors.push(e.message))
    for (const route of routes) {
      const response = await page.goto(`http://127.0.0.1:5173${route}`, { waitUntil: 'networkidle' })
      const state = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        viewport: document.documentElement.clientWidth,
        brokenImages: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src),
        h1: document.querySelector('h1')?.textContent,
        lang: document.documentElement.lang,
      }))
      const slug = route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')
      if (route === '/' || route === '/research/spme-moi-ms' || route === '/about') await page.screenshot({ path: `qa/${device.name}-${slug}.png`, fullPage: true })
      results.push({ device: device.name, route, status: response?.status(), ...state, errors: [...errors] })
      errors.length = 0
    }
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Türkçeye geç' }).click()
    results.push({ device: device.name, translation: await page.locator('h1').innerText(), storedLanguage: await page.evaluate(() => localStorage.getItem('portfolio-language')) })
    await page.close()
  }
  await browser.close()
  fs.writeFileSync('qa/results.json', JSON.stringify(results, null, 2))
  const failures = results.filter(x => x.status && (x.status !== 200 || x.width > x.viewport || x.brokenImages.length || x.errors.length))
  console.log(JSON.stringify({ checks: results.length, failures }, null, 2))
  if (failures.length) process.exit(1)
}

run().catch(error => { console.error(error); process.exit(1) })

import { dopingExperience } from './doping'
import { mtaExperience } from './mta'

const spmeExperience = {
  slug: 'spme-moi-ms', order: 1, visible: true, type: 'research', route: '/research/spme-moi-ms',
  title: { en: 'Student Researcher · SPME–MOI–MS', tr: 'Öğrenci Araştırmacı · SPME–MOI–MS' },
  institution: { en: 'METU · Assoc. Prof. Dr. Ezel Boyacı Laboratory', tr: 'ODTÜ · Doç. Dr. Ezel Boyacı Laboratuvarı' },
  date: { en: 'Aug 2025 — Jan 2026', tr: 'Ağu 2025 — Oca 2026' },
  summary: { en: 'Method development for L-histidine using PAN-bound SPME coatings and a direct MOI–MS interface.', tr: 'PAN bağlı SPME kaplamaları ve doğrudan MOI–MS arayüzü ile L-histidin için yöntem geliştirme.' },
  methods: ['SPME', 'MOI–MS', 'PAN coating', 'Calibration']
}

const clinicalExperience = {
  slug: 'clinical-biochemistry', order: 4, visible: true, type: 'clinical',
  title: { en: 'Biochemistry Intern', tr: 'Biyokimya Stajyeri' },
  institution: { en: 'Ahi Evren Chest, Heart and Vascular Surgery Training and Research Hospital', tr: 'Ahi Evren Göğüs Kalp ve Damar Cerrahisi Eğitim ve Araştırma Hastanesi' },
  date: { en: 'Jun — Jul 2019', tr: 'Haz — Tem 2019' },
  summary: { en: 'Early clinical-laboratory experience across bacterial culture, antimicrobial susceptibility, routine biochemistry, hemogram and coagulation testing.', tr: 'Bakteri kültürü, antimikrobiyal duyarlılık, rutin biyokimya, hemogram ve koagülasyon testlerini kapsayan erken dönem klinik laboratuvar deneyimi.' },
  role: { en: 'I worked with more than 80 bacterial isolates for susceptibility testing and took part in daily workflows exceeding 100 patient samples, including operation and calibration of routine analyzers.', tr: 'Duyarlılık testleri için 80’den fazla bakteriyel izolatla çalıştım; rutin analizörlerin kullanımı ve kalibrasyonu dahil günlük 100 hasta numunesini aşan iş akışlarına katıldım.' },
  workflow: ['Clinical sample', 'Culture / identification', 'Disk diffusion / MIC', 'Routine biochemistry', 'Hemogram / coagulation', 'Quality checks'],
  methods: ['Bacterial culture', 'Disk diffusion', 'MIC', 'Biochemistry tests', 'Hemogram', 'Coagulation'],
  sections: []
}

export const experiences = [spmeExperience, dopingExperience, mtaExperience, clinicalExperience]

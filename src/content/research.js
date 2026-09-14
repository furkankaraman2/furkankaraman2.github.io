export const researchMetrics = [
  { value: '0.987', label: { en: 'Calibration R²', tr: 'Kalibrasyon R²' } },
  { value: '13%', label: { en: 'Lowest RSD · HLB-SAX', tr: 'En düşük RSD · HLB-SAX' } },
  { value: '5 min', label: { en: 'Highest extraction response', tr: 'En yüksek ekstraksiyon yanıtı' } },
  { value: '1 min', label: { en: 'Highest desorption response', tr: 'En yüksek desorpsiyon yanıtı' } },
]

export const phases = [
  { name: 'HLB', rsd: 28, amount: 6.57, recovery: 0.18 },
  { name: 'PMAA', rsd: 17, amount: 4.84, recovery: 0.13 },
  { name: 'HLB-SAX', rsd: 13, amount: 6.10, recovery: 0.16, selected: true },
]

export const researchWorkflow = [
  {
    id: 'context', short: { en: 'Clinical context', tr: 'Klinik bağlam' },
    title: { en: 'From an invasive reference test to an analytical sampling question', tr: 'İnvaziv referans testten analitik örnekleme sorusuna' },
    text: {
      en: ['The report frames malignant hyperthermia as a time-critical pharmacogenetic disorder mainly associated with RYR1. The conventional IVCT workflow requires fresh muscle tissue, with the report highlighting a recovery period that can reach six weeks, a roughly six-hour tissue-viability window and long reporting delays in some cases.', 'That limitation shaped the analytical question: could a small, biocompatible extraction probe collect a molecular target rapidly enough to feed a direct mass-spectrometric interface with much less sample handling?'],
      tr: ['Raporum malign hipertermiyi ağırlıklı olarak RYR1 ile ilişkili, zamana duyarlı farmakogenetik bir durum olarak ele alıyor. Geleneksel IVCT iş akışı taze kas dokusu gerektiriyor; raporda iyileşmenin altı haftaya kadar uzayabilmesi, yaklaşık altı saatlik doku canlılığı penceresi ve bazı durumlarda uzun raporlama gecikmeleri öne çıkıyor.', 'Bu sınırlamalar analitik soruyu belirledi: küçük ve biyouyumlu bir ekstraksiyon probu, çok daha az numune işlemiyle doğrudan kütle spektrometrik arayüze aktarılabilecek kadar hızlı bir moleküler örnekleme sağlayabilir mi?']
    }, art: 'mh'
  },
  {
    id: 'spme', short: { en: 'SPME extraction', tr: 'SPME ekstraksiyonu' },
    title: { en: 'Selective uptake on a PAN-bound SPME coating', tr: 'PAN bağlı SPME kaplamasında seçici alım' },
    text: {
      en: ['SPME uses a coated fiber as both the sampling and extraction element. In this project, HLB, HLB-SAX and PMAA particles were incorporated into a PAN binder matrix and compared for L-histidine uptake.', 'PAN was important beyond simple adhesion. The report describes it as a biocompatible, size-selective matrix that helps stabilize the coating while limiting access of large macromolecules and allowing small analytes such as histidine to diffuse toward the extractive particles.'],
      tr: ['SPME’de kaplı fiber hem örnekleme hem ekstraksiyon elemanı olarak görev yapar. Bu projede HLB, HLB-SAX ve PMAA parçacıkları PAN bağlayıcı matrise dahil edilerek L-histidin alımı açısından karşılaştırıldı.', 'PAN yalnızca yapışmayı sağlamadı. Raporda kaplamayı mekanik olarak kararlı tutan, büyük makromoleküllerin erişimini sınırlarken histidin gibi küçük analitlerin ekstraktif parçacıklara difüzyonuna izin veren biyouyumlu ve boyut seçici bir matris olarak ele alındı.']
    }, image: '/images/research/spme/fiber-interface.webp', caption: { en: 'Coated SPME fiber positioned at the experimental interface.', tr: 'Deneysel arayüzde konumlandırılmış kaplı SPME fiber.' }
  },
  {
    id: 'phase', short: { en: 'Phase selection', tr: 'Faz seçimi' },
    title: { en: 'Why HLB-SAX moved forward', tr: 'HLB-SAX neden seçildi?' },
    text: {
      en: ['The three coatings were evaluated using both recovery and precision. HLB produced the highest recovered amount in the comparison but also the largest variability. PMAA reduced variability but gave the lowest recovered amount.', 'HLB-SAX provided the lowest %RSD at 13%, with 6.10 ng eluted and 0.16 recovery in the reported comparison. That balance made reproducibility—not simply the largest signal—the deciding factor for the next optimization steps.'],
      tr: ['Üç kaplama hem geri kazanım hem de hassasiyet açısından değerlendirildi. HLB karşılaştırmada en yüksek elüe edilen miktarı verirken aynı zamanda en yüksek değişkenliği gösterdi. PMAA değişkenliği azalttı ancak en düşük elüe edilen miktarı verdi.', 'HLB-SAX raporlanan karşılaştırmada %13 ile en düşük %RSD değerini, 6,10 ng elüe edilen miktarı ve 0,16 recovery değerini sağladı. Böylece sonraki optimizasyon aşamalarında yalnızca en büyük sinyal değil, tekrarlanabilirlik ile sinyal arasındaki denge belirleyici oldu.']
    }, image: '/images/research/spme/phase-comparison.webp', caption: { en: 'Phase-comparison table from my final report.', tr: 'Final raporumdaki faz karşılaştırma tablosu.' }
  },
  {
    id: 'desorption', short: { en: 'Desorption optimization', tr: 'Desorpsiyon optimizasyonu' },
    title: { en: 'Breaking the ionic interaction without losing analytical response', tr: 'Analitik yanıtı kaybetmeden iyonik etkileşimi kırmak' },
    text: {
      en: ['Histidine was extracted from PBS at pH 7.4, where the analyte can interact strongly with the positively charged SAX sites. Neutral methanol/water systems tested in the report did not provide detectable response under the evaluated conditions.', 'An acidified ACN/MeOH/H₂O system (40:40:20, v/v/v, 0.1% formic acid) enabled effective release. Desorption times of 1, 5, 10, 20 and 30 minutes were compared; the highest response occurred at 1 minute. The report also describes a second desorption as a useful cleaning/recovery step that reduced salt-related interference.'],
      tr: ['Histidin pH 7,4 PBS ortamından ekstrakte edildi; bu koşullarda analit pozitif yüklü SAX bölgeleriyle güçlü etkileşim kurabilir. Raporda değerlendirilen nötr metanol/su sistemleri ölçülebilir yanıt üretmedi.', 'Asitlendirilmiş ACN/MeOH/H₂O sistemi (40:40:20, v/v/v, %0,1 formik asit) etkili salımı sağladı. 1, 5, 10, 20 ve 30 dakikalık desorpsiyon süreleri karşılaştırıldı ve en yüksek yanıt 1 dakikada elde edildi. Raporda ikinci desorpsiyonun tuz kaynaklı girişimleri azaltan ek bir temizleme/geri kazanım adımı olduğu da tartışılıyor.']
    }, image: '/images/research/spme/desorption-time.webp', caption: { en: 'Desorption-time comparison reported for the optimized HLB-SAX workflow.', tr: 'Optimize edilen HLB-SAX iş akışında raporlanan desorpsiyon süresi karşılaştırması.' }
  },
  {
    id: 'moi', short: { en: 'MOI–MS interface', tr: 'MOI–MS arayüzü' },
    title: { en: 'Direct transfer to mass spectrometry', tr: 'Kütle spektrometresine doğrudan aktarım' },
    text: {
      en: ['The MOI configuration allowed the desorbed analyte to be introduced to the mass spectrometer without a chromatographic separation step. The project used positive-ion operation and optimized acquisition conditions to obtain a stable histidine response.', 'This direct interface was central to the speed of the workflow: after extraction and a short desorption, the fiber could be evaluated rapidly rather than entering a long separation sequence.'],
      tr: ['MOI düzeni, desorbe edilen analitin kromatografik ayırma basamağı olmadan kütle spektrometresine aktarılmasını sağladı. Projede pozitif iyon modunda çalışıldı ve kararlı histidin yanıtı için edinim koşulları optimize edildi.', 'Bu doğrudan arayüz iş akışının hızında merkezi rol oynadı: ekstraksiyon ve kısa desorpsiyondan sonra fiber, uzun bir ayırma dizisine girmeden hızlı biçimde değerlendirilebildi.']
    }, image: '/images/research/spme/moi-ms.webp', caption: { en: 'MOI–MS experimental setup documented during my project.', tr: 'Projem sırasında belgelenen MOI–MS deney düzeneği.' }
  },
  {
    id: 'quant', short: { en: 'Quantitative evaluation', tr: 'Nicel değerlendirme' },
    title: { en: 'External calibration and a compact final workflow', tr: 'Dış kalibrasyon ve kompakt final iş akışı' },
    text: {
      en: ['L-histidine detectability was checked with an external six-point calibration spanning 25 ppb to 1 ppm. The reported regression was y = 1505.6x − 36145 with R² = 0.987.', 'Extraction times of 2, 5, 15, 30 and 60 minutes were tested in PBS containing 2.5 ppm histidine. Five minutes produced the highest response under the evaluated conditions. Combined with the one-minute desorption, the study converged on a short analytical sequence that remained explicitly framed as a feasibility workflow requiring further development.'],
      tr: ['L-histidin tayin edilebilirliği 25 ppb ile 1 ppm arasında altı noktalı dış kalibrasyonla kontrol edildi. Raporda regresyon y = 1505,6x − 36145 ve R² = 0,987 olarak verildi.', '2,5 ppm histidin içeren PBS ortamında 2, 5, 15, 30 ve 60 dakikalık ekstraksiyon süreleri test edildi. Değerlendirilen koşullarda 5 dakika en yüksek yanıtı verdi. Bir dakikalık desorpsiyonla birlikte çalışma kısa bir analitik diziye yaklaştı; ancak sonuç raporda daha fazla geliştirme gerektiren bir fizibilite iş akışı olarak açıkça sınırlandırıldı.']
    }, image: '/images/research/spme/calibration.webp', caption: { en: 'Six-point L-histidine calibration plot from my final report.', tr: 'Final raporumdaki altı noktalı L-histidin kalibrasyon grafiği.' }
  }
]

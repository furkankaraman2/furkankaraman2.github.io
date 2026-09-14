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
    id: 'context',
    short: { en: 'Context', tr: 'Bağlam' },
    eyebrow: '01 · CONTEXT / BACKGROUND',
    title: {
      en: 'Turning a clinical limitation into an analytical sampling problem',
      tr: 'Klinik bir sınırlamayı analitik örnekleme problemine dönüştürmek'
    },
    text: {
      en: [
        'The project began from a practical limitation in malignant-hyperthermia testing. The report describes the In-Vitro Contracture Test (IVCT) as dependent on surgically collected fresh muscle tissue, with a recovery period that can extend to about six weeks and a narrow roughly six-hour viability window for the excised tissue. In some settings, the overall route to a definitive answer can also be very long.',
        'Rather than treating that clinical background as a claim that a new diagnostic test had already been established, I used it to define an analytical question: can a small extractive probe collect a candidate molecular target quickly, with little sample handling, and transfer it directly to mass spectrometry? The work therefore remained a feasibility and method-development study.'
      ],
      tr: [
        'Çalışmanın çıkış noktası malign hipertermi testlerindeki pratik bir sınırlamaydı. Raporda In-Vitro Contracture Test’in (IVCT) cerrahi olarak alınan taze kas dokusuna bağlı olduğu; biyopsi sonrası iyileşmenin yaklaşık altı haftaya kadar uzayabildiği ve alınan dokunun canlılığını koruduğu yaklaşık altı saatlik dar bir analiz penceresi bulunduğu anlatılıyor. Bazı durumlarda kesin sonuca ulaşan toplam süreç de oldukça uzun olabiliyor.',
        'Bu klinik arka planı “yeni bir tanı testi geliştirdim” şeklinde sunmak yerine analitik bir probleme dönüştürdüm: küçük bir ekstraksiyon probu, hedeflenen bir molekülü kısa sürede ve sınırlı numune işlemiyle toplayıp doğrudan kütle spektrometrisine aktarabilir mi? Bu nedenle çalışma, klinik olarak doğrulanmış tanı testi değil; yöntem geliştirme ve fizibilite araştırması olarak ele alındı.'
      ]
    },
    art: 'mh'
  },
  {
    id: 'environment',
    short: { en: 'Research environment', tr: 'Araştırma ortamı' },
    eyebrow: '02 · RESEARCH ENVIRONMENT',
    title: {
      en: 'A small-fiber workflow built around direct MS readout',
      tr: 'Doğrudan MS okuması etrafında kurulan küçük fiber tabanlı iş akışı'
    },
    text: {
      en: [
        'I carried out the project in Assoc. Prof. Dr. Ezel Boyacı’s laboratory at METU between August 2025 and January 2026. My work moved repeatedly between wet-chemistry preparation and instrument-facing experiments: preparing polymeric phases, producing PAN-bound SPME coatings, performing extractions and desorptions, and evaluating the resulting signal through the MOI–MS interface.',
        'The central advantage of this setup was its compact analytical sequence. The fiber acts as both sampling and extraction element; after desorption, the MOI configuration transfers analyte into the mass spectrometer without a chromatographic separation step. That made the project especially useful for learning how sample preparation chemistry and instrumental response have to be optimized together rather than treated as separate tasks.'
      ],
      tr: [
        'Projeyi Ağustos 2025–Ocak 2026 döneminde ODTÜ’de Doç. Dr. Ezel Boyacı’nın laboratuvarında yürüttüm. Çalışmam yaş kimya hazırlıkları ile cihaz odaklı deneyler arasında sürekli gidip geliyordu: polimerik fazların hazırlanması, PAN bağlı SPME kaplamalarının üretilmesi, ekstraksiyon ve desorpsiyon deneylerinin yapılması ve oluşan yanıtın MOI–MS arayüzü üzerinden değerlendirilmesi.',
        'Bu düzenin benim için en öğretici yönü, analitik zincirin oldukça kompakt olmasıydı. Fiber hem örnekleme hem ekstraksiyon elemanı olarak görev yapıyor; desorpsiyon sonrasında MOI düzeni analiti kromatografik ayırma basamağı olmadan doğrudan kütle spektrometresine taşıyordu. Böylece numune hazırlama kimyasının ve cihaz yanıtının birbirinden bağımsız değil, birlikte optimize edilmesi gerektiğini uygulamalı olarak gördüm.'
      ]
    },
    image: '/images/research/spme/fiber-interface.webp',
    caption: {
      en: 'SPME fiber at the experimental interface during the project.',
      tr: 'Proje sırasında deneysel arayüzde kullanılan SPME fiber.'
    }
  },
  {
    id: 'spme',
    short: { en: 'SPME extraction', tr: 'SPME ekstraksiyonu' },
    eyebrow: '03 · SPME EXTRACTION',
    title: {
      en: 'The coating is part of the measurement, not merely a support',
      tr: 'Kaplama yalnızca taşıyıcı değil, ölçümün aktif bir parçası'
    },
    text: {
      en: [
        'SPME is a miniaturized equilibrium-based sampling technique in which target analytes partition between the sample and a coated fiber. In this project the fiber was immersed directly in liquid samples, then transferred to a suitable solvent for desorption before MS analysis. This reduced the number of handling steps compared with a conventional extract-and-transfer sequence.',
        'Polyacrylonitrile (PAN) served as the binder that immobilized HLB, HLB-SAX or PMAA particles on the fiber. Its role was also analytical: the report describes PAN as a biocompatible size-selective matrix that helps exclude larger macromolecules while allowing small species such as L-histidine to diffuse toward the extractive phase. Coating consistency was checked under optical microscopy because thickness and mechanical stability can influence extraction reproducibility.'
      ],
      tr: [
        'SPME, hedef analitin numune ile kaplı fiber arasında dağıldığı miniaturize ve denge temelli bir örnekleme yaklaşımıdır. Bu projede fiber sıvı numuneye doğrudan daldırılıyor, ekstraksiyonun ardından uygun bir çözücüye alınarak desorbe ediliyor ve daha sonra MS analizine aktarılıyordu. Bu yaklaşım, klasik ekstraksiyon-aktarma dizisine göre numune ile temas eden basamakların azaltılmasına imkân veriyordu.',
        'Poliakrilonitril (PAN), HLB, HLB-SAX veya PMAA parçacıklarını fiber yüzeyinde tutan bağlayıcı matris olarak kullanıldı. Fakat görevi yalnızca mekanik değildi: raporda PAN, daha büyük makromoleküllerin iç bölgeye girişini sınırlarken L-histidin gibi küçük moleküllerin ekstraktif faza ulaşmasına izin veren biyouyumlu ve boyut seçici bir bariyer olarak ele alınıyor. Kaplama kalınlığı ve bütünlüğü ekstraksiyon tekrarlanabilirliğini etkileyebileceği için kaplamalar optik mikroskop altında da kontrol edildi.'
      ]
    },
    art: 'spme'
  },
  {
    id: 'phase',
    short: { en: 'Extractive phases', tr: 'Ekstraktif fazlar' },
    eyebrow: '04 · EXTRACTIVE PHASE DEVELOPMENT',
    title: {
      en: 'HLB, HLB-SAX and PMAA were compared through interaction chemistry and reproducibility',
      tr: 'HLB, HLB-SAX ve PMAA; etkileşim kimyası ve tekrarlanabilirlik üzerinden karşılaştırıldı'
    },
    text: {
      en: [
        'The three phases were chosen to probe different retention mechanisms. HLB provided mixed hydrophilic–lipophilic interactions; HLB-SAX added strong anion-exchange sites through positively charged quaternary ammonium groups; PMAA introduced negatively charged carboxylate functionality. At pH 7.4, histidine is zwitterionic, so both hydrogen-bonding and ionic interactions can matter depending on the coating.',
        'The decision was not made by selecting the coating with the largest recovered amount. HLB gave 6.57 ng with 0.18 recovery but 28% RSD. PMAA gave 4.84 ng, 0.13 recovery and 17% RSD. HLB-SAX produced 6.10 ng with 0.16 recovery and the lowest variability, 13% RSD. For the next optimization stages, that balance of signal and reproducibility made HLB-SAX the most defensible choice.'
      ],
      tr: [
        'Üç faz, farklı tutunma mekanizmalarını sınamak için seçildi. HLB hidrofilik-lipofilik karma etkileşimler sağlarken HLB-SAX, pozitif yüklü kuaterner amonyum grupları üzerinden güçlü anyon değişim bölgeleri ekliyordu. PMAA ise negatif yüklü karboksilat fonksiyonları taşıyordu. Histidin pH 7,4 civarında zwitteriyonik özellik gösterdiği için kaplamaya bağlı olarak hidrojen bağları ve iyonik etkileşimler birlikte önem kazanabiliyor.',
        'Faz seçimini yalnızca “en yüksek geri kazanımı hangisi verdi?” sorusuyla yapmadım. HLB 6,57 ng ve 0,18 recovery değerine rağmen %28 RSD gösterdi. PMAA’da 4,84 ng, 0,13 recovery ve %17 RSD elde edildi. HLB-SAX ise 6,10 ng ve 0,16 recovery ile birlikte %13 RSD ile en düşük değişkenliği sağladı. Sonraki optimizasyonlara geçerken sinyal büyüklüğü ile tekrarlanabilirlik arasındaki bu denge HLB-SAX seçiminde belirleyici oldu.'
      ]
    },
    art: 'spme'
  },
  {
    id: 'desorption',
    short: { en: 'Desorption optimization', tr: 'Desorpsiyon optimizasyonu' },
    eyebrow: '05 · DESORPTION OPTIMIZATION',
    title: {
      en: 'Releasing histidine meant deliberately weakening the SAX interaction',
      tr: 'Histidini serbest bırakmak SAX etkileşimini kontrollü biçimde zayıflatmayı gerektirdi'
    },
    text: {
      en: [
        'Histidine was extracted from PBS at pH 7.4, where its deprotonated carboxylate can interact strongly with positively charged SAX sites. Methanol/water systems evaluated under the reported conditions did not give a detectable response. The successful solvent was ACN/MeOH/H₂O (40:40:20, v/v/v) containing 0.1% formic acid; acidification weakens the electrostatic interaction and improves analyte release.',
        'Time was then treated as a separate optimization variable. Desorption periods of 1, 5, 10, 20 and 30 minutes were compared, and the highest response occurred at 1 minute. A second desorption often produced a cleaner, stronger response; the report interprets this as a combination of residual analyte release and reduced salt-related ion suppression after part of the PBS-derived inorganic load had been removed.'
      ],
      tr: [
        'Histidin pH 7,4 PBS ortamından ekstrakte edildiğinde karboksilat grubu pozitif yüklü SAX bölgeleriyle güçlü elektrostatik etkileşim kurabiliyor. Raporda denenen metanol/su sistemleri değerlendirilen koşullarda ölçülebilir bir yanıt üretmedi. Etkili desorpsiyon sistemi %0,1 formik asit içeren ACN/MeOH/H₂O (40:40:20, v/v/v) oldu; asitlendirme, iyonik etkileşimi zayıflatarak analitin fazdan ayrılmasını kolaylaştırdı.',
        'Ardından süre bağımsız bir optimizasyon değişkeni olarak incelendi. 1, 5, 10, 20 ve 30 dakikalık desorpsiyonlar karşılaştırıldığında en yüksek yanıt 1 dakikada görüldü. İkinci desorpsiyonda daha temiz ve bazı deneylerde daha güçlü sinyal alınması; ilk adımda kalan analitin salınması ve PBS kaynaklı tuzların bir bölümünün uzaklaşmasıyla ion suppression etkisinin azalması üzerinden yorumlandı.'
      ]
    },
    art: 'sample'
  },
  {
    id: 'moi',
    short: { en: 'MOI–MS', tr: 'MOI–MS' },
    eyebrow: '06 · MOI–MS',
    title: {
      en: 'A direct interface connected extraction chemistry to the mass-spectrometric signal',
      tr: 'Doğrudan arayüz ekstraksiyon kimyasını kütle spektrometrik sinyale bağladı'
    },
    text: {
      en: [
        'The MOI–MS setup was operated in positive-ion mode and coupled directly to the SPME workflow. After desorption, analyte could be introduced into the mass spectrometer without an intervening chromatographic separation. Instrument and acquisition conditions were adjusted to obtain a stable and reproducible histidine response.',
        'For me, the important lesson was that “mass spectrometry” was not an isolated final box in the workflow. Changes in coating chemistry, solvent composition, salt load and desorption time all altered what the instrument ultimately saw. That direct feedback made the project a true method-development exercise rather than a sequence of unrelated laboratory tasks.'
      ],
      tr: [
        'MOI–MS düzeni pozitif iyon modunda çalıştırıldı ve SPME iş akışına doğrudan bağlandı. Desorpsiyon sonrasında analit, araya kromatografik ayırma basamağı girmeden kütle spektrometresine aktarılabiliyordu. Kararlı ve tekrarlanabilir histidin yanıtı için cihaz ve acquisition koşulları ayarlandı.',
        'Bu bölümde benim için önemli olan, “kütle spektrometrisi”ni iş akışının sonunda duran bağımsız bir kutu gibi görmemeyi öğrenmekti. Kaplama kimyası, çözücü bileşimi, tuz yükü veya desorpsiyon süresindeki değişiklikler cihazın gördüğü sinyali doğrudan etkiliyordu. Bu hızlı geri bildirim, çalışmayı birbirinden kopuk deneyler dizisi yerine gerçek bir yöntem geliştirme sürecine dönüştürdü.'
      ]
    },
    art: 'ms'
  },
  {
    id: 'quant',
    short: { en: 'Analytical evaluation', tr: 'Analitik değerlendirme' },
    eyebrow: '07 · ANALYTICAL EVALUATION',
    title: {
      en: 'Calibration, recovery and precision defined what “better” meant',
      tr: '“Daha iyi” kararını kalibrasyon, recovery ve precision birlikte belirledi'
    },
    text: {
      en: [
        'L-histidine detectability was evaluated with a six-point external calibration covering 25 ppb, 50 ppb, 100 ppb, 250 ppb, 500 ppb and 1 ppm. The reported regression was y = 1505.6x − 36145 with R² = 0.987. The calibration step established that the MOI–MS response could be assessed quantitatively over the tested concentration range rather than judged only by the visual presence of a peak.',
        'Extraction time was also tested at 2, 5, 15, 30 and 60 minutes using PBS at pH 7.4 containing 2.5 ppm histidine. Under those experimental conditions, 5 minutes gave the highest response. Combined with the 1-minute desorption result, the project converged on a short workflow, while the report explicitly notes that further refinement and validation would be required before any clinical application.'
      ],
      tr: [
        'L-histidinin tayin edilebilirliği 25 ppb, 50 ppb, 100 ppb, 250 ppb, 500 ppb ve 1 ppm seviyelerini içeren altı noktalı dış kalibrasyonla değerlendirildi. Raporda regresyon y = 1505,6x − 36145 ve R² = 0,987 olarak verildi. Bu aşama, MOI–MS yanıtının yalnızca “pik var/yok” düzeyinde değil, test edilen konsantrasyon aralığında nicel olarak değerlendirilebildiğini gösterdi.',
        'Ekstraksiyon süresi de pH 7,4 PBS içinde 2,5 ppm histidin kullanılarak 2, 5, 15, 30 ve 60 dakika için karşılaştırıldı. Deney koşullarında en yüksek yanıt 5 dakikada elde edildi. Bir dakikalık desorpsiyon sonucu ile birlikte yöntem oldukça kısa bir analitik dizide toplandı; ancak rapor, klinik uygulama öncesinde daha ileri optimizasyon ve validasyon gerektiğini açık biçimde koruyor.'
      ]
    },
    image: '/images/research/spme/fiber-interface.webp',
    caption: {
      en: 'Project photograph of the coated SPME fiber; quantitative evaluation used calibration, recovery and %RSD rather than signal size alone.',
      tr: 'Kaplı SPME fiberin proje sırasında çekilmiş görüntüsü; nicel değerlendirmede yalnızca sinyal büyüklüğü değil kalibrasyon, recovery ve %RSD birlikte kullanıldı.'
    }
  }
]

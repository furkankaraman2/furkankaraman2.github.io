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

export const researchStory = [
  {
    id: 'clinical-context',
    short: { en: 'Clinical context', tr: 'Klinik bağlam' },
    eyebrow: '01 · CONTEXT / BACKGROUND',
    title: {
      en: 'Why a faster, less invasive analytical route is worth exploring',
      tr: 'Daha hızlı ve daha az invaziv bir analitik yaklaşım neden araştırılmaya değer?'
    },
    text: {
      en: [
        'Malignant Hyperthermia is a life-threatening pharmacogenetic disorder in which exposure to triggering anesthetics can cause uncontrolled calcium release in skeletal muscle. The report frames the problem around RYR1-related calcium regulation and the speed at which an acute MH crisis can become clinically dangerous.',
        'The conventional In-Vitro Contracture Test (IVCT) is accurate but operationally demanding: it requires a surgical muscle biopsy, recovery can take weeks, fresh tissue must be tested within a narrow viability window of about six hours, specialized centers are limited, and the overall diagnostic process can be prolonged. Those limitations motivated the search for a smaller, faster analytical sampling strategy rather than an attempt to reproduce the entire clinical pathway.'
      ],
      tr: [
        'Malign Hipertermi, tetikleyici anesteziklere maruziyet sonrasında iskelet kasında kontrolsüz kalsiyum salınımına yol açabilen ve yaşamı tehdit eden farmakogenetik bir durumdur. Raporda problem, özellikle RYR1 ile ilişkili kalsiyum düzenlenmesi ve akut bir MH krizinin ne kadar hızlı ilerleyebildiği üzerinden ele alınıyor.',
        'Güncel In-Vitro Contracture Test (IVCT) güvenilir olmakla birlikte operasyonel açıdan zordur: cerrahi kas biyopsisi gerektirir, iyileşme haftalar sürebilir, taze dokunun yaklaşık altı saatlik dar bir canlılık penceresinde test edilmesi gerekir, uzman merkez sayısı sınırlıdır ve tanı süreci uzayabilir. Bu sınırlamalar, tüm klinik tanı sürecini yeniden üretmekten ziyade daha küçük ve daha hızlı bir analitik örnekleme yaklaşımını araştırma fikrini doğurdu.'
      ]
    },
    art: 'mh'
  },
  {
    id: 'spme-moi-concept',
    short: { en: 'SPME + MOI-MS', tr: 'SPME + MOI-MS' },
    eyebrow: '02 · ANALYTICAL CONCEPT',
    title: {
      en: 'Pairing selective microextraction with a direct mass-spectrometric interface',
      tr: 'Seçici mikroekstraksiyonu doğrudan kütle spektrometrisiyle birleştirmek'
    },
    text: {
      en: [
        'The proposed workflow combines Solid Phase Microextraction (SPME) with Microfluidic Open Interface Mass Spectrometry (MOI-MS). The idea is straightforward: use a small, biocompatible coated fiber to collect L-histidine selectively, release the analyte into a suitable desorption solvent, and introduce that solution directly to the mass spectrometer.',
        'Because MOI-MS does not require a chromatographic separation before detection, the quality of the upstream sampling and desorption steps becomes especially important. The project therefore treated extraction chemistry, coating design, solvent composition and reproducibility as one connected analytical system rather than as isolated experiments.'
      ],
      tr: [
        'Önerilen iş akışı Solid Phase Microextraction (SPME) ile Microfluidic Open Interface Mass Spectrometry (MOI-MS) tekniklerini bir araya getiriyor. Temel fikir; küçük ve biyouyumlu kaplı bir fiberle L-histidini seçici biçimde toplamak, uygun bir desorpsiyon çözeltisiyle analiti serbest bırakmak ve bu çözeltinin doğrudan kütle spektrometresine aktarılmasını sağlamak.',
        'MOI-MS ölçümünde kromatografik bir ayırma basamağı bulunmadığı için örnekleme ve desorpsiyonun kalitesi daha da kritik hale geliyor. Bu nedenle proje; ekstraksiyon kimyasını, kaplama tasarımını, çözücü bileşimini ve tekrarlanabilirliği birbirinden bağımsız deneyler olarak değil, tek bir analitik sistemin bağlantılı parçaları olarak ele aldı.'
      ]
    },
    art: 'workflow'
  },
  {
    id: 'spme-principle',
    short: { en: 'SPME extraction', tr: 'SPME ekstraksiyonu' },
    eyebrow: '03 · SPME PRINCIPLE',
    title: {
      en: 'A coated fiber acts as both the sampling surface and the extraction phase',
      tr: 'Kaplı fiber hem örnekleme yüzeyi hem de ekstraksiyon fazı olarak çalışır'
    },
    text: {
      en: [
        'SPME is a miniaturized, equilibrium-based sampling technique. During extraction, the fiber is immersed in the liquid matrix and the target analyte partitions between the sample and the selective coating through adsorption or absorption. After the extraction period, the same fiber is transferred to a desorption solvent so that the captured analyte can be released for instrumental measurement.',
        'In this project that compact geometry was attractive because sampling, clean-up and enrichment can be integrated into a single small device. It also creates an opportunity to reduce the amount of matrix entering the analytical system, which is especially relevant when working with biologically complex environments.'
      ],
      tr: [
        'SPME, denge temelli çalışan miniaturize bir örnekleme tekniğidir. Ekstraksiyon sırasında fiber sıvı matrikse daldırılır ve hedef analit, numune ile seçici kaplama arasında adsorpsiyon veya absorpsiyon yoluyla dağılım gösterir. Ekstraksiyon tamamlandığında aynı fiber desorpsiyon çözeltisine aktarılır ve tutulan analit cihazlı ölçüm için serbest bırakılır.',
        'Bu projede küçük fiber geometrisi özellikle avantajlıydı; çünkü örnekleme, matriks temizleme ve zenginleştirme işlevleri tek bir küçük elemanda birleşebiliyor. Ayrıca karmaşık biyolojik ortamlarda analitik sisteme taşınan matriks miktarını azaltma potansiyeli sunuyor.'
      ]
    },
    image: '/images/research/spme/fiber-interface.webp',
    caption: {
      en: 'SPME fiber / experimental interface photographed during the project.',
      tr: 'Proje sırasında fotoğraflanan SPME fiber / deneysel arayüz.'
    }
  },
  {
    id: 'extractive-phases',
    short: { en: 'Extractive phases', tr: 'Ekstraktif fazlar' },
    eyebrow: '04 · EXTRACTIVE PHASE DEVELOPMENT',
    title: {
      en: 'HLB, HLB-SAX and PMAA provided three different chemical environments for histidine',
      tr: 'HLB, HLB-SAX ve PMAA histidin için üç farklı kimyasal ortam oluşturdu'
    },
    text: {
      en: [
        'Three extractive phases were compared under the same experimental framework. HLB provided a hydrophilic–lipophilic polymer environment with mixed non-ionic interactions. HLB-SAX added positively charged strong-anion-exchange sites, creating a route for electrostatic attraction. PMAA introduced negatively charged carboxylate functionality and therefore a different pH-dependent ionic interaction profile.',
        'The purpose of the comparison was not simply to identify the coating with the largest signal. It was to understand how polarity, ionic character and functional-group chemistry affect L-histidine uptake, then select the phase that produced the most useful balance of signal and reproducibility.'
      ],
      tr: [
        'Aynı deneysel çerçevede üç farklı ekstraktif faz karşılaştırıldı. HLB, hidrofilik–lipofilik özellikleri bir araya getiren ve iyonik olmayan karma etkileşimler sağlayan bir polimer ortamı sundu. HLB-SAX, pozitif yüklü güçlü anyon değişim bölgeleri ekleyerek elektrostatik çekim için güçlü bir mekanizma oluşturdu. PMAA ise negatif yüklü karboksilat fonksiyonlarıyla pH’a bağlı farklı bir iyonik etkileşim profili sağladı.',
        'Karşılaştırmanın amacı yalnızca en büyük sinyali veren kaplamayı bulmak değildi. Polarite, iyonik karakter ve fonksiyonel grup kimyasının L-histidin alımını nasıl etkilediğini anlamak ve sinyal ile tekrarlanabilirlik arasında en uygun dengeyi sağlayan fazı seçmekti.'
      ]
    },
    art: 'selectivity'
  },
  {
    id: 'fiber-fabrication',
    short: { en: 'Fiber fabrication', tr: 'Fiber üretimi' },
    eyebrow: '05 · FIBER FABRICATION / PAN MATRIX',
    title: {
      en: 'Polymer preparation, dip-coating and the role of the PAN binder',
      tr: 'Polimer hazırlama, dip-coating ve PAN bağlayıcının rolü'
    },
    text: {
      en: [
        'The experimental work included preparation of the HLB polymer system, washing and drying of the synthesized material, and fabrication of coated SPME fibers by controlled dip-coating. Coating consistency mattered because non-uniform thickness or poor mechanical stability would translate directly into variable extraction performance.',
        'Polyacrylonitrile (PAN) was used as more than an adhesive. It immobilized the HLB, HLB-SAX or PMAA particles on the support, improved mechanical stability during repeated extraction–desorption cycles, and acted as a size-selective barrier. Large macromolecules are restricted while a small molecule such as L-histidine can diffuse through the PAN matrix to reach the embedded extractive particles.'
      ],
      tr: [
        'Deneysel çalışma; HLB polimer sisteminin hazırlanmasını, sentez sonrası yıkama ve kurutma basamaklarını ve kontrollü dip-coating ile kaplı SPME fiberlerin üretilmesini içerdi. Kaplama kalınlığının ve yüzeyin tutarlı olması önemliydi; çünkü düzensiz kaplama veya yetersiz mekanik dayanıklılık doğrudan ekstraksiyon değişkenliğine yansıyabilirdi.',
        'Polyacrylonitrile (PAN) yalnızca yapıştırıcı olarak kullanılmadı. HLB, HLB-SAX veya PMAA parçacıklarını taşıyıcı yüzey üzerinde sabitledi, tekrarlanan ekstraksiyon–desorpsiyon döngülerinde mekanik kararlılığı artırdı ve boyut seçici bir bariyer görevi gördü. Büyük makromoleküllerin kaplamaya erişimi sınırlandırılırken L-histidin gibi küçük bir molekül PAN matrisi boyunca difüze olarak ekstraktif parçacıklara ulaşabilir.'
      ]
    },
    art: 'coating'
  },
  {
    id: 'histidine-chemistry',
    short: { en: 'Histidine chemistry', tr: 'Histidin kimyası' },
    eyebrow: '06 · MOLECULAR INTERACTIONS',
    title: {
      en: 'The coating decision can be understood from histidine’s charge state at pH 7.4',
      tr: 'Kaplama seçimi histidinin pH 7,4’teki yük durumuyla açıklanabilir'
    },
    text: {
      en: [
        'At pH 7.4, L-histidine is predominantly zwitterionic: its carboxylate group is negatively charged, its α-amino group is protonated, and the imidazole side chain can participate in hydrogen bonding and weaker electrostatic interactions. That combination allows the molecule to interact differently with each coating.',
        'HLB can retain histidine through mixed non-ionic interactions such as hydrogen bonding and aromatic interactions. HLB-SAX introduces a strong electrostatic attraction between positively charged quaternary-ammonium sites and histidine’s deprotonated carboxylate. PMAA presents negatively charged carboxylate groups that can interact with the protonated amino functionality. Understanding these interactions helped convert the phase comparison from a purely empirical screen into a chemistry-driven selection problem.'
      ],
      tr: [
        'pH 7,4’te L-histidin ağırlıklı olarak zwitteriyonik yapıdadır: karboksilat grubu negatif yüklüdür, α-amino grubu protonlanmıştır ve imidazol yan zinciri hidrojen bağlarına ve daha zayıf elektrostatik etkileşimlere katılabilir. Bu yapı histidinin her kaplamayla farklı biçimde etkileşmesine olanak verir.',
        'HLB, hidrojen bağları ve aromatik etkileşimler gibi iyonik olmayan karma mekanizmalarla histidini tutabilir. HLB-SAX üzerindeki pozitif kuaterner amonyum bölgeleri ile histidinin deprotonlanmış karboksilat grubu arasında güçlü elektrostatik çekim oluşur. PMAA ise negatif karboksilat gruplarıyla protonlanmış amino fonksiyonuna etkileşim fırsatı sunar. Bu kimyasal çerçeve, faz karşılaştırmasını yalnızca deneysel bir taramadan çıkarıp mekanizma temelli bir seçime dönüştürdü.'
      ]
    },
    art: 'histidine'
  },
  {
    id: 'calibration',
    short: { en: 'Calibration', tr: 'Kalibrasyon' },
    eyebrow: '07 · MOI-MS CALIBRATION',
    title: {
      en: 'External calibration first established that L-histidine could be measured quantitatively by MOI-MS',
      tr: 'Önce dış kalibrasyonla L-histidinin MOI-MS ile nicel olarak ölçülebildiği gösterildi'
    },
    text: {
      en: [
        'Before optimizing the extraction itself, detectability was checked with a six-point external calibration covering 25, 50, 100, 250 and 500 ppb plus 1 ppm L-histidine. Standards were prepared in MeOH/H₂O (50:50, v/v) containing 0.1% formic acid to support positive-ESI ionization.',
        'The reported regression was y = 1505.6x − 36145 with R² = 0.987. That result provided a quantitative reference for the later SPME experiments and confirmed that changes in extraction or desorption could be evaluated against a stable MOI-MS response.'
      ],
      tr: [
        'Ekstraksiyon optimizasyonuna geçmeden önce L-histidinin MOI-MS ile ölçülebilirliği altı noktalı dış kalibrasyonla değerlendirildi. 25, 50, 100, 250 ve 500 ppb ile 1 ppm seviyeleri kullanıldı; standartlar pozitif ESI iyonlaşmasını desteklemek amacıyla %0,1 formik asit içeren MeOH/H₂O (50:50, v/v) ortamında hazırlandı.',
        'Raporda regresyon denklemi y = 1505,6x − 36145 ve R² = 0,987 olarak verildi. Bu sonuç sonraki SPME deneyleri için nicel bir referans oluşturdu ve ekstraksiyon ya da desorpsiyon koşullarındaki değişikliklerin kararlı bir MOI-MS yanıtı üzerinden değerlendirilebildiğini gösterdi.'
      ]
    },
    image: '/images/research/spme/calibration.webp',
    caption: {
      en: 'Six-point L-histidine external calibration reported for the MOI-MS platform (R² = 0.987).',
      tr: 'MOI-MS platformu için raporlanan altı noktalı L-histidin dış kalibrasyonu (R² = 0,987).'
    }
  },
  {
    id: 'phase-selection',
    short: { en: 'Phase selection', tr: 'Faz seçimi' },
    eyebrow: '08 · PHASE SELECTION',
    title: {
      en: 'HLB-SAX was selected because reproducibility mattered more than the largest absolute signal',
      tr: 'HLB-SAX, en büyük mutlak sinyalden çok tekrarlanabilirlik nedeniyle seçildi'
    },
    text: {
      en: [
        'HLB produced the highest eluted amount in the reported comparison at 6.57 ng with 0.18 recovery, but its %RSD was 28. PMAA reduced variability to 17% RSD, yet produced the lowest eluted amount at 4.84 ng and 0.13 recovery.',
        'HLB-SAX provided 6.10 ng eluted amount, 0.16 recovery and the lowest variability at 13% RSD. The study therefore prioritized precision and reproducibility over the single highest recovery value. For a method intended to compare samples consistently, that balance made HLB-SAX the strongest candidate for the subsequent optimization experiments.'
      ],
      tr: [
        'Rapordaki karşılaştırmada HLB 6,57 ng elüe edilen miktar ve 0,18 recovery ile en yüksek mutlak yanıtı verdi; ancak %RSD değeri 28’di. PMAA değişkenliği %17 RSD’ye düşürdü fakat 4,84 ng elüe edilen miktar ve 0,13 recovery ile en düşük sinyali verdi.',
        'HLB-SAX ise 6,10 ng elüe edilen miktar, 0,16 recovery ve %13 ile en düşük değişkenliği sağladı. Bu nedenle çalışmada tek başına en yüksek recovery yerine hassasiyet ve tekrarlanabilirlik önceliklendirildi. Numuneleri tutarlı biçimde karşılaştırmayı hedefleyen bir yöntem için bu denge HLB-SAX’ı sonraki optimizasyonların en güçlü adayı haline getirdi.'
      ]
    },
    image: '/images/research/spme/phase-comparison.webp',
    caption: {
      en: 'Report comparison of HLB, PMAA and HLB-SAX by %RSD, eluted amount and recovery.',
      tr: 'HLB, PMAA ve HLB-SAX fazlarının %RSD, elüe edilen miktar ve recovery açısından rapor karşılaştırması.'
    }
  },
  {
    id: 'desorption',
    short: { en: 'Desorption', tr: 'Desorpsiyon' },
    eyebrow: '09 · DESORPTION OPTIMIZATION',
    title: {
      en: 'The solvent had to disrupt the same ionic interaction that made HLB-SAX selective',
      tr: 'Çözücü, HLB-SAX’ı seçici yapan iyonik etkileşimi kırmak zorundaydı'
    },
    text: {
      en: [
        'Histidine was strongly retained on HLB-SAX through electrostatic attraction between its carboxylate group and the positively charged SAX sites. Solvent screening showed that the tested MeOH/H₂O systems did not provide a detectable response, whereas ACN/MeOH/H₂O (40:40:20, v/v/v) containing 0.1% formic acid enabled effective release.',
        'The acidic environment weakens the ionic interaction by increasing protonation of the carboxylate functionality. Desorption times of 1, 5, 10, 20 and 30 minutes were then compared; the highest response occurred at 1 minute. A second desorption step often produced a stronger signal, which the report discusses in terms of delayed release and a cleaner extract after partial removal of PBS-derived salts and associated ion suppression.'
      ],
      tr: [
        'Histidin, negatif karboksilat grubu ile pozitif yüklü SAX bölgeleri arasındaki elektrostatik çekim nedeniyle HLB-SAX üzerinde güçlü biçimde tutuluyordu. Çözücü taramasında test edilen MeOH/H₂O sistemleri ölçülebilir yanıt oluşturmazken, %0,1 formik asit içeren ACN/MeOH/H₂O (40:40:20, v/v/v) karışımı etkili analit salımı sağladı.',
        'Asidik ortam karboksilat fonksiyonunun protonlanmasını artırarak iyonik çekimi zayıflatır. Daha sonra 1, 5, 10, 20 ve 30 dakikalık desorpsiyon süreleri karşılaştırıldı; en yüksek yanıt 1 dakikada elde edildi. İkinci desorpsiyonun birçok durumda daha yüksek sinyal vermesi ise raporda gecikmiş analit salımı ve PBS kaynaklı tuzların kısmen uzaklaşmasıyla azalan iyon baskılanması üzerinden tartışıldı.'
      ]
    },
    image: '/images/research/spme/desorption-time.webp',
    caption: { en: 'Desorption-time comparison from the report; the highest response was obtained at 1 minute.', tr: 'Rapordaki desorpsiyon süresi karşılaştırması; en yüksek yanıt 1 dakikada elde edildi.' }
  },
  {
    id: 'final-workflow',
    short: { en: 'Final workflow', tr: 'Final iş akışı' },
    eyebrow: '10 · RESULT / FEASIBILITY',
    title: {
      en: 'A compact sequence emerged: about 5 minutes of extraction, 1 minute of desorption, then MOI-MS',
      tr: 'Kompakt bir dizi ortaya çıktı: yaklaşık 5 dakika ekstraksiyon, 1 dakika desorpsiyon ve ardından MOI-MS'
    },
    text: {
      en: [
        'Extraction time was evaluated at 2, 5, 15, 30 and 60 minutes in PBS at pH 7.4 containing 2.5 ppm histidine. Under the tested conditions, 5 minutes produced the highest response. Combined with the one-minute desorption condition, the work converged on a short analytical sequence before direct MOI-MS measurement.',
        'The project should be interpreted as method-development and feasibility research, not as a clinically validated diagnostic test. Its value lies in showing how coating chemistry, size-selective PAN architecture, ionic interactions, solvent composition, timing, calibration and reproducibility can be integrated into a rapid direct-MS workflow that could justify further development for minimally invasive biomarker analysis.'
      ],
      tr: [
        'Ekstraksiyon süresi pH 7,4 PBS içinde 2,5 ppm histidin kullanılarak 2, 5, 15, 30 ve 60 dakika seviyelerinde değerlendirildi. Test edilen koşullarda en yüksek yanıt 5 dakikada elde edildi. Bir dakikalık desorpsiyon koşuluyla birlikte çalışma, doğrudan MOI-MS ölçümünden önce oldukça kısa bir analitik diziye ulaştı.',
        'Bu proje klinik olarak doğrulanmış bir tanı testi değil; yöntem geliştirme ve fizibilite araştırması olarak değerlendirilmelidir. Çalışmanın asıl değeri; kaplama kimyası, boyut seçici PAN mimarisi, iyonik etkileşimler, çözücü bileşimi, süre, kalibrasyon ve tekrarlanabilirliğin hızlı bir doğrudan-MS iş akışında nasıl bir araya getirilebildiğini göstermesidir.'
      ]
    },
    art: 'ms'
  },
]

export const researchWorkflow = [
  researchStory[1],
  researchStory[2],
  researchStory[3],
  researchStory[4],
  researchStory[8],
  researchStory[9],
]

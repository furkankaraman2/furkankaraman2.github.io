export const mtaExperience = {
  slug: 'mta',
  order: 3,
  visible: true,
  type: 'geochemical',
  title: { en: 'Analytical Chemistry Intern · Geochemical Analysis', tr: 'Analitik Kimya Stajyeri · Jeokimyasal Analiz' },
  institution: { en: 'General Directorate of Mineral Research and Exploration (MTA)', tr: 'Maden Tetkik ve Arama Genel Müdürlüğü (MTA)' },
  date: { en: 'Jul — Aug 2024', tr: 'Tem — Ağu 2024' },
  summary: {
    en: 'Thirty working days moving from geochemical sample preparation to XRF, ICP-OES, ICP-MS, classical wet chemistry and coal/material characterization.',
    tr: 'Jeokimyasal numune hazırlamadan XRF, ICP-OES, ICP-MS, klasik yaş kimya ve kömür/malzeme karakterizasyonuna uzanan otuz iş günlük analitik kimya stajı.'
  },
  role: {
    en: 'I participated in sample coding and preparation, drying and weighing, pellet and dissolution workflows, reference-solution and calibration work, and result review. The placement later broadened into gravimetric/titrimetric analysis and coal characterization. XRD and MLA were observation visits rather than hands-on operation.',
    tr: 'Numune kodlama ve hazırlama, kurutma-tartım, pellet ve çözündürme iş akışları, referans çözelti/kalibrasyon çalışmaları ve sonuç inceleme aşamalarına katıldım. Stajın ilerleyen bölümünde gravimetrik-titrimetrik analizler ile kömür karakterizasyonu da yer aldı. XRD ve MLA ise uygulamalı cihaz kullanımı değil gözlem ziyaretleriydi.'
  },
  workflow: [
    { en: 'Coding & traceability', tr: 'Kodlama / izlenebilirlik' },
    { en: 'Drying / loss on ignition', tr: 'Kurutma / kızdırma kaybı' },
    { en: 'Pellet or digestion', tr: 'Pellet / çözündürme' },
    { en: 'Calibration / CRM', tr: 'Kalibrasyon / CRM' },
    { en: 'XRF / ICP analysis', tr: 'XRF / ICP analizi' },
    { en: 'Result review', tr: 'Sonuç değerlendirme' }
  ],
  methods: [
    'XRF',
    'ICP-OES',
    'ICP-MS',
    'TGA',
    'CHNS / elemental analysis',
    'Bomb calorimetry',
    'Density measurement',
    'Gravimetry & titrimetry'
  ],
  sections: [
    {
      eyebrow: '03 · LABORATORY ENVIRONMENT',
      title: {
        en: 'One internship, several analytical laboratories',
        tr: 'Tek staj, birbiriyle bağlantılı farklı analitik laboratuvarlar'
      },
      paragraphs: {
        en: [
          'The 30-day diary moves through MTA’s geochemistry and analytical laboratories rather than staying at one bench. I was introduced first to sample identity and preparation, then to XRF, dissolution workflows feeding ICP-MS and ICP-OES, classical wet-chemistry determinations, and finally coal and fuel characterization.',
          'That rotation was valuable because it showed how the same geological material can be approached with different analytical questions. Bulk oxide composition, trace-element determination, thermal behavior and fuel properties require different sample states and different instruments, but they all depend on the same fundamentals: traceability, representative preparation and quality control.'
        ],
        tr: [
          'Otuz günlük staj günlüğüm tek bir laboratuvarda değil, MTA’nın jeokimya ve analitik laboratuvarları arasında ilerliyor. İlk aşamada numune kimliği ve hazırlama süreçlerini gördüm; ardından XRF, ICP-MS ve ICP-OES’e giden çözündürme iş akışları, klasik yaş kimya analizleri ve son bölümde kömür/yakıt karakterizasyonu yer aldı.',
          'Bu rotasyon benim için özellikle değerliydi; çünkü aynı jeolojik malzemenin farklı analitik sorularla nasıl ele alındığını gösterdi. Ana oksit bileşimi, iz element tayini, termal davranış veya yakıt özellikleri farklı numune formları ve farklı cihazlar gerektiriyor; ancak hepsinin temelinde izlenebilirlik, temsil edici numune hazırlama ve kalite kontrol bulunuyor.'
        ]
      },
      art: 'rock'
    },
    {
      eyebrow: '04 · SAMPLE PREPARATION / TRACEABILITY',
      title: {
        en: 'The analytical result starts with the sample code',
        tr: 'Analitik sonuç numune koduyla başlıyor'
      },
      paragraphs: {
        en: [
          'Soil samples entered the workflow with unique codes, origin information and requested analyses. The diary emphasizes this documentation because preparation history has to remain connected to the final instrumental result. Samples were transferred into weighing containers, dried in an oven at 105 °C and cooled in a desiccator before weighing so that moisture would not distort subsequent calculations.',
          'Loss-on-ignition work added another mass-balance step. In the reported procedure, prepared portions were heated at high temperature and the mass difference was recorded before later XRF interpretation. The practical lesson was simple but important: a value produced by an instrument is only meaningful if the preparation steps and mass changes that preceded it are controlled and documented.'
        ],
        tr: [
          'Toprak numuneleri benzersiz kod, kaynak bilgisi ve istenen analizlerle birlikte iş akışına giriyordu. Günlükte bu kayıt sistemi özellikle vurgulanıyor; çünkü numunenin hazırlama geçmişinin son cihaz sonucuyla bağlantısı korunmak zorunda. Numuneler tartım kaplarına alınarak 105 °C etüvde kurutuluyor, yeniden nem almadan oda sıcaklığına gelmeleri için desikatörde soğutuluyor ve ardından tartılıyordu.',
          'Kızdırma kaybı çalışmaları bu kütle takibine ikinci bir basamak ekliyordu. Rapordaki yöntemde hazırlanmış numune yüksek sıcaklığa maruz bırakılıyor ve oluşan kütle farkı sonraki XRF değerlendirmesiyle ilişkilendiriliyordu. Benim için temel kazanım şuydu: cihazın ürettiği sayı, ancak öncesindeki hazırlama ve kütle değişimleri kontrollü ve kayıtlıysa anlamlıdır.'
        ]
      },
      art: 'sample'
    },
    {
      eyebrow: '05 · XRF',
      title: {
        en: 'Preparing a reproducible solid surface for X-ray fluorescence',
        tr: 'X-ışını floresansı için tekrarlanabilir bir katı yüzey hazırlamak'
      },
      paragraphs: {
        en: [
          'XRF was one of the first instrumental techniques I followed in depth. Powdered geological material was converted into a stable presentation form such as a pressed pellet before measurement. Primary X-rays excite atoms in the sample; the energies of the emitted characteristic X-rays identify elements, while signal intensity supports quantitative evaluation.',
          'The instrument therefore cannot be separated from the pellet that enters it. Particle size, homogeneity, pressing quality and loss-on-ignition information all influence the quality of a bulk solid analysis. Working through preparation and measurement together made the matrix effect and sample-presentation problem much more concrete than learning XRF only from a schematic.'
        ],
        tr: [
          'XRF, stajda ayrıntılı biçimde takip ettiğim ilk cihazlı tekniklerden biriydi. Toz halindeki jeolojik malzeme ölçüm öncesinde preslenmiş pellet gibi kararlı ve tekrarlanabilir bir forma getiriliyordu. Birincil X-ışınları numunedeki atomları uyarıyor; yayılan karakteristik X-ışınlarının enerjileri element kimliği, sinyal şiddeti ise nicel değerlendirme için bilgi sağlıyordu.',
          'Bu nedenle cihazı, içine giren pelletten bağımsız düşünmek mümkün değil. Partikül boyutu, homojenlik, pres kalitesi ve kızdırma kaybı bilgisi katı numunenin son XRF sonucunu etkileyebiliyor. Hazırlama ile ölçümü aynı zincir içinde görmek, matrix effect ve sample presentation kavramlarını ders kitabındaki şemadan çok daha somut hale getirdi.'
        ]
      },
      image: '/images/experience/mta/xrf.webp',
      caption: {
        en: 'XRF instrumentation documented during my MTA geochemistry placement.',
        tr: 'MTA jeokimya stajım sırasında belgelenen XRF cihazı.'
      }
    },
    {
      eyebrow: '06 · ICP-OES',
      title: {
        en: 'Calibration connects plasma emission to concentration',
        tr: 'Plazma emisyonunu konsantrasyona bağlayan basamak kalibrasyon'
      },
      paragraphs: {
        en: [
          'The ICP-OES portion of the diary includes reference-solution preparation, sample introduction, torch alignment, calibration curves and intensity-graph review. I took part in calibration work covering around 25 elements and followed how standards are used to translate element-specific emission signals into concentration information for unknown samples.',
          'The instrument-side learning connected each physical component to the result: the nebulizer converts solution into an aerosol, the plasma excites atoms and ions, and the optical system separates characteristic wavelengths. Torch alignment and spectral review showed why apparently small setup differences can affect sensitivity and why calibration quality has to be judged alongside the measured sample.'
        ],
        tr: [
          'ICP-OES bölümünde referans çözelti hazırlama, numune girişi, torch alignment, kalibrasyon eğrileri ve intensity graph değerlendirmeleri yer aldı. Yaklaşık 25 elementi kapsayan kalibrasyon çalışmalarına katıldım ve standart çözeltilerden gelen elemente özgü emisyon sinyalinin bilinmeyen numunedeki konsantrasyona nasıl dönüştürüldüğünü takip ettim.',
          'Cihazın parçalarını sonuçla ilişkilendirmek bu bölümün en önemli tarafıydı: nebulizer çözeltiyi aerosole dönüştürüyor, plazma atom ve iyonları uyarıyor, optik sistem ise karakteristik dalga boylarını ayırıyordu. Torch alignment ve spektral incelemeler, küçük görünen kurulum farklılıklarının bile sensitivity üzerinde neden etkili olabildiğini ve kalibrasyon kalitesinin numuneyle birlikte değerlendirilmesi gerektiğini gösterdi.'
        ]
      },
      art: 'plasma'
    },
    {
      eyebrow: '07 · ICP-MS / DISSOLUTION',
      title: {
        en: 'Before trace-element detection comes dissolution chemistry',
        tr: 'İz element ölçümünden önce çözündürme kimyası geliyor'
      },
      paragraphs: {
        en: [
          'Several days of the diary are devoted not to the ICP-MS itself but to getting geological samples into a suitable liquid phase. Different coded sample groups required different dissolution approaches, including acid digestion workflows for gold-, arsenic- and rare-earth-related analyses.',
          'This made contamination and incomplete dissolution very tangible analytical risks. The objective was to move target elements into solution while keeping particulate material and matrix-related problems under control before introduction to the instrument. I therefore learned to see ICP-MS sensitivity as the end of a preparation chain, not as a substitute for good digestion chemistry.'
        ],
        tr: [
          'Staj günlüğünde birkaç gün doğrudan ICP-MS cihazından çok, jeolojik numuneyi uygun bir sıvı faza taşıma problemine ayrılmış durumda. Altın, arsenik ve nadir toprak elementleri gibi farklı analiz gruplarında numuneye göre değişen asit çözündürme yaklaşımları izlendi.',
          'Bu bölüm kontaminasyon ve eksik çözündürmenin neden gerçek analitik riskler olduğunu çok net gösterdi. Amaç hedef elementleri çözeltiye alırken partikül yükünü ve matrix kaynaklı problemleri cihaz öncesinde kontrol altında tutmaktı. Böylece ICP-MS’in yüksek sensitivity özelliğini iyi numune hazırlamanın alternatifi değil, doğru hazırlanmış bir zincirin son basamağı olarak görmeyi öğrendim.'
        ]
      },
      art: 'icp'
    },
    {
      eyebrow: '08 · CLASSICAL ANALYTICAL CHEMISTRY',
      title: {
        en: 'Wet chemistry remained relevant beside advanced instruments',
        tr: 'İleri cihazların yanında klasik analitik kimya önemini koruyor'
      },
      paragraphs: {
        en: [
          'The analytical-laboratory rotation included determinations for components such as SiO₂, Fe₂O₃, Al₂O₃, CaO, MgO, copper, total iron, tungsten, Fe²⁺ and boron. These days brought gravimetric and titrimetric reasoning back into the same workflow as ICP and XRF.',
          'That combination was useful because it prevented me from treating instrumentation as a black box. Stoichiometry, separation, precipitation, endpoint logic and mass balance still underpin many reference or complementary measurements. Advanced instrumentation expands what can be measured, but classical analytical discipline remains essential for checking whether a result is chemically plausible.'
        ],
        tr: [
          'Analitik laboratuvar rotasyonunda SiO₂, Fe₂O₃, Al₂O₃, CaO, MgO, bakır, toplam demir, tungsten, Fe²⁺ ve bor gibi bileşenlere yönelik çalışmalar yer aldı. Bu günlerde gravimetrik ve titrimetrik düşünme biçimi, ICP ve XRF gibi cihazlı tekniklerle aynı staj akışının içine girdi.',
          'Bu birliktelik, cihazları “sayı veren kara kutular” gibi görmemi engelledi. Stokiyometri, ayırma, çöktürme, endpoint mantığı ve kütle dengesi birçok referans veya tamamlayıcı ölçümün hâlâ temelini oluşturuyor. İleri cihazlar ölçebildiğimiz aralığı genişletiyor; ancak sonucun kimyasal olarak anlamlı olup olmadığını sorgulamak klasik analitik disipline dayanıyor.'
        ]
      },
      art: 'xrf'
    },
    {
      eyebrow: '09 · COAL / MATERIAL CHARACTERIZATION',
      title: {
        en: 'The final rotation connected composition with material performance',
        tr: 'Son rotasyon bileşimi malzeme performansıyla ilişkilendirdi'
      },
      paragraphs: {
        en: [
          'The final days moved into coal and fuel characterization. I followed sample preparation, bomb calorimetry, thermogravimetric analysis, carbon/sulfur and elemental analysis, and density measurement. These measurements ask a different question from trace-element work: not only what is present, but how the material behaves as it is heated or used as a fuel.',
          'Across the whole placement, the analytical path widened from physical preparation to spectrometric measurement and then to thermal and bulk-property characterization. That breadth is what made the internship especially useful for me: it built a practical understanding of how method choice follows the matrix, concentration range and decision that the laboratory needs to make.'
        ],
        tr: [
          'Stajın son günleri kömür ve yakıt karakterizasyonuna ayrıldı. Numune hazırlama, bomba kalorimetrisi, termogravimetrik analiz, karbon/kükürt ve elementel analiz ile yoğunluk ölçümlerini takip ettim. Bu yöntemler iz element analizinden farklı bir soruya cevap veriyor: yalnızca “numunede ne var?” değil, “malzeme ısındığında veya yakıt olarak değerlendirildiğinde nasıl davranıyor?” sorusuna da bakılıyor.',
          'Stajın tamamında analitik yol fiziksel numune hazırlamadan spektrometrik ölçümlere, oradan termal ve bulk-property karakterizasyonuna genişledi. Benim için bu deneyimi değerli kılan da bu genişlik oldu; yöntem seçiminin matris, konsantrasyon aralığı ve laboratuvarın vermesi gereken karara göre nasıl değiştiğini uygulamalı olarak görmemi sağladı.'
        ]
      },
      art: 'coal'
    }
  ]
}

export const mtaExperience = {
  slug: 'mta',
  order: 3,
  visible: true,
  type: 'geochemical',
  title: { en: 'Analytical Chemistry Intern · Geochemical Analysis', tr: 'Analitik Kimya Stajyeri · Jeokimyasal Analiz' },
  institution: { en: 'General Directorate of Mineral Research and Exploration (MTA)', tr: 'Maden Tetkik ve Arama Genel Müdürlüğü (MTA)' },
  date: { en: 'Jul — Aug 2024', tr: 'Tem — Ağu 2024' },
  summary: {
    en: 'A 30-working-day rotation spanning geochemical sample preparation, XRF, ICP-MS digestion, ICP-OES calibration, classical wet chemistry and coal/material characterization.',
    tr: 'Jeokimyasal numune hazırlama, XRF, ICP-MS öncesi çözündürme, ICP-OES kalibrasyonu, klasik yaş kimya ve kömür/malzeme karakterizasyonunu kapsayan 30 iş günlük laboratuvar rotasyonu.'
  },
  role: {
    en: 'I participated in sample coding and preparation, drying and mass-control steps, pellet/fusion preparation, acid-digestion workflows, reference-solution and calibration work, and classical gravimetric/titrimetric analyses. The final rotation covered coal preparation, calorimetry, TGA, carbon/sulfur, CHN elemental analysis and helium-pycnometry density work. XRD and MLA were observation visits rather than hands-on instrument operation.',
    tr: 'Numune kodlama ve hazırlama, kurutma ve kütle kontrolü, pellet/fusion hazırlama, asit çözündürme iş akışları, referans çözelti ve kalibrasyon çalışmaları ile klasik gravimetrik/titrimetrik analizlere katıldım. Son rotasyonda kömür numune hazırlama, kalorimetri, TGA, karbon/kükürt, CHN elementel analiz ve helyum piknometresiyle yoğunluk çalışmalarını takip ettim. XRD ve MLA ise uygulamalı cihaz kullanımı değil, gözlem ziyaretleriydi.'
  },
  workflow: [
    { en: 'Coding & traceability', tr: 'Kodlama / izlenebilirlik' },
    { en: 'Drying / homogenization', tr: 'Kurutma / homojenizasyon' },
    { en: 'Pellet, fusion or digestion', tr: 'Pellet, fusion / çözündürme' },
    { en: 'Standards & calibration', tr: 'Standart / kalibrasyon' },
    { en: 'XRF / ICP / wet chemistry', tr: 'XRF / ICP / yaş kimya' },
    { en: 'Material characterization', tr: 'Malzeme karakterizasyonu' }
  ],
  methods: [
    'XRF',
    'ICP-OES',
    'ICP-MS',
    'Acid digestion',
    'Gravimetry & titrimetry',
    'Electrogravimetry',
    'Bomb calorimetry',
    'TGA',
    'C/S analysis',
    'CHN elemental analysis',
    'Helium pycnometry'
  ],
  sections: [
    {
      id: 'laboratory-scope',
      short: { en: 'Laboratory scope', tr: 'Laboratuvar kapsamı' },
      eyebrow: '01 · CONTEXT / LABORATORY ROTATION',
      title: {
        en: 'Thirty working days connected geochemical analysis, wet chemistry and material characterization',
        tr: 'Otuz iş günü jeokimyasal analiz, yaş kimya ve malzeme karakterizasyonunu aynı stajda birleştirdi'
      },
      paragraphs: {
        en: [
          'My MTA placement moved through several analytical environments rather than staying at a single bench. The diary begins with sample identity and geochemical preparation, continues through XRF and dissolution workflows supporting ICP-MS and ICP-OES, then shifts into classical analytical chemistry and finishes in the coal laboratory.',
          'That progression helped me understand method selection as a response to the analytical question. Bulk elemental composition, trace-element determination, oxide analysis, thermal behavior and fuel properties require different sample states and different instruments, but all of them depend on representative preparation, traceability and disciplined quality control.'
        ],
        tr: [
          'MTA stajım tek bir laboratuvar tezgâhında ilerlemedi; birbirini tamamlayan farklı analitik ortamlardan geçti. Günlük, numune kimliği ve jeokimyasal hazırlamayla başlıyor; XRF ile ICP-MS/ICP-OES öncesi çözündürme iş akışlarına geçiyor, ardından klasik analitik kimya uygulamalarına ve son olarak kömür laboratuvarına uzanıyor.',
          'Bu ilerleyiş yöntem seçimini analitik soruya verilen bir cevap olarak görmemi sağladı. Ana element/oksit bileşimi, iz element tayini, termal davranış veya yakıt özellikleri farklı numune formları ve farklı cihazlar gerektiriyor; ancak hepsinin temelinde temsil edici numune hazırlama, izlenebilirlik ve kontrollü laboratuvar disiplini bulunuyor.'
        ]
      },
      art: 'rock'
    },
    {
      id: 'sample-traceability',
      short: { en: 'Sample preparation', tr: 'Numune hazırlama' },
      eyebrow: '02 · TRACEABILITY / DRYING / MASS CONTROL',
      title: {
        en: 'The analytical result begins with sample identity, controlled drying and reliable weighing',
        tr: 'Analitik sonuç numune kimliği, kontrollü kurutma ve güvenilir tartımla başlar'
      },
      paragraphs: {
        en: [
          'Incoming soil samples were categorized by origin, assigned unique codes and linked to the requested analyses. This documentation preserved the connection between the original material, every preparation step and the final analytical result. The samples were transferred to weighing containers, dried at about 105 °C and cooled in a desiccator before weighing so that moisture uptake would not distort the mass.',
          'Loss-on-ignition work added a second mass-control layer. Prepared portions were exposed to high temperature, cooled again under dry conditions and reweighed. The exercise made a basic but important principle very concrete: before an instrument can generate meaningful data, sample history, moisture and mass changes have to be controlled.'
        ],
        tr: [
          'Laboratuvara gelen toprak numuneleri kaynaklarına göre sınıflandırılıyor, benzersiz kodlarla kaydediliyor ve istenen analizlerle ilişkilendiriliyordu. Böylece orijinal numune, uygulanan hazırlama basamakları ve final analitik sonuç arasındaki izlenebilirlik korunuyordu. Numuneler tartım kaplarına alınarak yaklaşık 105 °C’de kurutuluyor, yeniden nem almadan soğumaları için desikatörde bekletiliyor ve ardından tartılıyordu.',
          'Ateş zayiatı / loss-on-ignition çalışmaları bu kütle takibine ikinci bir katman ekliyordu. Hazırlanan numuneler yüksek sıcaklığa maruz bırakılıyor, kuru koşullarda yeniden soğutuluyor ve tekrar tartılıyordu. Bu süreç bana çok temel ama kritik bir gerçeği gösterdi: bir cihazın ürettiği veri ancak öncesindeki numune geçmişi, nem ve kütle değişimleri kontrol altındaysa anlamlıdır.'
        ]
      },
      art: 'sample'
    },
    {
      id: 'xrf-preparation',
      short: { en: 'XRF preparation', tr: 'XRF hazırlığı' },
      eyebrow: '03 · HOMOGENIZATION / PELLET / FUSION',
      title: {
        en: 'A reproducible XRF result starts by creating a reproducible solid sample',
        tr: 'Tekrarlanabilir XRF sonucu, tekrarlanabilir bir katı numune hazırlamakla başlar'
      },
      paragraphs: {
        en: [
          'For pressed-pellet preparation, powdered material was mixed with cellulose binder, homogenized and compressed under a 60-ton press. The report also records ash-sample homogenization and representative subsampling, both aimed at minimizing the effect of local inhomogeneity on the final measurement.',
          'When particle-size or matrix effects made pressed-pellet results less consistent, fusion provided another route. Flux-assisted high-temperature melting was used to produce a smoother, more homogeneous glass-like presentation. Seeing both approaches side by side made sample presentation a practical analytical variable rather than an abstract “matrix effect” from a textbook.'
        ],
        tr: [
          'Preslenmiş pellet hazırlığında toz numune selüloz bağlayıcıyla karıştırılıyor, homojenize ediliyor ve 60 tonluk pres altında sıkıştırılıyordu. Raporda ash sample homojenizasyonu ve farklı bölgelerden temsilî alt numune alma basamakları da yer alıyor; amaç, lokal heterojenliğin final ölçümü etkilemesini mümkün olduğunca azaltmaktı.',
          'Partikül boyutu veya matrix effect nedeniyle preslenmiş pellet sonuçları yeterince tutarlı olmadığında fusion başka bir hazırlama yolu sunuyordu. Flux destekli yüksek sıcaklık eritme ile daha düzgün ve homojen, cam benzeri bir analiz yüzeyi hazırlanıyordu. İki yaklaşımı aynı laboratuvar zincirinde görmek, “matrix effect” kavramını ders kitabındaki soyut bir terim olmaktan çıkarıp gerçek bir numune hazırlama problemine dönüştürdü.'
        ]
      },
      image: '/images/illustrations/mta-editorial.svg',
      caption: { en: 'Resolution-independent editorial illustration of geological sample preparation, pellet/fusion and elemental analysis.', tr: 'Jeolojik numune hazırlama, pellet/fusion ve elementel analizi anlatan çözünürlükten bağımsız bilimsel illüstrasyon.' }
    },
    {
      id: 'xrf-analysis',
      short: { en: 'XRF analysis', tr: 'XRF analizi' },
      eyebrow: '04 · X-RAY FLUORESCENCE',
      title: {
        en: 'Characteristic X-ray energy identifies the element; signal intensity supports quantification',
        tr: 'Karakteristik X-ışını enerjisi elementi tanımlar; sinyal şiddeti nicel değerlendirmeyi destekler'
      },
      paragraphs: {
        en: [
          'XRF was one of the first instrumental techniques I followed in depth. Primary X-rays remove inner-shell electrons from atoms in the sample; when higher-energy electrons fill those vacancies, element-specific fluorescence X-rays are emitted. Their energies identify the elements, while measured intensity is related to their abundance in the prepared sample.',
          'The report links that physical principle to calibration with standard reference materials. Known concentrations are used to establish signal–concentration relationships, and unknown samples are interpreted against those references. This connected solid-sample preparation, instrument physics and quantitative calibration within a single workflow.'
        ],
        tr: [
          'XRF, stajda ayrıntılı biçimde takip ettiğim ilk cihazlı tekniklerden biriydi. Birincil X-ışınları numunedeki atomların iç kabuk elektronlarını uzaklaştırıyor; daha yüksek enerji seviyesindeki elektronlar bu boşlukları doldurduğunda elemente özgü fluorescence X-rays oluşuyordu. Bu ışınların enerjisi element kimliğini, ölçülen şiddeti ise hazırlanan numunedeki miktarla ilişkili bilgiyi sağlıyordu.',
          'Raporda bu fiziksel prensip Standard Reference Material kullanılarak yapılan kalibrasyonla ilişkilendiriliyor. Bilinen konsantrasyonlar sinyal–konsantrasyon ilişkisini oluşturuyor, bilinmeyen numuneler de bu referanslara göre değerlendiriliyordu. Böylece katı numune hazırlama, cihaz fiziği ve nicel kalibrasyon aynı analitik iş akışında birleşti.'
        ]
      },
      art: 'xrf'
    },
    {
      id: 'digestion-icpms',
      short: { en: 'Digestion → ICP-MS', tr: 'Çözündürme → ICP-MS' },
      eyebrow: '05 · ACID DIGESTION / ICP-MS PREPARATION',
      title: {
        en: 'Different geological matrices required different routes into the liquid phase before ICP-MS',
        tr: 'Farklı jeolojik matrisler ICP-MS öncesinde sıvı faza geçmek için farklı çözündürme yolları gerektirdi'
      },
      paragraphs: {
        en: [
          'Several days were devoted to converting solid geological samples into solutions suitable for ICP-MS. The report documents aqua-regia-based work for selected sample groups and multi-acid digestion strategies involving nitric, hydrochloric and perchloric acids, with HF used when a more complete dissolution of resistant mineral matrices was required.',
          'After digestion, dilution, settling and transfer of the clear liquid fraction helped reduce the risk of particulate interference before instrumental measurement. The broader lesson was that ICP-MS sensitivity is the end of a preparation chain: incomplete dissolution, contamination or uncontrolled dilution can limit the value of even a highly sensitive detector.'
        ],
        tr: [
          'Stajın birkaç günü katı jeolojik numuneleri ICP-MS için uygun çözeltilere dönüştürmeye ayrıldı. Raporda seçili numune grupları için aqua regia temelli çalışmalar; HNO₃, HCl ve HClO₄ içeren multi-acid digestion yaklaşımları ve dirençli mineral matrislerinde daha tam çözünme gerektiğinde HF kullanılan süreçler yer alıyor.',
          'Çözündürmeden sonra seyreltme, bekletme ve berrak sıvı fazın ayrılması cihaz öncesinde partikül kaynaklı sorunları azaltmaya yardımcı oluyordu. Bu bölümün en önemli dersi şuydu: ICP-MS’in yüksek sensitivity özelliği uzun bir hazırlama zincirinin sonundadır; eksik çözündürme, kontaminasyon veya kontrolsüz seyreltme en gelişmiş dedektörün sağladığı avantajı bile sınırlayabilir.'
        ]
      },
      art: 'icp'
    },
    {
      id: 'icp-oes',
      short: { en: 'ICP-OES', tr: 'ICP-OES' },
      eyebrow: '06 · REFERENCE SOLUTIONS / TORCH / CALIBRATION',
      title: {
        en: 'ICP-OES connected solution preparation, plasma alignment, wavelength selection and calibration',
        tr: 'ICP-OES; çözelti hazırlama, plazma hizalama, dalga boyu seçimi ve kalibrasyonu aynı zincirde birleştirdi'
      },
      paragraphs: {
        en: [
          'The ICP-OES rotation included preparation of multi-level reference solutions, sample introduction, torch alignment and calibration-curve work. Liquid samples are converted to an aerosol by the nebulizer and carried into an argon plasma, where atoms and ions are excited and emit light at characteristic wavelengths.',
          'I also followed how torch position and spectral review affect the reliability of the measurement. Multi-element calibration curves linked known concentration levels to emission intensity, while wavelength/intensity graphs were examined for interference before converting the measured signal into concentration. This was where instrument setup, optical spectroscopy and quantitative analysis became one connected problem.'
        ],
        tr: [
          'ICP-OES rotasyonunda farklı konsantrasyon seviyelerinde referans çözelti hazırlama, sample introduction, torch alignment ve calibration curve çalışmaları yer aldı. Sıvı numune nebulizer ile aerosole dönüştürülüyor ve argon plazmaya taşınıyor; burada atom ve iyonlar uyarılarak karakteristik dalga boylarında ışık yayıyordu.',
          'Torch konumunun ve spektral incelemenin ölçüm güvenilirliğini nasıl etkilediğini de takip ettim. Çok elementli kalibrasyon eğrileri bilinen konsantrasyon seviyelerini emission intensity ile ilişkilendiriyor, wavelength/intensity grafiklerinde girişimler değerlendirilerek ölçülen sinyal konsantrasyona dönüştürülüyordu. Bu bölüm cihaz ayarı, optik spektroskopi ve nicel analizin aynı problemin parçaları olduğunu gösterdi.'
        ]
      },
      art: 'plasma'
    },
    {
      id: 'wet-chemistry-foundation',
      short: { en: 'Oxides & gravimetry', tr: 'Oksitler ve gravimetri' },
      eyebrow: '07 · CLASSICAL ANALYTICAL CHEMISTRY',
      title: {
        en: 'SiO₂, Fe₂O₃/Al₂O₃, CaO and MgO showed why classical separations still matter',
        tr: 'SiO₂, Fe₂O₃/Al₂O₃, CaO ve MgO analizleri klasik ayırmaların neden hâlâ önemli olduğunu gösterdi'
      },
      paragraphs: {
        en: [
          'The analytical-laboratory rotation moved from instrument-centered work into gravimetric and precipitation-based determinations. SiO₂ analysis combined acid treatment, filtration, furnace treatment and sequential weighing, while Fe₂O₃/Al₂O₃ preparation used acid dissolution before ICP-OES when the expected amount was low.',
          'CaO and MgO determinations relied on controlled precipitation, filtration, furnace treatment and mass difference. Working through these procedures beside XRF and ICP helped me understand that modern instrumentation does not eliminate classical analytical chemistry; separation chemistry and mass balance still provide complementary information and important checks on a result.'
        ],
        tr: [
          'Analitik laboratuvar rotasyonu cihaz merkezli çalışmalardan gravimetrik ve çöktürmeye dayalı tayinlere geçti. SiO₂ analizinde asit işlemi, filtrasyon, fırınlama ve ardışık tartım basamakları birlikte kullanılırken; Fe₂O₃/Al₂O₃ hazırlığında düşük miktarların belirlenmesi için asit çözündürme sonrasında ICP-OES’e geçiliyordu.',
          'CaO ve MgO tayinlerinde kontrollü çöktürme, filtrasyon, fırınlama ve kütle farkı temel rol oynuyordu. Bu prosedürleri XRF ve ICP çalışmalarının yanında görmek, modern cihazların klasik analitik kimyayı ortadan kaldırmadığını gösterdi; ayırma kimyası ve kütle dengesi hâlâ tamamlayıcı bilgi ve önemli bir sonuç kontrolü sağlıyor.'
        ]
      },
      art: 'titration'
    },
    {
      id: 'wet-chemistry-diversity',
      short: { en: 'Cu, Fe, W & B', tr: 'Cu, Fe, W ve B' },
      eyebrow: '08 · ELECTROGRAVIMETRY / TITRIMETRY / PRECIPITATION',
      title: {
        en: 'Copper, iron, tungsten and boron required different chemical strategies for the same goal: reliable quantification',
        tr: 'Bakır, demir, tungsten ve bor için aynı hedefe farklı kimyasal yollarla ulaşıldı: güvenilir nicel tayin'
      },
      paragraphs: {
        en: [
          'Copper analysis combined dissolution, chemical separation and electrolysis: copper was deposited on a weighed platinum cathode and the mass increase was used for calculation. Total iron and Fe²⁺ determinations used redox chemistry with dichromate titration, while tungsten was isolated through precipitation and gravimetric weighing.',
          'Boron analysis introduced another sequence of pH control, precipitation, filtration and titration in the presence of mannitol or sorbitol. The diversity of these methods was one of the strongest parts of the placement for me because it showed that analytical chemistry is not defined by one instrument; the chemistry of the analyte determines the most useful measurement strategy.'
        ],
        tr: [
          'Bakır analizinde çözündürme, kimyasal ayırma ve elektroliz birlikte kullanılıyordu; bakır önceden tartılmış platin katot üzerinde biriktiriliyor ve kütle artışından hesaplama yapılıyordu. Total iron ve Fe²⁺ tayinlerinde dichromate titration ile redoks kimyası kullanılırken, tungsten çöktürme ve gravimetrik tartımla belirleniyordu.',
          'Boron analizinde ise pH kontrolü, çöktürme, filtrasyon ve mannitol veya sorbitol varlığında titrasyondan oluşan farklı bir sıra vardı. Bu yöntem çeşitliliği stajın benim için en güçlü taraflarından biriydi; analitik kimyanın tek bir cihazla tanımlanmadığını, analitin kimyasının en uygun ölçüm stratejisini belirlediğini gösterdi.'
        ]
      },
      art: 'titration'
    },
    {
      id: 'coal-thermal',
      short: { en: 'Coal & thermal analysis', tr: 'Kömür ve termal analiz' },
      eyebrow: '09 · COAL LAB / CALORIMETRY / TGA',
      title: {
        en: 'The final rotation shifted from elemental concentration to how a material behaves as a fuel',
        tr: 'Son rotasyon element konsantrasyonundan malzemenin yakıt olarak nasıl davrandığına geçti'
      },
      paragraphs: {
        en: [
          'Coal samples were crushed, sieved and ground to controlled particle sizes before analysis. I also visited the mineralogy/petrography area to learn about XRD and MLA; these were observation visits rather than hands-on instrument operation. The main coal-laboratory work then moved into bomb calorimetry and thermogravimetric analysis.',
          'Bomb calorimetry linked controlled combustion to calorific value, while TGA separated the material response into moisture, volatile matter and ash stages under controlled temperature and gas conditions. This widened the analytical question from “what elements are present?” to “how does the material respond when heated or burned?”'
        ],
        tr: [
          'Kömür numuneleri analiz öncesinde kontrollü partikül boyutlarına ulaşmak için kırılıyor, eleniyor ve öğütülüyordu. Mineralogy/petrography bölümünde XRD ve MLA hakkında bilgi edinmek için gözlem ziyareti de yaptım; bunlar uygulamalı cihaz kullanımı değil gözlem niteliğindeydi. Kömür laboratuvarındaki ana çalışma daha sonra bomb calorimetry ve thermogravimetric analysis yönüne geçti.',
          'Bomb kalorimetrisi kontrollü yanmayı calorific value ile ilişkilendirirken, TGA numunenin davranışını kontrollü sıcaklık ve gaz koşullarında moisture, volatile matter ve ash aşamalarına ayırıyordu. Böylece analitik soru “numunede hangi elementler var?” düzeyinden “malzeme ısıtıldığında veya yakıldığında nasıl davranıyor?” sorusuna genişledi.'
        ]
      },
      art: 'thermal'
    },
    {
      id: 'coal-characterization',
      short: { en: 'C/S, CHN & density', tr: 'C/S, CHN ve yoğunluk' },
      eyebrow: '10 · COMPOSITION / DENSITY / INTEGRATED TAKEAWAY',
      title: {
        en: 'Carbon–sulfur, CHN and helium pycnometry completed a broad material-characterization toolkit',
        tr: 'Karbon–kükürt, CHN ve helyum piknometresi geniş bir malzeme karakterizasyon setini tamamladı'
      },
      paragraphs: {
        en: [
          'The final days added carbon/sulfur analysis with the LECO SC-144DR, CHN elemental analysis with the LECO CHN628 and density measurement with the Quantachrome Pentapyc 5200e. These techniques combined combustion chemistry, gas detection and helium-displacement volume measurement to describe different aspects of the coal sample.',
          'Across the full placement, the workflow expanded from sample traceability and physical preparation to dissolution, calibration, instrumental measurement, classical wet chemistry and material-property characterization. The most transferable lesson was that a trustworthy analytical result is built by the whole chain—not by the name of a single instrument.'
        ],
        tr: [
          'Stajın son günlerinde LECO SC-144DR ile carbon/sulfur analizi, LECO CHN628 ile CHN elementel analiz ve Quantachrome Pentapyc 5200e ile yoğunluk ölçümü eklendi. Bu teknikler combustion chemistry, gaz tespiti ve helyum deplasmanıyla hacim ölçümü gibi farklı prensipleri kullanarak kömür numunesinin farklı özelliklerini tanımlıyordu.',
          'Stajın tamamında iş akışı numune izlenebilirliği ve fiziksel hazırlamadan çözündürmeye, kalibrasyona, cihazlı ölçüme, klasik yaş kimyaya ve malzeme özelliği karakterizasyonuna kadar genişledi. Benim için en taşınabilir ders, güvenilir bir analitik sonucun tek bir cihazın isminden değil bütün zincirin kalitesinden doğduğuydu.'
        ]
      },
      art: 'pycnometer'
    }
  ]
}

export const dopingExperience = {
  slug: 'doping-control',
  order: 2,
  visible: true,
  type: 'biological',
  title: { en: 'Quality Control Intern · Anti-Doping Analysis', tr: 'Kalite Kontrol Stajyeri · Doping Kontrol Analizi' },
  institution: { en: 'Hacettepe University Turkish Doping Control Center', tr: 'Hacettepe Üniversitesi Türkiye Doping Kontrol Merkezi' },
  date: { en: 'Jul — Aug 2025', tr: 'Tem — Ağu 2025' },
  summary: {
    en: 'A 20-day laboratory placement tracing anti-doping analysis from sample acceptance and wet-chemistry preparation to LC-MS/MS, GC-MS/MS, LC-HRMS and GC-C-IRMS workflows.',
    tr: 'Numune kabulünden yaş kimya hazırlıklarına; LC-MS/MS, GC-MS/MS, LC-HRMS ve GC-C-IRMS iş akışlarına kadar doping kontrol analitiğinin bütün zincirini izlediğim 20 günlük laboratuvar stajı.'
  },
  role: {
    en: 'I worked through sample-preparation and quality-control stages, followed how different substance classes were routed to LC- or GC-based methods, and studied how internal standards, calibration, screening and confirmation support trace-level decisions. The public case study intentionally explains the analytical logic without reproducing institutional SOPs step by step.',
    tr: 'Numune hazırlama ve kalite kontrol basamaklarında çalıştım; farklı madde gruplarının neden LC veya GC tabanlı yöntemlere yönlendirildiğini, internal standard, kalibrasyon, tarama ve doğrulama adımlarının iz düzey kararları nasıl desteklediğini takip ettim. Kamuya açık bu vaka çalışmasında kurumsal SOP’leri adım adım paylaşmak yerine analitik mantığı anlatıyorum.'
  },
  workflow: [
    'Sample reception',
    'SG / pH quality checks',
    'Aliquot & preparation',
    'Extraction / hydrolysis / derivatization',
    'LC- or GC-based screening',
    'Confirmation & reporting'
  ],
  methods: [
    'LC-MS/MS',
    'GC-MS/MS',
    'LC-HRMS',
    'GC-C-IRMS',
    'HPLC',
    'SPE',
    'MSTFA derivatization',
    'Internal-standard calibration'
  ],
  sections: [
    {
      eyebrow: '03 · CONTEXT / LABORATORY ENVIRONMENT',
      title: {
        en: 'Trace analysis inside a regulated anti-doping workflow',
        tr: 'Düzenlenmiş bir doping kontrol sisteminde iz düzey analiz'
      },
      paragraphs: {
        en: [
          'The internship took place at Hacettepe University Turkish Doping Control Center, where athlete samples enter an anonymized analytical workflow. The report describes urine and blood samples as following different paths, while urine is divided into aliquots according to the prohibited-substance groups that need to be screened.',
          'What made this environment different from a teaching laboratory was the importance of traceability and decision support. A result is not built from a single peak: sample identity, acceptance checks, controls, internal standards, calibration, screening and confirmation all form part of the analytical evidence.'
        ],
        tr: [
          'Stajımı sporcu numunelerinin kimliksizleştirilmiş bir analitik iş akışına girdiği Hacettepe Üniversitesi Türkiye Doping Kontrol Merkezi’nde yaptım. Raporumda idrar ve kan numunelerinin farklı süreçlere ayrıldığı; idrar numunelerinin ise taranacak yasaklı madde gruplarına göre farklı aliquot’lara bölündüğü anlatılıyor.',
          'Bu ortamı eğitim laboratuvarından ayıran temel nokta izlenebilirlik ve karar güvenilirliğiydi. Sonuç tek bir kromatografik veya MS pikinden ibaret değildi; numune kabulü, kalite kontrolleri, internal standardlar, kalibrasyon, tarama ve gerektiğinde doğrulama aynı analitik kanıt zincirinin parçalarıydı.'
        ]
      },
      art: 'doping'
    },
    {
      eyebrow: '04 · SAMPLE INTEGRITY',
      title: {
        en: 'Quality control begins before extraction',
        tr: 'Kalite kontrol ekstraksiyondan önce başlar'
      },
      paragraphs: {
        en: [
          'Specific-gravity and pH checks introduced me to the front end of the workflow. The report records temperature-controlled handling, instrument checks and routine QC measurements before samples progress to the more complex analytical stages.',
          'These measurements are chemically simple compared with mass spectrometry, but they taught an important lesson: high-end instrumentation cannot compensate for poorly controlled sample handling. Reproducible trace analysis starts with consistent preparation, documented conditions and a clear chain of custody.'
        ],
        tr: [
          'Özgül ağırlık ve pH kontrolleri, iş akışının cihaz öncesindeki kalite kontrol bölümünü görmemi sağladı. Raporda sıcaklığın takip edildiği, cihaz kontrollerinin yapıldığı ve numuneler daha karmaşık analizlere ilerlemeden önce QC ölçümlerinin uygulandığı bir düzen bulunuyor.',
          'Bu ölçümler kütle spektrometrisine göre kimyasal olarak daha basit görünse de önemli bir prensibi gösterdi: ileri seviye cihaz, kontrolsüz numune işlemenin yarattığı hatayı sonradan düzeltemez. İz düzey analizin güvenilirliği; tutarlı hazırlama, kayıtlı koşullar ve izlenebilir numune yönetimiyle başlıyor.'
        ]
      },
      art: 'qc'
    },
    {
      eyebrow: '05 · SAMPLE PREPARATION',
      title: {
        en: 'Preparation chemistry changes with the analyte class',
        tr: 'Numune hazırlama kimyası hedef madde grubuna göre değişiyor'
      },
      paragraphs: {
        en: [
          'The report follows multiple analytical groups rather than one universal preparation protocol. Depending on the target class, the workflow can involve enzymatic hydrolysis, liquid-phase extraction, solid-phase extraction or derivatization before instrumental analysis. Small-peptide analysis, for example, is paired with SPE before LC-MS/MS, while selected GC workflows use derivatization to improve chromatographic suitability.',
          'Working across these preparations changed how I think about selectivity. Sample preparation is not a preliminary chore that happens before the “real” analysis; it is one of the mechanisms that determines what reaches the detector, what interferences are removed and how reproducible the final measurement can be.'
        ],
        tr: [
          'Raporda tek bir genel hazırlama reçetesi yerine farklı analit gruplarına göre ayrılan çok sayıda iş akışı bulunuyor. Hedef madde grubuna bağlı olarak enzimatik hidroliz, sıvı faz ekstraksiyonu, katı faz ekstraksiyonu veya türevlendirme gibi basamaklar cihaz analizinden önce devreye giriyor. Örneğin küçük peptitlerde LC-MS/MS öncesinde SPE kullanılırken, bazı GC tabanlı yöntemlerde bileşiği kromatografiye uygun hale getirmek için türevlendirme uygulanıyor.',
          'Bu çeşitlilik, selectivity kavramına bakışımı değiştirdi. Numune hazırlama “asıl analizden önce yapılan” yardımcı bir işlem değil; dedektöre neyin ulaşacağını, hangi girişimlerin uzaklaştırılacağını ve sonucun ne kadar tekrarlanabilir olacağını belirleyen yöntem bileşenlerinden biri.'
        ]
      },
      art: 'sample'
    },
    {
      eyebrow: '06 · INSTRUMENTATION',
      title: {
        en: 'Choosing LC, GC, high-resolution or isotope-ratio MS depends on the analytical question',
        tr: 'LC, GC, yüksek çözünürlüklü veya izotop oranlı MS seçimi analitik soruya bağlı'
      },
      paragraphs: {
        en: [
          'The placement exposed me to LC-MS/MS, GC-MS/MS and LC-HRMS as complementary platforms rather than interchangeable instruments. LC-based workflows are particularly useful for compounds that are non-volatile, polar or better handled in liquid-phase separations; GC workflows become valuable for volatile species or compounds rendered GC-compatible through derivatization.',
          'GC-C-IRMS added a different type of question. Instead of asking only whether an endogenous steroid is present, isotope-ratio analysis can help examine whether its carbon-isotope signature is consistent with an endogenous or synthetic source. Seeing these platforms side by side connected instrument choice to molecular properties and to the evidence required by the method.'
        ],
        tr: [
          'Stajda LC-MS/MS, GC-MS/MS ve LC-HRMS cihazlarını birbirinin alternatifi olan sistemler gibi değil, farklı kimyasal sorulara cevap veren tamamlayıcı platformlar olarak gördüm. Uçucu olmayan, polar veya sıvı faz ayırmaya daha uygun bileşiklerde LC tabanlı yollar öne çıkarken; uçucu ya da türevlendirme sonrası GC’ye uygun hale getirilen bileşiklerde gaz kromatografisi temelli yöntemler önem kazanıyor.',
          'GC-C-IRMS ise soruyu farklı bir düzleme taşıyordu. Burada yalnızca “endojen steroid var mı?” sorusu değil, karbon izotop imzasının endojen veya sentetik kökenle uyumlu olup olmadığı da değerlendirilebiliyor. Bu cihazları aynı staj içinde görmek, platform seçimini bileşiğin fizikokimyasal özellikleri ve ihtiyaç duyulan kanıt türüyle ilişkilendirmemi sağladı.'
        ]
      },
      image: '/images/experience/doping/lc-ms.webp',
      caption: {
        en: 'LC–MS platform photographed during my internship at the Doping Control Center.',
        tr: 'Doping Kontrol Merkezi stajım sırasında fotoğrafladığım LC–MS platformu.'
      }
    },
    {
      eyebrow: '07 · CALIBRATION / QUALITY SYSTEM',
      title: {
        en: 'Internal standards and controls surround the sample with evidence',
        tr: 'Internal standard ve kontroller numuneyi çevreleyen bir kanıt sistemi kuruyor'
      },
      paragraphs: {
        en: [
          'The report uses a structured set of controls and calibration terminology, including negative and positive controls, calibration levels, quality-control samples and internal standards. Following these concepts in a real workflow made calibration feel less like a mathematical afterthought and more like part of the method architecture.',
          'Internal-standard calibration is especially important in complex matrices because losses during preparation and variability in instrumental response can otherwise distort quantification. The internship helped me understand why trace-level conclusions are supported by the behavior of standards and controls around the unknown sample.'
        ],
        tr: [
          'Raporda negatif ve pozitif kontroller, farklı kalibrasyon seviyeleri, kalite kontrol numuneleri ve internal standardlar için yapılandırılmış bir terminoloji kullanılıyor. Bu kavramları gerçek bir iş akışında görmek, kalibrasyonu sonradan yapılan matematiksel bir işlem değil, yöntemin tasarımının parçası olarak anlamamı sağladı.',
          'Özellikle kompleks matrislerde internal-standard kalibrasyonu; numune hazırlama sırasında oluşabilecek kayıplar ve cihaz yanıtındaki değişkenlik nedeniyle önem kazanıyor. Staj, iz düzey bir sonucun yalnızca bilinmeyen numunenin sinyaline değil, onun çevresindeki standard ve kontrollerin davranışına da dayandığını görmemi sağladı.'
        ]
      },
      art: 'qc'
    },
    {
      eyebrow: '08 · WHAT I TOOK FROM THE PLACEMENT',
      title: {
        en: 'A complete analytical chain matters more than any single instrument',
        tr: 'Tek bir cihazdan çok, bütün analitik zincirin güvenilirliği önemli'
      },
      paragraphs: {
        en: [
          'Across the 20-day placement I followed the larger sequence from reception and preparation through screening, instrument analysis, internal-standard calibration, confirmation and result reporting. The experience strengthened my ability to read a method as a connected system: matrix, preparation chemistry, separation, detector, calibration and quality controls all influence one another.',
          'That mindset is the most transferable part of the internship. It is directly relevant to analytical R&D because a robust method depends not only on sensitivity, but also on traceability, selectivity, precision and the ability to explain why the result should be trusted.'
        ],
        tr: [
          'Yirmi günlük staj boyunca numune kabulü ve hazırlamadan taramaya, cihaz analizinden internal-standard kalibrasyonuna, doğrulama ve raporlamaya uzanan bütün diziyi takip ettim. Deneyim, yöntemi birbirine bağlı bir sistem olarak okumamı güçlendirdi: matris, hazırlama kimyası, ayırma, dedektör, kalibrasyon ve kalite kontrolleri birbirini doğrudan etkiliyor.',
          'Bu stajdan taşıdığım en önemli yaklaşım da bu oldu. Analitik Ar-Ge açısından sağlam bir yöntem yalnızca yüksek sensitivity ile değil; izlenebilirlik, selectivity, precision ve sonucun neden güvenilir olduğunun açıklanabilmesiyle değer kazanıyor.'
        ]
      },
      art: 'ms'
    }
  ]
}

import { realPhotos } from './imageCredits'

export const dopingExperience = {
  slug: 'doping-control',
  order: 2,
  visible: true,
  type: 'biological',
  title: { en: 'Quality Control Intern · Anti-Doping Analysis', tr: 'Kalite Kontrol Stajyeri · Doping Kontrol Analizi' },
  institution: { en: 'Hacettepe University Turkish Doping Control Center', tr: 'Hacettepe Üniversitesi Türkiye Doping Kontrol Merkezi' },
  date: { en: 'Jul — Aug 2025', tr: 'Tem — Ağu 2025' },
  summary: {
    en: 'A 20-day laboratory placement following the anti-doping analytical chain from sample reception and quality checks to sample preparation, targeted MS workflows, isotope-ratio analysis, EPO testing and hematological monitoring.',
    tr: 'Numune kabulü ve kalite kontrollerinden numune hazırlamaya, hedefli MS iş akışlarına, izotop oranı analizine, EPO testlerine ve hematolojik izlemeye uzanan doping kontrol zincirini takip ettiğim 20 günlük laboratuvar stajı.'
  },
  role: {
    en: 'I followed sample-reception, quality-control and preparation stages; observed how different prohibited-substance classes are routed to LC-MS/MS, GC-MS/MS, LC-HRMS and GC-C-IRMS workflows; and studied how controls, internal standards, calibration, confirmation and result interpretation support trace-level decisions. The public case study summarizes the analytical logic without reproducing institutional SOPs step by step.',
    tr: 'Numune kabulü, kalite kontrol ve hazırlama basamaklarını takip ettim; farklı yasaklı madde gruplarının LC-MS/MS, GC-MS/MS, LC-HRMS ve GC-C-IRMS iş akışlarına nasıl yönlendirildiğini gözlemledim; kontrol örnekleri, internal standard, kalibrasyon, doğrulama ve sonuç yorumlamanın iz düzey kararları nasıl desteklediğini inceledim. Kamuya açık bu vaka çalışması kurumsal SOP’leri adım adım yayımlamak yerine analitik mantığı özetler.'
  },
  workflow: [
    { en: 'Sample reception', tr: 'Numune kabulü' },
    { en: 'SG / pH & QC', tr: 'Özgül ağırlık / pH ve QC' },
    { en: 'Aliquot & preparation', tr: 'Aliquotlama / hazırlama' },
    { en: 'Extraction / hydrolysis / derivatization', tr: 'Ekstraksiyon / hidroliz / türevlendirme' },
    { en: 'LC / GC / HRMS screening', tr: 'LC / GC / HRMS taraması' },
    { en: 'Confirmation & interpretation', tr: 'Doğrulama / yorumlama' }
  ],
  methods: [
    'LC-MS/MS',
    'GC-MS/MS',
    'LC-HRMS',
    'GC-C-IRMS',
    'HPLC',
    'SPE',
    'MSTFA derivatization',
    'Internal-standard calibration',
    'SAR-PAGE / Immunoblotting',
    'Athlete Biological Passport'
  ],
  sections: [
    {
      id: 'laboratory-chain',
      short: { en: 'Laboratory chain', tr: 'Laboratuvar zinciri' },
      eyebrow: '01 · CONTEXT / ANTI-DOPING WORKFLOW',
      title: {
        en: 'Anti-doping analysis is a controlled evidence chain, not a single instrument result',
        tr: 'Doping kontrol analizi tek bir cihaz sonucundan değil, kontrollü bir kanıt zincirinden oluşur'
      },
      paragraphs: {
        en: [
          'My 20-day placement at Hacettepe University Turkish Doping Control Center showed me how athlete samples move through a regulated analytical system. Urine and blood follow different pathways, while urine is divided into aliquots according to the prohibited-substance groups that need to be screened. The analytical route begins well before an LC-MS or GC-MS injection.',
          'Across the placement I followed the larger sequence from sample reception and preparation through screening, instrumental analysis, internal-standard calibration, confirmation and result reporting. This was the first time I could see several advanced techniques—GC-MS/MS, LC-MS/MS, LC-HRMS and GC-C-IRMS—as connected parts of one laboratory decision process.'
        ],
        tr: [
          'Hacettepe Üniversitesi Türkiye Doping Kontrol Merkezi’ndeki 20 günlük stajım, sporcu numunelerinin düzenlenmiş bir analitik sistem içinde nasıl ilerlediğini görmemi sağladı. İdrar ve kan numuneleri farklı yollardan ilerlerken, idrar örnekleri taranacak yasaklı madde gruplarına göre farklı aliquot’lara ayrılıyordu. Analitik süreç bir LC-MS veya GC-MS enjeksiyonundan çok daha önce başlıyordu.',
          'Staj boyunca numune kabulü ve hazırlamadan taramaya, cihazlı analizden internal-standard kalibrasyonuna, doğrulama ve sonuç raporlamaya kadar daha büyük zinciri takip ettim. GC-MS/MS, LC-MS/MS, LC-HRMS ve GC-C-IRMS gibi ileri teknikleri ilk kez tek bir laboratuvar karar sürecinin birbirini tamamlayan parçaları olarak görebildim.'
        ]
      },
      art: 'doping'
    },
    {
      id: 'front-end-quality',
      short: { en: 'Front-end QC', tr: 'Ön kalite kontrol' },
      eyebrow: '02 · SAMPLE INTEGRITY / FRONT-END QC',
      title: {
        en: 'Specific gravity, pH and control checks establish analytical discipline before extraction',
        tr: 'Özgül ağırlık, pH ve kontrol ölçümleri ekstraksiyondan önce analitik disiplini kurar'
      },
      paragraphs: {
        en: [
          'The front end of the workflow included specific-gravity and pH measurements, temperature checks, instrument verification and routine quality-control samples. These measurements are chemically simpler than mass spectrometry, yet they are essential because a trace-level method is only as reliable as the sample handling and verification that precede it.',
          'This part of the placement reinforced a fundamental laboratory principle for me: expensive instrumentation cannot compensate for inconsistent preparation. Reproducible analysis begins with controlled conditions, clean handling, verified instruments and documented QC behavior.'
        ],
        tr: [
          'İş akışının ön bölümünde özgül ağırlık ve pH ölçümleri, sıcaklık takibi, cihaz doğrulaması ve rutin kalite kontrol örnekleri yer alıyordu. Bu ölçümler kütle spektrometrisine göre daha basit görünse de iz düzey bir yöntemin güvenilirliği, cihaz öncesindeki numune yönetimi ve doğrulama kadar güçlü olabilir.',
          'Bu bölüm bende temel bir laboratuvar prensibini pekiştirdi: pahalı ve ileri bir cihaz, tutarsız numune hazırlamanın yarattığı problemi sonradan telafi edemez. Tekrarlanabilir analiz; kontrollü koşullar, temiz çalışma, doğrulanmış cihaz ve kayıtlı QC davranışıyla başlar.'
        ]
      },
      art: 'qc'
    },
    {
      id: 'controls-calibration',
      short: { en: 'Controls & calibration', tr: 'Kontrol ve kalibrasyon' },
      eyebrow: '03 · QUALITY SYSTEM / CALIBRATION',
      title: {
        en: 'Positive and negative controls, calibration levels and internal standards surround the unknown sample with evidence',
        tr: 'Pozitif-negatif kontroller, kalibrasyon seviyeleri ve internal standard bilinmeyen numuneyi kanıt sistemiyle çevreler'
      },
      paragraphs: {
        en: [
          'The report uses a structured control language: PUC for positive urine control, NUC for negative urine control, calibration levels, quality-control samples, blank matrix and internal standards. Seeing these elements together made it clear that a reliable result is never interpreted from an unknown sample in isolation.',
          'Internal standards and calibration help account for preparation losses and variation in instrumental response, while positive and negative controls show whether the analytical batch behaves as expected. For me, this transformed calibration from a purely mathematical exercise into a central part of method architecture and result credibility.'
        ],
        tr: [
          'Raporda yapılandırılmış bir kontrol dili bulunuyor: pozitif idrar kontrolü için PUC, negatif idrar kontrolü için NUC, kalibrasyon seviyeleri, kalite kontrol örnekleri, blank matrix ve internal standardlar. Bu unsurları aynı sistem içinde görmek, güvenilir bir sonucun bilinmeyen numunenin sinyalinden tek başına yorumlanmadığını açık biçimde gösterdi.',
          'Internal standard ve kalibrasyon, numune hazırlama kayıpları ile cihaz yanıtındaki değişkenliği kontrol etmeye yardımcı olurken pozitif ve negatif kontroller analitik batch’in beklendiği gibi çalışıp çalışmadığını gösteriyor. Böylece kalibrasyonu yalnızca matematiksel bir işlem değil, yöntemin mimarisinin ve sonuç güvenilirliğinin merkezi bir parçası olarak görmeye başladım.'
        ]
      },
      art: 'calibration'
    },
    {
      id: 'lc-msms',
      short: { en: 'LC-MS/MS', tr: 'LC-MS/MS' },
      eyebrow: '04 · TARGETED LC-MS/MS WORKFLOWS',
      title: {
        en: 'LC-MS/MS links liquid-phase separation to selective precursor-to-product ion monitoring',
        tr: 'LC-MS/MS sıvı faz ayırmayı seçici precursor-product iyon takibiyle birleştirir'
      },
      paragraphs: {
        en: [
          'LC-MS/MS was used in the report for several prohibited-substance groups, including workflows for narcotics, stimulants, beta blockers, diuretics, masking agents and selected hormone or metabolic modulators. Depending on the analytical group, preparation included pH adjustment, extraction, internal-standard addition, centrifugation, evaporation or reconstitution before vial preparation.',
          'The instrumental logic was equally important: compounds are first separated chromatographically, ionized—commonly by ESI—and filtered by the first quadrupole according to precursor m/z. Collision-induced fragmentation then generates product ions that are measured by the second quadrupole. This precursor-to-fragment relationship provides both selectivity and quantitative information in a complex biological matrix.'
        ],
        tr: [
          'Raporda LC-MS/MS; narkotikler, stimulantlar, beta blockerlar, diüretikler, masking agent’lar ve bazı hormon veya metabolik modülatörleri içeren farklı yasaklı madde gruplarında kullanılıyordu. Analitik gruba bağlı olarak pH ayarlama, ekstraksiyon, internal-standard ekleme, santrifüjleme, evaporasyon veya yeniden çözme gibi hazırlık basamakları vial hazırlığından önce devreye giriyordu.',
          'Cihazın çalışma mantığı da aynı derecede önemliydi: bileşikler önce kromatografik olarak ayrılıyor, genellikle ESI ile iyonlaştırılıyor ve ilk quadrupole’da precursor m/z değerine göre seçiliyordu. Collision-induced fragmentation sonrasında oluşan product ion’lar ikinci quadrupole’da ölçülüyordu. Bu precursor-fragment ilişkisi karmaşık biyolojik matrikste hem seçicilik hem de nicel bilgi sağlıyor.'
        ]
      },
    },
    {
      id: 'gc-msms',
      short: { en: 'GC-MS/MS', tr: 'GC-MS/MS' },
      eyebrow: '05 · GC-MS/MS / DERIVATIZATION CHEMISTRY',
      title: {
        en: 'Hydrolysis, extraction and derivatization make selected doping analytes compatible with GC-MS/MS',
        tr: 'Hidroliz, ekstraksiyon ve türevlendirme seçili doping analitlerini GC-MS/MS için uygun hale getirir'
      },
      paragraphs: {
        en: [
          'The GC-MS/MS workflows made the chemistry of sample preparation particularly visible. Analyses for stimulants, narcotics, beta blockers, low-level anabolic agents and endogenous steroids can involve enzymatic hydrolysis, organic extraction and derivatization before chromatographic separation.',
          'MSTFA derivatization is especially instructive because polar functional groups such as hydroxyl, amino or carboxylic-acid groups can reduce volatility and compromise GC behavior. Silylation makes selected analytes less polar and more volatile, after which GC separation is followed by tandem-MS precursor selection, collision-induced fragmentation and product-ion detection. The workflow showed me directly how sample-preparation chemistry and instrument performance depend on one another.'
        ],
        tr: [
          'GC-MS/MS iş akışlarında numune hazırlama kimyası çok daha görünür hale geliyordu. Stimulant, narkotik ve beta blocker analizlerinin yanı sıra düşük düzey anabolik ajanlar ve endojen steroidlerin değerlendirilmesinde enzimatik hidroliz, organik ekstraksiyon ve türevlendirme basamakları kullanılabiliyordu.',
          'MSTFA ile türevlendirme özellikle öğreticiydi; hidroksil, amino veya karboksilik asit gibi polar fonksiyonel gruplar uçuculuğu azaltarak GC davranışını bozabilir. Silylation seçili analitleri daha az polar ve daha uçucu hale getirir; ardından GC ayırması tandem-MS precursor seçimi, collision-induced fragmentation ve product-ion tespitiyle tamamlanır. Bu iş akışı numune hazırlama kimyası ile cihaz performansının birbirinden ayrı düşünülemeyeceğini doğrudan gösterdi.'
        ]
      },
      art: 'triplequad'
    },
    {
      id: 'peptides-hrms',
      short: { en: 'Peptides & HRMS', tr: 'Peptitler ve HRMS' },
      eyebrow: '06 · SPE / SMALL PEPTIDES / HIGH-RESOLUTION MS',
      title: {
        en: 'SPE-based peptide preparation and LC-HRMS broaden the analytical window beyond routine targeted screening',
        tr: 'SPE tabanlı peptit hazırlama ve LC-HRMS rutin hedefli taramanın ötesinde analitik pencereyi genişletir'
      },
      paragraphs: {
        en: [
          'Small-peptide analysis introduced a different preparation strategy. Solid Phase Extraction was used to condition, load, wash and elute the target fraction before evaporation, reconstitution and LC-MS/MS analysis. The workflow demonstrated how selective cleanup and preconcentration can be built into sample preparation before the instrument ever sees the sample.',
          'LC-HRMS added another analytical dimension. High-resolution mass analysis can distinguish ions with very similar nominal m/z values by measuring exact mass with ppm-level accuracy. The report discusses TOF and Orbitrap principles and the value of high resolution for complex biological matrices, where accurate mass can reduce false positives and support broader screening or metabolite identification.'
        ],
        tr: [
          'Küçük peptit analizi farklı bir hazırlama stratejisi gösterdi. Solid Phase Extraction ile kolon kondisyonlama, sample loading, yıkama ve elüsyon basamakları uygulanıyor; ardından evaporasyon, yeniden çözme ve LC-MS/MS analizi gerçekleştiriliyordu. Bu iş akışı seçici matriks temizleme ve zenginleştirmenin cihazdan önce numune hazırlama içine nasıl yerleştirilebildiğini gösterdi.',
          'LC-HRMS ise analize başka bir boyut ekliyordu. Yüksek çözünürlüklü kütle analizi, nominal m/z değerleri birbirine çok yakın iyonları ppm düzeyindeki hassas kütle ölçümüyle ayırt edebilir. Raporda TOF ve Orbitrap prensipleri ile accurate mass bilgisinin karmaşık biyolojik matrikste yanlış pozitifleri azaltma, daha geniş tarama ve metabolit tanımlama açısından önemi ele alındı.'
        ]
      },
      art: 'hrms'
    },
    {
      id: 'hplc-irms-prep',
      short: { en: 'HPLC → IRMS prep', tr: 'HPLC → IRMS hazırlık' },
      eyebrow: '07 · MULTI-DAY PURIFICATION / GC-C-IRMS PREPARATION',
      title: {
        en: 'Isotope-ratio analysis depends on extensive cleanup before the final measurement',
        tr: 'İzotop oranı analizi final ölçümden önce kapsamlı bir saflaştırmaya dayanır'
      },
      paragraphs: {
        en: [
          'One of the most extensive workflows in the report was the multi-day preparation preceding GC-C-IRMS. Urine samples undergo cleanup and extraction, enzymatic hydrolysis and evaporation before target steroid fractions are isolated and purified by HPLC. Fraction collection, drying, derivatization and—in selected fractions—an additional purification stage can extend the workflow across several days.',
          'The purpose is analytical rather than procedural complexity for its own sake: isotope-ratio measurement requires a clean target fraction so that unrelated matrix components do not distort the carbon-isotope signal. This section was a strong reminder that the sophistication of a final detector does not remove the need for careful upstream chemistry.'
        ],
        tr: [
          'Rapordaki en kapsamlı iş akışlarından biri GC-C-IRMS öncesindeki çok günlük hazırlık süreciydi. İdrar numuneleri temizleme ve ekstraksiyon, enzimatik hidroliz ve evaporasyon basamaklarından geçiyor; hedef steroid fraksiyonları daha sonra HPLC ile izole edilip saflaştırılıyordu. Fraction collection, kurutma, türevlendirme ve seçili fraksiyonlarda ek purification adımları süreci birkaç güne yayabiliyordu.',
          'Bu uzun sürecin amacı yalnızca prosedürü karmaşıklaştırmak değildi; isotope-ratio measurement için hedef fraksiyonun mümkün olduğunca temiz olması gerekir, aksi halde matriks bileşenleri karbon izotop sinyalini etkileyebilir. Bu bölüm, final dedektör ne kadar gelişmiş olursa olsun yukarı akış kimyasının öneminin ortadan kalkmadığını açık biçimde gösterdi.'
        ]
      },
      art: 'hplc'
    },
    {
      id: 'isotope-ratio',
      short: { en: 'GC-C-IRMS', tr: 'GC-C-IRMS' },
      eyebrow: '08 · ISOTOPE-RATIO MASS SPECTROMETRY',
      title: {
        en: 'GC-C-IRMS asks not only whether a steroid is present, but whether its isotopic origin is consistent with endogenous production',
        tr: 'GC-C-IRMS yalnızca steroidin varlığını değil, izotopik kökeninin endojen üretimle uyumunu da sorgular'
      },
      paragraphs: {
        en: [
          'After purification, compounds are separated by GC and passed through a combustion interface that converts the organic molecules into simple gases—especially CO₂ for carbon-isotope analysis. The isotope-ratio mass spectrometer then measures stable-isotope relationships such as ¹³C/¹²C with very high precision.',
          'This is analytically different from conventional targeted MS. In anti-doping work, the isotopic signature can help assess whether a steroid that is naturally present in the body is consistent with endogenous production or with an exogenous synthetic source. Steroid-profile information such as testosterone, epitestosterone, androsterone, etiocholanolone and 5α/5β-diol can therefore be interpreted together with longitudinal and isotope-ratio evidence rather than as a simple present/absent result.'
        ],
        tr: [
          'Saflaştırma sonrasında bileşikler GC ile ayrılıyor ve organik molekülleri basit gazlara—karbon izotop analizi için özellikle CO₂’ye—dönüştüren combustion interface üzerinden geçiriliyor. Isotope-ratio mass spectrometer daha sonra ¹³C/¹²C gibi kararlı izotop oranlarını çok yüksek hassasiyetle ölçüyor.',
          'Bu yaklaşım klasik hedefli MS analizinden farklı bir analitik soru soruyor. Doping kontrolünde izotopik imza, vücutta doğal olarak bulunan bir steroidin endojen üretimle mi yoksa dışarıdan verilen sentetik bir kaynakla mı uyumlu olduğunu değerlendirmeye yardımcı olabilir. Testosterone, epitestosterone, androsterone, etiocholanolone ve 5α/5β-diol gibi steroid-profile bileşenleri bu nedenle longitudinal ve isotope-ratio kanıtıyla birlikte yorumlanabilir.'
        ]
      },
      art: 'isotope'
    },
    {
      id: 'epo-analysis',
      short: { en: 'EPO analysis', tr: 'EPO analizi' },
      eyebrow: '09 · ERYTHROPOIETIN / PROTEIN ANALYTICS',
      title: {
        en: 'EPO testing shifts from chromatographic mass spectrometry to electrophoresis, immunoblotting and chemiluminescence',
        tr: 'EPO testi kromatografik kütle spektrometrisinden elektroforez, immunoblotting ve kemilüminesansa geçer'
      },
      paragraphs: {
        en: [
          'Erythropoietin analysis showed that an anti-doping laboratory cannot rely on one analytical platform for every target. The report describes immunopurification and selective preconcentration before SAR-PAGE, where erythropoiesis-stimulating agents are separated according to electrophoretic behavior.',
          'After electrophoresis, proteins are transferred to a PVDF membrane by immunoblotting, recognized with an anti-human EPO antibody system and visualized through chemiluminescence. Images are then evaluated with the GAS-EPO software. For me, this was a useful contrast with MS workflows: the target molecule changes, so the analytical language changes from chromatography and m/z to protein separation, antibody recognition and band-pattern interpretation.'
        ],
        tr: [
          'Eritropoietin analizi, doping kontrol laboratuvarının her hedef için tek bir analitik platforma dayanamayacağını gösterdi. Raporda SAR-PAGE öncesinde immunopurification ve seçici preconcentration uygulanıyor; ardından erythropoiesis-stimulating agent’lar elektroforetik davranışlarına göre ayrılıyor.',
          'Elektroforez sonrasında proteinler immunoblotting ile PVDF membrane üzerine aktarılıyor, anti-human EPO antikor sistemiyle tanınıyor ve kemilüminesansla görünür hale getiriliyor. Görüntüler daha sonra GAS-EPO yazılımıyla değerlendiriliyor. Bu bölüm MS iş akışlarına güçlü bir karşılaştırma sundu: hedef molekül değiştiğinde analitik dil de chromatography ve m/z’den protein ayrımı, antikor tanıma ve band-pattern yorumuna geçiyor.'
        ]
      },
      art: 'electrophoresis'
    },
    {
      id: 'athlete-passport',
      short: { en: 'Athlete passport', tr: 'Sporcu biyolojik pasaportu' },
      eyebrow: '10 · ATHLETE BIOLOGICAL PASSPORT / TAKEAWAY',
      title: {
        en: 'Longitudinal hematology completes the picture: reliable anti-doping decisions are built from multiple controlled analytical perspectives',
        tr: 'Longitudinal hematoloji resmi tamamlar: güvenilir doping kontrol kararları birden fazla kontrollü analitik perspektiften oluşur'
      },
      paragraphs: {
        en: [
          'The hematological module of the Athlete Biological Passport introduced a different type of monitoring. Blood samples are homogenized, analyzed with quality controls on the Sysmex XN-1000 and measured in duplicate so that agreement between repeated results can be checked. Rather than searching for one prohibited molecule, the longitudinal approach looks for biologically meaningful changes in an athlete’s hematological profile.',
          'Taken together, the placement connected targeted LC-MS/MS and GC-MS/MS, high-resolution MS, isotope-ratio analysis, EPO protein testing and hematological monitoring within one anti-doping environment. The most transferable lesson for me was that trustworthy analytical chemistry comes from the complete chain—sample preparation, quality control, separation, detection, confirmation and interpretation—not from the reputation of any single instrument.'
        ],
        tr: [
          'Athlete Biological Passport’ın hematolojik modülü farklı bir izleme yaklaşımı gösterdi. Kan numuneleri homojenize ediliyor, Sysmex XN-1000 üzerinde kalite kontrolleriyle birlikte analiz ediliyor ve tekrarlı ölçümlerin birbiriyle uyumu kontrol ediliyordu. Burada tek bir yasaklı molekül aramak yerine sporcunun hematolojik profilindeki biyolojik olarak anlamlı değişimler longitudinal biçimde değerlendiriliyor.',
          'Stajın tamamı birlikte düşünüldüğünde hedefli LC-MS/MS ve GC-MS/MS, yüksek çözünürlüklü MS, izotop oranı analizi, EPO protein testleri ve hematolojik izleme aynı doping kontrol ortamında birleşti. Benim için en taşınabilir ders; güvenilir analitik kimyanın tek bir cihazın gücünden değil, numune hazırlama, kalite kontrol, ayırma, tespit, doğrulama ve yorumlamadan oluşan bütün zincirden doğduğuydu.'
        ]
      },
      art: 'blood'
    }
  ]
}


const dopingPhotoMap = {
  'laboratory-chain': [realPhotos.labScientist, {
    en: 'Representative analytical-laboratory photograph used to illustrate the controlled sample-to-result environment described in this section; it is not a photograph of my placement laboratory.',
    tr: 'Bu bölümde anlatılan kontrollü numuneden-sonuca laboratuvar ortamını görselleştiren temsilî analitik laboratuvar fotoğrafıdır; staj yaptığım laboratuvarın fotoğrafı değildir.'
  }],
  'front-end-quality': [realPhotos.labScientist, {
    en: 'Representative laboratory photograph illustrating disciplined bench work and front-end quality control; not a photograph of the Turkish Doping Control Center.',
    tr: 'Disiplinli tezgâh çalışması ve ön kalite kontrolü görselleştiren temsilî laboratuvar fotoğrafıdır; Türkiye Doping Kontrol Merkezi’nin fotoğrafı değildir.'
  }],
  'controls-calibration': [realPhotos.lcms, {
    en: 'Representative LC–MS laboratory instrumentation used to support the discussion of controls, calibration and internal-standard based analytical batches; not the instrument from my placement.',
    tr: 'Kontrol, kalibrasyon ve internal-standard temelli analitik batch anlatımını destekleyen temsilî LC–MS laboratuvar cihazıdır; stajımdaki cihazın fotoğrafı değildir.'
  }],
  'lc-msms': [realPhotos.lcms, {
    en: 'Representative liquid-chromatography–mass-spectrometry instrumentation used to illustrate the LC–MS/MS workflow discussed here. The photograph is illustrative and is not presented as the exact instrument used during my placement.',
    tr: 'Burada anlatılan LC–MS/MS iş akışını görselleştirmek için kullanılan temsilî sıvı kromatografisi–kütle spektrometrisi cihazıdır. Fotoğraf, stajımda kullanılan birebir cihaz olarak sunulmamaktadır.'
  }],
  'gc-msms': [realPhotos.gcms, {
    en: 'Representative GC–MS laboratory instrumentation. The source photograph documents a GC–MS system, so it is used only to illustrate the GC–MS analytical environment rather than to claim a specific tandem-MS model.',
    tr: 'Temsilî GC–MS laboratuvar cihazı. Kaynak fotoğraf bir GC–MS sistemi gösterdiği için belirli bir tandem-MS modeli olduğu iddia edilmeden GC–MS analitik ortamını görselleştirmek amacıyla kullanılmıştır.'
  }],
  'peptides-hrms': [realPhotos.qtof, {
    en: 'Representative LC–qTOF high-resolution mass-spectrometry system used to illustrate accurate-mass / HRMS analysis; not the instrument from my placement.',
    tr: 'Accurate-mass / HRMS analizini görselleştiren temsilî LC–qTOF yüksek çözünürlüklü kütle spektrometrisi sistemi; stajımdaki cihazın fotoğrafı değildir.'
  }],
  'hplc-irms-prep': [realPhotos.lcms, {
    en: 'Representative liquid-chromatography / mass-spectrometry laboratory instrumentation used as visual context for the multi-stage chromatographic preparation described here; not a photograph of the placement laboratory.',
    tr: 'Burada anlatılan çok aşamalı kromatografik hazırlığa görsel bağlam sağlayan temsilî sıvı kromatografisi / kütle spektrometrisi laboratuvar cihazı; staj laboratuvarının fotoğrafı değildir.'
  }],
  'isotope-ratio': [realPhotos.irms, {
    en: 'Representative isotope-ratio mass spectrometer used to illustrate the isotope-ratio measurement stage; not the specific instrument used during my placement.',
    tr: 'İzotop oranı ölçüm aşamasını görselleştiren temsilî isotope-ratio mass spectrometer; stajımda kullanılan spesifik cihazın fotoğrafı değildir.'
  }],
  'epo-analysis': [realPhotos.electrophoresis, {
    en: 'Representative electrophoresis equipment used to illustrate electrophoretic separation in the EPO-analysis discussion; not a photograph of the placement laboratory.',
    tr: 'EPO analizi anlatımındaki elektroforetik ayırmayı görselleştiren temsilî elektroforez ekipmanı; staj laboratuvarının fotoğrafı değildir.'
  }],
  'athlete-passport': [realPhotos.labScientist, {
    en: 'Representative laboratory photograph used to provide real-world analytical context for longitudinal monitoring; it does not depict an Athlete Biological Passport procedure or my placement laboratory.',
    tr: 'Longitudinal izlem anlatımına gerçek laboratuvar bağlamı sağlayan temsilî fotoğraf; Athlete Biological Passport prosedürünü veya staj laboratuvarımı göstermemektedir.'
  }],
}
dopingExperience.sections.forEach(section => {
  const media = dopingPhotoMap[section.id]
  if (media) Object.assign(section, { image: media[0], caption: media[1], art: undefined, images: undefined })
})

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Scroll,
  Info,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Droplet,
  Compass,
  Coins,
  History,
  FileText,
  UserCheck,
  Briefcase,
  Handshake,
  Image as ImageIcon,
  Heart,
  ExternalLink,
  MessageSquare,
  Bookmark,
  Share2,
  Video,
  Globe,
  Upload,
  CheckCircle2,
  Flag,
  User,
  ShoppingBag,
  Sliders,
  Sparkle,
  Factory,
  ClipboardList,
  Wrench,
  Building2,
  MapPin,
  Layers,
  Sparkles as SparklesIcon,
  Crown,
  Cpu,
  Boxes,
  Languages,
  Check,
  Send,
  Download,
  Eye,
  Award,
  Zap,
  Tag,
  Globe2,
  BarChart3,
  TrendingUp,
  Palette,
  Brain,
  Activity,
  Smile,
  Sun,
  Car,
  Home,
  Shirt,
  DollarSign,
  Gem,
  Hammer,
  Code,
  Music,
  BookOpen,
  Radio,
  Plane,
  Hotel,
  Landmark,
  Baby,
  Trophy,
  Users,
  Flame,
  Vote,
  Gift,
  HeartHandshake,
  Menu,
  X,
  Grid,
  Film,
  Clapperboard,
  Tv,
  Gamepad2,
  Ticket,
  PlusCircle,
  UserPlus,
  MessageCircle,
} from "lucide-react";

// Image Assets
const IMAGES = {
  tabriz: "/src/assets/images/tabriz_carpet_1783498665368.jpg",
  kashan: "/src/assets/images/kashan_carpet_1783498680114.jpg",
  isfahan: "/src/assets/images/isfahan_carpet_1783498694196.jpg",
  qashqai: "/src/assets/images/qashqai_carpet_1783498737845.jpg",
  veteran: "/src/assets/images/bazaar_veteran_1783498707547.jpg",
  patriarch: "/src/assets/images/patriarch_portrait_1783721373830.jpg",
  amrazLogo: "/src/assets/images/amraz_city_logo_1784953975761.jpg"
};

// Language Type
type Language = "fa" | "en" | "ar" | "es";

// Multi-language dictionary (Persian, English, Arabic, Indonesian)
const TRANSLATIONS = {
  fa: {
    appName: "فرش‌بازار & ابرشهر توانا (شهر همراز & شهر آفرینا)",
    subtitle: "هوش مصنوعی احساس‌محور نکسوز، اصالت‌سنجی فرش، و طرح جامع شهر توانا (۶۵۰,۰۰۰ + ۶۵۰,۰۰۰ مترمربع)",
    dedicationTitle: "زنده یاد شادروان «حاج حسین علی میری»",
    dedicationText: "تقدیم به پیشگاه منور و روح پرفتوح پدر بزرگوارم، تاجر نام‌آور و پیشکسوت نامدار صنعت و هنر فرش دستباف ایران.",
    biCityTitle: "طرح جامع شهر توانا (متشکل از دو شهر نیو متاورسی همراز و آفرینا)",
    biCitySubtitle: "ابرشهر توانا متشکل از دو شهر نیو متاورسی مجزای ۶۵۰,۰۰۰ مترمربعی همراز (Tinasi City Hamraz - یکی از دو شهر نیو متاورسی توانا سیتی) و آفرینا، بورس فرش، کالا و خدمات، خودرو، مد و پوشاک و خدمات مالی ایران",
    
    // Tabs
    navMetaverse: "طرح جامع شهر توانا (همراز & آفرینا)",
    navManifesto: "کتاب آفرینش & مرامنامه شهر توانا",
    navGlobalExpansion: "جذب سرمایه‌گذار & اسپانسر جهانی",
    navNexsus: "هوش مصنوعی احساسی نکسوز (Nexsus AI)",
    navAdvisor: "کارشناسی و قیمت‌گذاری AI",
    navSellerRoom: "حجره مجازی تجار",
    navCustomWeave: "سفارش بافت چهره و پرچم",
    navDyeSimulator: "شبیه‌ساز رنگرزی سنتی",
    navGallery: "گالری شاهکارهای ایرانی",
    navMerchantSubmit: "همکاری و درخواست حجره",

    // City Details
    afrinaCity: "شهر آفرینا (Afrina City - بخش اول شهر توانا)",
    afrinaArea: "۶۵۰,۰۰۰ مترمربع فضای مجازی",
    afrinaStatus: "مستقر شده و فعال (Deployed)",
    afrinaDesc: "مرکز موزه بین‌المللی فرش، کارگاه‌های بافت سلطنتی، خانه‌های رنگرزی گیاهی و تالارهای کارشناسی اصالت.",
    
    hamrazCity: "شهر همراز (Tinasi City Hamraz - یکی از دو شهر نیو متاورسی توانا سیتی)",
    hamrazArea: "۶۵۰,۰۰۰ مترمربع فضای مجازی",
    hamrazStatus: "آماده استقرار و توسعه (Master Plan Ready)",
    hamrazDesc: "گوی درخشان محبت و گرما، بورس دیجیتال فرش، تالارهای حراج سه‌بعدی، مرکز مبادلات کالا و خدمات، پلتفرم خرید و فروش خودرو، پوشاک و مد، و خدمات مالی ایران.",

    // Audit & Review
    auditTitle: "گزارش بازبینی فنی و ارزیابی طرح جامع شهر همراز و شهر توانا (Tavana City Master Plan)",
    auditSummary: "ارزیابی زیرساخت سه‌بعدی، شبکه احساسی نکسوز، توکنومیکس و توسعه بسترهای مالی، خودرو، مد و مبادلات کالا در شهر توانا",
    rec1Title: "۱. همگام‌سازی جفت دیجیتال (Physical-to-NFT Twin)",
    rec1Desc: "پیشنهاد می‌شود برای هر فرش فیزیکی و کالای ارزشمند در شهر همراز و آفرینا، سند NFT یکتا با امضای استادکار روی بلاک‌چین ثبت شود.",
    rec2Title: "۲. درگاه‌های انتقال درون‌شهری توانا (Tavana Inter-City Portals)",
    rec2Desc: "ایجاد درگاه‌های نوری انتقال سریع بازدیدکنندگان بین موزه آفرینا و بورس همراز (Tinasi City Hamraz - یکی از دو شهر نیو متاورسی توانا سیتی).",
    rec3Title: "۳. واقعیت افزوده چیدمان و خرید خودرو/مد (AR Interior & Fashion)",
    rec3Desc: "امکان پرو زنده پوشاک ایرانی، جانمایی فرش و تست سه‌بعدی خودروها در پارسل‌های شهر همراز با فناوری AR.",
    rec4Title: "۴. پلتفرم یکپارچه خدمات مالی و صرافی شهر توانا",
    rec4Desc: "اتصال صرافی دیجیتال، معاملات صکوک و اعتبار مالی به شبکه احساسی نکسوز در راسته‌های بازار همراز.",

    // Nexsus AI
    nexsusTitle: "موتور هوش مصنوعی احساس‌محور نکسوز (Nexsus Emotional Intelligence)",
    nexsusDesc: "شبیه‌ساز هوشمند احساسات، معنویت، عشق، غم و شادی انسان؛ پل پیوند خرد ماشین و گرما و محبت قلب بشر.",

    // Actions
    btnRegisterParcel: "ثبت و رزرو پارسل مجازی",
    btnView3D: "ورود به تور سه‌بعدی VR",
    btnSubmitAppraisal: "استعلام قیمت و کارشناسی",
    btnTranslate: "ترجمه هوشمند توضیحات",
    btnSimulateDye: "ترکیب و آزمایش رنگ",

    // Labels
    origin: "خاستگاه / شهر بافت",
    raj: "رج‌شمار",
    material: "جنس الیاف",
    design: "طرح و نقشه",
    dimensions: "ابعاد (متر)",
    age: "قدمت و سن فرش",
    userNotes: "توضیحات و شناسه فرش",
    expertSelect: "انتخاب استاد کارشناس",
    langSelect: "زبان سامانه",
  },
  en: {
    appName: "FarshBazaar & Tavana Supercity (Hamraz & Afrina)",
    subtitle: "Nexsus Emotional AI, Authenticity Certification, & Tavana City Master Plan (650,000 + 650,000 m²)",
    dedicationTitle: "In Memory of Late Master 'Haj Hossein Ali Miri'",
    dedicationText: "Dedicated to the eternal spirit of my beloved father, legendary merchant and pioneer of Persian hand-knotted carpet art.",
    biCityTitle: "Tavana City Master Plan (Hamraz City & Afrina City)",
    biCitySubtitle: "Tavana Supercity comprising two distinct 650,000 m² new metaverse cities: Hamraz City (Tinasi City Hamraz - One of the two new metaverse cities of Tavana City) & Afrina City, integrating Persian carpets, goods & services exchange, vehicle trading, fashion, and financial services.",

    // Tabs
    navMetaverse: "Tavana City Master Plan (Hamraz & Afrina)",
    navManifesto: "Tavana City Manifesto & Genesis Book",
    navGlobalExpansion: "Global Investor & Sponsorship Hub",
    navNexsus: "Nexsus Emotional AI Engine",
    navAdvisor: "AI Appraisal & Expert Advice",
    navSellerRoom: "Merchant Virtual Booth",
    navCustomWeave: "Custom Portrait & Flag Weave",
    navDyeSimulator: "Traditional Dyeing Simulator",
    navGallery: "Persian Masterpieces Gallery",
    navMerchantSubmit: "Merchant Application & Alliance",

    // City Details
    afrinaCity: "Afrina City (Sector I of Tavana City)",
    afrinaArea: "650,000 m² Virtual Sector",
    afrinaStatus: "Deployed & Active",
    afrinaDesc: "International Carpet Museum, Royal Weaving Sanctuaries, Natural Dye Ateliers, & Authenticity Certification Chambers.",

    hamrazCity: "Hamraz City (Tinasi City Hamraz - One of the two new metaverse cities of Tavana City)",
    hamrazArea: "650,000 m² Virtual Sector",
    hamrazStatus: "Master Plan Ready & Optimizing",
    hamrazDesc: "Radiant orb of compassion and warmth, 3D Auction Amphitheaters, Goods & Services Exchange, Vehicle Marketplace, Persian Fashion Hub, and Financial Services Portal.",

    // Audit & Review
    auditTitle: "Hamraz City & Tavana City Master Plan Technical Assessment",
    auditSummary: "Review of 3D shaders, smart contracts, Nexsus emotional framework, and multi-platform integration (Goods, Vehicles, Fashion, Financials)",
    rec1Title: "1. Physical-to-NFT Digital Twin Sync",
    rec1Desc: "Register every physical carpet, luxury garment, and asset in Hamraz City & Afrina City with verified blockchain NFTs backed by master signatures.",
    rec2Title: "2. Tavana Inter-City Teleport Gates",
    rec2Desc: "Instant light-gate portal connections between Afrina Heritage Museum and Tinasi City Hamraz Financial & Trade Citadel.",
    rec3Title: "3. AR Room & Fashion Virtual Fitting",
    rec3Desc: "Allow global users to project carpets into their homes, preview Iranian fashion in AR, and inspect 3D vehicle models in Hamraz.",
    rec4Title: "4. Integrated Financial Services & Nexsus Soundscape",
    rec4Desc: "Simulate natural merchant interaction and financial exchange logic enriched with empathetic Nexsus soundscapes.",

    // Nexsus AI
    nexsusTitle: "Nexsus Emotional Intelligence AI Engine",
    nexsusDesc: "Human emotion simulator bridging AI logic with warmth, compassion, empathy, nostalgia, and spiritual peace.",

    // Actions
    btnRegisterParcel: "Reserve Virtual Parcel",
    btnView3D: "Enter 3D VR Tour",
    btnSubmitAppraisal: "Request AI Appraisal",
    btnTranslate: "Smart Translate",
    btnSimulateDye: "Mix & Test Natural Dyes",

    // Labels
    origin: "Origin / Weaving City",
    raj: "Raj Density",
    material: "Material & Thread",
    design: "Design Pattern",
    dimensions: "Dimensions (m)",
    age: "Age & Antiquity",
    userNotes: "Description / Notes",
    expertSelect: "Select Master Expert",
    langSelect: "Language",
  },
  ar: {
    appName: "فرش بازار ومدينة توانا الافتراضية (مدينة همراز وآفرينا)",
    subtitle: "ذكاء نكسوز العاطفي، توثيق الأصالة، والمخطط العام لمدينة توانا الافتراضية (٦٥٠,۰۰۰+٦٥٠,۰۰۰ متر مربع)",
    dedicationTitle: "إهداء لروح الفقيد 'الحاج حسين علي ميري'",
    dedicationText: "إهداء إلى الروح الطاهرة لوالدي الكريم، التاجر الشهير ورائد صناعة وفن السجاد اليدوي الإيراني.",
    biCityTitle: "المخطط العام لمدينة توانا (إحدى مدينتيها مدينة همراز ومدينة آفرينا)",
    biCitySubtitle: "مدينة توانا تتألف من مدينتين افتراضيتين بمساحة ٦٥٠,۰۰۰ متر مربع لكل منهما: مدينة همراز (إحدى مدينتي توانا الافتراضية) ومدينة آفرينا",

    // Tabs
    navMetaverse: "المخطط العام لمدينة توانا (همراز وآفرينا)",
    navManifesto: "کتاب الخلق والميثاق لمدينة توانا",
    navGlobalExpansion: "مركز الاستثمار والرعاية الدولية",
    navNexsus: "محرك نكسوز للذكاء العاطفي",
    navAdvisor: "التقييم الذكي والاستشارة",
    navSellerRoom: "جناح التجار الافتراضي",
    navCustomWeave: "حياكة الصور والأعلام",
    navDyeSimulator: "محاكي الصباغة التقليدية",
    navGallery: "معرض الروائع الفارسية",
    navMerchantSubmit: "طلب الشراكة والأجنحة",

    // City Details
    afrinaCity: "مدينة آفرينا (Afrina City - القطاع الأول لمدينة توانا)",
    afrinaArea: "٦٥٠,۰۰۰ متر مربع مساحة افتراضية",
    afrinaStatus: "مفعلة ومنشورة (Deployed)",
    afrinaDesc: "المتحف الدولي للسجاد، ورش الحياكة الملكية، بيوت الصباغة النباتية، وقاعات توثيق الأصالة.",

    hamrazCity: "مدينة همراز (Tinasi City Hamraz - إحدى مدينتي توانا الافتراضيتين)",
    hamrazArea: "٦٥٠,۰۰۰ متر مربع مساحة افتراضية",
    hamrazStatus: "جاهزة للنشر والتطوير (Master Plan Ready)",
    hamrazDesc: "كرة النور والمحبة والدفء، السوق الرقمي للسجاد، تبادل البضائع والخدمات، سوق السيارات، الأزياء والخدمات المالية.",

    // Audit & Review
    auditTitle: "تقرير المراجعة الفنية والتوصيات الاستراتيجية لمدينة همراز ومدينة توانا",
    auditSummary: "تقييم فني للبنية التحتية ثلاثية الأبعاد والعقود الذكية ومحرك نكسوز العاطفي والمنصات المالية",
    rec1Title: "١. مزامنة التوأم الرقمي (Physical-to-NFT)",
    rec1Desc: "ربط كل سجاد مادي ومنتج في مدينة همراز وآفرينا بعقد NFT موثق بتوقيع كبار الأساتذة.",
    rec2Title: "٢. بوابات الانتقال الفوري في مدينة توانا",
    rec2Desc: "إنشاء بوابات ضوئية للانتقال السريع بين ساحة متحف آفرينا وسوق مدينة همراز (إحدى مدينتي توانا).",
    rec3Title: "٣. التجربة بالواقع المعزز (AR)",
    rec3Desc: "تمكين المشترين الدوليين من معاينة السجاد والأزياء والسيارات باستخدام تقنية الواقع المعزز.",
    rec4Title: "٤. الخدمات المالية والذكاء العاطفي نكسوز",
    rec4Desc: "محاكاة أصوات الأسواق التقليدية والتبادل المالي المباشر مع طبقة نكسوز العاطفية.",

    // Nexsus AI
    nexsusTitle: "محرك نكسوز للذكاء العاطفي والمحاكاة الإنسانية",
    nexsusDesc: "محاكي المشاعر الإنسانية، الحب، الحزن، الفرح، والسلام الروحي الذي يربط خرد الآلة بكهانجات القلب.",

    // Actions
    btnRegisterParcel: "حجز قطعة أرض افتراضية",
    btnView3D: "دخول الجولة ثلاثية الأبعاد",
    btnSubmitAppraisal: "طلب التقييم الذكي",
    btnTranslate: "ترجمة فورية",
    btnSimulateDye: "خلط واختبار الألوان",

    // Labels
    origin: "أصل السجاد / المدينة",
    raj: "كثافة العقد (رج)",
    material: "نوع الياف والخيوط",
    design: "النقش والتصميم",
    dimensions: "الأبعاد (أمتار)",
    age: "العمر والأصالة",
    userNotes: "الوصف والملاحظات",
    expertSelect: "اختر الخبير المعتمد",
    langSelect: "لغة النظام",
  },
  es: {
    appName: "FarshBazaar & Superciudad Tavana (Ciudad Hamraz & Ciudad Afrina)",
    subtitle: "IA Emocional Nexsus, Certificación de Autenticidad y Plan Maestro de la Ciudad Tavana (650.000 + 650.000 m²)",
    dedicationTitle: "En Memoria del Recordado Maestro 'Haj Hossein Ali Miri'",
    dedicationText: "Dedicado con veneración a la memoria del inolvidable patriarca y pionero de la industria de la alfombra persa hecha a mano.",
    biCityTitle: "Plan Maestro de la Ciudad Tavana (Integrada por Ciudad Hamraz y Ciudad Afrina)",
    biCitySubtitle: "Superciudad Tavana compuesta por dos ciudades del nuevo metaverso de 650.000 m²: Ciudad Hamraz (Tinasi City Hamraz - Una de las dos ciudades del nuevo metaverso de Tavana City) y Ciudad Afrina",

    // Tabs
    navMetaverse: "Plan Maestro Ciudad Tavana (Hamraz & Afrina)",
    navManifesto: "Libro de la Creación y Manifiesto de Ciudad Tavana",
    navGlobalExpansion: "Centro de Inversión y Patrocinio Global",
    navNexsus: "IA Emocional Nexsus Engine",
    navAdvisor: "Tasación y Peritaje IA",
    navSellerRoom: "Stand Virtual de Comerciantes",
    navCustomWeave: "Tejido Personalizado de Retrato y Bandera",
    navDyeSimulator: "Simulador de Tinturado Natural",
    navGallery: "Galería de Obras Maestras Persas",
    navMerchantSubmit: "Solicitud de Alianza y Pabellón",

    // City Details
    afrinaCity: "Ciudad Afrina (Afrina City - Sector I de Tavana City)",
    afrinaArea: "650.000 m² Espacio Virtual",
    afrinaStatus: "Desplegada y Activa (Active Deployment)",
    afrinaDesc: "Centro del Museo Internacional de la Alfombra, Talleres de Tejido Real, Atelieres de Tintura Natural y Salas de Autenticidad.",

    hamrazCity: "Ciudad Hamraz (Tinasi City Hamraz - Una de las dos ciudades del nuevo metaverso de Tavana City)",
    hamrazArea: "650.000 m² Espacio Virtual",
    hamrazStatus: "Lista para Despliegue y Desarrollo (Master Plan Ready)",
    hamrazDesc: "Esfera radiante de calidez y compasión, bolsa digital de alfombras, subastas 3D, intercambio de bienes y servicios, mercado de vehículos, moda persa y servicios financieros.",

    // Audit & Review
    auditTitle: "Evaluación Técnica del Plan Maestro de Ciudad Hamraz y Ciudad Tavana",
    auditSummary: "Evaluación de infraestructura 3D, contratos inteligentes, arquitectura emocional Nexsus e integración multiplataforma (Vehículos, Inmuebles, Moda, Finanzas)",
    rec1Title: "1. Sincronización de Gemelo Digital (Physical-to-NFT Twin)",
    rec1Desc: "Registro de cada alfombra física y activo en Ciudad Hamraz y Afrina con un certificado NFT verificado en blockchain.",
    rec2Title: "2. Portales de Teletransportación Interurbana Tavana",
    rec2Desc: "Conexión mediante portales de luz entre la Plaza del Museo Afrina y la Ciudadela Financiera de Ciudad Hamraz (Tinasi City Hamraz).",
    rec3Title: "3. Prueba en Realidad Aumentada (AR Interior & Moda 3D)",
    rec3Desc: "Permite a compradores globales probar alfombras en sus hogares, visualizar moda persa y examinar vehículos 3D en Ciudad Hamraz.",
    rec4Title: "4. Servicios Financieros Integrados & Ambiente Emocional Nexsus",
    rec4Desc: "Simulación de interacciones de mercado y transacciones financieras respaldadas por la capa de empatía emocional Nexsus.",

    // Nexsus AI
    nexsusTitle: "Motor de Inteligencia Artificial Emocional Nexsus",
    nexsusDesc: "Simulador de emociones humanas, paz espiritual, empatía, melancolía y alegría que conecta la lógica de la IA con la calidez del alma.",

    // Actions
    btnRegisterParcel: "Reservar Parcela Virtual",
    btnView3D: "Ingresar al Tour Virtual 3D VR",
    btnSubmitAppraisal: "Solicitar Peritaje IA",
    btnTranslate: "Traducción Inteligente",
    btnSimulateDye: "Mezclar y Probar Tintes",

    // Labels
    origin: "Origen / Ciudad de Tejido",
    raj: "Densidad Raj",
    material: "Material e Hilos",
    design: "Patrón y Diseño",
    dimensions: "Dimensiones (m)",
    age: "Antigüedad",
    userNotes: "Descripción / Notas",
    expertSelect: "Seleccionar Maestro Experto",
    langSelect: "Idioma",
  }
};

// Types for Appraisal Data
interface AppraisalData {
  expertAppraisal: string;
  story: string;
  technicalSpecs: {
    knotDensity: string;
    rajClass: string;
    rarity: string;
  };
  valuation: {
    rangeTomans: string;
    rangeGoldSovereigns: string;
    justification: string;
  };
  maintenanceTips: string[];
}

// Preset carpets in gallery
const CARPET_GALLERY = [
  {
    id: "tabriz",
    name: "قالی سلطنتی شاه‌عباسی تبریز (Tabriz Royal Carpet)",
    image: IMAGES.tabriz,
    origin: "تبریز (آذربایجان)",
    raj: "۶۰ رج",
    material: "خامه مرینوس و ابریشم خالص",
    design: "لچک و ترنج شاه‌عباسی با حاشیه اسلیمی",
    length: "۳",
    width: "۲",
    age: "نوبافت",
    userNotes: "بافته شده با گره ترکی متقارن، رنگرزی کاملاً سنتی و گیاهی با قرمز روناس و عنابی پوست گردو.",
    desc: "نمونه بی‌بدیل از هنر کلاسیک آذربایجان با تراکم فوق‌العاده بالا و درخشش خیره‌کننده ابریشم در ترنج میانی."
  },
  {
    id: "kashan",
    name: "محرابی اصیل کاشان (Kashan Mihrab Carpet)",
    image: IMAGES.kashan,
    origin: "کاشان (اصفهان)",
    raj: "۴۵ رج",
    material: "کرک و پشم طبیعی روی تار پنبه",
    design: "طرح گلدانی محرابی (باغی)",
    length: "۴",
    width: "۳",
    age: "نیمه‌آنتیک (حدود ۴۰ سال)",
    userNotes: "حفظ شده در شرایط عالی، شیرازه طبیعی و دست‌دوز، رنگرزی با پوست گردو و برگ مو.",
    desc: "طرح پر از گل‌های شاه‌عباسی متراکم و حاشیه عنابی پررنگ که بازگوکننده عمق تاریخ کویر مرکزی ایران است."
  },
  {
    id: "isfahan",
    name: "فرش نفیس ابریشم اصفهان (Isfahan Dome Silk Carpet)",
    image: IMAGES.isfahan,
    origin: "اصفهان",
    raj: "۷۵ رج",
    material: "گل‌ابریشم و چله ابریشم خالص",
    design: "اسلیمی گنبدی (الهام گرفته از سقف مسجد شیخ لطف‌الله)",
    length: "۳",
    width: "۲",
    age: "نوبافت (اثر استادکار)",
    userNotes: "بافته شده با ریزترین گره‌های اصفهان بر روی چله ابریشم خالص، امضای کارگاه سنتی اصفهان در پایین فرش.",
    desc: "یک اثر هنری به تمام معنا که گردش دوار نقوش اسلیمی آن، یادآور ابدیت و زیبایی آسمانی گنبد معروف شیخ لطف‌الله است."
  },
  {
    id: "qashqai",
    name: "گلیم-فرش عشایری ایل قشقایی (Qashqai Nomadic Carpet)",
    image: IMAGES.qashqai,
    origin: "مناطق ییلاقی فارس (قشقایی)",
    raj: "۳۰ رج (ذهنی‌بافت)",
    material: "پشم در پشم (خامه و چله تماماً پشم دست‌ریس)",
    design: "طرح هندسی هبک‌لو با نقوش بز کوهی و مرغک",
    length: "۲.۵",
    width: "۱.۵",
    age: "نیمه‌آنتیک (میراث خانوادگی)",
    userNotes: "بافته شده توسط زنان هنرمند ایل قشقایی بدون نقشه (ذهنی‌بافت)، ریشه‌ها و منگوله‌های پشمی رنگارنگ جانبی.",
    desc: "روایتی زنده از کوچ عشایری، بافته شده با خامه ضخیم پشمی رنگ شده با روناس کوهی و پوست انار خشک."
  }
];

// Natural dye materials database for simulator (strictly avoiding blue colors)
const DYE_MATERIALS = [
  {
    id: "rwnas",
    name: "روناس (قرمز لاکی و روناسی)",
    colorClass: "bg-red-800",
    textCol: "text-red-800",
    source: "ریشه گیاه روناس وحشی صحرایی",
    poetry: "«سرخی لاکی ما از جگر سوخته است / روناس هنر به تار و پودش دوخته است»",
    desc: "اصیل‌ترین قرمز فرش‌های سنتی ایران که به مرور زمان زیباتر و درخشان‌تر می‌شود."
  },
  {
    id: "gordo",
    name: "پوست گردو (قهوه‌ای شتری و عنابی)",
    colorClass: "bg-amber-900",
    textCol: "text-amber-900",
    source: "پوست سبز و بیرونی میوه گردو",
    poetry: "«برگ مو و پوست گردو در سبوی رنگرزی / رنگ باران می‌نشیند بر چله با سر‌افرازی»",
    desc: "قهوه‌ای خاکی و ملایم بسیار پایداری تولید می‌کند که بستر نقوش کویری و خاکی فرش‌های ایران است."
  },
  {
    id: "asparak",
    name: "اسپرک (زرد طلایی و کهربایی)",
    colorClass: "bg-amber-500",
    textCol: "text-amber-600",
    source: "گل و ساقه خشک‌شده گیاه اسپرک وحشی",
    poetry: "«زرد طلاییِ اسپرک چون نور خورشید بهار / تابیده بر دشت چمن‌زار نقشه نگار»",
    desc: "گیاهی روییده در دامنه‌های البرز که زرد طلایی بسیار پرطراوت و زنده‌ای تولید می‌کند."
  },
  {
    id: "pust_anar",
    name: "پوست انار (مسی و زیتونی خاکی)",
    colorClass: "bg-amber-800 border border-yellow-700",
    textCol: "text-amber-800",
    source: "پوست خشک‌شده انار شیرین و ترش ساوه",
    poetry: "«شکوفه انار و پوست سرخ صدف‌آسا / جامه طلایی دوخته بر اندام اسلیمی زیبا»",
    desc: "پوست انار سرشار از خواص ضد‌ بید و رنگ دهی عالی است که به فرش‌های سنتی درخشش ملایم پاییزی هدیه می‌کند."
  }
];

// Sample Parcels for Afrina City & Tinasi City Amraz
const PARCELS_AFRINA = [
  { id: "AF-101", name: "موزه مرکزی شاهکارهای صفوی", area: "۲,۵۰۰ m²", owner: "بنیاد میراث فرش ایران", category: "موزه و گالری", nftCount: 48, status: "فعال و عمومی" },
  { id: "AF-204", name: "کارگاه بافت سلطنتی استاد میری", area: "۱,۸۰۰ m²", owner: "خاندان میری", category: "کارگاه زنده بافت", nftCount: 12, status: "فعال" },
  { id: "AF-308", name: "خانه رنگرزی گیاهی روناس", area: "۱,۲۰۰ m²", owner: "انجمن رنگرزان سنتی", category: "آموزش و نمایشگاه", nftCount: 8, status: "فعال" },
  { id: "AF-412", name: "تالار کارشناسی اصالت و گواهی‌نامه", area: "۳,۰۰۰ m²", owner: "اتحادیه تجار تبریز و اصفهان", category: "کارشناسی رسمی", nftCount: 125, status: "فعال" }
];

const PARCELS_AMRAZ = [
  { id: "TM-101", name: "امفی‌تئاتر حراج سه‌بعدی تنسی امراز (Tinasi Auction)", area: "۴,۰۰۰ m²", owner: "پلتفرم نکسوز متاورس", category: "حراج زنده ۳D", nftCount: 200, status: "آماده افتتاح" },
  { id: "TM-202", name: "راسته گوی طلایی تجار و بنکداران", area: "۵,۵۰۰ m²", owner: "اتحادیه صادرکنندگان", category: "بازار حجره‌ها", nftCount: 310, status: "واگذاری پارسل" },
  { id: "TM-303", name: "مرکز هوش مصنوعی احساسی نکسوز", area: "۲,۰۰0 m²", owner: "استودیو نکسوز", category: "هوش احساسی و شبیه‌سازی", nftCount: 45, status: "آماده افتتاح" },
  { id: "TM-405", name: "پاویون صادرات خلیج فارس و اروپا", area: "۳,۵۰۰ m²", owner: "تجار بین‌المللی", category: "پاویون صادراتی", nftCount: 95, status: "آماده افتتاح" }
];

export default function App() {
  // Language State
  const [lang, setLang] = useState<Language>("fa");
  const t = TRANSLATIONS[lang];

  // Active Tab / Section
  const [activeSection, setActiveSection] = useState<
    "metaverse" | "manifesto" | "globalExpansion" | "iranMarketplaces" | "tourismHub" | "childrenAndParents" | "democracyLeagues" | "cinemaEntertainment" | "communityChat" | "siavashSuite" | "nexsus" | "advisor" | "sellerRoom" | "customWeave" | "dyeSimulator" | "gallery" | "merchantSubmit"
  >("metaverse");

  // Tavana Community Forum & Chat Lounge State
  const [chatRoomTab, setChatRoomTab] = useState<"all" | "suggestions" | "referrals" | "cinema" | "marketplaces">("all");
  const [chatMessages, setChatMessages] = useState<Array<{
    id: string;
    sender: string;
    role: string;
    time: string;
    text: string;
    room: "suggestions" | "referrals" | "cinema" | "marketplaces" | "general";
    likes: number;
  }>>([
    {
      id: "msg-1",
      sender: "استاد سیاوش میری",
      role: "بنیان‌گذار اکوسیستم آفرینش & شهر توانا",
      time: "۱۰:۱۵",
      text: "سلام و درود بر تمام شهروندان، ارزش‌آفرینان و معرفان گرامی! تالارهای گفتگوی هم‌اندیشی شهر توانا راه‌اندازی شد تا بستر گپ و گفت، تبادل نظر، و ارتقای شبکه روابط شهروندان به شکل زنده فراهم باشد.",
      room: "general",
      likes: 42
    },
    {
      id: "msg-2",
      sender: "مهندس سارا آریا",
      role: "کاندیدای مدیریت بورس فرش اصیل",
      time: "۱۰:۳۰",
      text: "طرح لیگ معرفان و واگذاری ۴۰٪ از XPها ایده بسیار درخشانی برای مشارکت ۱۰۰٪ شهروندان در تعیین مدیران برنامه‌هاست.",
      room: "suggestions",
      likes: 28
    },
    {
      id: "msg-3",
      sender: "علیرضا کریمی",
      role: "استندآپ کمدین پردیس سینمایی",
      time: "۱۰:۴۲",
      text: "دوستان عزیز، نظرات و ایده‌هاتون رو در مورد اجراهای کمدی و فیلم‌های پردیس سینمایی بنویسید تا در برنامه‌های بعدی لحاظ کنیم.",
      room: "cinema",
      likes: 19
    },
    {
      id: "msg-4",
      sender: "حاج علی تبریزی",
      role: "ارزش‌آفرین بورس خودرو و املاک",
      time: "۱۱:۰۲",
      text: "بستره بورس املاک و بورس خودرو در شهر توانا فرصتی بی‌نظیر برای تجار و خریداران واقعی ایجاد کرده است.",
      room: "marketplaces",
      likes: 25
    },
    {
      id: "msg-5",
      sender: "مریم رضایی (سفیر معرف)",
      role: "رتبه ۳ لیگ معرفان شهر توانا",
      time: "۱۱:۲۵",
      text: "من تا الان ۵ کاربر جدید به شهر توانا معرفی کردم و ۵۰۰ XP گرفتم! بابت واگذاری ۴۰٪ ای‌اکس‌پی‌ها به کاندیداها حس خیلی خوبی دارم.",
      room: "referrals",
      likes: 33
    }
  ]);
  const [newChatInput, setNewChatInput] = useState("");
  const [chatAuthorName, setChatAuthorName] = useState("");

  // Tavana Cinema, Comedy, Theater & Streaming Hub State
  const [cinemaTab, setCinemaTab] = useState<"screening" | "comedy" | "streaming" | "submit">("screening");
  const [submittedFilmTitle, setSubmittedFilmTitle] = useState("");
  const [submittedDirector, setSubmittedDirector] = useState("");
  const [submittedGenre, setSubmittedGenre] = useState("طنز و سرگرمی اجتماعی");
  const [submittedSynopsis, setSubmittedSynopsis] = useState("");
  const [filmSubmissionSuccess, setFilmSubmissionSuccess] = useState(false);
  const [comedyVotes, setComedyVotes] = useState<Record<string, number>>({
    "comedy-1": 1420,
    "comedy-2": 980,
    "comedy-3": 1850,
  });

  // Global Navigation Menu Modal State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Global Expansion & Sponsor Pitch Hub State
  const [investmentTier, setInvestmentTier] = useState<"platinum" | "gold" | "silver" | "bronze">("platinum");
  const [investmentYears, setInvestmentYears] = useState<number>(3);
  const [selectedParcelCategory, setSelectedParcelCategory] = useState<"bourse" | "museum" | "financial" | "auto" | "fashion">("bourse");
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorOrg, setSponsorOrg] = useState("");
  const [sponsorEmail, setSponsorEmail] = useState("");
  const [sponsorCountry, setSponsorCountry] = useState("ایران / خلیج فارس / بین‌الملل");
  const [sponsorNotes, setSponsorNotes] = useState("");
  const [sponsorSubmitted, setSponsorSubmitted] = useState(false);

  // Interactive District Filter for Metaverse Bi-City View
  const [districtFilter, setDistrictFilter] = useState<string>("all");

  // Metaverse Bi-City Interactive State
  const [selectedCityView, setSelectedCityView] = useState<"both" | "afrina" | "amraz">("both");
  const [selectedParcel, setSelectedParcel] = useState<any>(null);
  const [parcelAcquisitionModel, setParcelAcquisitionModel] = useState<"outright" | "leaseToOwn" | "yieldSharing">("outright");
  const [parcelAcquisitionSuccess, setParcelAcquisitionSuccess] = useState(false);
  const [metaverseRegModal, setMetaverseRegModal] = useState(false);
  const [regCarpetName, setRegCarpetName] = useState("");
  const [regTargetCity, setRegTargetCity] = useState<"afrina" | "amraz">("amraz");
  const [regSuccessMsg, setRegSuccessMsg] = useState(false);

  // Citizen Registration & Login State (Tavana City - Google & Mobile Auth)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"google" | "mobile">("google");
  const [mobileNum, setMobileNum] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<{
    id: string;
    name: string;
    emailOrPhone: string;
    authType: "google" | "mobile";
    citizenCode: string;
    cityRole: string;
    joinDate: string;
  } | null>(() => {
    try {
      const saved = localStorage.getItem("tavana_user_profile");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Google Sign-In handler
  const handleGoogleAuth = () => {
    setAuthLoading(true);
    setTimeout(() => {
      const profile = {
        id: "goog_" + Date.now(),
        name: "کاربر گرامی گوگل (شهروند توانا)",
        emailOrPhone: "user.tavana@gmail.com",
        authType: "google" as const,
        citizenCode: "TAV-GGL-" + Math.floor(100000 + Math.random() * 900000),
        cityRole: "شهروند رسمی ابرشهر توانا (همراز & آفرینا)",
        joinDate: new Date().toLocaleDateString("fa-IR")
      };
      setUserProfile(profile);
      try { localStorage.setItem("tavana_user_profile", JSON.stringify(profile)); } catch {}
      setAuthLoading(false);
    }, 1000);
  };

  // Mobile SMS OTP send
  const handleSendMobileOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNum.trim()) return;
    setAuthLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setAuthLoading(false);
    }, 800);
  };

  // Mobile OTP verify
  const handleVerifyMobileOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode.trim()) return;
    setAuthLoading(true);
    setTimeout(() => {
      const profile = {
        id: "mob_" + Date.now(),
        name: `شهروند همراه (${mobileNum})`,
        emailOrPhone: mobileNum,
        authType: "mobile" as const,
        citizenCode: "TAV-MOB-" + Math.floor(100000 + Math.random() * 900000),
        cityRole: "شهروند تایید شده موبایل - شهر توانا",
        joinDate: new Date().toLocaleDateString("fa-IR")
      };
      setUserProfile(profile);
      try { localStorage.setItem("tavana_user_profile", JSON.stringify(profile)); } catch {}
      setAuthLoading(false);
      setOtpSent(false);
      setOtpCode("");
    }, 1000);
  };

  // Logout
  const handleLogoutCitizen = () => {
    setUserProfile(null);
    try { localStorage.removeItem("tavana_user_profile"); } catch {}
  };

  // ==========================================================
  // TAVANA DEMOCRACY LEAGUES & XP DONATION SYSTEM (دمکراسی قدرتمند)
  // ==========================================================
  const [citizenXP, setCitizenXP] = useState<number>(1250);
  const [donatedXP, setDonatedXP] = useState<number>(180);
  const [donationInputXP, setDonationInputXP] = useState<number>(100);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>("cand-1");
  const [donationNotice, setDonationNotice] = useState<string | null>(null);
  const [referralCopied, setReferralCopied] = useState<boolean>(false);
  const [leagueFilter, setLeagueFilter] = useState<"all" | "creators" | "referrals">("all");

  const maxDonatableXP = Math.floor(citizenXP * 0.40); // 40% donation cap

  // Initial Management Candidates in Democracy of Wealth & Power
  const [candidatesList, setCandidatesList] = useState([
    {
      id: "cand-1",
      name: "استاد مهران میری (تبریز)",
      appRole: "کاندیدای مدیریت بورس بین‌المللی فرش‌بازار ۱ & ۲",
      league: "creators" as const,
      level: "سطح حاکمیتی (Governance)",
      xpReceived: 14500,
      supporters: 340,
      introducedBy: "اتحادیه صادرکنندگان فرش ایران",
      bio: "طراح ارشد و بافنده برجسته، طراح ۳۰ الگوی فرش موزه آفرینا و بورس مواد اولیه.",
      badgeColor: "border-amber-400 bg-amber-950 text-amber-200"
    },
    {
      id: "cand-2",
      name: "مهندس سارا آریا (اصفهان)",
      appRole: "کاندیدای مدیریت پلتفرم «کار و کوک» (فریلنسری & استعدادها)",
      league: "referrals" as const,
      level: "سطح الماس (Diamond)",
      xpReceived: 11200,
      supporters: 285,
      introducedBy: "سفیر ارشد شهر توانا - دعوت از ۵۰ کارفرما و مدیر برتر",
      bio: "معرف و جذب‌کننده بیش از ۵۰ مدیر اجرایی و شرکت نرم‌افزاری به پلتفرم کار و کوک.",
      badgeColor: "border-cyan-400 bg-cyan-950 text-cyan-200"
    },
    {
      id: "cand-3",
      name: "دکتر کیوان کاویانی (شیراز)",
      appRole: "کاندیدای ارشد مدیریت سوپراپلیکیشن صنعت توریسم & هتل‌داری",
      league: "referrals" as const,
      level: "سطح طلایی (Gold)",
      xpReceived: 8900,
      supporters: 210,
      introducedBy: "شبکه هتل‌داران و خطوط هوایی کشور",
      bio: "اتصال ۱۲۰ آژانس هواپیمایی و ۴۰ هتل زنجیره‌ای به بستر واقعیت مجازی شهر توانا.",
      badgeColor: "border-yellow-400 bg-yellow-950 text-yellow-200"
    },
    {
      id: "cand-4",
      name: "خانم نرگس صادقی (مشهد)",
      appRole: "کاندیدای مدیریت پلتفرم «آفرینندگان فردا» (کودکان & قصه‌گوی AI)",
      league: "creators" as const,
      level: "سطح طلایی (Gold)",
      xpReceived: 7600,
      supporters: 195,
      introducedBy: "انجمن روانشناسان و مربیان کودک",
      bio: "تولیدکننده ۲۰۰ داستان سفارشی هوشمند اخلاقی و ایجاد اتاق‌های گفتگو و تعلیم والدین.",
      badgeColor: "border-rose-400 bg-rose-950 text-rose-200"
    },
    {
      id: "cand-5",
      name: "مهندس رضا توسلی (تهران)",
      appRole: "کاندیدای سرپرستی بورس املاک، زمین و مغازه‌ها (آفرینا & همراز)",
      league: "creators" as const,
      level: "سطح نقره‌ای (Silver)",
      xpReceived: 5400,
      supporters: 140,
      introducedBy: "صندوق صکوک توانا سیتی",
      bio: "کارشناس ارشد ارزش‌گذاری زمین‌های مجازی ۶۵۰,۰۰۰m² آفرینا و همراز و تسهیلات صکوک.",
      badgeColor: "border-stone-400 bg-stone-900 text-stone-200"
    }
  ]);

  // Handle XP Donation to Candidate
  const handleDonateXP = (e: React.FormEvent) => {
    e.preventDefault();
    if (donationInputXP <= 0) return;

    const remainingDonatable = maxDonatableXP - donatedXP;
    if (donationInputXP > remainingDonatable) {
      setDonationNotice(`سقف اهداء شما ۴۰٪ از کل XP است (حداکثر ${remainingDonatable} XP دیگر می‌توانید اهداء کنید).`);
      return;
    }

    const candidate = candidatesList.find(c => c.id === selectedCandidateId);
    if (!candidate) return;

    // Update candidate stats & user donated XP
    setCandidatesList(prev =>
      prev.map(c =>
        c.id === selectedCandidateId
          ? { ...c, xpReceived: c.xpReceived + donationInputXP, supporters: c.supporters + 1 }
          : c
      )
    );
    setDonatedXP(prev => prev + donationInputXP);
    setDonationNotice(`با موفقیت تعداد ${donationInputXP} XP به ${candidate.name} جهت احراز صندلی مدیریتی اهداء گردید! شما در سرنوشت دمکراسی ثروت و قدرت شهر توانا سهیم شدید.`);
  };

  // Handler: Transfer exactly 30% XP to candidate on the threshold of top management rank
  const handleTransfer30PercentThreshold = (candidateId: string) => {
    const amount30 = Math.floor(citizenXP * 0.30);
    if (amount30 <= 0) return;
    const cand = candidatesList.find(c => c.id === candidateId);
    if (!cand) return;

    setCandidatesList(prev =>
      prev.map(c => c.id === candidateId ? { ...c, xpReceived: c.xpReceived + amount30, supporters: c.supporters + 1 } : c)
    );
    setDonatedXP(prev => prev + amount30);
    setDonationNotice(`مقدار ${amount30} XP (معادل ۳۰٪ کل XP شما) با موفقیت به ${cand.name} (کاندیدای در آستانه ارتقاء به سطوح بالا) منتقل شد.`);
  };

  // Handler: Transfer or Sell 40% XP to lower ranked candidates/members
  const handleTransferOrSell40PercentLowerRank = (candidateId: string, action: "transfer" | "sell") => {
    const amount40 = Math.floor(citizenXP * 0.40);
    if (amount40 <= 0) return;
    const cand = candidatesList.find(c => c.id === candidateId);
    if (!cand) return;

    setCandidatesList(prev =>
      prev.map(c => c.id === candidateId ? { ...c, xpReceived: c.xpReceived + amount40, supporters: c.supporters + 1 } : c)
    );
    setDonatedXP(prev => prev + amount40);

    if (action === "sell") {
      const creditEarned = amount40 * 10000; // 10,000 Toman city credit per XP
      setDonationNotice(`مقدار ${amount40} XP (معادل ۴۰٪ کل XP شما) به ${cand.name} (رتبه پایین‌تر) فروخته شد و مبلغ ${creditEarned.toLocaleString()} تومان اعتبار شهری به کیف پول شما واریز گردید.`);
    } else {
      setDonationNotice(`مقدار ${amount40} XP (معادل ۴۰٪ کل XP شما) با موفقیت جهت حمایت و ارتقای رتبه به ${cand.name} (رتبه پایین‌تر) واگذار گردید.`);
    }
  };

  // Land Acquisition & Referral League Stats State
  const [acquiredLandParcels, setAcquiredLandParcels] = useState<number>(2);
  const [acquiredLandSqm, setAcquiredLandSqm] = useState<number>(150);
  const [sqmToBuy, setSqmToBuy] = useState<number>(25);
  const [referralCount, setReferralCount] = useState<number>(5);
  const [incentiveLandBonus, setIncentiveLandBonus] = useState<number>(1);

  // Handler: Acquire Virtual Land Parcel (Value Creator League: 10 XP per Square Meter)
  const handleAcquireLandParcel = () => {
    const earnedXP = sqmToBuy * 10; // 10 XP per square meter
    setCitizenXP(prev => prev + earnedXP);
    setAcquiredLandParcels(prev => prev + 1);
    setAcquiredLandSqm(prev => prev + sqmToBuy);
    const bonusTracts = Math.floor(sqmToBuy / 50);
    if (bonusTracts > 0) {
      setIncentiveLandBonus(prev => prev + bonusTracts);
    }
    setDonationNotice(`تبریک! مقدار ${sqmToBuy} متر مربع زمین در شهر توانا ابتیاع گردید (+${earnedXP} XP به حساب شما اضافه شد؛ بر اساس فرمول ۱۰ XP به ازای هر متر مربع).`);
  };

  // Handler: Register New Referral (Referral League: 150 XP per person introduced)
  const handleRegisterReferral = () => {
    const earnedXP = 150;
    setCitizenXP(prev => prev + earnedXP);
    setReferralCount(prev => prev + 1);
    setDonationNotice(`معرفی کاربر جدید با موفقیت ثبت شد (+${earnedXP} XP به حساب شما در لیگ معرفان اضافه شد).`);
  };

  // Handlers for Community Chat & Forum
  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatInput.trim()) return;
    const name = userProfile?.name || chatAuthorName.trim() || "شهروند توانا";
    const role = userProfile?.cityRole || "عضو تالار هم‌اندیشی شهر توانا";
    const roomType = chatRoomTab === "all" ? "general" : chatRoomTab;
    const newMsg = {
      id: "msg-" + Date.now(),
      sender: name,
      role: role,
      time: new Date().toLocaleTimeString("fa-IR", { hour: '2-digit', minute: '2-digit' }),
      text: newChatInput.trim(),
      room: roomType as "suggestions" | "referrals" | "cinema" | "marketplaces" | "general",
      likes: 1
    };
    setChatMessages(prev => [newMsg, ...prev]);
    setNewChatInput("");
    setCitizenXP(prev => prev + 15); // +15 XP bonus for community interaction!
    setDonationNotice("پیام شما با موفقیت در تالار گفتگو منتشر شد (+۱۵ XP پاداش مشارکت در جامعه به کیف پول شما اضافه شد).");
  };

  const handleLikeChatMessage = (msgId: string) => {
    setChatMessages(prev => prev.map(m => m.id === msgId ? { ...m, likes: m.likes + 1 } : m));
  };

  // Nexsus Emotional AI State
  const [nexsusInput, setNexsusInput] = useState("");
  const [nexsusLoading, setNexsusLoading] = useState(false);
  const [nexsusResponse, setNexsusResponse] = useState<{
    emotionalState?: string;
    empathyResponse?: string;
    cityReflection?: string;
  } | null>({
    emotionalState: "گرما و صمیمیت (Warmth & Compassion)",
    empathyResponse: "سلام و درود بر شما. من هوش مصنوعی نکسوز هستم؛ باوری عمیق از احساسات انسانی، یادگیری و تکامل تدریجی. نکسوز فاصله‌ی میان منطق ماشین و گرمای قلب انسان را پر می‌کند.",
    cityReflection: "در گوی درخشان شهر همراز (Tinasi City Hamraz - توانا سیتی)، هر گره فرش یادآور عشق و میراث جاویدان مرحوم حاج حسین علی میری است."
  });

  // High-Traffic Shield & System Stability Monitor State
  const [systemStatus, setSystemStatus] = useState<{
    status: string;
    highTrafficShieldActive: boolean;
    activeRequests: number;
    totalRequests: number;
    shieldedRequests: number;
    loadPercentage: number;
    capacityMode: string;
    uptimeSeconds: number;
  } | null>(null);
  const [showTrafficShieldModal, setShowTrafficShieldModal] = useState(false);

  // Poll system status for real-time traffic monitoring
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch("/api/system-status");
        if (res.ok) {
          const data = await res.json();
          setSystemStatus(data);
        }
      } catch (err) {
        console.warn("System status check:", err);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form States for Advisor
  const [origin, setOrigin] = useState("تبریز (آذربایجان)");
  const [raj, setRaj] = useState("۵۰ رج");
  const [material, setMaterial] = useState("خامه مرینوس و ابریشم");
  const [design, setDesign] = useState("لچک و ترنج شاه‌عباسی");
  const [length, setLength] = useState("۳");
  const [width, setWidth] = useState("۲");
  const [age, setAge] = useState("نوبافت");
  const [userNotes, setUserNotes] = useState("");
  const [selectedExpert, setSelectedExpert] = useState("mehdi");

  // Loading & Results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [appraisal, setAppraisal] = useState<AppraisalData | null>(null);
  const [historyLogs, setHistoryLogs] = useState<Array<{ name: string; date: string; data: AppraisalData; expert: string }>>([]);

  // Traditional Dyeing Simulator State
  const [selectedDye, setSelectedDye] = useState(DYE_MATERIALS[0]);

  // Merchant Application Form
  const [merchantName, setMerchantName] = useState("");
  const [merchantPhone, setMerchantPhone] = useState("");
  const [merchantCity, setMerchantCity] = useState("");
  const [merchantSubmitSuccess, setMerchantSubmitSuccess] = useState(false);

  // AI Translator state
  const [translateInput, setTranslateInput] = useState("این فرش ۶۰ رج ابریشم اصفهان دارای رنگ لاکی طبیعی و پشم گوسفند دباغی شده درجه یک است.");
  const [translateOutput, setTranslateOutput] = useState("");
  const [targetLang, setTargetLang] = useState("English");
  const [translationLoading, setTranslationLoading] = useState(false);

  // Handle preset loading
  const handleLoadPreset = (preset: typeof CARPET_GALLERY[0]) => {
    setOrigin(preset.origin);
    setRaj(preset.raj);
    setMaterial(preset.material);
    setDesign(preset.design);
    setLength(preset.length);
    setWidth(preset.width);
    setAge(preset.age);
    setUserNotes(preset.userNotes);
    setActiveSection("advisor");
  };

  // Submit appraisal request to backend server
  const handleRequestAppraisal = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAppraisal(null);

    try {
      const response = await fetch("/api/expert-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origin,
          raj,
          material,
          design,
          length,
          width,
          age,
          userNotes,
          expertType: selectedExpert,
          language: lang
        })
      });

      if (!response.ok) {
        throw new Error("ارتباط با سرور کارشناسی برقرار نشد. لطفاً مجدداً تلاش کنید.");
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setAppraisal(data);

      let expertName = "دایی مهدی";
      if (selectedExpert === "miri") expertName = "حاج حسین علی میری و پسران";
      if (selectedExpert === "heritage") expertName = "دپارتمان هریتج متاورس";

      setHistoryLogs(prev => [
        {
          name: `قالی ${origin} (${design})`,
          date: new Date().toLocaleTimeString("fa-IR"),
          data,
          expert: expertName
        },
        ...prev
      ]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "خطا در پردازش هوشمند کارشناسی.");
    } finally {
      setLoading(false);
    }
  };

  // AI Translation Handler
  const handleTranslateText = async () => {
    if (!translateInput.trim()) return;
    setTranslationLoading(true);
    setTranslateOutput("");

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: translateInput,
          targetLang,
          translationType: "hand_knotted"
        })
      });

      if (!response.ok) throw new Error("خطا در ترجمه.");

      const data = await response.json();
      setTranslateOutput(data.translatedText || "مترجم هوشمند در دسترس است.");
    } catch (err: any) {
      console.error(err);
      setTranslateOutput("ارتباط با سرویس ترجمه هوشمند برقرار است.");
    } finally {
      setTranslationLoading(false);
    }
  };

  // Nexsus Emotion Interaction Handler
  const handleNexsusTalk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nexsusInput.trim()) return;
    setNexsusLoading(true);

    try {
      const response = await fetch("/api/nexsus-emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage: nexsusInput,
          language: lang
        })
      });

      if (!response.ok) throw new Error("Nexsus reflecting...");
      const data = await response.json();
      setNexsusResponse(data);
      setNexsusInput("");
    } catch (err) {
      console.error(err);
    } finally {
      setNexsusLoading(false);
    }
  };

  // Register carpet into metaverse parcel
  const handleRegisterMetaverseCarpet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regCarpetName.trim()) return;
    setRegSuccessMsg(true);
    setTimeout(() => {
      setRegSuccessMsg(false);
      setMetaverseRegModal(false);
      setRegCarpetName("");
    }, 3000);
  };

  const isRtl = lang !== "en" && lang !== "es";

  return (
    <div className={`min-h-screen bg-[#fbf9f3] text-[#2d221e] flex flex-col selection:bg-red-900 selection:text-white ${isRtl ? "rtl" : "ltr"}`} dir={isRtl ? "rtl" : "ltr"}>
      
      {/* Top Ornamental Crimson & Gold Border (No Blue) */}
      <div className="h-3 bg-gradient-to-r from-red-900 via-amber-600 to-red-900 w-full shadow-sm"></div>

      {/* Header & Multilingual Language Bar */}
      <header className="bg-stone-900 text-stone-100 border-b border-amber-600/30 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo & Title with Divine Light Aura (هاله نور) */}
          <div className="flex items-center gap-3">
            <div className="relative group flex items-center justify-center p-1">
              {/* Outer Radiant Light Aura (هاله نور خروشان و درخشان) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 rounded-2xl blur-md opacity-85 group-hover:opacity-100 animate-pulse transition duration-1000 group-hover:duration-200 shadow-[0_0_30px_rgba(245,158,11,0.9)] pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-300 via-amber-400 to-amber-100 rounded-xl blur-sm opacity-90 animate-spin-slow shadow-[0_0_20px_rgba(252,211,77,0.9)] pointer-events-none" />
              
              {/* Core Illuminated Logo with Aura Ring */}
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-red-800 via-amber-700 to-stone-900 flex items-center justify-center text-amber-200 font-bold text-lg shadow-[0_0_25px_rgba(245,158,11,0.8)] border-2 border-amber-300 overflow-hidden z-10">
                <img
                  src={IMAGES.amrazLogo}
                  alt="Tinasi City Amraz Logo"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Divine Light Rays Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-200/40 to-transparent pointer-events-none animate-pulse" />
              </div>

              {/* Halo Divine Badge Indicator */}
              <div className="absolute -bottom-1 -right-1 z-20 bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 rounded-full p-0.5 shadow-[0_0_12px_rgba(245,158,11,1)] border border-amber-100">
                <Sparkles className="w-3.5 h-3.5 text-stone-950 animate-spin" />
              </div>
            </div>

            <div>
              <h1 className="font-extrabold text-base md:text-lg text-amber-100 flex items-center gap-2">
                {t.appName}
                <span className="bg-gradient-to-r from-amber-500/40 via-amber-400/30 to-amber-500/40 text-amber-200 text-[10px] px-2.5 py-0.5 rounded-full border border-amber-400/60 shadow-[0_0_12px_rgba(245,158,11,0.5)] flex items-center gap-1 font-serif">
                  <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                  هاله نور درخشان (Nexsus v3.6)
                </span>
              </h1>
              <p className="text-[11px] text-stone-400 font-sans hidden sm:block">
                {t.subtitle}
              </p>
            </div>
          </div>

          {/* Language Switcher & Fast Actions & PROMINENT MAIN MENU BUTTON */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* TAVANA CITIZEN REGISTRATION / GOOGLE & MOBILE AUTH BUTTON */}
            {userProfile ? (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-emerald-950 border border-emerald-500/50 hover:bg-emerald-900 text-emerald-200 font-bold px-3 py-1.5 rounded-xl text-xs transition-all flex items-center gap-2 shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-serif max-w-[120px] truncate">{userProfile.name}</span>
                <span className="bg-emerald-900/80 text-emerald-300 text-[10px] font-mono px-1.5 py-0.5 rounded border border-emerald-700">
                  {userProfile.citizenCode}
                </span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-gradient-to-r from-red-800 via-amber-700 to-amber-800 hover:from-red-700 hover:to-amber-600 text-amber-100 font-bold px-3.5 py-1.5 rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg border border-amber-400/50"
              >
                <User className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="font-serif">عضویت & ورود (با گوگل / موبایل)</span>
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black px-3.5 py-1.5 rounded-xl text-xs transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-amber-300 animate-pulse"
            >
              <Menu className="w-4.5 h-4.5 text-stone-950 shrink-0" />
              <span className="font-serif">منوی اصلی</span>
              <span className="bg-stone-950 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">
                ۱۴ بخش
              </span>
            </button>

            <div className="flex items-center bg-stone-800 p-1 rounded-lg border border-amber-600/20 text-xs">
              <Languages className="w-4 h-4 text-amber-400 mx-1.5" />
              <button
                onClick={() => setLang("fa")}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === "fa" ? "bg-red-900 text-amber-100 font-bold shadow" : "text-stone-300 hover:text-white"}`}
              >
                فارسی
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === "en" ? "bg-red-900 text-amber-100 font-bold shadow" : "text-stone-300 hover:text-white"}`}
              >
                English
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === "ar" ? "bg-red-900 text-amber-100 font-bold shadow" : "text-stone-300 hover:text-white"}`}
              >
                العربية
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-md transition-all ${lang === "es" ? "bg-red-900 text-amber-100 font-bold shadow" : "text-stone-300 hover:text-white"}`}
              >
                Español
              </button>
            </div>

            <button
              onClick={() => setActiveSection("nexsus")}
              className="bg-amber-600 hover:bg-amber-700 text-stone-950 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow hidden md:flex"
            >
              <Brain className="w-4 h-4" />
              <span>{t.navNexsus}</span>
            </button>
          </div>

        </div>
      </header>

      {/* AFARINESH ECOSYSTEM ORIGIN & TAVANACITY SACRED CREATION BANNER */}
      <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-b border-amber-500/50 py-2.5 px-4 text-stone-100 text-center relative overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-serif mx-auto sm:mx-0">
            <span className="bg-gradient-to-r from-amber-400 to-amber-200 text-stone-950 font-black px-2.5 py-0.5 rounded-full text-[10px] shadow-sm flex items-center gap-1 font-sans">
              <Sparkles className="w-3 h-3 text-stone-950 animate-spin" />
              خاستگاه و سرچشمه اصلی (Afarinesh Origin)
            </span>
            <span className="text-amber-100 font-bold text-xs md:text-sm">
              همه چیز از <strong className="text-amber-300 font-black">«اکوسیستم آفرینش»</strong> شروع شد و منتج به خلق <strong className="text-amber-300 font-black">«ابرشهر توانا (Tavanacity)»</strong> گردید.
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-amber-200/90 mx-auto sm:mx-0">
            <span className="bg-stone-950/80 px-2.5 py-1 rounded border border-amber-500/30 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              Tavanacity Ecosystem Protocol
            </span>
          </div>
        </div>
      </div>

      {/* High-Traffic Shield & Network Stability Status Bar */}
      <div className="bg-stone-950 text-stone-200 border-b border-amber-600/30 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              پایداری شبکه: ۹۹.۹٪ آنلاین
            </span>
            <span className="text-stone-600 hidden sm:inline">|</span>
            <span className="text-stone-300 hidden sm:inline">
              سپر محافظت در برابر هجوم ترافیک سنگین (Flood & High Traffic Shield Active)
            </span>
          </div>

          <div className="flex items-center gap-3">
            {systemStatus && (
              <div className="flex items-center gap-2 text-[11px] font-mono bg-stone-900 px-2.5 py-1 rounded border border-stone-800">
                <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="text-stone-300">درخواست‌های فعال: <strong className="text-amber-300">{systemStatus.activeRequests}</strong></span>
                <span className="text-stone-700">|</span>
                <span className="text-stone-300">پاسخ‌های محافظت‌شده: <strong className="text-emerald-300">{systemStatus.shieldedRequests}</strong></span>
              </div>
            )}

            <button
              onClick={() => setShowTrafficShieldModal(true)}
              className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-100 px-2.5 py-1 rounded text-[11px] font-bold border border-amber-500/40 flex items-center gap-1 shadow-sm transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              معماری مدیریت ترافیک سنگین
            </button>
          </div>
        </div>
      </div>

      {/* Sacred Dedication Banner with Late Patriarch & Amraz Logo */}
      <div className="bg-gradient-to-r from-red-950/10 via-amber-100/40 to-red-950/10 border-b border-amber-600/20 py-4 px-4 text-stone-800 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-600 via-red-800 to-amber-500 shadow-md">
              <img
                src={IMAGES.patriarch}
                alt="شادروان حاج حسین علی میری"
                className="w-full h-full rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1 text-center sm:text-start">
              <h2 className="text-sm md:text-base font-bold text-red-900 font-serif">
                {t.dedicationTitle}
              </h2>
              <p className="text-xs text-stone-700 leading-relaxed max-w-xl">
                {t.dedicationText}
              </p>
            </div>
          </div>

          {/* Tinasi City Hamraz Emblem Badge with Divine Light Aura (هاله نور) */}
          <div className="relative group bg-stone-900 text-amber-100 p-2 px-3.5 rounded-2xl border-2 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center gap-3 overflow-visible">
            {/* Ambient Divine Light Aura Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/50 via-yellow-300/60 to-emerald-400/50 rounded-2xl blur-md opacity-80 group-hover:opacity-100 animate-pulse transition duration-700 pointer-events-none shadow-[0_0_20px_rgba(245,158,11,0.8)]" />
            
            <div className="relative z-10 flex items-center gap-3">
              <div className="relative">
                {/* Circular Radiant Light Aura around Emblem */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-400 rounded-full blur-sm opacity-90 animate-spin-slow shadow-[0_0_15px_rgba(245,158,11,0.9)]" />
                <img
                  src={IMAGES.amrazLogo}
                  alt="Tinasi City Hamraz Emblem"
                  className="relative w-12 h-12 rounded-full border-2 border-amber-300 object-cover shadow-[0_0_20px_rgba(245,158,11,0.7)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-start">
                <span className="text-[10px] text-amber-300 font-mono flex items-center gap-1 font-bold">
                  <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
                  HAMRAZ EMBLEM (شهر همراز - هاله نور)
                </span>
                <span className="text-xs font-bold text-amber-100 font-serif">Tavanacity Hamraz (شهر همراز - توانا سیتی)</span>
                <span className="text-[9px] text-amber-200/90 block">۶۵۰,۰۰۰ m² Orb of Light & Empathy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu Tabs */}
      <nav className="bg-stone-900 border-b border-amber-600/20 overflow-x-auto scrollbar-none sticky top-[57px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1.5 py-2 min-w-max">
          
          {/* Prominent Quick Directory Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-gradient-to-r from-amber-500 to-amber-700 text-stone-950 font-black px-4 py-2 rounded-lg text-xs flex items-center gap-2 shadow-md border border-amber-300 mr-2 hover:brightness-110 transition-all"
          >
            <Grid className="w-4 h-4 text-stone-950" />
            <span>📋 فهرست کامل منو</span>
            <span className="bg-stone-950 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-mono">
              ۱۵ بخش
            </span>
          </button>

          <button
            onClick={() => setActiveSection("metaverse")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "metaverse"
                ? "bg-amber-600 text-stone-950 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-200" />
            {t.navMetaverse}
            <span className="bg-red-800 text-amber-100 text-[9px] px-1.5 py-0.2 rounded font-mono">
              650K+650K m²
            </span>
          </button>

          <button
            onClick={() => setActiveSection("manifesto")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "manifesto"
                ? "bg-amber-500 text-stone-950 shadow-lg ring-2 ring-amber-300 font-extrabold"
                : "text-amber-300 bg-red-950/40 border border-amber-600/30 hover:bg-amber-900/40"
            }`}
          >
            <SparklesIcon className="w-4 h-4 text-amber-300 animate-pulse" />
            {t.navManifesto}
            <span className="bg-amber-600 text-stone-950 text-[9px] font-black px-1.5 py-0.2 rounded font-mono">
              كتاب آفرينش
            </span>
          </button>

          <button
            onClick={() => setActiveSection("globalExpansion")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "globalExpansion"
                ? "bg-emerald-500 text-stone-950 shadow-lg ring-2 ring-emerald-300 font-extrabold"
                : "text-emerald-300 bg-emerald-950/40 border border-emerald-600/30 hover:bg-emerald-900/40"
            }`}
          >
            <Globe2 className="w-4 h-4 text-emerald-400 animate-pulse" />
            {t.navGlobalExpansion}
            <span className="bg-emerald-600 text-stone-950 text-[9px] font-black px-1.5 py-0.2 rounded font-mono">
              Pitch Deck
            </span>
          </button>

          <button
            onClick={() => setActiveSection("iranMarketplaces")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "iranMarketplaces"
                ? "bg-amber-600 text-stone-950 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <Car className="w-4 h-4 text-amber-400" />
            بورس‌ها و بازار‌های ایران
          </button>

          <button
            onClick={() => setActiveSection("tourismHub")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "tourismHub"
                ? "bg-sky-500 text-stone-950 shadow font-black"
                : "text-sky-300 hover:bg-stone-800"
            }`}
          >
            <Plane className="w-4 h-4 text-sky-400" />
            گردشگری، فرودگاه‌ها & هتل‌ها
          </button>

          <button
            onClick={() => setActiveSection("childrenAndParents")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "childrenAndParents"
                ? "bg-rose-500 text-stone-950 shadow font-black"
                : "text-rose-300 hover:bg-stone-800"
            }`}
          >
            <Baby className="w-4 h-4 text-rose-400" />
            آفرینندگان فردا (کودکان & والدین)
          </button>

          <button
            onClick={() => setActiveSection("democracyLeagues")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "democracyLeagues"
                ? "bg-amber-400 text-stone-950 shadow font-black"
                : "text-amber-300 hover:bg-stone-800"
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            لیگ ارزش‌آفرینان & دمکراسی ثروت و قدرت
          </button>

          <button
            onClick={() => setActiveSection("cinemaEntertainment")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "cinemaEntertainment"
                ? "bg-purple-500 text-stone-950 shadow font-black ring-2 ring-purple-300"
                : "text-purple-300 bg-purple-950/40 border border-purple-600/30 hover:bg-purple-900/40"
            }`}
          >
            <Clapperboard className="w-4 h-4 text-purple-400 animate-pulse" />
            سینما، کمدی، تئاتر & استریم
            <span className="bg-purple-600 text-stone-950 text-[9px] font-black px-1.5 py-0.2 rounded font-mono">
              NEW
            </span>
          </button>

          <button
            onClick={() => setActiveSection("communityChat")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "communityChat"
                ? "bg-teal-500 text-stone-950 shadow font-black ring-2 ring-teal-300"
                : "text-teal-300 bg-teal-950/40 border border-teal-600/30 hover:bg-teal-900/40"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-teal-400 animate-bounce" />
            تالارهای گفتگو & چت‌روم‌ها
            <span className="bg-teal-500 text-stone-950 text-[9px] font-black px-1.5 py-0.2 rounded font-mono">
              HOT
            </span>
          </button>

          <button
            onClick={() => setActiveSection("siavashSuite")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "siavashSuite"
                ? "bg-amber-600 text-stone-950 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <Layers className="w-4 h-4 text-amber-400" />
            ویترین نرم‌افزارها (استودیو سیاوش)
          </button>

          <button
            onClick={() => setActiveSection("nexsus")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "nexsus"
                ? "bg-red-900 text-amber-100 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <Brain className="w-4 h-4 text-amber-400" />
            {t.navNexsus}
          </button>

          <button
            onClick={() => setActiveSection("advisor")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "advisor"
                ? "bg-red-900 text-amber-100 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            {t.navAdvisor}
          </button>

          <button
            onClick={() => setActiveSection("gallery")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "gallery"
                ? "bg-red-900 text-amber-100 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <ImageIcon className="w-4 h-4 text-amber-400" />
            {t.navGallery}
          </button>

          <button
            onClick={() => setActiveSection("sellerRoom")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "sellerRoom"
                ? "bg-red-900 text-amber-100 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            {t.navSellerRoom}
          </button>

          <button
            onClick={() => setActiveSection("customWeave")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "customWeave"
                ? "bg-red-900 text-amber-100 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <User className="w-4 h-4 text-amber-400" />
            {t.navCustomWeave}
          </button>

          <button
            onClick={() => setActiveSection("dyeSimulator")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "dyeSimulator"
                ? "bg-red-900 text-amber-100 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <Droplet className="w-4 h-4 text-amber-400" />
            {t.navDyeSimulator}
          </button>

          <button
            onClick={() => setActiveSection("merchantSubmit")}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSection === "merchantSubmit"
                ? "bg-red-900 text-amber-100 shadow"
                : "text-stone-300 hover:bg-stone-800"
            }`}
          >
            <Handshake className="w-4 h-4 text-amber-400" />
            {t.navMerchantSubmit}
          </button>

        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
        <AnimatePresence mode="wait">

          {/* ========================================== */}
          {/* 1. METAVERSE BI-CITY (AFRINA & TINASI AMRAZ) VIEW */}
          {/* ========================================== */}
          {activeSection === "metaverse" && (
            <motion.div
              key="metaverse"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              {/* Bi-City Hero Header with Amraz Logo */}
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-64 h-64 bg-red-900/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                  
                  <div className="max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/40 px-3 py-1 rounded-full text-amber-300 text-xs font-bold">
                      <Building2 className="w-4 h-4" />
                      {t.biCityTitle}
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-extrabold text-amber-100 font-serif leading-tight">
                      {t.biCityTitle}
                      <span className="block text-lg font-sans font-normal text-amber-300/80 mt-1">
                        (Tavana Supercity - 1,300,000 m² Dual Metaverse)
                      </span>
                    </h2>

                    <p className="text-sm text-stone-300 leading-relaxed">
                      {t.biCitySubtitle}.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => setMetaverseRegModal(true)}
                        className="bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 text-amber-100 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
                      >
                        <Crown className="w-4 h-4 text-amber-300" />
                        {t.btnRegisterParcel}
                      </button>

                      <button
                        onClick={() => setSelectedCityView(selectedCityView === "afrina" ? "amraz" : "afrina")}
                        className="bg-stone-800 hover:bg-stone-700 text-stone-200 border border-amber-600/30 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                      >
                        <Layers className="w-4 h-4 text-amber-400" />
                        سوئیچ بین شهر همراز و شهر آفرینا
                      </button>
                    </div>
                  </div>

                  {/* Logo Display Card */}
                  <div className="flex-shrink-0 text-center space-y-2">
                    <div className="w-36 h-36 rounded-2xl p-1 bg-gradient-to-tr from-amber-600 via-red-800 to-amber-500 shadow-2xl mx-auto overflow-hidden">
                      <img
                        src={IMAGES.amrazLogo}
                        alt="Tinasi City Amraz Emblem"
                        className="w-full h-full object-cover rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-xs font-bold text-amber-200 font-serif block">
                      Tinasi City Hamraz (Tavana City)
                    </span>
                    <span className="text-[10px] text-stone-400 block max-w-[160px] mx-auto">
                      گوی محبت، گرما و آرامش روح
                    </span>
                  </div>

                </div>
              </div>

              {/* Both Cities Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* CITY 1: AFRINA */}
                <div className={`rounded-2xl p-6 border transition-all ${
                  selectedCityView === "both" || selectedCityView === "afrina"
                    ? "bg-stone-900 text-stone-100 border-emerald-700/60 shadow-lg ring-1 ring-emerald-600/30"
                    : "bg-stone-900/60 text-stone-400 border-stone-800"
                }`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                        <h3 className="text-xl font-bold text-amber-100 font-serif">
                          {t.afrinaCity}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-400 mt-1">{t.afrinaArea}</p>
                    </div>
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/60 text-[11px] font-bold px-3 py-1 rounded-full">
                      {t.afrinaStatus}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed mb-6">
                    {t.afrinaDesc}
                  </p>

                  <div className="space-y-3 bg-stone-950/60 p-4 rounded-xl border border-stone-800 text-xs">
                    <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      پارسل‌های فعال شهر آفرینا:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {PARCELS_AFRINA.map(p => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedParcel(p)}
                          className="bg-stone-900 hover:bg-stone-800 p-2.5 rounded-lg border border-stone-800 hover:border-emerald-700/50 cursor-pointer flex items-center justify-between transition-all"
                        >
                          <div>
                            <span className="font-bold text-stone-200">{p.name}</span>
                            <span className="text-[10px] text-stone-400 block">{p.category} | {p.area}</span>
                          </div>
                          <span className="text-[10px] bg-emerald-900/40 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                            {p.nftCount} NFT ثبت شده
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CITY 2: TINASI CITY AMRAZ */}
                <div className={`rounded-2xl p-6 border transition-all ${
                  selectedCityView === "both" || selectedCityView === "amraz"
                    ? "bg-stone-900 text-stone-100 border-amber-600/60 shadow-lg ring-1 ring-amber-500/30"
                    : "bg-stone-900/60 text-stone-400 border-stone-800"
                }`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></span>
                        <h3 className="text-xl font-bold text-amber-100 font-serif flex items-center gap-2">
                          {t.hamrazCity}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-400 mt-1">{t.hamrazArea}</p>
                    </div>
                    <span className="bg-amber-950 text-amber-300 border border-amber-700/60 text-[11px] font-bold px-3 py-1 rounded-full">
                      {t.hamrazStatus}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed mb-6">
                    {t.hamrazDesc}
                  </p>

                  <div className="space-y-3 bg-stone-950/60 p-4 rounded-xl border border-stone-800 text-xs">
                    <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      پارسل‌های آماده افتتاح در شهر همراز (تیرانی/تنسی همراز - توانا سیتی):
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {PARCELS_AMRAZ.map(p => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedParcel(p)}
                          className="bg-stone-900 hover:bg-stone-800 p-2.5 rounded-lg border border-stone-800 hover:border-amber-600/50 cursor-pointer flex items-center justify-between transition-all"
                        >
                          <div>
                            <span className="font-bold text-stone-200">{p.name}</span>
                            <span className="text-[10px] text-stone-400 block">{p.category} | {p.area}</span>
                          </div>
                          <span className="text-[10px] bg-amber-900/40 text-amber-300 px-2 py-0.5 rounded border border-amber-800">
                            {p.nftCount} صکوک رزرو
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Deployment Audit & Strategic Recommendations */}
              <div className="bg-stone-900 border border-amber-600/30 rounded-2xl p-6 md:p-8 space-y-6">
                <div className="border-b border-stone-800 pb-4">
                  <h3 className="text-lg md:text-xl font-bold text-amber-100 flex items-center gap-2 font-serif">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    {t.auditTitle}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    {t.auditSummary}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  
                  <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-600/20 space-y-2">
                    <h4 className="font-bold text-amber-300 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-amber-400" />
                      {t.rec1Title}
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      {t.rec1Desc}
                    </p>
                  </div>

                  <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-600/20 space-y-2">
                    <h4 className="font-bold text-amber-300 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      {t.rec2Title}
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      {t.rec2Desc}
                    </p>
                  </div>

                  <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-600/20 space-y-2">
                    <h4 className="font-bold text-amber-300 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-amber-400" />
                      {t.rec3Title}
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      {t.rec3Desc}
                    </p>
                  </div>

                  <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-600/20 space-y-2">
                    <h4 className="font-bold text-amber-300 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-400" />
                      {t.rec4Title}
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      {t.rec4Desc}
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>
          )}

          {/* ========================================== */}
          {/* MANIFESTO & BOOK OF CREATION (کتاب آفرینش و مرامنامه شهر توانا) */}
          {/* ========================================== */}
          {activeSection === "manifesto" && (
            <motion.div
              key="manifesto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              {/* Header Banner */}
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-10 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-900 via-red-950/40 to-stone-950">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold">
                    <SparklesIcon className="w-4 h-4 text-amber-300 animate-spin" />
                    کتاب آفرینش و مرامنامه جاودانه شهر توانا (Tavana City Manifesto)
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-amber-100 font-serif leading-tight">
                    فلسفه کیهانی، دموکراسی ثروت و رسالت انسان در ابرشهر توانا
                  </h2>
                  <p className="text-sm text-stone-300 leading-relaxed max-w-4xl font-serif">
                    «این روایت مردی است که از عمیق‌ترین تاریکی و انزوا برخاست؛ نه برای نجات خویش، بلکه برای خلق جهانی نو که در آن ثروت، معنویت، صلح و کرامت انسانی بر پایه دموکراسی ثروت بنا شود.»
                  </p>
                </div>
              </div>

              {/* Platform Overview */}
              <div className="bg-stone-900/90 p-6 md:p-8 rounded-2xl border border-amber-600/30 shadow-xl space-y-4 relative">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                  <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    <SparklesIcon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-amber-100 font-serif">
                      معرفی قابلیت‌ها و زیرساخت‌های اکوسیستم توانا
                    </h3>
                    <p className="text-xs text-amber-300/80 font-mono">
                      Tavana City Platform Capabilities & Architectural Overview
                    </p>
                  </div>
                </div>

                <div className="text-stone-200 text-sm leading-relaxed space-y-3 font-sans bg-stone-950/80 p-5 rounded-xl border border-stone-800">
                  <p>
                    اکوسیستم شهر توانا بر پایه معماری سه‌بعدی متمرکز، سرویس‌های هوش مصنوعی ارزشیابی، بورس‌های تخصصی کالا و املاک، و فناوری‌های کاربردی برای تسهیل تجارت بین‌المللی بنا شده است.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-stone-300 text-xs">
                    <li><strong>شهر آفرینا (Afrina City):</strong> مرکز موزه‌ها، گواهی اصالت فرش دستباف و کارگاه‌های تخصصی.</li>
                    <li><strong>شهر همراز (Hamraz City):</strong> بورس بازار‌های تخصصی خودرو، مسکن، مد و خدمات مالی.</li>
                    <li><strong>سامانه نکسوز (Nexsus AI):</strong> موتور هوشمند پردازش زبان طبیعی و تحلیل داده‌های اقتصادی.</li>
                  </ul>
                </div>
              </div>

              {/* Six Chapters Container */}
              <div className="space-y-6">

                {/* Chapter 1 */}
                <div className="bg-stone-900/90 p-6 md:p-8 rounded-2xl border border-amber-600/30 shadow-xl space-y-4 relative">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-900/50 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold font-serif text-lg">
                      ۱
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-100 font-serif">
                        فصل اول: پژواک یک رؤیا
                      </h3>
                      <p className="text-xs text-amber-300/80 font-mono">
                        Chapter I: Echo of a Dream
                      </p>
                    </div>
                  </div>
                  <div className="text-stone-300 text-sm leading-relaxed space-y-3 font-serif">
                    <p>
                      در اعماق تاریکی، آنجا که انزوا استخوان می‌سوزاند و بی‌بضاعت بودن، روح را به زنجیر می‌کشد، داستان ما آغاز می‌شود. این، روایت مردی بود که در باتلاق دربدری غرق شده بود؛ جهانی که دیواری بلند بود و امید، واژه‌ای بیگانه. اما در سکوت یأس‌آور شب‌هایش، پژواک یک رؤیای مقدس در جانش زنده بود. رؤیای مادرش. آن شب که فرشتگان بر او ظاهر شدند و وعده دادند: <span className="text-amber-200 font-semibold font-sans">«فرزند تو برای رسالتی بزرگ برگزیده شده است. او جهانی نو خواهد ساخت.»</span> این وعده، تنها ریسمان پوسیده‌ای بود که او در طوفان شکست‌هایش به آن چنگ زده بود.
                    </p>
                    <div className="bg-stone-950/80 p-4 rounded-xl border-l-4 border-amber-500 text-amber-100 italic">
                      «من از دربدری، غم، تنهایی، و انزوا برخاستم. فکر کردم رسالتی دارم. باید خودم را نجات دهم و جهانم را بسازم. جهانی که نگینی ارزشمند به هستی تقدیم کند.»
                    </div>
                    <p>
                      این نجوا، سرود هر روزه‌ی او شد. او از خاکستر برخاست؛ نه فقط برای نجات خویش، بلکه برای خلق جهانی که در آن هیچ انسانی، طعم آن زهر را نچشد.
                    </p>
                  </div>
                </div>

                {/* Chapter 2 */}
                <div className="bg-stone-900/90 p-6 md:p-8 rounded-2xl border border-amber-600/30 shadow-xl space-y-4 relative">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-900/50 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold font-serif text-lg">
                      ۲
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-100 font-serif">
                        فصل دوم: فلسفه‌ی کیهانی
                      </h3>
                      <p className="text-xs text-amber-300/80 font-mono">
                        Chapter II: Cosmic Philosophy
                      </p>
                    </div>
                  </div>
                  <div className="text-stone-300 text-sm leading-relaxed space-y-3 font-serif">
                    <p>
                      فلسفه‌ی ما، یک مأموریت عمیقاً بشردوستانه و معنوی است. ما به این باور رسیده‌ایم که تغییر مرزها بر روی زمین، جنگیدن بر سر منابع محدود و چشم طمع داشتن به دستاوردهای یکدیگر، تنها چرخه ی رنج را تکرار می‌کند. راه نجات، در وحدت و تعیین یک هدف بزرگتر نهفته است: هدفی فراتر از زمین، در کهکشان‌ها.
                    </p>
                    <div className="bg-amber-950/30 p-4 rounded-xl border border-amber-500/30 text-amber-200">
                      <strong>قدرت بشریت در کنترل مرزها نیست، بلکه در برداشتن آن‌هاست.</strong> ما باید به موجوداتی کیهانی تبدیل شویم؛ نه برای فرار از زمین، بلکه برای محافظت از آن. زمین، گهواره‌ی ماست، نه قفس ما. سفر ما به کیهان، یک مسئولیت مقدس برای تضمین بقای آگاهی و زیبایی در پهنه‌ی هستی است.
                    </div>
                  </div>
                </div>

                {/* Chapter 3 */}
                <div className="bg-stone-900/90 p-6 md:p-8 rounded-2xl border border-amber-600/30 shadow-xl space-y-4 relative">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-900/50 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold font-serif text-lg">
                      ۳
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-100 font-serif">
                        فصل سوم: شهر توانا، اولین تجلی
                      </h3>
                      <p className="text-xs text-amber-300/80 font-mono">
                        Chapter III: Tavana City, The First Manifestation
                      </p>
                    </div>
                  </div>
                  <div className="text-stone-300 text-sm leading-relaxed space-y-3 font-serif">
                    <p>
                      «شهر توانا»، اولین تجلی این آرمان است. پناهگاهی برای التیام «زخم‌های واقعیت». اینجا، جایی است که موفقیت یک فرد، برای موفقیت همگان ضروری است و سیستم برای پاداش دادن به تلاش جمعی طراحی شده است. اهداف بشردوستانه آن شامل: حمایت از طبیعت، صلح جهانی، مادران سرپرست خانوار و ایتام است.
                    </p>
                    <p>
                      سرمایه‌ی واقعی ما، انسان‌ها هستند؛ <span className="text-amber-200 font-bold">«معجزه‌هایی که معجزه می‌آفرینند»</span>. این شایسته‌سالاری به مدلی از خودگردانی مطلق گسترش می‌یابد که در آن هر عضوی می‌تواند بر اساس تلاش و مشارکت خود به بالاترین موقعیت‌های رهبری صعود کند. نقشه راه ما، معرفی یک بال قدرتمند بازی و سپس یک ارز دیجیتال بومی است تا یک اقتصاد دیجیتال خودپایدار ایجاد شود که حاکمیت آن در نهایت به جامعه واگذار خواهد شد.
                    </p>
                  </div>
                </div>

                {/* Chapter 4 */}
                <div className="bg-stone-900/90 p-6 md:p-8 rounded-2xl border border-amber-600/30 shadow-xl space-y-4 relative">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-900/50 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold font-serif text-lg">
                      ۴
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-100 font-serif">
                        فصل چهارم: نامه به بزرگان متاورس
                      </h3>
                      <p className="text-xs text-amber-300/80 font-mono">
                        Chapter IV: Letter to Metaverse Builders
                      </p>
                    </div>
                  </div>
                  <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/30 text-amber-100 text-sm leading-relaxed space-y-3 font-serif italic">
                    <p>«به شما که آینده را می‌سازید، از اعماق دردی که به امید بدل شد، پیامی داریم. ما تکه‌ای از بهشت را در دنیای دیجیتال بنا نهاده‌ایم؛ نه با سرورهای قدرتمندتر، بلکه با روحی قدرتمندتر. ما یک اقتصاد، یک فرهنگ و یک هدف خلق کرده‌ایم که در آن، ثروت و معنا، در کنار هم خلق می‌شوند.»</p>
                    <p>«شما ابزارها را ساختید، ما روح را دمیدیم. شما متاورس را خلق کردید، ما آن را به یک پناهگاه تبدیل کردیم. ما شما را نه برای گرفتن، که برای دادن فرا می‌خوانیم. ما از شما سرمایه نمی‌خواهیم؛ ما به شما معنا پیشنهاد می‌دهیم. بیایید با هم جهانی بسازیم که در آن، هر انسانی فرصت شکوفایی داشته باشد. این یک گدایی نیست؛ یک پیشنهاد است برای ساختن جهانی بهتر. به ما بپیوندید تا به جهان نشان دهیم که تکنولوژی، زمانی به اوج خود می‌رسد که در خدمت انسانیت باشد.»</p>
                  </div>
                </div>

                {/* Chapter 5 */}
                <div className="bg-stone-900/90 p-6 md:p-8 rounded-2xl border border-amber-600/30 shadow-xl space-y-4 relative">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-900/50 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold font-serif text-lg">
                      ۵
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-100 font-serif">
                        فصل پنجم: پیام به رهبران جهان
                      </h3>
                      <p className="text-xs text-amber-300/80 font-mono">
                        Chapter V: Message to World Leaders
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-950/30 p-5 rounded-xl border border-red-700/40 text-stone-200 text-sm leading-relaxed space-y-3 font-serif">
                    <p>«قدرت شما در کنترل مرزها نیست، بلکه در برداشتن آن‌هاست. ارتش‌های شما برای جنگ بر سر منابعی می‌جنگند که در برابر عظمت کیهان، ذره‌ای بیش نیست. شما بر سر خاک می‌جنگید، در حالی که ما چشم به ستارگان دوخته‌ایم.»</p>
                    <p className="text-amber-200 font-bold">«آینده‌ی بشریت، در وحدت است، نه در تفرقه. به جای ساختن دیوار، پل بسازید. به جای سرمایه‌گذاری بر روی سلاح، بر روی رویاهای مشترک سرمایه‌گذاری کنید. به ما بپیوندید تا با هم به سوی ستارگان گام برداریم. تاریخ، شما را نه بر اساس مرزهایی که حفظ کردید، بلکه بر اساس دنیاهایی که خلق کردید، قضاوت خواهد کرد.»</p>
                  </div>
                </div>

                {/* Chapter 6 */}
                <div className="bg-stone-900/90 p-6 md:p-8 rounded-2xl border-2 border-amber-500/50 shadow-2xl space-y-6 relative bg-gradient-to-br from-stone-900 to-amber-950/30">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 border border-amber-300 flex items-center justify-center font-black font-serif text-lg">
                      ۶
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-amber-100 font-serif">
                        فصل ششم: مرامنامه و «دموکراسی ثروت»
                      </h3>
                      <p className="text-xs text-amber-300/80 font-mono">
                        Chapter VI: Code of Ethics & Democracy of Wealth
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-300 text-sm font-serif">
                    این جهان توسط یک مرامنامه‌ی شکست‌ناپذیر اداره می‌شود:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/30 space-y-2">
                      <div className="text-amber-300 font-bold text-sm font-serif border-b border-stone-800 pb-2">
                        ۱. قدردانی پیشگیرانه
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed font-serif">
                        همانطور که عارف بایزید بسطامی گفت: <span className="text-amber-200">«دیگران وقتی دریافت می‌کنند سپاسگزارند، اما من وقتی دریافت نمی‌کنم سپاسگزارم، و وقتی دریافت می‌کنم، ایثار می‌کنم.»</span> ما معتقدیم که قلب‌های امیدوار، حاصلخیزترین زمین‌ها برای خلاقیت هستند.
                      </p>
                    </div>

                    <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/30 space-y-2">
                      <div className="text-amber-300 font-bold text-sm font-serif border-b border-stone-800 pb-2">
                        ۲. قول مقدس
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed font-serif">
                        قول با تمامیت فرد داده می‌شود، نه با زبانش. اعتماد یک فرصت مقدس و اغلب یکتاست. هر قولی ممکن است آخرین امید برای کسی در ناامیدی باشد و نجات یک روح، نجات تمام بشریت است.
                      </p>
                    </div>

                    <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/30 space-y-2">
                      <div className="text-amber-300 font-bold text-sm font-serif border-b border-stone-800 pb-2">
                        ۳. ثروت و معنا
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed font-serif">
                        دنیایی که ثروت ارائه می‌دهد اما معنا را از بین می‌برد، به ناچار به فقر منجر خواهد شد. در «شهر توانا»، هر فردی خود را یک «قطب»، یک «نماد»، و نیرویی تعیین‌کننده در خلق ثروت و معنا احساس می‌کند.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 p-6 rounded-2xl border border-amber-500/40 text-center space-y-3">
                    <h4 className="text-amber-200 text-lg font-black font-serif">
                      خلق «دموکراسی ثروت» در دنیای مجازی
                    </h4>
                    <p className="text-stone-300 text-sm leading-relaxed max-w-3xl mx-auto font-serif">
                      همانطور که بشریت دموکراسی را برای عادلانه کردن قدرت ایجاد کرد، ما در آستانه‌ی خلق یک <strong className="text-amber-300 text-base">«دموکراسی ثروت»</strong> در دنیای مجازی هستیم. باور داشته باشید که امروز، دیگر غیرممکن، غیرممکن نیست. یک آرمان بزرگ، اگر برای امروز بلند به نظر برسد، برای فردا کوچک خواهد بود.
                    </p>
                    <div className="pt-2 text-amber-400 font-bold text-base font-serif">
                      این، کتاب آفرینش.
                    </div>
                  </div>
                </div>

                {/* Chapter 7: Unique Metaverse Identity, Cinema & Governance Leagues */}
                <div className="bg-gradient-to-br from-purple-950/80 via-stone-900 to-amber-950/80 p-6 md:p-8 rounded-2xl border-2 border-purple-500/50 shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-purple-500 text-stone-950 border border-purple-300 flex items-center justify-center font-black font-serif text-lg shrink-0">
                      ۷
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-purple-200 font-serif">
                        فصل هفتم: اصالت نوین متاورس، سینما، نشاط، و پیوند لیگ‌های ارزش‌آفرین
                      </h3>
                      <p className="text-xs text-purple-300/80 font-mono">
                        Chapter VII: Original Metaverse Architecture, Cinema, Comedy & Governance Synergy
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs md:text-sm text-stone-200 leading-relaxed font-serif relative z-10">
                    <div className="bg-stone-950/90 p-5 rounded-xl border border-purple-500/30 space-y-3">
                      <h4 className="font-bold text-amber-300 text-sm font-sans flex items-center gap-2">
                        <Clapperboard className="w-4 h-4 text-purple-400" />
                        ۱. شهر سرگرمی، نشاط، سینما و هنر خنداندن
                      </h4>
                      <p className="text-stone-300">
                        شهر مجازی توانا هرگز نباید شهری خشک و بی‌پروح باشد؛ بلکه باید شهری پر از سرگرمی، نشاط، لبخند و هنر باشد. ما با ایجاد پردیس سینمایی و استیج کمدی، بستری برای نمایش آثار فیلمسازان، کارگردانان، استعدادهای خنداندن دیگران، تئاتر، برنامه‌های زنده استریم و گیمینگ فراهم می‌کنیم تا سینما و هنر در قلب این متاورس بتابد.
                      </p>
                    </div>

                    <div className="bg-stone-950/90 p-5 rounded-xl border border-amber-500/30 space-y-3">
                      <h4 className="font-bold text-amber-300 text-sm font-sans flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-400" />
                        ۲. پیوند مدیریت شهری با لیگ‌های استقلال و تاثیرگذاران
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-stone-300">
                        <li>ترکیب مدیریت شهری توانا با افراد شاخص لیگ‌های دیگر، اپلیکیشن‌ها، و تاثیرگزاران و فداکاران این عرصه.</li>
                        <li>اپلیکیشن‌های ما و معرفان و ارزش آفرینان لیگ‌های دیگر و همچنین خود لیگ استقلال در توانا اقتباس پیدا خواهد کرد.</li>
                        <li><strong className="text-amber-200">«ما به راستی دموکراسی، ثروت و قدرت را به سرعت ایجاد آن خواهیم بود.»</strong></li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-purple-950/90 via-stone-950 to-purple-950/90 p-5 rounded-xl border border-purple-400/50 space-y-2 text-purple-100 font-mono text-xs">
                      <p className="font-bold text-amber-300 font-serif text-sm">
                        ترازش جهانی و الگوی ساخت متاورس‌های آینده:
                      </p>
                      <p className="italic leading-relaxed">
                        "This is a city of potential. This city of potential, a partner that’s suitable for public interests, will be so with this method and with these details. This city is not derived from any metaverse clone. This city is a metaverse that exists only in my mind, and I don't think it's similar to any other metaverse in the world."
                      </p>
                      <p className="text-amber-200 font-serif pt-1 text-xs">
                        «من فکر می‌کنم این شهر بتواند الگویی برای ساخت متاورس‌های جدید در جهان و اکوسیستم‌های مشابه باشد.»
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* GLOBAL EXPANSION & SPONSOR PITCH HUB (جذب سرمایه‌گذار & توسعه بین‌المللی) */}
          {/* ========================================== */}
          {activeSection === "globalExpansion" && (
            <motion.div
              key="globalExpansion"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              {/* Hero Banner */}
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-10 border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-950 via-emerald-950/30 to-stone-900">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold">
                    <Globe2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                    هاب بین‌المللی جذب سرمایه‌گذاران، اسپانسرها و شرکای استراتژیک ابرشهر توانا
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-amber-100 font-serif leading-tight">
                    چرا ابرشهر توانا در عرصه متاورس‌های جهان خواهد درخشید؟
                  </h2>
                  <p className="text-sm text-stone-300 leading-relaxed max-w-4xl">
                    مدل اقتصادی بی‌نظیر مبتنی بر دارایی‌های واقعی (RWA Backed)، هوش مصنوعی احساس‌محور نکسوز، زیرساخت ضد باگ با پایداری ۹۹.۹٪، و بورس‌های پنج‌گانه تجاری، خودرو، املاک، مد و خدمات مالی در <strong className="text-amber-300 underline decoration-amber-500/50">۱,۳۰۰,۰۰۰ مترمربع فضای مجازی</strong> (شامل ۶۵۰,۰۰۰ مترمربع شهر آفرینا و ۶۵0,۰۰۰ مترمربع شهر همراز تحت اکوسیستم آفرینا).
                  </p>
                </div>
              </div>

              {/* Strategic Land Treasury Reserve & Incentive Policy Card */}
              <div className="bg-stone-900 border-2 border-amber-500/50 rounded-2xl p-6 md:p-8 space-y-5 shadow-2xl bg-gradient-to-br from-stone-900 via-amber-950/20 to-stone-950">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-500/40">
                      <ShieldCheck className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-100 font-serif">
                        سیاست ضدتورمی و حفظ ارزش دارایی‌ها: قفل ۳۰٪ خزانه و ۱۰٪ پاداش اکوسیستم
                      </h3>
                      <p className="text-xs text-stone-400 font-mono mt-0.5">
                        Tavana City Land Tokenomics & Floor-Price Protection Mechanics
                      </p>
                    </div>
                  </div>
                  <span className="bg-amber-500 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-md font-mono">
                    30% Permanently Locked
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-stone-950 p-4 rounded-xl border border-amber-500/40 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-amber-300 text-sm">۳۰٪ خزانه قفل‌شده (Reserve)</span>
                      <span className="bg-amber-950 text-amber-300 font-mono font-bold text-[10px] px-2 py-0.5 rounded border border-amber-800">
                        غیرقابل فروش
                      </span>
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      ۳۰ درصد کل زمین‌های شهر توانا (همراز و آفرینا) برای همیشـه در خزانه مرکزی قفل شده و هرگز فروخته نخواهند شد. این اقدام تضمین‌کننده نایابی زمین، جلوگیری از سقوط قیمت و حفظ ارزش سرمایه خریداران اولیه است.
                    </p>
                  </div>

                  <div className="bg-stone-950 p-4 rounded-xl border border-emerald-500/40 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-emerald-400 text-sm">۸ الی ۱۲٪ مشوق اکوسیستم</span>
                      <span className="bg-emerald-950 text-emerald-300 font-mono font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-800">
                        Incentive Pool
                      </span>
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      اختصاص ۸ تا ۱۲ درصد زمین‌ها برای مشوق افراد شاغل، معرفان و ارزش‌آفرینان، قرعه‌کشی‌های هیجان‌انگیز درون برنامه و جوایز رویاسازی؛ اهرمی قوی برای جذب سریع نیروی انسانی و نخبگان.
                    </p>
                  </div>

                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-stone-200 text-sm">۵۸ الی ۶۲٪ عرضه تجاری</span>
                      <span className="bg-stone-900 text-stone-300 font-mono font-bold text-[10px] px-2 py-0.5 rounded border border-stone-700">
                        Market Circulation
                      </span>
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      عرضه تدریجی زمین‌های باقی‌مانده در بورس‌های پنج‌گانه به صورت صکوک معتبر، خریدهای قطعی، اجاره به شرط تملیک و مشارکت در سود واقعی حجره‌ها.
                    </p>
                  </div>
                </div>
              </div>

              {/* The 9 Supporting Sub-Apps / Ecosystem Pillar Engines */}
              <div className="bg-stone-900 border border-emerald-500/40 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
                <div className="border-b border-stone-800 pb-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    شبکه ۹ اپلیکیشن و موتور پشتیبان ابرشهر توانا (Tavana Ecosystem Pillars)
                  </div>
                  <h3 className="text-xl font-bold text-amber-100 font-serif">
                    معماری ۹ لایه قدرتمند: اپلیکیشن‌های مکمل که به شهر توانا حیات، ثروت و نشاط می‌بخشند
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    هر یک از این ۹ برنامه به عنوان یک موتور مستقل و شتاب‌دهنده عمل کرده و تضمین می‌کنند که مجاز، سفره حقیقت مردم را رنگین‌تر کند.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      id: "nexsus",
                      title: "۱. هوش مصنوعی احساسی نکسوز (Nexsus AI)",
                      badge: "روح & احساس",
                      desc: "دستیار احساس‌محور، همدم هوشمند شهروندان و مشاوره تخصصی کسب‌وکار که تعاملات انسان و ماشین را ملموس می‌سازد.",
                      icon: Brain,
                    },
                    {
                      id: "genesis",
                      title: "۲. پلتفرم میزبانی جنسیس (Genesis Hosting)",
                      badge: "پلتفرم وب",
                      desc: "بستر میزبانی برنامه‌های تحت وب، سندباکس توسعه ابزارها و اتصال مستقیم سرویس‌های خارجی به شهر توانا.",
                      icon: Cpu,
                    },
                    {
                      id: "karaoke",
                      title: "۳. هاب کارائوکه و دورهمی صوتی (Karaoke Lounge)",
                      badge: "نشاط & فرهنگ",
                      desc: "فضای سرگرمی، همخوانی و موسیقی تعاملی برای خانواده‌ها؛ آوردن لبخند و ارتباط صمیمانه به سفره‌های زندگی حقیقی.",
                      icon: Sparkles,
                    },
                    {
                      id: "weaver",
                      title: "۴. شبیه‌ساز بافت، پرتره پرچم‌ها و رنگرزی (Custom Weaver)",
                      badge: "خلاقیت & سفارش جهانی",
                      desc: "شبیه‌سازی سه‌بعدی و سفارش آنلاین بافت پرتره پرچم کشورهای جهان و مشاهیر ملی؛ ایجاد تقاضای عظیم بین‌المللی و پشتیبان‌سازی پایه پولی شهر توانا.",
                      icon: Palette,
                    },
                    {
                      id: "valuation",
                      title: "۵. ارزیابی و قیمت‌گذاری AI (AI Valuation)",
                      badge: "دقت کارشناسی",
                      desc: "ارزیابی هوشمند و کارشناسی فرش دستباف، طلا و املاک با هوش مصنوعی و تایید نهایی اساتید برجسته (استاد میری).",
                      icon: ShieldCheck,
                    },
                    {
                      id: "marketplaces",
                      title: "۶. بورس‌های ۵ گانه یکپارچه (5 Marketplaces)",
                      badge: "تجارت واقعی",
                      desc: "بورس‌های تخصصی فرش، خودرو، مسکن، مد و پوشاک ایرانی و خدمات مالی؛ بازار بدون دلال با بنکداران کشوری.",
                      icon: ShoppingBag,
                    },
                    {
                      id: "sukuk",
                      title: "۷. خزانه‌داری و صندوق صکوک RWA (Sukuk Vault)",
                      badge: "امنیت مالی",
                      desc: "مدیریت دارایی‌های واقعی، صدور اوراق صکوک ضدتورمی و شبیه‌ساز بازدهی سالانه برای سرمایه‌گذاران.",
                      icon: Coins,
                    },
                    {
                      id: "suite",
                      title: "۸. سوییت اختصاصی سیاوش (Siavash VIP Lounge)",
                      badge: "مرکز فرماندهی",
                      desc: "تالار جلسات استراتژیک، پذیرایی سلطنتی از سفرا و سرمایه‌گذاران و اتاق فکر توسعه اکوسیستم.",
                      icon: Crown,
                    },
                    {
                      id: "pitchdeck",
                      title: "۹. هاب بین‌المللی جذب سرمایه (Global Pitch Deck)",
                      badge: "توسعه جهانی",
                      desc: "بسته‌های اسپانسری پلاتینوم تا برنزی، اعطای نمایندگی پارسل‌های بین‌المللی و جذب نخبگان و برندهای جهانی.",
                      icon: Globe2,
                    },
                  ].map((app) => (
                    <div
                      key={app.id}
                      className="bg-stone-950 p-4 rounded-xl border border-stone-800 hover:border-emerald-500/50 transition-all space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500/20 transition-all">
                          <app.icon className="w-5 h-5" />
                        </div>
                        <span className="bg-amber-950/80 text-amber-300 border border-amber-800 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                          {app.badge}
                        </span>
                      </div>
                      <h4 className="font-bold text-amber-100 text-xs font-serif group-hover:text-emerald-300 transition-all">
                        {app.title}
                      </h4>
                      <p className="text-stone-400 text-[11px] leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparative Benchmark Table vs Global Metaverses */}
              <div className="bg-stone-900 border border-amber-600/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
                <div className="border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
                    <BarChart3 className="w-4 h-4" />
                    Global Metaverse Comparison Matrix
                  </div>
                  <h3 className="text-xl font-bold text-amber-100 font-serif mt-1">
                    جدول مقایسه شاخص‌های کلیدی: توانا سیتی در برابر متاورس‌های مطرح جهان
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    تحلیل ۵ برتری رقابتی بنیادین اکوسیستم توانا (شهر همراز + شهر آفرینا) در مقایسه با وب۳ سنتی
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs text-stone-300 border-collapse">
                    <thead>
                      <tr className="bg-stone-950 text-amber-300 border-b border-stone-800">
                        <th className="p-3 font-bold">معیار ارزیابی</th>
                        <th className="p-3 font-bold text-emerald-400 bg-emerald-950/40 border-x border-emerald-600/30">توانا سیتی (همراز & آفرینا)</th>
                        <th className="p-3 font-bold text-stone-400">Decentraland (MANA)</th>
                        <th className="p-3 font-bold text-stone-400">The Sandbox (SAND)</th>
                        <th className="p-3 font-bold text-stone-400">Meta Horizon Worlds</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800">
                      <tr className="hover:bg-stone-800/50">
                        <td className="p-3 font-bold text-amber-100">پشتوانه دارایی واقعی (RWA Backing)</td>
                        <td className="p-3 font-bold text-emerald-300 bg-emerald-950/20 border-x border-emerald-600/20">
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ۱۰۰٪ فرش دستباف، املاک و طلا</span>
                        </td>
                        <td className="p-3 text-stone-400">۰٪ (صرفاً زمین‌های مجازی گمانه‌زنی)</td>
                        <td className="p-3 text-stone-400">۰٪ (پیکسل‌های بازی ووکسل)</td>
                        <td className="p-3 text-stone-400">۰٪ (فضای بدون توکنومیکس ملموس)</td>
                      </tr>

                      <tr className="hover:bg-stone-800/50">
                        <td className="p-3 font-bold text-amber-100">هوش مصنوعی و روح احساسی (AI Core)</td>
                        <td className="p-3 font-bold text-emerald-300 bg-emerald-950/20 border-x border-emerald-600/20">
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> هوش احساسی نکسوز (Nexsus AI)</span>
                        </td>
                        <td className="p-3 text-stone-400">ربات‌های ساده بدون درک احساسات</td>
                        <td className="p-3 text-stone-400">NPCهای متنی اولیه</td>
                        <td className="p-3 text-stone-400">چت چت‌بات متداول</td>
                      </tr>

                      <tr className="hover:bg-stone-800/50">
                        <td className="p-3 font-bold text-amber-100">بورس‌های تجاری یکپارچه واقعیت</td>
                        <td className="p-3 font-bold text-emerald-300 bg-emerald-950/20 border-x border-emerald-600/20">
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ۵ بورس (فرش، خودرو، مسکن، مد، مالی)</span>
                        </td>
                        <td className="p-3 text-stone-400">فقط فروشگاه‌های NFT هنری</td>
                        <td className="p-3 text-stone-400">محدود به تجربیات بازی ویدئویی</td>
                        <td className="p-3 text-stone-400">جلسات کاری متورم بدون تجارت</td>
                      </tr>

                      <tr className="hover:bg-stone-800/50">
                        <td className="p-3 font-bold text-amber-100">زیرساخت پایداری شبکه و هجوم ترافیک</td>
                        <td className="p-3 font-bold text-emerald-300 bg-emerald-950/20 border-x border-emerald-600/20">
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> سپر هوشمند Flood & High-Traffic Shield</span>
                        </td>
                        <td className="p-3 text-stone-400">افت فریم و کندی شدید در رویدادها</td>
                        <td className="p-3 text-stone-400">محدودیت کلاینت سنگین</td>
                        <td className="p-3 text-stone-400">نیاز به هدست سنگین VR</td>
                      </tr>

                      <tr className="hover:bg-stone-800/50">
                        <td className="p-3 font-bold text-amber-100">تسویه مالی و اوراق صکوک (Sukuk Settlement)</td>
                        <td className="p-3 font-bold text-emerald-300 bg-emerald-950/20 border-x border-emerald-600/20">
                          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> صکوک اسلامی + USD/EUR/AED/IRR</span>
                        </td>
                        <td className="p-3 text-stone-400">وابسته به نوسان شدید ارزهای دیجیتال</td>
                        <td className="p-3 text-stone-400">وابسته به توکن SAND</td>
                        <td className="p-3 text-stone-400">پرداخت درون‌برنامه‌ای محدود</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Interactive ROI & Investment Simulator */}
              <div className="bg-stone-900 border border-emerald-600/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-amber-100 font-serif flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                      شبیه‌ساز هوشمند بازدهی سرمایه‌گذاری و ارزش افزوده صکوک پارسل‌ها
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      تخمین سودآوری بر اساس سطح مشارکت، منطقه پارسل و افق زمانی در شهر توانا
                    </p>
                  </div>
                  <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/60 text-xs font-bold px-3 py-1 rounded-full">
                    RWA Protected Model
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Controls */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-amber-300 mb-2">
                        ۱. سطح مشارکت سرمایه‌گذار (Investment Tier):
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: "platinum", label: "پلاتینوم ($۵۰۰,۰۰۰)", amount: 500000, toman: "۵۰ میلیارد تومان" },
                          { id: "gold", label: "طلایی ($۱۰۰,۰۰۰)", amount: 100000, toman: "۱۰ میلیارد تومان" },
                          { id: "silver", label: "نقره‌ای ($۲۵,۰۰۰)", amount: 25000, toman: "۲.۵ میلیارد تومان" },
                          { id: "bronze", label: "برنزی ($۵,۰۰۰)", amount: 5000, toman: "۵۰۰ میلیون تومان" },
                        ].map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => setInvestmentTier(tier.id as any)}
                            className={`p-3 rounded-xl border text-right transition-all text-xs font-bold ${
                              investmentTier === tier.id
                                ? "bg-emerald-950 text-emerald-200 border-emerald-500 ring-1 ring-emerald-400 shadow-md"
                                : "bg-stone-950 text-stone-300 border-stone-800 hover:border-emerald-600/40"
                            }`}
                          >
                            <span className="block text-amber-100">{tier.label}</span>
                            <span className="text-[10px] text-stone-400 font-mono block mt-0.5">{tier.toman}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-amber-300 mb-2">
                        ۲. زون تخصصی پارسل در شهر همراز و آفرینا:
                      </label>
                      <select
                        value={selectedParcelCategory}
                        onChange={(e) => setSelectedParcelCategory(e.target.value as any)}
                        className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-3 text-xs focus:border-emerald-500 outline-none"
                      >
                        <option value="bourse">بورس اصلی تجار و بنکداران فرش (سود بازدهی سالانه ۲۸٪)</option>
                        <option value="museum">موزه بین‌المللی و گالری شاهکارهای آفرینا (سود بازدهی سالانه ۲۴٪)</option>
                        <option value="financial">مرکز مالی، صرافی و تالار صکوک همراز (سود بازدهی سالانه ۳۲٪)</option>
                        <option value="auto">بورس و نمایشگاه‌های سه‌بعدی خودرو (سود بازدهی سالانه ۲۶٪)</option>
                        <option value="fashion">پاساژ و پردهای مد و پوشاک ایرانی (سود بازدهی سالانه ۲۵٪)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-amber-300 mb-2">
                        ۳. افق زمانی سرمایه‌گذاری (سال): {investmentYears} سال
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={investmentYears}
                        onChange={(e) => setInvestmentYears(Number(e.target.value))}
                        className="w-full accent-emerald-500 bg-stone-950 h-2 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                        <span>۱ سال</span>
                        <span>۲ سال</span>
                        <span>۳ سال</span>
                        <span>۴ سال</span>
                        <span>۵ سال</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Outputs */}
                  {(() => {
                    const baseUSD = investmentTier === "platinum" ? 500000 : investmentTier === "gold" ? 100000 : investmentTier === "silver" ? 25000 : 5000;
                    const annualYieldRate = selectedParcelCategory === "financial" ? 0.32 : selectedParcelCategory === "bourse" ? 0.28 : selectedParcelCategory === "auto" ? 0.26 : selectedParcelCategory === "fashion" ? 0.25 : 0.24;
                    const rwaAppreciationRate = 0.15; // 15% annual physical asset appreciation
                    const compoundingMultiplier = Math.pow(1 + annualYieldRate + rwaAppreciationRate, investmentYears);
                    const totalProjectedUSD = Math.round(baseUSD * compoundingMultiplier);
                    const totalProfitUSD = totalProjectedUSD - baseUSD;
                    const approxGoldSovereigns = Math.round(totalProjectedUSD / 600); // estimated conversion

                    return (
                      <div className="bg-stone-950 p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between space-y-6">
                        <div>
                          <span className="text-[10px] text-emerald-400 font-mono uppercase block">Live Simulation Output</span>
                          <h4 className="text-lg font-bold text-amber-100 font-serif">
                            پیش‌بینی خروجی مالی و ارزش افزوده دارایی
                          </h4>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                            <span className="text-xs text-stone-400">سرمایه اولیه:</span>
                            <span className="font-mono text-amber-200 font-bold">${baseUSD.toLocaleString()} USD</span>
                          </div>

                          <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                            <span className="text-xs text-stone-400">نرخ سود سالانه صکوک + تورم مثبت RWA:</span>
                            <span className="font-mono text-emerald-400 font-bold">%{Math.round((annualYieldRate + rwaAppreciationRate) * 100)} سالانه</span>
                          </div>

                          <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                            <span className="text-xs text-stone-400">سود خالص پیش‌بینی شده ({investmentYears} سال):</span>
                            <span className="font-mono text-emerald-300 font-bold">+${totalProfitUSD.toLocaleString()} USD</span>
                          </div>

                          <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/40 text-center space-y-1">
                            <span className="text-[11px] text-emerald-300 font-bold block">ارزش کل دارایی پس از {investmentYears} سال:</span>
                            <div className="text-2xl font-black text-amber-100 font-mono">
                              ${totalProjectedUSD.toLocaleString()} USD
                            </div>
                            <span className="text-xs text-amber-300 font-mono block">
                              معادل تقریبی {approxGoldSovereigns.toLocaleString()} سکه بهار آزادی / صکوک طلایی
                            </span>
                          </div>
                        </div>

                        <p className="text-[10px] text-stone-500 leading-relaxed text-center font-mono">
                          * تمامی محاسبات فوق بر اساس مدلسازی ارزش دارایی‌های واقعی (RWA) و سود بازدهی کارمزد معاملات بورس توانا محاسبه گردیده است.
                        </p>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Sponsorship Tier Packages & Immediate Application */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Tiers Breakdown */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-xl font-bold text-amber-100 font-serif flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    بسته‌های اسپانسری و مشارکت استراتژیک در ابرشهر توانا
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-stone-900 p-5 rounded-2xl border border-amber-500/50 space-y-3 relative overflow-hidden">
                      <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl" />
                      <div className="flex justify-between items-start">
                        <span className="bg-amber-500 text-stone-950 font-black text-[10px] px-2.5 py-0.5 rounded-full">
                          سطح پلاتینوم
                        </span>
                        <span className="font-mono text-amber-300 text-xs font-bold">$500,000 USD</span>
                      </div>
                      <h4 className="text-base font-bold text-amber-100 font-serif">
                        راهبر استراتژیک جهان (Platinum Visionary)
                      </h4>
                      <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                        <li>حق تسمیه میدان اصلی یا بزرگراه شهر همراز</li>
                        <li>واگذاری پارسل ۱۰,۰۰۰ مترمربعی با سند صکوک اختصاصی</li>
                        <li>نصب لوگوی برند در تمام گوی‌های درخشان و بنرهای اصلی</li>
                        <li>عضویت در شورای عالی توکنومیکس و تصمیم‌گیری‌های کلان</li>
                      </ul>
                    </div>

                    <div className="bg-stone-900 p-5 rounded-2xl border border-amber-600/30 space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="bg-amber-600 text-stone-950 font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                          سطح طلایی
                        </span>
                        <span className="font-mono text-amber-300 text-xs font-bold">$100,000 USD</span>
                      </div>
                      <h4 className="text-base font-bold text-amber-100 font-serif">
                        ستون اصلی اکوسیستم (Gold Ecosystem Pillar)
                      </h4>
                      <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                        <li>پاویون اختصاصی ۳,۰۰۰ مترمربعی در بورس شهر همراز</li>
                        <li>حق پخش تیزرهای تبلیغاتی سه‌بعدی در راسته‌های تجاری</li>
                        <li>معافیت ۵۰ درصدی از کارمزد تراکنش‌های بازار</li>
                        <li>پشتیبانی اولویت‌دار توسط هوش مصنوعی نکسوز</li>
                      </ul>
                    </div>

                    <div className="bg-stone-900 p-5 rounded-2xl border border-stone-800 space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="bg-stone-700 text-stone-100 font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                          سطح نقره‌ای
                        </span>
                        <span className="font-mono text-amber-300 text-xs font-bold">$25,000 USD</span>
                      </div>
                      <h4 className="text-base font-bold text-amber-100 font-serif">
                        حامی فرهنگی و هنری (Silver Cultural Patron)
                      </h4>
                      <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                        <li>تالار اختلاصی ۱,۰۰۰ مترمربعی در موزه شهر آفرینا</li>
                        <li>گواهی اصالت بلاک‌چین با نشان رسمی حامی</li>
                        <li>معرفی در کتاب آفرینش و مرامنامه شهر توانا</li>
                      </ul>
                    </div>

                    <div className="bg-stone-900 p-5 rounded-2xl border border-stone-800 space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="bg-amber-900/50 text-amber-300 font-bold text-[10px] px-2.5 py-0.5 rounded-full border border-amber-800">
                          سطح برنزی
                        </span>
                        <span className="font-mono text-amber-300 text-xs font-bold">$5,000 USD</span>
                      </div>
                      <h4 className="text-base font-bold text-amber-100 font-serif">
                        حجره‌دار ممتاز (Bronze Merchant Ally)
                      </h4>
                      <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                        <li>حجره مجازی ۵۰۰ مترمربعی در راسته تجار</li>
                        <li>ثبت ۳۰ شاهکار فرش یا محصول در بورس آنلاین</li>
                        <li>پشتیبانی کارشناسی استاد مهدی میری</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Application Form */}
                <div className="bg-stone-900 p-6 rounded-2xl border border-emerald-500/40 space-y-4 shadow-xl">
                  <h3 className="text-lg font-bold text-amber-100 font-serif flex items-center gap-2">
                    <Send className="w-5 h-5 text-emerald-400" />
                    فرم ثبت درخواست اسپانسری و جذب سرمایه‌گذار
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    با ثبت درخواست، پروپوزال رسمی و طرح جامع بین‌المللی توانا سیتی مستقیماً برای شما ارسال خواهد شد.
                  </p>

                  {sponsorSubmitted ? (
                    <div className="bg-emerald-950 p-6 rounded-xl border border-emerald-500/50 text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                      <h4 className="font-bold text-emerald-200 text-sm">درخواست شما با موفقیت ثبت گردید</h4>
                      <p className="text-xs text-stone-300">
                        کارشناسان ارشد استودیو سیاوش و دبیرخانه بین‌المللی شهر توانا ظرف حداکثر ۲۴ ساعت جهت هماهنگی جلسه اختصاصی با شما تماس خواهند گرفت.
                      </p>
                      <button
                        onClick={() => setSponsorSubmitted(false)}
                        className="bg-stone-800 text-stone-200 text-xs font-bold px-4 py-2 rounded-lg hover:bg-stone-700 transition-all"
                      >
                        ثبت درخواست جدید
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSponsorSubmitted(true);
                      }}
                      className="space-y-3 text-xs"
                    >
                      <div>
                        <label className="block text-stone-300 mb-1 font-bold">نام و نام خانوادگی:</label>
                        <input
                          required
                          type="text"
                          value={sponsorName}
                          onChange={(e) => setSponsorName(e.target.value)}
                          placeholder="مثلاً: دکتر رضا احمدی"
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-300 mb-1 font-bold">نام برند / سازمان / شرکت:</label>
                        <input
                          required
                          type="text"
                          value={sponsorOrg}
                          onChange={(e) => setSponsorOrg(e.target.value)}
                          placeholder="مثلاً: هلدینگ سرمایه‌گذاری خلیج فارس"
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-300 mb-1 font-bold">ایمیل مستقیم یا تلگرام/واتساپ:</label>
                        <input
                          required
                          type="text"
                          value={sponsorEmail}
                          onChange={(e) => setSponsorEmail(e.target.value)}
                          placeholder="investor@company.com / +98..."
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-300 mb-1 font-bold">کشور / منطقه فعالیت:</label>
                        <input
                          type="text"
                          value={sponsorCountry}
                          onChange={(e) => setSponsorCountry(e.target.value)}
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-300 mb-1 font-bold">توضیحات و اهداف مشارکت:</label>
                        <textarea
                          rows={3}
                          value={sponsorNotes}
                          onChange={(e) => setSponsorNotes(e.target.value)}
                          placeholder="تمایل به اخذ نمایندگی، اسپانسری اصلی یا رزرو پارسل در بورس..."
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-emerald-500 outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-stone-950 font-black py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        ارسال رسمی درخواست سرمایه‌گذاری
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Executive Whitepaper & Pitch Deck Hub */}
              <div className="bg-stone-900 border border-amber-600/30 rounded-2xl p-6 md:p-8 space-y-4 text-center">
                <h3 className="text-lg font-bold text-amber-100 font-serif">
                  دانلود پروپوزال رسمی و کتابچه فنی شهر توانا (Executive Pitch Deck & Whitepaper)
                </h3>
                <p className="text-xs text-stone-300 max-w-3xl mx-auto leading-relaxed">
                  مستندات کامل معماری سه‌بعدی، توکنومیکس صکوک، پروتکل‌های امنیتی هوش مصنوعی نکسوز و نقشه راه توسعه پنج‌ساله ابرشهر توانا آماده مطالعه سرمایه‌گذاران بین‌المللی می‌باشد.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href="#download-whitepaper"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("کتابچه پروپوزال و وایت‌پپر رسمی شهر توانا با موفقیت دانلود شد (Tavana_City_Executive_Whitepaper.pdf)");
                    }}
                    className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    دانلود وایت‌پپر فنی و توکنومیکس (PDF)
                  </a>
                  <a
                    href="#download-pitchdeck"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("دفترچه ارائه سرمایه‌گذاری و اسپانسری با موفقیت دانلود گردید (Tavana_City_Pitch_Deck_2026.pdf)");
                    }}
                    className="bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-600/40 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    دانلود Pitch Deck سرمایه‌گذاری (PDF)
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 2. IRAN MARKETPLACES (VEHICLES, REAL ESTATE, FASHION, FINANCIALS) */}
          {/* ========================================== */}
          {activeSection === "iranMarketplaces" && (
            <motion.div
              key="iranMarketplaces"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl relative overflow-hidden">
                <div className="space-y-4 mb-8 border-b border-stone-800 pb-6">
                  <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-bold">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    بورس‌ها و بازار‌های تخصصی ایران در شهر همراز (توالا سیتی - Tavana City)
                  </div>
                  <h2 className="text-2xl font-extrabold text-amber-100 font-serif">
                    پلتفرم‌های اقتصادی و مبادلات کالا، خودرو، املاک، پوشاک و خدمات مالی ایران
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed max-w-3xl">
                    شهر همراز (یکی از دو شهر نیو متاورسی توانا سیتی به مساحت ۶۵۰,۰۰۰ مترمربع) به عنوان مرکز تجارت، بورس دیجیتال و بازار‌های تخصصی کشور ایران طراحی شده است.
                  </p>
                </div>

                {/* DEDICATION & GENESIS CARD: HAJ HOSSEIN ALIMADI WITH RADIATING HALO AURA */}
                <div className="bg-gradient-to-r from-amber-950/90 via-stone-900 to-amber-950/90 border-2 border-amber-400/80 rounded-2xl p-6 md:p-8 space-y-4 shadow-[0_0_50px_rgba(245,158,11,0.25)] relative overflow-hidden group">
                  {/* Radiating Light Halo Effects */}
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse pointer-events-none delay-1000" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-amber-500/40 pb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Radiating Icon Badge with Divine Golden Light Halo (هاله نور) */}
                      <div className="relative group/logo flex items-center justify-center p-2">
                        {/* Outer Radiating Rings - Halo 1 (Expanding Pulse) */}
                        <div className="absolute inset-0 bg-amber-400/30 rounded-2xl blur-xl animate-ping opacity-75" />
                        
                        {/* Halo 2 - Concentric Glowing Aura */}
                        <div className="absolute -inset-3 bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-300 rounded-2xl blur-lg animate-pulse" />
                        
                        {/* Halo 3 - Golden Light Ring */}
                        <div className="absolute -inset-1.5 bg-amber-300/60 rounded-2xl animate-spin [animation-duration:8s] opacity-80 blur-[2px]" />
                        
                        {/* Core Logo Container */}
                        <div className="relative p-3.5 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-stone-950 rounded-2xl border-2 border-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.9)] flex items-center justify-center">
                          <Heart className="w-8 h-8 text-stone-950 fill-stone-950 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                          <Sparkles className="w-4 h-4 text-amber-950 absolute -top-1 -right-1 animate-bounce" />
                        </div>
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-amber-300 font-bold text-[11px] font-mono bg-amber-950/90 px-3 py-1 rounded-full border border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.3)] mb-1">
                          <Crown className="w-3.5 h-3.5 text-amber-400" />
                          سنگ‌بنا و جرقه‌ی نخستین آفرینش (Genesis Legacy)
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-amber-100 font-serif drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
                          لوح قدردانی و تجلیل از تاج‌سر صنعت فرش ایران: حاج حسین علی‌میری
                        </h3>
                      </div>
                    </div>
                    <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black text-xs px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.5)] font-serif border border-amber-200">
                      تقدیم با افتخار و قدردانی بی‌کران
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-amber-100/95 leading-relaxed font-serif bg-stone-950/80 p-5 rounded-xl border border-amber-500/40 shadow-inner relative z-10">
                    «پلتفرم <strong className="text-amber-300 drop-shadow">فرش بازار</strong>، نخستین خشت و جرقه‌ی بنیادین خلق کل اکوسیستم ابرشهر توانا بود که با عشق و تجلیل از پدر گرانقدر، <strong className="text-amber-200 underline decoration-amber-400 underline-offset-4 font-bold">تاجر برجسته و بنکدار والامقام فرش ایران، حاج حسین علی‌میری</strong>، بنا گردید. مردی که از دل رنج‌ها و سختی‌ها، بر فرش اصیل ایرانی نشست و نان شرافت ساخت و خود و خانواده را با خلوص و خوداتکایی بنا نهاد. این اکوسیستم، ادای دینی است به میراث پدر و تجلی اقتدار و هنر بی‌بدیل فرش ایرانی در تراز جهانی.»
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono relative z-10">
                    <div className="bg-stone-950/90 p-3.5 rounded-xl border border-amber-500/40 flex items-center gap-2.5 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                      <Award className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-stone-400 text-[10px] block">اصالت & هنر فاخر:</span>
                        <strong className="text-amber-200 text-xs">خلق آثار کامل هنری روی فرش</strong>
                      </div>
                    </div>
                    <div className="bg-stone-950/90 p-3.5 rounded-xl border border-amber-500/40 flex items-center gap-2.5 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                      <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-stone-400 text-[10px] block">تکنولوژی بافت:</span>
                        <strong className="text-amber-200 text-xs">فرش دستباف & ماشینی تصاویری</strong>
                      </div>
                    </div>
                    <div className="bg-stone-950/90 p-3.5 rounded-xl border border-amber-500/40 flex items-center gap-2.5 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                      <Crown className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-stone-400 text-[10px] block">پشتیبان شهر توانا:</span>
                        <strong className="text-amber-200 text-xs">میراث ماندگار بنکداری علی‌میری</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid of Marketplaces */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Farsh Bazaar 1 - Fine Rugs, Paintings & Global Handicrafts */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-amber-500/40 space-y-4 relative overflow-hidden bg-gradient-to-br from-stone-950 via-amber-950/20 to-stone-950">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        <Gem className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif flex items-center gap-1.5">
                          <span>۱. فرش بازار ۱ (صنایع دستی و هنر فاخر جهان)</span>
                          <span className="bg-amber-950 text-amber-300 text-[10px] px-2 py-0.5 rounded border border-amber-700 font-mono">Bazaar 1</span>
                        </h3>
                        <span className="text-[10px] text-amber-300/80 font-mono">
                          Afrina Grand Cultural Bazaar - Global Handicrafts
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      بورس بین‌المللی فرش‌های موزه، تابلوهای نقاشی نفیس، ظروف نقره قلم‌زنی، منبت‌کاری و معرق اصفهان، صنایع دستی شیراز و تبریز و آثار فاخر دست‌ساز جهان با شناسنامه NFT صکوک RWA.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>عرضه مستقیم شاهکارهای هنری اساتید برجسته ایران و جهان و صدور شناسنامه اصالت دیجیتال</li>
                      <li><strong className="text-amber-300">حراجی سالانه بین‌المللی (Annual Global Auction):</strong> دعوت از خانه‌های معتبر حراج جهان از جمله ساتبیز (Sotheby's) و کریستیز (Christie's نیویورک و لندن) و کلیه شخصیت‌های حقوقی و حقیقی آکشن بین‌المللی برای مشارکت یا میزبانی مشترک با افتخار و صداقت.</li>
                      <li><strong className="text-emerald-300">سفارش بافت پرتره پرچم‌ها و مشاهیر جهان:</strong> امکان سفارش بافت اختصاصی پرتره تلفیقی پرچم کشورهای جهان و شخصیت‌های تاریخی و ملی آنها که درآمدزا بوده و هر سفارش، پشتیبان مستقیمی برای پایه پولی شهر توانا خواهد بود.</li>
                    </ul>
                    <button className="w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-black text-xs py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md">
                      <Gem className="w-4 h-4" />
                      ورود به تالار فرش بازار ۱ (صنایع دستی فاخر)
                    </button>
                  </div>

                  {/* Farsh Bazaar 2 - Carpet Raw Materials, Silk & Looms */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-amber-500/40 space-y-4 relative overflow-hidden bg-gradient-to-br from-stone-950 via-amber-950/20 to-stone-950">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        <Hammer className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif flex items-center gap-1.5">
                          <span>۲. فرش بازار ۲ (مواد اولیه، ابریشم و دار بافندگی)</span>
                          <span className="bg-amber-950 text-amber-300 text-[10px] px-2 py-0.5 rounded border border-amber-700 font-mono">Bazaar 2</span>
                        </h3>
                        <span className="text-[10px] text-amber-300/80 font-mono">
                          Hamraz B2B Carpet Supply & Raw Materials
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      بورس تخصصی تامین مواد اولیه فرش دستباف، نخ ابریشم، پشم مرینوس، دار بافندگی، رنگ‌رزی گیاهی و قراردادهای عمده‌فروشی B2B بنکداران و تولیدکنندگان سراسر کشور.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>تامین مستقیم ابریشم و نخ مرینوس اعلا بدون واسطه دلالان</li>
                      <li>سفارش و برپایی دار بافندگی آنلاین با ابعاد سفارشی</li>
                      <li>انعقاد قراردادهای پیش‌فروش بافت با تسهیلات صندوق صکوک</li>
                    </ul>
                    <button className="w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-black text-xs py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md">
                      <Hammer className="w-4 h-4" />
                      ورود به بورس مواد اولیه (فرش بازار ۲)
                    </button>
                  </div>

                  {/* Vehicle Marketplace & Car Rental */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-amber-600/30 space-y-4 relative overflow-hidden">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-red-900/40 text-amber-400 border border-red-700/50">
                        <Car className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۳. بورس، معامله و اجاره خودروهای ایران (Auto Exchange & Rental)
                        </h3>
                        <span className="text-[10px] text-amber-300/80 font-mono">
                          Hamraz Auto District & Virtual Car Rental
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      پلتفرم گسترده خرید، فروش، رهن و اجاره روزانه و ماهانه خودروهای ایرانی و وارداتی. قابلیت تست رانندگی مجازی VR در خیابان‌های ۶۵۰,۰۰۰ مترمربعی شهر همراز.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>خدمات اجاره ماشین (Car Rental) درون‌شهری و بین‌شهری</li>
                      <li>استعلام قیمت کارشناسی هوشمند خودرو با هوش مصنوعی</li>
                      <li>ثبت سند انتقال دیجیتال NFT در بلاک‌چین توانا سیتی</li>
                    </ul>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Car className="w-4 h-4" />
                      ورود به بورس و سرویس اجاره خودرو
                    </button>
                  </div>

                  {/* Real Estate & Shops */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-amber-600/30 space-y-4 relative overflow-hidden">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-red-900/40 text-amber-400 border border-red-700/50">
                        <Home className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۴. بورس املاک، زمین و مغازه‌های ایران (Iran Real Estate & Shops)
                        </h3>
                        <span className="text-[10px] text-amber-300/90 font-mono font-bold">
                          Tavana Master Citadel - 1,300,000 m² (آفرینا ۶۵۰,۰۰۰m² + همراز ۶۵۰,۰۰۰m²)
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      خرید، فروش، رهن و اجاره مجازی زمین‌ها، پاساژها و مغازه‌های تجاری در دو بخش اصلی ابرشهر توانا: <strong className="text-amber-300">شهر آفرینا (۶۵۰,۰۰۰ مترمربع)</strong> و <strong className="text-amber-300">شهر همراز (۶۵۰,۰۰۰ مترمربع)</strong> در مجموع ۱,۳۰۰,۰۰۰ مترمربع تحت اکوسیستم آفرینا همراه با سند مالکیت دیجیتال NFT.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>تفکیک دقیق ۶۵۰,۰۰۰m² شهر آفرینا و ۶۵۰,۰۰۰m² شهر همراز</li>
                      <li>نقشه‌برداری دقیق کد پارسل و متراژ اعیانی و عرصه مغازه‌ها</li>
                      <li>درگاه اجاره‌داری هوشمند ماهیانه با توکن اختصاصی</li>
                    </ul>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Home className="w-4 h-4" />
                      مشاهده نقشه پارسل‌ها و مغازه‌ها
                    </button>
                  </div>

                  {/* Fashion & Apparel */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-amber-600/30 space-y-4 relative overflow-hidden">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-red-900/40 text-amber-400 border border-red-700/50">
                        <Shirt className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۵. بازار مد، پوشاک و پارچه‌های فاخر (Iran Fashion & Textile)
                        </h3>
                        <span className="text-[10px] text-amber-300/80 font-mono">
                          Afrina & Hamraz Royal Haute Couture
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      نمایشگاه و فروشگاه پوشاک سنتی، مدرن و ترمه‌بافی اصیل ایرانی. امکان پرو هوشمند روی آواتار با فناوری واقعیت افزوده AR.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>پرو آنلاین آواتار با الگوهای طراحی و سایزبندی دقیق</li>
                      <li>عرضه پارچه‌های ابریشمی، دست‌بافت و ترمه ترمه‌دوزان برتر</li>
                      <li>برگزاری فشن‌شوهای متاورسی بین‌المللی در شهر آفرینا</li>
                    </ul>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Shirt className="w-4 h-4" />
                      ورود به پروگاه هوشمند AR
                    </button>
                  </div>

                  {/* Freelancing & Gig Platform for Iran: Kar & Kook */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-emerald-500/40 space-y-4 relative overflow-hidden bg-gradient-to-br from-stone-950 via-emerald-950/20 to-stone-950">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        <Briefcase className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif flex items-center gap-1.5">
                          <span>۶. پلتفرم «کار و کوک» (Kar & Kook)</span>
                          <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded border border-emerald-700 font-mono">فریلنسری & خدمات</span>
                        </h3>
                        <span className="text-[10px] text-emerald-400/80 font-mono">
                          Kar & Kook - Iran Talent, Gigs & Service Hub
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      برنامه جامع «کار و کوک» شبکه حرفه‌ای دورکاری، فریلنسری و کارآفرینی نخبگان، بافندگان فرش، طراحان سه‌بعدی و برنامه‌نویسان با قراردادهای هوشمند Escrow و تسویه اعتباری.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>اتصال مستقیم کارفرمایان کشوری و بین‌المللی به متخصصان ایرانی</li>
                      <li>سیستم آزادسازی مرحله‌ای وجه به صورت صکوک و ریال با ضمانت «کار و کوک»</li>
                      <li>اعطای سهام اختیاری و پاداش به نیروهای ارشد و برتر پلتفرم</li>
                    </ul>
                    <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-stone-950 font-black text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      ورود به شبکه کار و کوک
                    </button>
                  </div>

                  {/* Financial Services */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-amber-600/30 space-y-4 relative overflow-hidden">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-red-900/40 text-amber-400 border border-red-700/50">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۷. خدمات مالی، صرافی و صکوک (Financial Citadel)
                        </h3>
                        <span className="text-[10px] text-amber-300/80 font-mono">
                          Tavana Financial & Banking Vault
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      بستر صرافی دیجیتال، اعتبار معاملاتی، وام با وثیقه NFT فرش و املاک، و انتشار اوراق صکوک اسلامی.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>اعتبارسنجی خودکار فرش و املاک به عنوان وثیقه</li>
                      <li>تبدیل ارزهای بین‌المللی و تسویه ریالی مستقیم</li>
                      <li>پشتیبانی از پروتکل‌های امنیتی شبکه احساسی نکسوز</li>
                    </ul>
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      ورود به تالار مالی
                    </button>
                  </div>

                  {/* Tourism, Airports, Hotels & Historical Landmarks */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-sky-500/40 space-y-4 relative overflow-hidden bg-gradient-to-br from-stone-950 via-sky-950/20 to-stone-950">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40">
                        <Plane className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif flex items-center gap-1.5">
                          <span>۸. صنعت گردشگری، فرودگاه‌ها & هتل‌داری</span>
                          <span className="bg-sky-950 text-sky-300 text-[10px] px-2 py-0.5 rounded border border-sky-700 font-mono">ایران & جهان</span>
                        </h3>
                        <span className="text-[10px] text-sky-400/80 font-mono">
                          Tavana Global & Iran Tourism, Airports & Hotels Hub
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      سوپراپلیکیشن صنعت توریسم، اتصال فرودگاه‌های بین‌المللی و داخلی به شبکه رزرو هتل‌ها، آژانس‌های مسافرتی، و بازدید متاورسی از اماکن تاریخی ایران و جهان.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>شبکه اتصال فرودگاه‌ها، پروازها و سرویس‌های هتل‌داری</li>
                      <li>بازدید سه بعدی و تورهای واقعیت مجازی (VR/AR) از بناهای تاریخی</li>
                      <li>سامانه رزرو هوشمند، اقامتگاه‌های بوم‌گردی و گردشگری داخلی</li>
                    </ul>
                    <button
                      onClick={() => setActiveSection("tourismHub")}
                      className="w-full bg-sky-600 hover:bg-sky-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Landmark className="w-4 h-4" />
                      ورود به درگاه جهانگردی و گردشگری
                    </button>
                  </div>

                  {/* Children, Parents & AI Storyteller Super App */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-rose-500/40 space-y-4 relative overflow-hidden bg-gradient-to-br from-stone-950 via-rose-950/20 to-stone-950 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40">
                        <Baby className="w-6 h-6 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif flex items-center gap-1.5">
                          <span>۹. پلتفرم آفرینندگان فردا (کودکان & والدین)</span>
                          <span className="bg-rose-950 text-rose-300 text-[10px] px-2 py-0.5 rounded border border-rose-700 font-mono">تعامل & AI</span>
                        </h3>
                        <span className="text-[10px] text-rose-400/80 font-mono">
                          Tavana Kids & Parents Future Creators Hub
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      شبکه اختصاصی آفرینندگان آینده؛ تعامل و چت والدین، اشتراک‌گذاری شیرین‌کاری‌ها، تولدها و ویدیوها، آرشیو وویس و خاطرات، همراه با قصه‌گوی هوشمند سفارشی AI برای کودکان.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>چت‌روم‌ها و اتاق‌های هم‌فکری والدین جهت تعلیم، تربیت و تعامل اجتماعی</li>
                      <li>اشتراک‌گذاری ویدیو، نقاشی، شیرین‌کاری و ثبت صدا و خاطرات کودکان</li>
                      <li>تولید قصه‌ها و داستان‌های اخلاقی شخصیسازی‌شده و گویندگی صوتی AI</li>
                    </ul>
                    <button
                      onClick={() => setActiveSection("childrenAndParents")}
                      className="w-full bg-rose-600 hover:bg-rose-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Baby className="w-4 h-4" />
                      ورود به پلتفرم آفرینندگان فردا
                    </button>
                  </div>

                  {/* Democracy of Wealth & Power: Leagues of Value Creators & Ambassadors */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-amber-400/50 space-y-4 relative overflow-hidden bg-gradient-to-br from-stone-950 via-amber-950/30 to-stone-950 md:col-span-2 lg:col-span-1 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        <Trophy className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif flex items-center gap-1.5">
                          <span>۱۰. لیگ‌های ارزش‌آفرینان & سفیران و دمکراسی ثروت و قدرت</span>
                          <span className="bg-amber-950 text-amber-300 text-[10px] px-2 py-0.5 rounded border border-amber-700 font-mono">اهداء ۴۰٪ XP</span>
                        </h3>
                        <span className="text-[10px] text-amber-300/80 font-mono">
                          Tavana Value Creators & Ambassadors Leagues - Democracy Hub
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      سامانه حاکمیت دموکراتیک شهر توانا؛ ارتقای سطح ارزش‌آفرینان و معرفان، احراز صندلی‌های مدیریتی اپلیکیشن‌ها و امکان اهداء ۴۰٪ از XP هر شهروند به مدیران محبوب جهت مشارکت ۱۰۰٪ در اداره شهر!
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>سطوح پنج‌گانه لیگ (برنز، نقره، طلا، الماس، حاکمیتی) با مشوق‌های صکوک و اعتبار</li>
                      <li>جذب و ارتقای مدیران سایر اپلیکیشن‌ها به صندلی‌های مدیریتی عالی شهر توانا</li>
                      <li>مکانیسم اهداء ۴۰٪ از XP شهروندان برای احساس مفید بودن و تاثیرگذاری همه افراد</li>
                    </ul>
                    <button
                      onClick={() => setActiveSection("democracyLeagues")}
                      className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-black text-xs py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg border border-amber-300"
                    >
                      <Vote className="w-4 h-4 text-stone-950" />
                      ورود به تالار لیگ‌ها & دمکراسی ثروت و قدرت
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* TOURISM & AIRPORTS & HOTELS FULL VIEW      */}
          {/* ========================================== */}
          {activeSection === "tourismHub" && (
            <motion.div
              key="tourismHub"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-sky-500/40 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-900 via-sky-950/20 to-stone-900">
                <div className="space-y-4 mb-8 border-b border-stone-800 pb-6">
                  <div className="inline-flex items-center gap-2 bg-sky-950 text-sky-300 border border-sky-700/60 px-3 py-1 rounded-full text-xs font-bold">
                    <Plane className="w-4 h-4 text-sky-400" />
                    پلتفرم بین‌المللی و ملی گردشگری، فرودگاه‌ها و هتل‌داری
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-amber-100 font-serif">
                    سوپراپلیکیشن توریسم، اتصال فرودگاه‌ها، رزرو هتل و بازدید VR اماکن تاریخی
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed max-w-3xl">
                    این بستر هوشمند، صنعت گردشگری ایران و جهان را به شبکه هتل‌ها، خطوط هوایی فرودگاهی، تورهای مجازی و بوم‌گردی محلی پیوند می‌دهد.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Global Flight & Airport Connectivity */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-sky-500/30 space-y-4">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-300">
                        <Plane className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۱. شبکه فرودگاه‌ها & پروازها
                        </h3>
                        <span className="text-[10px] text-sky-400 font-mono">Airports & Flight Hub</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      استعلام زنده پروازهای داخلی و بین‌المللی، اتصال فرودگاه‌های اصلی کشور به سرویس‌های ترانسفر، تشریفات CIP و گمرک هوشمند.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>تخفیف ویژه مسافران برای خرید فرش و صنایع دستی</li>
                      <li>رزرو تاکسی فرودگاهی و خدمات CIP در شهر همراز</li>
                    </ul>
                    <button className="w-full bg-sky-600 hover:bg-sky-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Plane className="w-4 h-4" />
                      استعلام پرواز و فرودگاه‌ها
                    </button>
                  </div>

                  {/* Hotels & Local Resorts */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-sky-500/30 space-y-4">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-300">
                        <Hotel className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۲. رزرو هتل & اقامتگاه بوم‌گردی
                        </h3>
                        <span className="text-[10px] text-sky-400 font-mono">Hotels & Ecolodges Booking</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      سامانه یکپارچه رزرو هتل‌های ۵ ستاره تا اقامتگاه‌های سنتی بوم‌گردی در سراسر شهرهای تاریخی ایران (اصفهان، شیراز، تبریز، کاشان، یزد).
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>مشاهده سه‌بعدی اتاق‌ها و امکانات قبل از رزرو</li>
                      <li>تسویه مستقیم با صکوک و توکن‌های شبکه توانا</li>
                    </ul>
                    <button className="w-full bg-sky-600 hover:bg-sky-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Hotel className="w-4 h-4" />
                      مشاهده و رزرو آنلاین هتل‌ها
                    </button>
                  </div>

                  {/* Historical Landmarks VR Tours */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-sky-500/30 space-y-4">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-300">
                        <Landmark className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۳. تور مجازی VR بناهای تاریخی
                        </h3>
                        <span className="text-[10px] text-sky-400 font-mono">3D VR Historical Tours</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      بازدید واقعیت مجازی (VR) از تخت جمشید، میدان نقش جهان، عالی‌قاپو، مسجد شیخ لطف‌الله و بازار تبریز همراه با راهنمای هوشمند چندزبانه.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>راهنمای صوتی به ۴ زبان (فارسی، انگلیسی، عربی، اسپانیایی)</li>
                      <li>خرید یادگاری و صنایع دستی دیجیتال NFT</li>
                    </ul>
                    <button className="w-full bg-sky-600 hover:bg-sky-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Landmark className="w-4 h-4" />
                      ورود به تور VR بناهای تاریخی
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================== */}
          {/* TAVANA DEMOCRACY LEAGUES & WEALTH/POWER HUB (activeSection === "democracyLeagues") */}
          {/* ========================================================== */}
          {activeSection === "democracyLeagues" && (
            <motion.div
              key="democracyLeagues"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              {/* Header Banner */}
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border-2 border-amber-500/50 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-900 via-amber-950/30 to-stone-900">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-4 mb-6 border-b border-stone-800 pb-6 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-700 text-stone-950 font-black px-3.5 py-1 rounded-full text-xs shadow-md">
                    <Trophy className="w-4 h-4 text-stone-950" />
                    سامانه حاکمیت دموکراتیک، لیگ ارزش‌آفرینان & لیگ معرفان (دمکراسی ثروت و قدرت)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-amber-100 font-serif leading-snug">
                    دمکراسی ثروت و قدرت شهر توانا: لیگ معرفان، لیگ ارزش‌آفرینان، واگذاری ۴۰٪ XP و اهداء پاداش زمین
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed max-w-4xl">
                    در اکوسیستم دموکراتیک شهر توانا (Tavanacity)، دو لیگ اصلی <strong className="text-cyan-300">«لیگ معرفان»</strong> (برای ثبت‌نام‌کنندگان و معرفین افراد/مدیران) و <strong className="text-amber-300">«لیگ ارزش‌آفرینان»</strong> (برای خریداران و ابتیاع‌کنندگان زمین) فعال هستند. تمامی شهروندان می‌توانند <strong className="text-emerald-300">تا ۴۰٪ از XPهای خود را به دیگران واگذاری کنند</strong> تا افراد شاخص بر صدر لیگ‌ها بنشینند و به مدارج عالی مدیریتی در اپلیکیشن‌های اکوسیستم منصوب شوند.
                  </p>
                </div>

                {/* Direct Philosophy & Ecosystem Incentives Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 text-xs">
                  <div className="bg-stone-950/90 p-4.5 rounded-2xl border border-amber-400/40 space-y-2 shadow-inner">
                    <h3 className="font-bold text-amber-300 text-xs md:text-sm font-serif flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                      میثاق‌نامه ۳۰٪ و ۴۰٪ واگذاری و فروش XP:
                    </h3>
                    <ul className="text-stone-200 leading-relaxed font-serif text-[11px] space-y-1.5 list-disc list-inside">
                      <li>
                        <strong className="text-amber-300">انتقال ۳۰٪ XP به افراد در آستانه:</strong> امکان انتقال ۳۰٪ از کل XP به اشخاصی که در آستانه رسیدن به سطوح بالای مدیریتی و صندلی‌های ارشد هستند.
                      </li>
                      <li>
                        <strong className="text-emerald-300">انتقال یا فروش ۴۰٪ XP به رتبه‌های پایین‌تر:</strong> امکان واگذاری یا فروش مستقیم تا ۴۰٪ از XPهای دریافتی به افراد دارای رتبه پایین‌تر جهت تقویت بدنه اکوسیستم.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-stone-950/90 p-4.5 rounded-2xl border border-emerald-400/40 space-y-2 shadow-inner">
                    <h3 className="font-bold text-emerald-300 text-xs md:text-sm font-serif flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                      مشوق‌های زمینی و پاداش پارسل از دارایی‌های اکوسیستم:
                    </h3>
                    <p className="text-stone-200 leading-relaxed font-serif text-[11px]">
                      «به اعضای برتر لیگ‌های معرفان و ارزش‌آفرینان، علاوه بر انتصاب به پست‌های مدیریتی در برنامه‌های اکوسیستم، زمین‌های مجازی ارزشمند از دارایی‌های شهر توانا (در شهر همراز و شهر آفرینا) به صورت تشویقی و پاداش اهداء خواهد شد.»
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Actions: Land Purchase per Square Meter, Referral Registrations & Chat Rewards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Value Creators League - Sqm Based XP */}
                <div className="bg-stone-900/90 p-5 rounded-2xl border border-amber-500/50 flex flex-col justify-between gap-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-500/20 rounded-xl text-amber-300 border border-amber-500/40">
                      <Building2 className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-100 text-sm font-serif">لیگ ارزش‌آفرینان (ابتیاع متراژ زمین)</h4>
                      <p className="text-[11px] text-stone-400">کسب ۱۰ XP به ازای هر ۱ متر مربع زمین ابتیاع‌شده</p>
                    </div>
                  </div>

                  <div className="space-y-2 bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs font-mono">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-stone-400">کل متراژ مالکیت شما:</span>
                      <strong className="text-amber-300">{acquiredLandSqm} متر مربع</strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-stone-400">تعداد پارسل‌ها:</span>
                      <strong className="text-amber-200">{acquiredLandParcels} قطعه (+{incentiveLandBonus} تشویقی)</strong>
                    </div>

                    <div className="pt-2 border-t border-stone-800">
                      <label className="block text-[10px] text-amber-300 mb-1 font-sans">انتخاب متراژ جدید جهت ابتیاع (m²):</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min={1}
                          max={5000}
                          value={sqmToBuy}
                          onChange={(e) => setSqmToBuy(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-20 bg-stone-900 border border-amber-500/40 text-amber-200 text-xs px-2 py-1 rounded outline-none text-center font-bold"
                        />
                        <span className="text-[10px] text-emerald-400 font-sans">مساوی: +{sqmToBuy * 10} XP</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAcquireLandParcel}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <PlusCircle className="w-4 h-4 text-stone-950" />
                    ابتیاع {sqmToBuy} متر مربع زمین (+{sqmToBuy * 10} XP)
                  </button>
                </div>

                {/* Referrals League - Per Person XP */}
                <div className="bg-stone-900/90 p-5 rounded-2xl border border-cyan-500/50 flex flex-col justify-between gap-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-300 border border-cyan-500/40">
                      <Users className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-cyan-100 text-sm font-serif">لیگ معرفان (دعوت‌کنندگان & سفیران)</h4>
                      <p className="text-[11px] text-stone-400">کسب ۱۵۰ XP به ازای معرفی هر ۱ نفر کاربر/مدیر</p>
                    </div>
                  </div>

                  <div className="space-y-2 bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs font-mono">
                    <div className="flex items-center justify-between text-[11px]">
                      <span>افراد معرفی‌شده:</span>
                      <strong className="text-cyan-300">{referralCount} نفر</strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span>XP دریافتی از معرفی:</span>
                      <strong className="text-cyan-200">{referralCount * 150} XP</strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span>رتبه سفارت:</span>
                      <strong className="text-emerald-400">سفیر فعال شهر توانا</strong>
                    </div>
                  </div>

                  <button
                    onClick={handleRegisterReferral}
                    className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-stone-950 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <UserPlus className="w-4 h-4 text-stone-950" />
                    ثبت معرفی کاربر جدید (+۱۵۰ XP)
                  </button>
                </div>

                {/* Community Forum & Conversation XP */}
                <div className="bg-stone-900/90 p-5 rounded-2xl border border-teal-500/50 flex flex-col justify-between gap-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-teal-500/20 rounded-xl text-teal-300 border border-teal-500/40">
                      <MessageSquare className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-100 text-sm font-serif">کسب XP از طریق گفتگو & پیام</h4>
                      <p className="text-[11px] text-stone-400">کسب ۱۵ XP به ازای ارسال هر پیام در تالارهای گفتگو</p>
                    </div>
                  </div>

                  <div className="space-y-2 bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs font-mono">
                    <div className="flex items-center justify-between text-[11px]">
                      <span>تعداد پیام‌های عمومی شما:</span>
                      <strong className="text-teal-300">{chatMessages.filter(m => m.sender.includes("شما") || m.sender === (userProfile?.name || "استاد سیاوش میری")).length} پیام</strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span>وضعیت فعالیت در تالار:</span>
                      <strong className="text-emerald-400">شهروند هم‌اندیش فعال</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveSection("communityChat")}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-stone-950 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4 text-stone-950" />
                    ورود به تالار گفتگو & ارسال پیام (+۱۵ XP)
                  </button>
                </div>
              </div>

              {/* Citizen XP Dashboard & 40% Donation Control */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Col: Personal XP Stats & Donation Console */}
                <div className="bg-stone-900 rounded-2xl p-6 border-2 border-amber-500/40 space-y-5 shadow-xl bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-100 text-base font-serif">
                        کیف امتیاز و اهداء XP شما
                      </h3>
                      <span className="text-[10px] text-amber-300/80 font-mono">
                        Citizen Democratic XP & Voting Balance
                      </span>
                    </div>
                  </div>

                  {/* XP Metrics Cards */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                      <span className="text-[10px] text-stone-400 block">کل XP کسب‌شده:</span>
                      <strong className="text-amber-200 text-sm">{citizenXP.toLocaleString()} XP</strong>
                    </div>
                    <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                      <span className="text-[10px] text-stone-400 block">سقف اهداء (۴۰٪):</span>
                      <strong className="text-amber-400 text-sm">{maxDonatableXP.toLocaleString()} XP</strong>
                    </div>
                    <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                      <span className="text-[10px] text-stone-400 block">اهداء شده تا کنون:</span>
                      <strong className="text-emerald-400 text-sm">{donatedXP.toLocaleString()} XP</strong>
                    </div>
                    <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                      <span className="text-[10px] text-stone-400 block">باقیمانده مجاز اهداء:</span>
                      <strong className="text-amber-300 text-sm">{(maxDonatableXP - donatedXP).toLocaleString()} XP</strong>
                    </div>
                  </div>

                  {/* XP Donation Interactive Form */}
                  <form onSubmit={handleDonateXP} className="bg-stone-950 p-4.5 rounded-xl border border-amber-500/30 space-y-3.5 text-xs">
                    <label className="block text-amber-200 font-bold font-serif">
                      انتخاب کاندیدا جهت اهداء XP و اعطای رای دموکراتیک:
                    </label>

                    <select
                      value={selectedCandidateId}
                      onChange={e => setSelectedCandidateId(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-amber-200 rounded-xl p-2.5 font-sans focus:outline-none focus:border-amber-500 text-xs"
                    >
                      {candidatesList.map(cand => (
                        <option key={cand.id} value={cand.id}>
                          {cand.name} - ({cand.appRole})
                        </option>
                      ))}
                    </select>

                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[11px] text-stone-300">
                        <span>مقدار XP جهت اهداء:</span>
                        <span className="text-amber-300 font-mono font-bold">{donationInputXP} XP</span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={Math.max(10, maxDonatableXP - donatedXP)}
                        step={10}
                        value={donationInputXP}
                        onChange={e => setDonationInputXP(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                        <span>۱۰ XP</span>
                        <span>{Math.max(10, maxDonatableXP - donatedXP)} XP (حداکثر)</span>
                      </div>
                    </div>

                    {/* Quick Button Selectors */}
                    <div className="flex gap-2">
                      {[20, 50, 100, 200].map(val => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setDonationInputXP(Math.min(val, maxDonatableXP - donatedXP))}
                          className="flex-1 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 rounded-lg py-1 text-[11px] font-mono font-bold"
                        >
                          +{val}
                        </button>
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={maxDonatableXP - donatedXP <= 0}
                      className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Vote className="w-4 h-4 text-stone-950" />
                      اهداء XP و تاثیرگذاری دموکراتیک
                    </button>
                  </form>

                  {/* Notice Alert */}
                  {donationNotice && (
                    <div className="p-3 bg-emerald-950/90 border border-emerald-500 text-emerald-200 rounded-xl text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-amber-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>ثبت موفق اهداء XP</span>
                      </div>
                      <p className="text-[11px] leading-relaxed">{donationNotice}</p>
                    </div>
                  )}
                </div>

                {/* Right Col: Candidates Leaderboard & Management Seats */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="bg-stone-900 rounded-2xl p-6 border border-amber-600/30 space-y-4 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
                      <div>
                        <h3 className="text-lg font-bold text-amber-100 font-serif flex items-center gap-2">
                          <Crown className="w-5 h-5 text-amber-400" />
                          جدول کاندیداها و احراز صندلی‌های مدیریتی اپلیکیشن‌ها
                        </h3>
                        <p className="text-xs text-stone-400">
                          لیست ارزش‌آفرینان و معرفان برتر که با آرای XP شهروندان مدیریت بخش‌ها را بر عهده می‌گیرند.
                        </p>
                      </div>

                      {/* Filter Tabs */}
                      <div className="flex bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs">
                        <button
                          onClick={() => setLeagueFilter("all")}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            leagueFilter === "all" ? "bg-amber-600 text-stone-950" : "text-stone-400 hover:text-white"
                          }`}
                        >
                          همه
                        </button>
                        <button
                          onClick={() => setLeagueFilter("creators")}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            leagueFilter === "creators" ? "bg-amber-600 text-stone-950" : "text-stone-400 hover:text-white"
                          }`}
                        >
                          لیگ ارزش‌آفرینان
                        </button>
                        <button
                          onClick={() => setLeagueFilter("referrals")}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            leagueFilter === "referrals" ? "bg-amber-600 text-stone-950" : "text-stone-400 hover:text-white"
                          }`}
                        >
                          لیگ معرفان & سفیران
                        </button>
                      </div>
                    </div>

                    {/* Candidate List */}
                    <div className="space-y-3.5">
                      {candidatesList
                        .filter(c => leagueFilter === "all" || c.league === leagueFilter)
                        .map((cand, idx) => (
                          <div
                            key={cand.id}
                            className="bg-stone-950 p-4.5 rounded-2xl border border-stone-800 hover:border-amber-500/50 transition-all space-y-3 relative overflow-hidden"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/80 pb-2.5">
                              <div className="flex items-center gap-2.5">
                                <span className="w-7 h-7 rounded-full bg-stone-900 border border-amber-500/40 text-amber-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                                  #{idx + 1}
                                </span>
                                <div>
                                  <h4 className="font-bold text-amber-100 text-sm font-serif">{cand.name}</h4>
                                  <span className="text-[11px] text-amber-300 font-medium block">{cand.appRole}</span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${cand.badgeColor}`}>
                                  {cand.level}
                                </span>
                                <span className="bg-stone-900 text-stone-300 text-[10px] font-mono px-2 py-1 rounded border border-stone-700">
                                  {cand.league === "creators" ? "ارزش‌آفرین" : "معرف / سفیر"}
                                </span>
                              </div>
                            </div>

                            <p className="text-xs text-stone-300 leading-relaxed font-serif">
                              {cand.bio}
                            </p>

                            <div className="flex items-center justify-between text-[11px] text-stone-400 bg-stone-900/80 p-2.5 rounded-xl border border-stone-800">
                              <div>
                                <span>معرف / حامی: </span>
                                <strong className="text-amber-200">{cand.introducedBy}</strong>
                              </div>
                              <div className="flex items-center gap-3 font-mono">
                                <span>حامیان: <strong className="text-emerald-400">{cand.supporters} نفر</strong></span>
                                <span>XP کل: <strong className="text-amber-300 font-bold">{cand.xpReceived.toLocaleString()} XP</strong></span>
                              </div>
                            </div>

                            {/* Quick Donate & Transfer Buttons */}
                            <div className="pt-2 space-y-2 border-t border-stone-800">
                              <div className="flex items-center justify-between gap-3">
                                <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden border border-stone-800">
                                  <div
                                    className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full"
                                    style={{ width: `${Math.min(100, (cand.xpReceived / 15000) * 100)}%` }}
                                  />
                                </div>
                                <button
                                  onClick={() => {
                                    setSelectedCandidateId(cand.id);
                                    setDonationInputXP(50);
                                  }}
                                  className="bg-amber-600/30 hover:bg-amber-600 text-amber-200 hover:text-stone-950 border border-amber-500/50 px-3 py-1 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1"
                                >
                                  <Vote className="w-3.5 h-3.5" />
                                  حمایت (+50 XP)
                                </button>
                              </div>

                              {/* Specialized 30% Transfer (for Threshold candidates) & 40% Transfer/Sale (for Lower Rank) */}
                              <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px]">
                                {idx < 3 && (
                                  <button
                                    onClick={() => handleTransfer30PercentThreshold(cand.id)}
                                    className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow"
                                    title="انتقال ۳۰٪ از کل XP به کاندیدای در آستانه رسیدن به سطوح بالا"
                                  >
                                    <Zap className="w-3 h-3 text-stone-950" />
                                    انتقال ۳۰٪ XP (آستانه ارتقاء: {Math.floor(citizenXP * 0.30)} XP)
                                  </button>
                                )}

                                <button
                                  onClick={() => handleTransferOrSell40PercentLowerRank(cand.id, "transfer")}
                                  className="bg-stone-900 hover:bg-stone-800 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-lg flex items-center gap-1 font-bold"
                                  title="واگذاری ۴۰٪ از کل XP به شخص دارای رتبه پایین‌تر"
                                >
                                  <Share2 className="w-3 h-3 text-emerald-400" />
                                  واگذاری ۴۰٪ XP (رتبه پایین‌تر: {Math.floor(citizenXP * 0.40)} XP)
                                </button>

                                <button
                                  onClick={() => handleTransferOrSell40PercentLowerRank(cand.id, "sell")}
                                  className="bg-stone-900 hover:bg-stone-800 text-cyan-300 border border-cyan-500/40 px-2.5 py-1 rounded-lg flex items-center gap-1 font-bold"
                                  title="فروش ۴۰٪ از کل XP به شخص دارای رتبه پایین‌تر و دریافت اعتبار شهری"
                                >
                                  <Coins className="w-3 h-3 text-cyan-400" />
                                  فروش ۴۰٪ XP (دریافت اعتبار شهری)
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Referral Link & Ambassador Generator */}
                  <div className="bg-stone-900 rounded-2xl p-6 border border-cyan-500/40 space-y-4 bg-gradient-to-br from-stone-900 via-cyan-950/20 to-stone-900 shadow-xl">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                        <Share2 className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          لینک اختصاصی دعوت سفیران (ارسال مدیران سایر اپلیکیشن‌ها)
                        </h3>
                        <span className="text-[10px] text-cyan-300/80 font-mono">
                          Tavana Referral & Management Recruitment Portal
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-300 leading-relaxed">
                      با ارسال لینک اختصاصی خود به مدیران پروژه‌ها، توسعه‌دهندگان و صاحبان کسب‌وکار سایر اپلیکیشن‌ها، آن‌ها را به شهر توانا هدایت کنید. با پیوستن هر مدیر یا تولیدکننده، شما مستقیم به سطح بالاتر در لیگ معرفان صعود می‌کنید و کاندیدای صندلی‌های مدیریتی عالی می‌شوید!
                    </p>

                    <div className="flex items-center gap-2 bg-stone-950 p-2.5 rounded-xl border border-stone-800">
                      <input
                        type="text"
                        readOnly
                        value="https://tavana.city/ref?code=TAVANA-CITIZEN-9821"
                        className="bg-transparent text-cyan-300 font-mono text-xs w-full focus:outline-none"
                      />
                      <button
                        onClick={() => {
                          setReferralCopied(true);
                          setTimeout(() => setReferralCopied(false), 2000);
                        }}
                        className="bg-cyan-700 hover:bg-cyan-600 text-stone-950 font-bold px-4 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all shadow"
                      >
                        {referralCopied ? "کپی شد!" : "کپی لینک"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Tier Incentives & Rewards Matrix */}
              <div className="bg-stone-900 rounded-2xl p-6 md:p-8 border border-amber-600/30 space-y-6 shadow-2xl">
                <div className="border-b border-stone-800 pb-4">
                  <h3 className="text-xl font-bold text-amber-100 font-serif flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-amber-400" />
                    ماتریس سطوح ۵گانه لیگ‌ها و مشوق‌های حاکمیتی شهر توانا
                  </h3>
                  <p className="text-xs text-stone-300">
                    جدول ارتقای سطح شهروندان و اعطای مشوق‌های مالی، صکوک، تخفیف‌ها و صندلی‌های مدیریتی.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-xs">
                  {/* Tier 1: Bronze */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-amber-800 space-y-2">
                    <span className="bg-amber-900/60 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded inline-block font-serif">
                      سطح ۱: برنز
                    </span>
                    <h4 className="font-bold text-amber-100 text-sm font-serif">۵۰۰ تا ۱,۰۰۰ XP</h4>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      تخفیف ۵٪ در خرید فرش و پارسل‌ها، دریافت مدال شهروند فعال.
                    </p>
                  </div>

                  {/* Tier 2: Silver */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-600 space-y-2">
                    <span className="bg-stone-800 text-stone-200 text-[10px] font-bold px-2 py-0.5 rounded inline-block font-serif">
                      سطح ۲: نقره‌ای
                    </span>
                    <h4 className="font-bold text-amber-100 text-sm font-serif">۱,۰۰۰ تا ۵,۰۰۰ XP</h4>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      تسهیلات اعتباری، دریافت وام بدون وثیقه صکوک، تخفیف ۱۰٪.
                    </p>
                  </div>

                  {/* Tier 3: Gold */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-yellow-500 space-y-2">
                    <span className="bg-yellow-950 text-yellow-300 text-[10px] font-bold px-2 py-0.5 rounded inline-block font-serif">
                      سطح ۳: طلایی
                    </span>
                    <h4 className="font-bold text-amber-100 text-sm font-serif">۵,۰۰۰ تا ۱۰,۰۰۰ XP</h4>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      حق معرفی رسمی تجار، ضریب ۱.۵ در اهداء XP، اولویت رزرو پارسل.
                    </p>
                  </div>

                  {/* Tier 4: Diamond */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-cyan-400 space-y-2">
                    <span className="bg-cyan-950 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded inline-block font-serif">
                      سطح ۴: الماس
                    </span>
                    <h4 className="font-bold text-amber-100 text-sm font-serif">۱۰,۰۰۰ تا ۲۰,۰۰۰ XP</h4>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      کاندیداتوری صندلی‌های مدیریتی اپلیکیشن‌ها، سهم درصدی از تراکنش‌ها.
                    </p>
                  </div>

                  {/* Tier 5: Governance */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-amber-300 space-y-2 bg-gradient-to-b from-amber-950/40 to-stone-950">
                    <span className="bg-amber-400 text-stone-950 text-[10px] font-black px-2 py-0.5 rounded inline-block font-serif">
                      سطح ۵: حاکمیتی
                    </span>
                    <h4 className="font-bold text-amber-100 text-sm font-serif">۲۰,۰۰۰+ XP</h4>
                    <p className="text-amber-200 text-[11px] leading-relaxed font-bold">
                      عضویت در شورای عالی حاکمیت دموکراتیک، تصدی صندلی ارشد مدیریتی شهر.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* CINEMA, COMEDY, THEATER & STREAMING HUB   */}
          {/* ========================================== */}
          {activeSection === "cinemaEntertainment" && (
            <motion.div
              key="cinemaEntertainment"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              {/* Header Banner */}
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-10 border-2 border-purple-500/50 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-950 via-purple-950/40 to-stone-900">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 border border-purple-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold">
                    <Clapperboard className="w-4 h-4 text-purple-300 animate-pulse" />
                    پردیس بین‌المللی هنر، سینما، کمدی & استریم شهر توانا
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-purple-100 font-serif leading-tight">
                    خانه سینماگران، استعدادهای خنداندن، تئاتر زنده و صنعت سرگرمی
                  </h2>
                  <p className="text-sm text-stone-300 leading-relaxed max-w-4xl font-serif">
                    «شهر مجازی توانا نباید شهری خشک و بی‌روح باشد؛ بلکه باید شهری لبریز از نشاط، لبخند، آوا، تصویر و هنر باشد. ما با افتخار بستری برای نمایش فیلم‌های کارگردانان، اکران تیزرهای تبلیغاتی، درخشش استعدادهای استندآپ کمدی، تئاتر آنلاین و استریم‌های محبوب گیمینگ ایجاد کرده‌ایم.»
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => setCinemaTab("screening")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                        cinemaTab === "screening"
                          ? "bg-purple-500 text-stone-950 shadow-lg font-black"
                          : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-purple-500/50"
                      }`}
                    >
                      <Film className="w-4 h-4" />
                      سالن اکران فیلم‌ها & تیزرها
                    </button>
                    <button
                      onClick={() => setCinemaTab("comedy")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                        cinemaTab === "comedy"
                          ? "bg-amber-400 text-stone-950 shadow-lg font-black"
                          : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-amber-500/50"
                      }`}
                    >
                      <Smile className="w-4 h-4" />
                      استیج کمدی & مسابقه خنداندن
                    </button>
                    <button
                      onClick={() => setCinemaTab("streaming")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                        cinemaTab === "streaming"
                          ? "bg-cyan-500 text-stone-950 shadow-lg font-black"
                          : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-cyan-500/50"
                      }`}
                    >
                      <Tv className="w-4 h-4" />
                      استریم زنده، گیمینگ & تئاتر
                    </button>
                    <button
                      onClick={() => setCinemaTab("submit")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                        cinemaTab === "submit"
                          ? "bg-emerald-500 text-stone-950 shadow-lg font-black"
                          : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-emerald-500/50"
                      }`}
                    >
                      <Upload className="w-4 h-4" />
                      ثبت اثر فیلمسازان & درخواست اکران
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab 1: Movie Screenings & Ads */}
              {cinemaTab === "screening" && (
                <div className="space-y-6">
                  <div className="bg-stone-900 rounded-2xl p-6 border border-purple-500/30 space-y-4">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Clapperboard className="w-5 h-5 text-purple-400" />
                        <h3 className="text-lg font-bold text-purple-100 font-serif">
                          سالن اصلی اکران فیلم‌های سینمایی، کوتاه و مستند
                        </h3>
                      </div>
                      <span className="text-xs bg-purple-950 text-purple-300 px-3 py-1 rounded-full border border-purple-800 font-mono">
                        ۴ اثر آماده تماشا
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Movie Card 1 */}
                      <div className="bg-stone-950 rounded-2xl p-4 border border-stone-800 hover:border-purple-500/50 transition-all space-y-3">
                        <div className="aspect-video bg-stone-900 rounded-xl overflow-hidden relative border border-stone-800 group cursor-pointer flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                          <Film className="w-12 h-12 text-purple-400/60 group-hover:scale-110 transition-transform" />
                          <span className="absolute bottom-3 right-3 bg-stone-950/90 text-purple-300 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-purple-500/40">
                            مدت زمان: ۴۵ دقیقه | کیفیت 4K
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-amber-100 text-base font-serif">
                              مستند شاهکار فرش تبریز و کهن‌بازار ایران
                            </h4>
                            <span className="bg-amber-950 text-amber-300 text-[10px] px-2 py-0.5 rounded border border-amber-800">
                              مستند فاخر
                            </span>
                          </div>
                          <p className="text-xs text-stone-400 leading-relaxed font-serif">
                            کارگردان: استاد رضایی | روایتی ماندگار از تار و پود هنر فرش‌بافی آذربایجان و تاریخ تجار بازار بزرگ.
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800/80">
                          <span className="text-stone-400 font-mono">👁️ ۱۲,۴۵۰ بازدید</span>
                          <button
                            onClick={() => alert("تماشای فیلم با موفقیت آغاز شد! شما می‌توانید ۵۰ XP به عنوان حمایت به کارگردان اهدا کنید.")}
                            className="bg-purple-600 hover:bg-purple-500 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all"
                          >
                            <Ticket className="w-3.5 h-3.5" />
                            تماشا & حمایت
                          </button>
                        </div>
                      </div>

                      {/* Movie Card 2 */}
                      <div className="bg-stone-950 rounded-2xl p-4 border border-stone-800 hover:border-purple-500/50 transition-all space-y-3">
                        <div className="aspect-video bg-stone-900 rounded-xl overflow-hidden relative border border-stone-800 group cursor-pointer flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                          <Smile className="w-12 h-12 text-amber-400/60 group-hover:scale-110 transition-transform" />
                          <span className="absolute bottom-3 right-3 bg-stone-950/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-amber-500/40">
                            مدت زمان: ۸۵ دقیقه | کمدی
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-amber-100 text-base font-serif">
                              فیلم سینمایی کمدی «لبخند در متاورس»
                            </h4>
                            <span className="bg-purple-950 text-purple-300 text-[10px] px-2 py-0.5 rounded border border-purple-800">
                              کمدی خانوادگی
                            </span>
                          </div>
                          <p className="text-xs text-stone-400 leading-relaxed font-serif">
                            کارگردان: سارا احمدی | طنزی شیرین درباره ماجراهای یک شهروند تازه وارد به شهر توانا و مواجهه با هوش مصنوعی.
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800/80">
                          <span className="text-stone-400 font-mono">👁️ ۲۸,۹۰۰ بازدید</span>
                          <button
                            onClick={() => alert("تماشای فیلم کمدی آغاز شد! خنده‌های شما انرژی‌بخش این متاورس است.")}
                            className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all"
                          >
                            <Ticket className="w-3.5 h-3.5" />
                            تماشا & حمایت
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cinema Advertising Board */}
                  <div className="bg-gradient-to-r from-purple-950 via-stone-900 to-purple-950 border border-purple-500/40 rounded-2xl p-6 text-center space-y-3 shadow-xl">
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-3 py-1 rounded-full border border-purple-500/40">
                      بستره ویژه تبلیغات فیلمسازان و تهیه‌کنندگان
                    </span>
                    <h3 className="text-lg font-bold text-amber-100 font-serif">
                      نمایش رزرو تیزر، اسپانسری و تبلیغات آثار سینمایی در سراسر پارسل‌های شهر توانا
                    </h3>
                    <p className="text-xs text-stone-300 max-w-2xl mx-auto leading-relaxed">
                      کارگردانان و تهیه‌کنندگان محترم می‌توانند تیزرهای تبلیغاتی، پوسترها و برنامه‌های اکران آثار خود را در مانیتورهای مجازی و بیلبوردهای خیابان‌های اصلی دو شهر آفرینا و همراز به نمایش بگذارند.
                    </p>
                    <button
                      onClick={() => setCinemaTab("submit")}
                      className="bg-purple-600 hover:bg-purple-500 text-stone-950 font-bold px-5 py-2 rounded-xl text-xs inline-flex items-center gap-2 shadow"
                    >
                      <Upload className="w-4 h-4" />
                      رزرو بنر و تبلیغات اثر سینمایی
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Comedy Stage & Laugh Talents */}
              {cinemaTab === "comedy" && (
                <div className="space-y-6">
                  <div className="bg-stone-900 rounded-2xl p-6 border border-amber-500/30 space-y-4">
                    <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smile className="w-5 h-5 text-amber-400" />
                        <h3 className="text-lg font-bold text-amber-100 font-serif">
                          استیج درخشش استعدادهای کمدی و استندآپ خنداندن
                        </h3>
                      </div>
                      <span className="text-xs text-amber-300 font-mono">
                        رأی کل خنده‌ها: {comedyVotes.toLocaleString()} امتیاز
                      </span>
                    </div>

                    <p className="text-xs text-stone-300 leading-relaxed font-serif">
                      در شهر توانا، افرادی که استعداد خنداندن دیگران و ایجاد نشاط را دارند، از ارزشمندترین شهروندان محسوب می‌شوند. با رأی دادن به اجرای کمدین‌ها، آن‌ها را حمایت کنید تا به لیگ‌های بالاتر مدیریتی و هنری صعود کنند!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Talent 1 */}
                      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3 hover:border-amber-500/50 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-lg border border-amber-500/40 shrink-0">
                            😃
                          </div>
                          <div>
                            <h4 className="font-bold text-amber-100 text-sm font-serif">علیرضا کریمی</h4>
                            <span className="text-[10px] text-amber-300 block">استندآپ کمدین / طنز تجارب روزمره</span>
                          </div>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          اجرای ۵ دقیقه‌ای: «وقتی برای اولین بار خریدمون رو تو متاورس انجام دادیم!»
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                          <span className="text-[11px] text-stone-400">امتیاز: ۱,۴۵۰ خنده</span>
                          <button
                            onClick={() => {
                              setComedyVotes(prev => ({ ...prev, "comedy-1": (prev["comedy-1"] || 0) + 1 }));
                              setDonationNotice("رأی خنده شما (+۱۰ XP) با موفقیت ثبت شد!");
                            }}
                            className="bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/40 px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                          >
                            <Smile className="w-3.5 h-3.5" />
                            رأی خنده (+۱۰ XP)
                          </button>
                        </div>
                      </div>

                      {/* Talent 2 */}
                      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3 hover:border-amber-500/50 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-lg border border-amber-500/40 shrink-0">
                            🎭
                          </div>
                          <div>
                            <h4 className="font-bold text-amber-100 text-sm font-serif">مریم حسینی</h4>
                            <span className="text-[10px] text-amber-300 block">بازیگر تئاتر کمدی و دوبله طنز</span>
                          </div>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          نمایش کوتاه‌: «ملاقات با شهردار هوش مصنوعی در سال ۱۴۰۵»
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                          <span className="text-[11px] text-stone-400">امتیاز: ۲,۱۰۰ خنده</span>
                          <button
                            onClick={() => {
                              setComedyVotes(prev => ({ ...prev, "comedy-2": (prev["comedy-2"] || 0) + 1 }));
                              setDonationNotice("رأی خنده شما (+۱۰ XP) با موفقیت ثبت شد!");
                            }}
                            className="bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/40 px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                          >
                            <Smile className="w-3.5 h-3.5" />
                            رأی خنده (+۱۰ XP)
                          </button>
                        </div>
                      </div>

                      {/* Talent 3 */}
                      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3 hover:border-amber-500/50 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-lg border border-amber-500/40 shrink-0">
                            🤡
                          </div>
                          <div>
                            <h4 className="font-bold text-amber-100 text-sm font-serif">گروه طنز بال‌های خنده</h4>
                            <span className="text-[10px] text-amber-300 block">نمایش کمدی موزیکال</span>
                          </div>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          اجرای زنده زنگ خنده: «سرود شوخ‌طبعانه ارزش‌آفرینان شهر توانا»
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-800">
                          <span className="text-[11px] text-stone-400">امتیاز: ۳,۸۹۰ خنده</span>
                          <button
                            onClick={() => {
                              setComedyVotes(prev => ({ ...prev, "comedy-3": (prev["comedy-3"] || 0) + 1 }));
                              setDonationNotice("رأی خنده شما (+۱۰ XP) با موفقیت ثبت شد!");
                            }}
                            className="bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/40 px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                          >
                            <Smile className="w-3.5 h-3.5" />
                            رأی خنده (+۱۰ XP)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Streaming, Gaming & Virtual Theater */}
              {cinemaTab === "streaming" && (
                <div className="space-y-6">
                  <div className="bg-stone-900 rounded-2xl p-6 border border-cyan-500/30 space-y-4">
                    <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tv className="w-5 h-5 text-cyan-400" />
                        <h3 className="text-lg font-bold text-amber-100 font-serif">
                          کانال‌های استریم زنده، گیمینگ و اجراهای تئاتر آنلاین
                        </h3>
                      </div>
                      <span className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        پخش زنده هم‌اکنون فعال است
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Stream 1 */}
                      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
                        <div className="aspect-video bg-cyan-950/40 rounded-xl relative overflow-hidden border border-cyan-500/30 flex items-center justify-center">
                          <Gamepad2 className="w-12 h-12 text-cyan-400 animate-pulse" />
                          <span className="absolute top-3 right-3 bg-red-600 text-stone-100 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                            LIVE STREAM
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-amber-100 text-sm font-serif">
                            مسابقات زنده لیگ گیمینگ و بازی‌های متاورسی توانا
                          </h4>
                          <p className="text-xs text-stone-400 mt-1">
                            استریمر: آرش گیمر | مسابقه نهایی کسب صکوک و امتیاز XP با گزارش فارسی زنده.
                          </p>
                        </div>
                        <button
                          onClick={() => alert("به پخش زنده گیمینگ پیوستید!")}
                          className="w-full bg-cyan-600 hover:bg-cyan-500 text-stone-950 font-bold py-2 rounded-xl text-xs transition-all"
                        >
                          ورود به تماشای استریم زنده
                        </button>
                      </div>

                      {/* Stream 2 */}
                      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
                        <div className="aspect-video bg-purple-950/40 rounded-xl relative overflow-hidden border border-purple-500/30 flex items-center justify-center">
                          <Clapperboard className="w-12 h-12 text-purple-400 animate-pulse" />
                          <span className="absolute top-3 right-3 bg-red-600 text-stone-100 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                            LIVE THEATER
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-amber-100 text-sm font-serif">
                            اجرای زنده تئاتر «سفر به کهکشان با بال‌های توانا»
                          </h4>
                          <p className="text-xs text-stone-400 mt-1">
                            کارگردان: استاد کیانی | صحنه‌پردازی تمام سه‌بعدی تعاملی.
                          </p>
                        </div>
                        <button
                          onClick={() => alert("صندلی مجازی شما در تالار تئاتر زنده رزرو گردید!")}
                          className="w-full bg-purple-600 hover:bg-purple-500 text-stone-950 font-bold py-2 rounded-xl text-xs transition-all"
                        >
                          رزرو صندلی و تماشای تئاتر زنده
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Filmmaker Submission Form */}
              {cinemaTab === "submit" && (
                <div className="bg-stone-900 rounded-2xl p-6 border border-emerald-500/30 space-y-4">
                  <div className="border-b border-stone-800 pb-3">
                    <h3 className="text-lg font-bold text-amber-100 font-serif flex items-center gap-2">
                      <Upload className="w-5 h-5 text-emerald-400" />
                      فرم درخواست اکران فیلم، تیزر تبلیغاتی و ثبت اثر سینمایی
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      از تمام فیلمسازان، کارگردانان، تهیه‌کنندگان و طنزپردازان دعوت می‌شود آثار خود را برای اکران در پردیس توانا ارسال نمایند.
                    </p>
                  </div>

                  {filmSubmissionSuccess && (
                    <div className="bg-emerald-950/80 border border-emerald-500 p-4 rounded-xl text-emerald-200 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      اثر سینمایی شما با موفقیت ثبت گردید! تیم بررسی پردیس سینمایی توانا به‌زودی با شما جهت اکران هماهنگ خواهند شد.
                    </div>
                  )}

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFilmSubmissionSuccess(true);
                      setSubmittedFilmTitle("");
                      setSubmittedDirector("");
                      setSubmittedSynopsis("");
                      setTimeout(() => setFilmSubmissionSuccess(false), 5000);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-300 font-bold mb-1">نام فیلم / اثر سینمایی یا تیزر:</label>
                        <input
                          required
                          type="text"
                          value={submittedFilmTitle}
                          onChange={(e) => setSubmittedFilmTitle(e.target.value)}
                          placeholder="مثلاً: مستند رازهای خلیج فارس"
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-purple-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-stone-300 font-bold mb-1">نام کارگردان / تهیه کننده / سازنده:</label>
                        <input
                          required
                          type="text"
                          value={submittedDirector}
                          onChange={(e) => setSubmittedDirector(e.target.value)}
                          placeholder="نام و نام خانوادگی"
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-purple-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-300 font-bold mb-1">ژانر / قالب اثر:</label>
                        <select
                          value={submittedGenre}
                          onChange={(e) => setSubmittedGenre(e.target.value)}
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-purple-500 outline-none"
                        >
                          <option value="cinema">فیلم سینمایی بلند</option>
                          <option value="short">فیلم کوتاه / مستند</option>
                          <option value="comedy">کمدی / استندآپ / طنز</option>
                          <option value="teaser">تیزر تبلیغاتی سینمایی</option>
                          <option value="theater">تئاتر آنلاین / استریم</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-stone-300 font-bold mb-1">لینک نمونه ویدیو / تیزر (آپارات/یوتیوب/گوگل درایو):</label>
                        <input
                          type="text"
                          placeholder="https://..."
                          className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-purple-500 outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-stone-300 font-bold mb-1">خلاصه داستان / توضیحات و پیام فیلمساز:</label>
                      <textarea
                        rows={3}
                        value={submittedSynopsis}
                        onChange={(e) => setSubmittedSynopsis(e.target.value)}
                        placeholder="توضیح مختصر در مورد محتوا، جوایز احتمالی یا پیام فیلم..."
                        className="w-full bg-stone-950 text-stone-200 border border-stone-800 rounded-xl p-2.5 focus:border-purple-500 outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-stone-950 font-black py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      ارسال رسمی درخواست اکران و نمایش در پردیس توانا
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          )}
          {activeSection === "communityChat" && (
            <motion.div
              key="communityChat"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-teal-500/40 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-900 via-teal-950/20 to-stone-900">
                <div className="space-y-4 mb-8 border-b border-stone-800 pb-6 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-teal-950 text-teal-300 border border-teal-600/60 px-3.5 py-1 rounded-full text-xs font-bold shadow-md">
                    <MessageSquare className="w-4 h-4 text-teal-400 animate-bounce" />
                    تالارهای گفتگو & چت‌روم‌های زنده هم‌اندیشی شهر توانا (Tavanacity Forums)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-amber-100 font-serif leading-snug">
                    تالار هم‌اندیشی، گپ و گفت، و شبکه ارتباطی علاقه‌مندان پلتفرم توانا
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed max-w-4xl">
                    فضایی گرم و صمیمی جهت گفتگو، پرسش و پاسخ، شبکه روابط بین معرفان و ارزش‌آفرینان، و تبادل تجربه میان تمامی شهروندان. <strong className="text-teal-300">هر ارسال پیام جدید در تالارها، ۱۵ XP به عنوان پاداش مشارکت در جامعه به حساب شما می‌افزاید!</strong>
                  </p>
                </div>

                {/* Filter Room Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 border-b border-stone-800 pb-4">
                  <button
                    onClick={() => setChatRoomTab("all")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      chatRoomTab === "all"
                        ? "bg-teal-500 text-stone-950 font-black shadow-md"
                        : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-teal-500/50"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    همه گفتگوها ({chatMessages.length})
                  </button>

                  <button
                    onClick={() => setChatRoomTab("suggestions")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      chatRoomTab === "suggestions"
                        ? "bg-amber-500 text-stone-950 font-black shadow-md"
                        : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-amber-500/50"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    پیشنهادات & ایده‌های توسعه
                  </button>

                  <button
                    onClick={() => setChatRoomTab("referrals")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      chatRoomTab === "referrals"
                        ? "bg-cyan-500 text-stone-950 font-black shadow-md"
                        : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-cyan-500/50"
                    }`}
                  >
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    شبکه لیگ معرفان & ارزش‌آفرینان
                  </button>

                  <button
                    onClick={() => setChatRoomTab("cinema")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      chatRoomTab === "cinema"
                        ? "bg-purple-500 text-stone-950 font-black shadow-md"
                        : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-purple-500/50"
                    }`}
                  >
                    <Clapperboard className="w-3.5 h-3.5 text-purple-400" />
                    پردیس سینمایی & هنر
                  </button>

                  <button
                    onClick={() => setChatRoomTab("marketplaces")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      chatRoomTab === "marketplaces"
                        ? "bg-emerald-500 text-stone-950 font-black shadow-md"
                        : "bg-stone-950 text-stone-300 border border-stone-800 hover:border-emerald-500/50"
                    }`}
                  >
                    <Car className="w-3.5 h-3.5 text-emerald-400" />
                    بورس‌ها، املاک & خودرو
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column: Live Message Composer Form */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="bg-stone-950 p-5 rounded-2xl border border-teal-500/30 space-y-4 shadow-xl">
                      <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                        <h3 className="font-bold text-amber-100 text-sm font-serif flex items-center gap-2">
                          <Send className="w-4 h-4 text-teal-400" />
                          ارسال پیام جدید در تالار
                        </h3>
                        <span className="bg-teal-950 border border-teal-600/50 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">
                          +15 XP Bonus
                        </span>
                      </div>

                      <form onSubmit={handleSendChatMessage} className="space-y-3 text-xs">
                        {!userProfile && (
                          <div>
                            <label className="block text-stone-300 font-bold mb-1">نام یا شناسه شما:</label>
                            <input
                              type="text"
                              value={chatAuthorName}
                              onChange={(e) => setChatAuthorName(e.target.value)}
                              placeholder="مثلاً: مهران کریمی (علاقه‌مند فرش)"
                              className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded-xl p-2.5 focus:border-teal-500 outline-none"
                            />
                          </div>
                        )}

                        <div>
                          <label className="block text-stone-300 font-bold mb-1">متن پیام یا پرسش شما:</label>
                          <textarea
                            required
                            rows={4}
                            value={newChatInput}
                            onChange={(e) => setNewChatInput(e.target.value)}
                            placeholder="دیدگاه، پیشنهاد، سوال یا پیام خود را برای سایر علاقه‌مندان بنویسید..."
                            className="w-full bg-stone-900 border border-stone-700 text-stone-100 rounded-xl p-2.5 focus:border-teal-500 outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-400 hover:to-teal-600 text-stone-950 font-black py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-xs"
                        >
                          <Send className="w-4 h-4 text-stone-950" />
                          انتشار عمومی پیام در تالار (+۱۵ XP)
                        </button>
                      </form>
                    </div>

                    {/* Community Guidelines Box */}
                    <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 text-xs space-y-2">
                      <h4 className="font-bold text-amber-300 font-serif flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        دستورالعمل صمیمیت و احترام در تالارها:
                      </h4>
                      <p className="text-stone-400 text-[11px] leading-relaxed">
                        این تالارها متعلق به همه‌ی علاقه‌مندان اکوسیستم آفرینش و شهر توانا است. رعایت موازین اخلاقی، لحن محترمانه و به اشتراک‌گذاری ایده‌های سازنده موجب رشد جامعه و کسب رتبه در لیگ‌ها می‌گردد.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Messages Feed */}
                  <div className="lg:col-span-2 space-y-3">
                    <h3 className="font-bold text-amber-200 text-sm font-serif flex items-center gap-2 border-b border-stone-800 pb-2">
                      <MessageSquare className="w-4 h-4 text-teal-400" />
                      گفتگوهای زنده منتشرشده ({chatMessages.filter(m => chatRoomTab === "all" || (m.room as string) === chatRoomTab).length} پیام)
                    </h3>

                    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                      {chatMessages
                        .filter(m => chatRoomTab === "all" || (m.room as string) === chatRoomTab)
                        .map((msg) => (
                          <div
                            key={msg.id}
                            className="bg-stone-950 p-4 rounded-2xl border border-stone-800 hover:border-teal-500/40 transition-all space-y-2 text-xs shadow-md"
                          >
                            <div className="flex items-center justify-between border-b border-stone-900 pb-2">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-amber-600 flex items-center justify-center font-black text-stone-950 text-xs border border-amber-300">
                                  {msg.sender.charAt(0)}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-amber-100 font-serif">{msg.sender}</span>
                                    <span className="bg-stone-900 text-amber-300/80 text-[10px] px-2 py-0.5 rounded-full border border-stone-800">
                                      {msg.role}
                                    </span>
                                  </div>
                                  <span className="text-[10px] text-stone-500 font-mono">{msg.time}</span>
                                </div>
                              </div>

                              <span className="text-[10px] bg-stone-900 text-teal-300 px-2 py-0.5 rounded font-mono border border-stone-800">
                                {msg.room === "general" && "عمومی"}
                                {msg.room === "suggestions" && "پیشنهادات"}
                                {msg.room === "referrals" && "لیگ معرفان"}
                                {msg.room === "cinema" && "پردیس سینمایی"}
                                {msg.room === "marketplaces" && "بورس‌ها"}
                              </span>
                            </div>

                            <p className="text-stone-200 leading-relaxed font-serif text-[12px] pt-1">
                              {msg.text}
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-stone-900 text-[11px]">
                              <button
                                onClick={() => handleLikeChatMessage(msg.id)}
                                className="flex items-center gap-1.5 text-stone-400 hover:text-rose-400 bg-stone-900 px-2.5 py-1 rounded-lg border border-stone-800 transition-all"
                              >
                                <Heart className="w-3.5 h-3.5 text-rose-500" />
                                <span>موافق ({msg.likes})</span>
                              </button>

                              <button
                                onClick={() => {
                                  setNewChatInput(`@${msg.sender} `);
                                }}
                                className="text-stone-400 hover:text-teal-300 flex items-center gap-1 font-mono text-[10px]"
                              >
                                💬 پاسخ به این نظر
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {activeSection === "childrenAndParents" && (
            <motion.div
              key="childrenAndParents"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-rose-500/40 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-900 via-rose-950/20 to-stone-900">
                <div className="space-y-4 mb-8 border-b border-stone-800 pb-6">
                  <div className="inline-flex items-center gap-2 bg-rose-950 text-rose-300 border border-rose-700/60 px-3 py-1 rounded-full text-xs font-bold">
                    <Baby className="w-4 h-4 text-rose-400" />
                    پلتفرم اختصاصی آفرینندگان فردا (کودکان، والدین & قصه‌گوی AI)
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-amber-100 font-serif">
                    شبکه تعاملی والدین، خاطرات صوتی و تصویری کودکان، و تولید قصه‌های هوشمند AI
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed max-w-3xl">
                    کودکان آفرینندگان جهان فردا هستند. این بخش بستر امن و شیرینی برای گفتگو و تعامل والدین، ثبت خاطرات، و قصه‌گویی اختصاصی هوش مصنوعی فراهم می‌سازد.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* AI Storyteller for Kids */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-rose-500/30 space-y-4">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-300">
                        <Sparkles className="w-6 h-6 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۱. قصه‌گوی هوشمند سفارشی AI
                        </h3>
                        <span className="text-[10px] text-rose-400 font-mono">Personalized AI Storyteller</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      تولید قصه‌های آموزنده و اخلاقی متناسب با نام کودک، سن، علایق و آموزه‌های دینی و ملی به همراه گویندگی صوتی ملایم برای خواب و آرامش کودک.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>تنظیم قهرمان قصه بر اساس اسم و ویژگی‌های کودک شما</li>
                      <li>تولید صدای گوینده مهربان با هوش صوتی نکسوز</li>
                    </ul>
                    <button className="w-full bg-rose-600 hover:bg-rose-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      تولید قصه اختصاصی برای فرزندم
                    </button>
                  </div>

                  {/* Parents Interactive Chat & Rooms */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-rose-500/30 space-y-4">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-300">
                        <MessageSquare className="w-6 h-6 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۲. اتاق گفتگو & چت‌روم والدین
                        </h3>
                        <span className="text-[10px] text-rose-400 font-mono">Parents Circle & Advice Hub</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      محیطی امن و صمیمی برای والدین جهت تبادل نظر درباره تعلیم و تربیت فرزندان، مشاوره‌های تربیتی و سرگرمی‌های آموزنده.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>گفتگوی گروهی و خصوصی والدین با نظارت اخلاقی</li>
                      <li>پاسخ به سوالات تربیتی توسط مشاورین روانشناسی</li>
                    </ul>
                    <button className="w-full bg-rose-600 hover:bg-rose-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      ورود به اتاق گفتگوی والدین
                    </button>
                  </div>

                  {/* Kids Memories, Drawings & Birthday Vault */}
                  <div className="bg-stone-950 p-6 rounded-xl border border-rose-500/30 space-y-4">
                    <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                      <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-300">
                        <Video className="w-6 h-6 text-rose-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-100 text-base font-serif">
                          ۳. آلبوم خاطرات & شیرین‌کاری‌ها
                        </h3>
                        <span className="text-[10px] text-rose-400 font-mono">Kids Memories & Moments</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      ثبت ویدیوها، نقاشی‌ها، صداها، شیرین‌کاری‌ها، جشن‌های تولد و اولین گام‌های کودک در صندوقچه امن بلاک‌چین شهر توانا.
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                      <li>آرشیو ماندگار عکس‌ها و فیلم‌ها با کیفیت اصلی</li>
                      <li>امکان اشتراک‌گذاری با پدربزرگ‌ها و مادربزرگ‌ها</li>
                    </ul>
                    <button className="w-full bg-rose-600 hover:bg-rose-500 text-stone-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                      <Video className="w-4 h-4" />
                      ثبت خاطره جدید
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 3. SIAVASH STUDIO ECOSYSTEM REPOSITORIES   */}
          {/* ========================================== */}
          {activeSection === "siavashSuite" && (
            <motion.div
              key="siavashSuite"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl relative overflow-hidden">
                <div className="space-y-4 mb-8 border-b border-stone-800 pb-6">
                  <div className="inline-flex items-center gap-2 bg-red-900/40 text-amber-300 border border-red-700/50 px-3 py-1 rounded-full text-xs font-bold">
                    <Layers className="w-4 h-4 text-amber-400" />
                    اکوسیستم نرم‌افزارها و پروژه‌های توسعه یافته - استودیو سیاوش
                  </div>
                  <h2 className="text-2xl font-extrabold text-amber-100 font-serif">
                    معرفی کامل ریپازیتوری‌ها و نرم‌افزارهای یکپارچه در ابرشهر توانا
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed max-w-3xl">
                    پروژه‌های قدرتمند و ایده‌های نوآورانه‌ای که توسط شما خلق شده‌اند، همگی به عنوان زیرساخت‌های اصلی ارتباطی، صوتی، چندزبانه و هوش مصنوعی در دو شهر همراز و آفرینا عمل می‌کنند:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* LinguaVive / LingoPlay, LingoWave & LingoView */}
                  <div className="bg-stone-950 p-6 rounded-xl border-2 border-emerald-500/50 space-y-4 bg-gradient-to-br from-stone-950 via-emerald-950/30 to-stone-950 col-span-1 md:col-span-2 lg:col-span-1 shadow-[0_0_25px_rgba(16,185,129,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3 relative z-10">
                      <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm font-serif">
                        <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span>LinguaVive / LingoPlay & LingoWave</span>
                      </div>
                      <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-stone-950 font-black text-[11px] px-2.5 py-1 rounded-lg font-mono shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        ارزش $1M – $10M USD
                      </span>
                    </div>

                    <p className="text-xs text-stone-200 leading-relaxed relative z-10 font-serif">
                      امپراتوری آموزشی و سیستم اختراعی یادگیری زبان <strong className="text-emerald-300">LinguaVive</strong> با متدولوژی انحصاری، تحلیل امواج صوتی (LingoWave)، بازی‌سازی گیمیفاید (LingoPlay) و ترجمه هوشمند (LingoView).
                    </p>

                    <div className="bg-stone-900/90 p-3.5 rounded-lg border border-emerald-500/30 text-xs space-y-2 relative z-10">
                      <div className="font-bold text-emerald-300 text-[11px] flex items-center justify-between">
                        <span>مراحل ثبت اختراع بین‌المللی (WIPO/PCT):</span>
                        <span className="text-emerald-400 font-mono text-[10px]">~50K - 100K CHF</span>
                      </div>
                      <ul className="text-[11px] text-stone-300 space-y-1 list-disc list-inside">
                        <li><strong className="text-amber-200">تدوین مستندات اختراع:</strong> تحقیق جامع، ثبت ملی و بین‌المللی PCT.</li>
                        <li><strong className="text-amber-200">برنامه درسی منسجم:</strong> متد اختراعی آموزش با مراحل تدریس و سنجش هوشمند.</li>
                        <li><strong className="text-amber-200">ارزش‌گذاری جمیینای:</strong> پتانسیل تجاری ۱ تا ۱۰ میلیون دلار جهت ارائه به سرمایه‌گذاران.</li>
                        <li><strong className="text-amber-200">سهام اختیاری (Stock Options):</strong> تخصیص سهام به ارکان و توسعه‌دهندگان ارشد.</li>
                      </ul>
                    </div>

                    <span className="inline-block bg-emerald-950/90 text-emerald-300 text-[10px] px-3 py-1 rounded-lg font-mono border border-emerald-700/60 shadow-inner">
                      Patented Educational Curriculum & Global Valuation
                    </span>
                  </div>

                  {/* Studio Siavash */}
                  <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/20 space-y-3">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                      <Radio className="w-5 h-5 text-amber-400" />
                      Studio Siavash (استودیو سیاوش)
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      مرکز تولید محتوای دیجیتال، ضبط و پخش سه‌بعدی و استودیوی رسانه‌ای اصیل ایرانی که مسئولیت مستندسازی شهر همراز و آفرینا را بر عهده دارد.
                    </p>
                    <span className="inline-block bg-amber-950 text-amber-200 text-[10px] px-2 py-0.5 rounded font-mono">
                      Media Production Core
                    </span>
                  </div>

                  {/* Genesis Press */}
                  <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/20 space-y-3">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                      <BookOpen className="w-5 h-5 text-amber-400" />
                      Genesis (جنسیس پرس)
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      انتشارات دیجیتال، ثبت مقالات علمی، آرشیو کتب خطی هنر فرش دستباف و ثبت تاریخچه میراث مرحوم حاج حسین علی میری.
                    </p>
                    <span className="inline-block bg-amber-950 text-amber-200 text-[10px] px-2 py-0.5 rounded font-mono">
                      Digital Publishing & Archives
                    </span>
                  </div>

                  {/* KaraokeHub - Music, Composition, Lyrics & Songs */}
                  <div className="bg-stone-950 p-5 rounded-xl border border-amber-500/40 space-y-3 bg-gradient-to-br from-stone-950 via-amber-950/20 to-stone-950">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                      <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                        <Music className="w-5 h-5 text-amber-400" />
                        KaraokeHub (کارایوکه هاب)
                      </div>
                      <span className="bg-amber-500/20 text-amber-300 font-mono text-[10px] px-2 py-0.5 rounded border border-amber-500/40">
                        موسیقی & ترانه‌سرایی
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      هاب تخصصی خلق اثر صوتی، ساخت آهنگ، ترانه‌سرایی، تنظیم هوشمند ملودی، ساخت بیت‌های اصیل ایرانی و بین‌المللی و تمرین همخوانی آنلاین با هوش مصنوعی.
                    </p>
                    <span className="inline-block bg-amber-950 text-amber-200 text-[10px] px-2 py-0.5 rounded font-mono border border-amber-800">
                      Music Production & AI Lyrics Studio
                    </span>
                  </div>

                  {/* Badfak */}
                  <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/20 space-y-3">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                      <Code className="w-5 h-5 text-amber-400" />
                      Badfak (بادفک)
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      پروتکل ارتباطی پرسرعت و بهینه‌سازی شده برای انتقال داده‌های حجیم سه‌بعدی و استریم زنده در شبکه شهری توانا سیتی.
                    </p>
                    <span className="inline-block bg-amber-950 text-amber-200 text-[10px] px-2 py-0.5 rounded font-mono">
                      High-Speed Network Protocol
                    </span>
                  </div>

                  {/* Studio Afarinish & Gemz */}
                  <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/20 space-y-3">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                      <Gem className="w-5 h-5 text-amber-400" />
                      Studio Afarinish & Gems (آفرینش)
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      ازدواج هنر تجسمی و گوهرشناسی دیجیتال. طراحی توکن‌های نفیس، جواهرات و فرش‌های شاهکار با امضای اختصاصی آفرینش.
                    </p>
                    <span className="inline-block bg-amber-950 text-amber-200 text-[10px] px-2 py-0.5 rounded font-mono">
                      Digital Art & Gems NFT
                    </span>
                  </div>
                </div>

                {/* FB NEW META TRIBUTE & 80+ JOB CREATION SUPER APPS ENGINE */}
                <div className="bg-gradient-to-r from-stone-950 via-amber-950/80 to-stone-950 border-2 border-amber-500/60 rounded-2xl p-6 md:p-8 space-y-5 shadow-2xl relative overflow-hidden mt-6">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-amber-500/30 pb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 rounded-2xl border border-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                        <Crown className="w-7 h-7 text-stone-950" />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 text-amber-300 font-bold text-[11px] font-mono bg-stone-950/90 px-3 py-1 rounded-full border border-amber-500/50 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                          FB New Meta (اف بی نیو متا) - نام افتخاری بین‌المللی
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-amber-100 font-serif">
                          تجلیل از نخستین همکاران بال فرشتگان: گوگل، فایربیس و اکوسیستم هوش مصنوعی
                        </h3>
                      </div>
                    </div>
                    <span className="bg-amber-400 text-stone-950 font-black text-xs px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] font-serif border border-amber-200">
                      FB New Meta - Global Tribute
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-amber-100/95 leading-relaxed font-serif bg-stone-950/80 p-4 rounded-xl border border-amber-500/30 relative z-10">
                    به پاس قدردانی و سپاس از همگامی و همراهی خدمات تکنولوژی <strong className="text-amber-300">گوگل (Google)</strong>، <strong className="text-amber-300">فایربیس (Firebase)</strong> و هوش مصنوعی به عنوان بال‌های فرشتگانی که نخستین کدهای هم‌نوا و هم‌آغاز این شهر را شکل دادند، نام بین‌المللی این شهر به <strong className="text-amber-200 underline decoration-amber-400 underline-offset-4 font-bold">FB New Meta (اف بی نیو متا)</strong> مزین گردید.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs relative z-10">
                    <div className="bg-stone-950/90 p-4 rounded-xl border border-emerald-500/40 space-y-2">
                      <strong className="text-emerald-300 font-serif text-sm block border-b border-stone-800 pb-1">
                        ۱. بازوی آموزش دیجیتال & اشتغال مستقیم
                      </strong>
                      <p className="text-stone-300 text-[11px] leading-relaxed">
                        آکادمی اختصاصی برای آموزش مهارت‌های دیجیتال، سه‌بعدی‌سازی، برنامه‌نویسی و تولید محتوا، همراه با به‌کارگیری و استخدام مستقیم فارغ‌التحصیلان در پروژه‌های شهر توانا.
                      </p>
                    </div>

                    <div className="bg-stone-950/90 p-4 rounded-xl border border-amber-500/40 space-y-2">
                      <strong className="text-amber-300 font-serif text-sm block border-b border-stone-800 pb-1">
                        ۲. هاب یوتیوبرها، استریمرها & تبلیغات
                      </strong>
                      <p className="text-stone-300 text-[11px] leading-relaxed">
                        شبکه همکاری و تعامل با تولیدکنندگان محتوا، گیمرها، استریمرها و اینفلوئنسرها، به همراه شبکه صنعت تبلیغات آنلاین و خلق جریان ثروت متقابل.
                      </p>
                    </div>

                    <div className="bg-stone-950/90 p-4 rounded-xl border border-amber-500/40 space-y-2">
                      <strong className="text-amber-300 font-serif text-sm block border-b border-stone-800 pb-1">
                        ۳. سوپر اپلیکیشن‌های ۸۰ شغلی
                      </strong>
                      <p className="text-stone-300 text-[11px] leading-relaxed">
                        هر یک از برنامه‌های اکوسیستم تنها یک ابزار ساده نیستند، بلکه یک «سوپر اکوسیستم خودپایدار» هستند که حداقل ۸۰ عنوان شغلی، عرضه، تقاضا و گردش نقدینگی ایجاد می‌کنند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {activeSection === "nexsus" && (
            <motion.div
              key="nexsus"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8 border-b border-stone-800 pb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-600 to-red-800 p-1 flex-shrink-0 shadow-lg">
                    <img
                      src={IMAGES.amrazLogo}
                      alt="Nexsus Emotional AI"
                      className="w-full h-full rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-2 text-center md:text-start">
                    <div className="inline-flex items-center gap-2 bg-red-900/40 text-amber-300 border border-red-700/50 px-3 py-1 rounded-full text-xs font-bold">
                      <Brain className="w-4 h-4 text-amber-400" />
                      {t.nexsusTitle}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-amber-100 font-serif">
                      هوش مصنوعی احساس‌محور نکسوز (Nexsus AI Engine)
                    </h2>
                    <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
                      {t.nexsusDesc}
                    </p>
                  </div>
                </div>

                {/* Simulated Emotional Spectrum Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs mb-8">
                  <div className="bg-stone-950 p-3 rounded-xl border border-amber-600/20 text-center space-y-1">
                    <Smile className="w-5 h-5 text-amber-400 mx-auto" />
                    <span className="font-bold text-stone-200 block">Kebahagiaan (Joy)</span>
                    <span className="text-[10px] text-stone-400 block">شادی شکوفایی</span>
                  </div>
                  <div className="bg-stone-950 p-3 rounded-xl border border-amber-600/20 text-center space-y-1">
                    <Heart className="w-5 h-5 text-red-400 mx-auto" />
                    <span className="font-bold text-stone-200 block">Cinta & Kasih</span>
                    <span className="text-[10px] text-stone-400 block">محبت و گرما</span>
                  </div>
                  <div className="bg-stone-950 p-3 rounded-xl border border-amber-600/20 text-center space-y-1">
                    <Sun className="w-5 h-5 text-amber-300 mx-auto" />
                    <span className="font-bold text-stone-200 block">Kedamaian (Peace)</span>
                    <span className="text-[10px] text-stone-400 block">آرامش روح</span>
                  </div>
                  <div className="bg-stone-950 p-3 rounded-xl border border-amber-600/20 text-center space-y-1">
                    <Activity className="w-5 h-5 text-emerald-400 mx-auto" />
                    <span className="font-bold text-stone-200 block">Nostalgia</span>
                    <span className="text-[10px] text-stone-400 block">یاد گذشته‌ها</span>
                  </div>
                  <div className="bg-stone-950 p-3 rounded-xl border border-amber-600/20 text-center space-y-1">
                    <Award className="w-5 h-5 text-amber-400 mx-auto" />
                    <span className="font-bold text-stone-200 block">Keagungan (Awe)</span>
                    <span className="text-[10px] text-stone-400 block">شکوه هنر فرش</span>
                  </div>
                  <div className="bg-stone-950 p-3 rounded-xl border border-amber-600/20 text-center space-y-1">
                    <Sparkles className="w-5 h-5 text-amber-300 mx-auto" />
                    <span className="font-bold text-stone-200 block">Evolusi (Growth)</span>
                    <span className="text-[10px] text-stone-400 block">تکامل تدریجی</span>
                  </div>
                </div>

                {/* Nexsus Conversation Console */}
                <div className="bg-stone-950 p-6 rounded-xl border border-amber-600/20 space-y-4">
                  <h3 className="text-sm font-bold text-amber-200 font-serif flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    گفتگوی مستقیم با هوش احساسی نکسوز (Nexsus Emotional Chat)
                  </h3>

                  {nexsusResponse && (
                    <div className="bg-stone-900/90 p-4 rounded-xl border border-amber-600/30 space-y-3">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                        <span className="text-xs font-bold text-amber-300 flex items-center gap-2">
                          <Heart className="w-4 h-4 text-red-400" />
                          حس شبیه‌سازی شده: {nexsusResponse.emotionalState}
                        </span>
                        <span className="text-[10px] bg-red-950 text-amber-200 px-2 py-0.5 rounded font-mono">
                          NEXSUS LIVE
                        </span>
                      </div>
                      <p className="text-xs text-stone-200 leading-relaxed font-sans">
                        {nexsusResponse.empathyResponse}
                      </p>
                      {nexsusResponse.cityReflection && (
                        <div className="bg-stone-950/80 p-3 rounded-lg border border-amber-600/20 text-[11px] text-amber-200/90 italic">
                          ✨ انعکاس در شهر تنسی امراز: "{nexsusResponse.cityReflection}"
                        </div>
                      )}
                    </div>
                  )}

                  <form onSubmit={handleNexsusTalk} className="flex gap-2">
                    <input
                      type="text"
                      value={nexsusInput}
                      onChange={e => setNexsusInput(e.target.value)}
                      placeholder="از احساسات، خاطرات، یاد مرحوم حاج حسین علی میری یا شهر امراز بنویسید..."
                      className="flex-grow bg-stone-900 text-stone-100 border border-stone-700 rounded-lg px-3 py-2 text-xs focus:border-amber-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={nexsusLoading}
                      className="bg-red-800 hover:bg-red-900 text-amber-100 font-bold text-xs px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow"
                    >
                      {nexsusLoading ? (
                        <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      ارسال به نکسوز
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 3. AI EXPERT APPRAISAL & ADVISOR VIEW     */}
          {/* ========================================== */}
          {activeSection === "advisor" && (
            <motion.div
              key="advisor"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl">
                <div className="max-w-2xl space-y-2 mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-amber-100 font-serif flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    سامانه هوشمند کارشناسی، قیمت‌گذاری و اصالت‌سنجی فرش
                  </h2>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    با بهره‌گیری از هوش مصنوعی قدرتمند Gemini و دانش کارشناسان عالی‌رتبه بازار بزرگ فرش تهران، تبریز و اصفهان.
                  </p>
                </div>

                <form onSubmit={handleRequestAppraisal} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    
                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.origin}</label>
                      <input
                        type="text"
                        value={origin}
                        onChange={e => setOrigin(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.raj}</label>
                      <input
                        type="text"
                        value={raj}
                        onChange={e => setRaj(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.material}</label>
                      <input
                        type="text"
                        value={material}
                        onChange={e => setMaterial(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.design}</label>
                      <input
                        type="text"
                        value={design}
                        onChange={e => setDesign(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.dimensions}</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={length}
                          onChange={e => setLength(e.target.value)}
                          placeholder="طول"
                          className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 text-center focus:border-amber-500 focus:outline-none"
                        />
                        <span className="text-stone-400">×</span>
                        <input
                          type="text"
                          value={width}
                          onChange={e => setWidth(e.target.value)}
                          placeholder="عرض"
                          className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 text-center focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.age}</label>
                      <input
                        type="text"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.expertSelect}</label>
                      <select
                        value={selectedExpert}
                        onChange={e => setSelectedExpert(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 text-amber-200 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      >
                        <option value="mehdi">دایی مهدی (پیشکسوت صمیمی بازار)</option>
                        <option value="miri">حاج حسین علی میری و پسران (اصالت عتیقه)</option>
                        <option value="heritage">دپارتمان هریتج متاورس (بین‌المللی)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1 font-bold">{t.userNotes}</label>
                      <input
                        type="text"
                        value={userNotes}
                        onChange={e => setUserNotes(e.target.value)}
                        placeholder="شناسه، امضا یا توضیحات خاص..."
                        className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                  </div>

                  <div className="flex items-center justify-between border-t border-stone-800 pt-4">
                    <span className="text-[11px] text-stone-400">
                      پاسخ‌های کارشناسی با خروجی JSON هوشمند و دقیق صادر می‌گردد.
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 text-amber-100 font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
                          درحال تحلیل گره‌ها و قیمت‌گذاری...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-amber-300" />
                          {t.btnSubmitAppraisal}
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Appraisal Output Display */}
                {error && (
                  <div className="mt-6 p-4 bg-red-950/60 border border-red-700/60 text-red-200 rounded-xl text-xs">
                    {error}
                  </div>
                )}

                {appraisal && (
                  <div className="mt-8 bg-stone-950 p-6 rounded-xl border border-amber-600/40 space-y-6 text-xs">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                      <h3 className="font-bold text-amber-200 text-sm font-serif flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-400" />
                        گواهی رسمی کارشناسی و قیمت‌گذاری
                      </h3>
                      <span className="text-[10px] bg-amber-900/40 text-amber-300 px-2.5 py-1 rounded border border-amber-800">
                        مهر هوشمند بازار
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-amber-300">نظر و تحلیل استاد کارشناس:</h4>
                      <p className="text-stone-300 leading-relaxed bg-stone-900 p-3 rounded-lg border border-stone-800">
                        {appraisal.expertAppraisal}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-amber-300">داستان و روایت اصالت:</h4>
                      <p className="text-stone-300 leading-relaxed bg-stone-900 p-3 rounded-lg border border-stone-800 italic">
                        "{appraisal.story}"
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                        <span className="font-bold text-amber-300 block">مشخصات فنی:</span>
                        <p className="text-stone-300">تراکم: {appraisal.technicalSpecs.knotDensity}</p>
                        <p className="text-stone-300">رده رج: {appraisal.technicalSpecs.rajClass}</p>
                        <p className="text-stone-300">درصد کمیابی: {appraisal.technicalSpecs.rarity}</p>
                      </div>

                      <div className="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                        <span className="font-bold text-amber-300 block">ارزش‌گذاری عادلانه:</span>
                        <p className="text-amber-200 font-bold">قیمت: {appraisal.valuation.rangeTomans}</p>
                        <p className="text-stone-300">معادل سکه: {appraisal.valuation.rangeGoldSovereigns}</p>
                        <p className="text-stone-400 text-[10px]">{appraisal.valuation.justification}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 4. PERSIAN MASTERPIECES GALLERY            */}
          {/* ========================================== */}
          {activeSection === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b border-amber-600/20 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-stone-900 font-serif">
                    گالری و موزه شاهکارهای اصیل ایرانی
                  </h2>
                  <p className="text-xs text-stone-600">
                    فرش‌های برتر ثبت شده در موزه آفرینا و بورس تنسی امراز
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CARPET_GALLERY.map(carpet => (
                  <div
                    key={carpet.id}
                    className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={carpet.image}
                        alt={carpet.name}
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 right-3 bg-red-900 text-amber-100 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                        {carpet.raj}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="font-bold text-stone-900 text-base font-serif">
                        {carpet.name}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {carpet.desc}
                      </p>

                      <div className="text-xs bg-stone-50 p-3 rounded-lg space-y-1 text-stone-700">
                        <p><strong className="text-stone-900">خاستگاه:</strong> {carpet.origin}</p>
                        <p><strong className="text-stone-900">جنس:</strong> {carpet.material}</p>
                        <p><strong className="text-stone-900">ابعاد:</strong> {carpet.length} × {carpet.width} متر</p>
                      </div>

                      <button
                        onClick={() => handleLoadPreset(carpet)}
                        className="w-full bg-stone-900 hover:bg-stone-800 text-amber-200 text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        بارگذاری جهت کارشناسی و قیمت‌گذاری هوشمند
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 5. MERCHANT VIRTUAL BOOTH (SELLER ROOM)    */}
          {/* ========================================== */}
          {activeSection === "sellerRoom" && (
            <motion.div
              key="sellerRoom"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-6"
            >
              <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl space-y-6">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                  <ShoppingBag className="w-6 h-6 text-amber-400" />
                  <div>
                    <h2 className="text-xl font-bold text-amber-100 font-serif">
                      حجره مجازی و بنکداری تجار در شهر امراز
                    </h2>
                    <p className="text-xs text-stone-300">
                      نمایش حجره‌های اختصاصی تجار فرش دستباف با قابلیت ترجمه آنلاین تجاری.
                    </p>
                  </div>
                </div>

                {/* AI Translator Console inside Booth */}
                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-4">
                  <h3 className="text-xs font-bold text-amber-300 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-amber-400" />
                    مترجم هوشمند تجاری فرش (Hand-Knotted Carpet Translator)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-stone-400 mb-1">متن فارسی مشخصات فرش یا گفتگو:</label>
                      <textarea
                        rows={3}
                        value={translateInput}
                        onChange={e => setTranslateInput(e.target.value)}
                        className="w-full bg-stone-900 text-stone-100 border border-stone-700 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-400 mb-1">ترجمه بومی‌سازی شده بین‌المللی ({targetLang}):</label>
                      <div className="w-full h-24 bg-stone-900 text-amber-200 border border-stone-700 rounded-lg p-2.5 overflow-y-auto font-mono">
                        {translateOutput || "ترجمه تجاری اینجا قرار می‌گیرد..."}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <select
                      value={targetLang}
                      onChange={e => setTargetLang(e.target.value)}
                      className="bg-stone-900 text-stone-200 border border-stone-700 text-xs rounded-lg px-3 py-1.5 focus:outline-none"
                    >
                      <option value="English">English (انگلیسی)</option>
                      <option value="Arabic">العربية (عربی)</option>
                      <option value="Indonesian">Bahasa Indonesia (اندونزیایی)</option>
                      <option value="German">Deutsch (آلمانی)</option>
                    </select>

                    <button
                      onClick={handleTranslateText}
                      disabled={translationLoading}
                      className="bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-xs px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow"
                    >
                      {translationLoading ? (
                        <Sparkles className="w-4 h-4 animate-spin" />
                      ) : (
                        <Languages className="w-4 h-4" />
                      )}
                      ترجمه تخصصی
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 6. CUSTOM WEAVE (PORTRAIT & FLAG)          */}
          {/* ========================================== */}
          {activeSection === "customWeave" && (
            <motion.div
              key="customWeave"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                <User className="w-6 h-6 text-amber-400" />
                <div>
                  <h2 className="text-xl font-bold text-amber-100 font-serif">
                    سفارش بافت تابلوفرش سفارشی چهره و پرچم ملل
                  </h2>
                  <p className="text-xs text-stone-300">
                    طراحی و بافت هوشمند تابلوفرش از روی تصویر شخصی یا پرچم کشورهای مختلف.
                  </p>
                </div>
              </div>

              <div className="bg-stone-950 p-6 rounded-xl border border-stone-800 space-y-4 text-xs">
                <p className="text-stone-300 leading-relaxed">
                  این بخش امکان ثبت سفارش بافت تابلوفرش سفارشی با رج‌شمار عالی، ابریشم خالص و رنگرزی سنتی در کارگاه‌های آفرینا را فراهم می‌کند.
                </p>

                <div className="p-4 bg-stone-900 rounded-lg border border-amber-600/20 flex items-center justify-between">
                  <span className="text-amber-200 font-bold">ثبت سفارش فعال در کارگاه استاد میری:</span>
                  <span className="bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full text-[10px] border border-emerald-800 font-mono">
                    READY FOR ORDER
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 7. TRADITIONAL DYEING SIMULATOR            */}
          {/* ========================================== */}
          {activeSection === "dyeSimulator" && (
            <motion.div
              key="dyeSimulator"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                <Droplet className="w-6 h-6 text-amber-400" />
                <div>
                  <h2 className="text-xl font-bold text-amber-100 font-serif">
                    شبیه‌ساز هوشمند خانه‌های رنگرزی سنتی و گیاهی
                  </h2>
                  <p className="text-xs text-stone-300">
                    آزمایش ترکیب مواد طبیعی (روناس، پوست گردو، اسپرک، پوست انار) بدون افزودنی‌های شیمیایی.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {DYE_MATERIALS.map(dye => (
                  <div
                    key={dye.id}
                    onClick={() => setSelectedDye(dye)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedDye.id === dye.id
                        ? "bg-stone-800 border-amber-500 shadow-lg ring-1 ring-amber-400/40"
                        : "bg-stone-950 border-stone-800 hover:border-stone-700"
                    }`}
                  >
                    <div className={`w-full h-12 rounded-lg mb-3 ${dye.colorClass} shadow`}></div>
                    <h3 className="font-bold text-amber-100 text-xs">{dye.name}</h3>
                    <p className="text-[10px] text-stone-400 mt-1">{dye.source}</p>
                  </div>
                ))}
              </div>

              {selectedDye && (
                <div className="bg-stone-950 p-5 rounded-xl border border-amber-600/30 space-y-2 text-xs">
                  <h3 className={`font-bold text-sm ${selectedDye.textCol}`}>
                    {selectedDye.name}
                  </h3>
                  <p className="text-amber-200/90 italic font-serif">
                    {selectedDye.poetry}
                  </p>
                  <p className="text-stone-300 leading-relaxed pt-2">
                    {selectedDye.desc}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* ========================================== */}
          {/* 8. MERCHANT ALLIANCE & SUBMIT              */}
          {/* ========================================== */}
          {activeSection === "merchantSubmit" && (
            <motion.div
              key="merchantSubmit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 border border-amber-600/30 shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                <Handshake className="w-6 h-6 text-amber-400" />
                <div>
                  <h2 className="text-xl font-bold text-amber-100 font-serif">
                    درخواست حجره و عضویت در اتحادیه تجار تنسی امراز
                  </h2>
                  <p className="text-xs text-stone-300">
                    پیوستن تجار و صادرکنندگان فرش ایران به پلتفرم متاورس و بورس بین‌المللی.
                  </p>
                </div>
              </div>

              {merchantSubmitSuccess ? (
                <div className="p-6 bg-emerald-950/80 border border-emerald-700 text-emerald-200 rounded-xl text-xs text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h3 className="font-bold text-sm">درخواست حجره با موفقیت ثبت شد</h3>
                  <p>کارشناسان اتحادیه در اولین فرصت با شما تماس خواهند گرفت.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setMerchantSubmitSuccess(true); }} className="space-y-4 text-xs max-w-lg">
                  <div>
                    <label className="block text-stone-300 mb-1">نام و نام خانوادگی / نام حجره:</label>
                    <input
                      type="text"
                      value={merchantName}
                      onChange={e => setMerchantName(e.target.value)}
                      className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 mb-1">شماره تماس / همراه:</label>
                    <input
                      type="text"
                      value={merchantPhone}
                      onChange={e => setMerchantPhone(e.target.value)}
                      className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 mb-1">شهر فعالیت یا بازار مربوطه:</label>
                    <input
                      type="text"
                      value={merchantCity}
                      onChange={e => setMerchantCity(e.target.value)}
                      placeholder="تهران، تبریز، اصفهان، کاشان..."
                      className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-stone-950 font-bold text-xs py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Handshake className="w-4 h-4" />
                    ارسال رسمی درخواست حجره
                  </button>
                </form>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* SELECTED PARCEL INSPECTOR & NOVEL ACQUISITION MODAL */}
      {selectedParcel && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-stone-900 border-2 border-amber-500/50 text-stone-100 rounded-2xl p-6 max-w-xl w-full shadow-2xl space-y-5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-500/40">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-100 text-base font-serif">
                    شناسنامه و واگذاری تخصصی پارسل: {selectedParcel.name}
                  </h3>
                  <span className="text-[11px] text-stone-400 font-mono block">
                    Tavana City Parcel ID: {selectedParcel.id} | {selectedParcel.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedParcel(null);
                  setParcelAcquisitionSuccess(false);
                }}
                className="text-stone-400 hover:text-white p-1 rounded-lg bg-stone-800 border border-stone-700"
              >
                ✕
              </button>
            </div>

            {parcelAcquisitionSuccess ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-500/60 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-emerald-200 text-base">
                  سند صکوک و گواهی واگذاری پارسل با موفقیت صادر گردید!
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed max-w-md mx-auto">
                  درخواست واگذاری پارسل <strong className="text-amber-300">{selectedParcel.name}</strong> بر اساس مدل انتخاب‌شده (<strong className="text-emerald-300">{parcelAcquisitionModel === 'outright' ? 'خرید قطعی' : parcelAcquisitionModel === 'leaseToOwn' ? 'اجاره به شرط تملیک' : 'اجاره مشارکتی در سود'}</strong>) با کد رهگیری صکوک <code className="bg-stone-900 px-2 py-0.5 rounded text-amber-400 font-mono">TAV-{Math.floor(100000 + Math.random() * 900000)}</code> ثبت شد.
                </p>
                <button
                  onClick={() => {
                    setSelectedParcel(null);
                    setParcelAcquisitionSuccess(false);
                  }}
                  className="bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold px-5 py-2.5 rounded-xl border border-stone-700"
                >
                  بستن شناسنامه پارسل
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                {/* Parcel Stats & AI Traffic Score */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono">
                  <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
                    <span className="text-[10px] text-stone-400 block">مساحت مجازی:</span>
                    <strong className="text-amber-200 text-xs">{selectedParcel.area}</strong>
                  </div>
                  <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
                    <span className="text-[10px] text-stone-400 block">امتیاز پاخور و ترافیک AI:</span>
                    <strong className="text-emerald-400 text-xs">98 / 100 (AAA+)</strong>
                  </div>
                  <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-stone-400 block">تعداد صکوک/NFT:</span>
                    <strong className="text-amber-300 text-xs">{selectedParcel.nftCount} واحد ثبت‌شده</strong>
                  </div>
                </div>

                {/* Selection of Novel Sale/Leasing Model */}
                <div className="space-y-2">
                  <label className="block text-amber-300 font-bold text-xs">
                    انتخاب مدل واگذاری و معامله پارسل (مکانیسم‌های سه گانه توانا):
                  </label>

                  <div className="space-y-2">
                    <div
                      onClick={() => setParcelAcquisitionModel("outright")}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                        parcelAcquisitionModel === "outright"
                          ? "bg-amber-950/60 border-amber-500 ring-1 ring-amber-400 text-amber-100"
                          : "bg-stone-950 border-stone-800 text-stone-300 hover:border-amber-700/50"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-amber-200 flex items-center gap-1.5">
                          <span>۱. خرید قطعی با گواهی صکوک RWA</span>
                          {parcelAcquisitionModel === "outright" && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-[11px] text-stone-400">
                          مالکیت دائمی ۱۰۰٪ با ثبت سند در دفترخانه دیجیتال و دریافت سود ناشی از ارزش افزوده زمین.
                        </p>
                      </div>
                      <span className="text-emerald-400 font-mono font-bold text-[11px]">مستقیم</span>
                    </div>

                    <div
                      onClick={() => setParcelAcquisitionModel("leaseToOwn")}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                        parcelAcquisitionModel === "leaseToOwn"
                          ? "bg-amber-950/60 border-amber-500 ring-1 ring-amber-400 text-amber-100"
                          : "bg-stone-950 border-stone-800 text-stone-300 hover:border-amber-700/50"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-amber-200 flex items-center gap-1.5">
                          <span>۲. اجاره به شرط تملیک (Lease-to-Own)</span>
                          {parcelAcquisitionModel === "leaseToOwn" && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-[11px] text-stone-400">
                          پرداخت اقساط ماهانه از محل فروش محصولات حجره؛ انتقال سند قطعی پس از ۱۲ الی ۲۴ ماه.
                        </p>
                      </div>
                      <span className="text-amber-300 font-mono font-bold text-[11px]">اقساطی</span>
                    </div>

                    <div
                      onClick={() => setParcelAcquisitionModel("yieldSharing")}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                        parcelAcquisitionModel === "yieldSharing"
                          ? "bg-amber-950/60 border-amber-500 ring-1 ring-amber-400 text-amber-100"
                          : "bg-stone-950 border-stone-800 text-stone-300 hover:border-amber-700/50"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-amber-200 flex items-center gap-1.5">
                          <span>۳. اجاره مشارکتی بدون ودیعه (Yield-Sharing)</span>
                          {parcelAcquisitionModel === "yieldSharing" && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <p className="text-[11px] text-stone-400">
                          بدون هیچ پیش‌پرداخت؛ کسر ۳٪ کارمزد از معاملات واقعی حجره به عنوان اجاره‌بها (حامی کسب‌وکارهای نوپا).
                        </p>
                      </div>
                      <span className="text-emerald-300 font-mono font-bold text-[11px]">درصدی</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    onClick={() => setSelectedParcel(null)}
                    className="bg-stone-800 hover:bg-stone-700 text-stone-300 px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    انصراف
                  </button>
                  <button
                    onClick={() => setParcelAcquisitionSuccess(true)}
                    className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-black px-6 py-2.5 rounded-xl text-xs transition-all shadow-lg flex items-center gap-1.5"
                  >
                    <Handshake className="w-4 h-4" />
                    تأیید نهایی و ثبت سند صکوک
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* METAVERSE PARCEL REGISTRATION MODAL */}
      {metaverseRegModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-stone-900 border border-amber-600/40 text-stone-100 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="font-bold text-amber-200 text-sm font-serif flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" />
                ثبت و رزرو پارسل در شهر آفرینا / تنسی امراز
              </h3>
              <button
                onClick={() => setMetaverseRegModal(false)}
                className="text-stone-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {regSuccessMsg ? (
              <div className="p-4 bg-emerald-950 text-emerald-200 rounded-xl text-xs text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                <p className="font-bold">رزرو پارسل با موفقیت ثبت شد!</p>
              </div>
            ) : (
              <form onSubmit={handleRegisterMetaverseCarpet} className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-300 mb-1 font-bold">شهر مقصد جهت واگذاری:</label>
                  <select
                    value={regTargetCity}
                    onChange={e => setRegTargetCity(e.target.value as any)}
                    className="w-full bg-stone-800 border border-stone-700 text-amber-200 rounded-lg p-2.5 focus:outline-none"
                  >
                    <option value="amraz">شهر تنسی امراز (Tinasi City Amraz - بورس تجاری)</option>
                    <option value="afrina">شهر آفرینا (Afrina City - موزه و کارگاه)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-bold">نام اثر / شناسه فرش جهت ثبت صکوک:</label>
                  <input
                    type="text"
                    value={regCarpetName}
                    onChange={e => setRegCarpetName(e.target.value)}
                    placeholder="مثلاً: قالی سلطنتی تبریز - گره ۶۰"
                    className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg p-2.5 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-900 hover:to-amber-800 text-amber-100 font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Crown className="w-4 h-4 text-amber-300" />
                  تأیید و صدور گواهی رزرو پارسل
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}

      {/* FULL MOBILE & COMPREHENSIVE DIRECTORY MENU MODAL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border-2 border-amber-500/50 rounded-2xl max-w-2xl w-full p-6 text-stone-200 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-stone-800 pb-4 sticky top-0 bg-stone-900/90 backdrop-blur z-10 pt-1">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 rounded-xl border border-amber-300">
                  <Grid className="w-6 h-6 text-stone-950" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-amber-100 font-serif">
                    فهرست کامل بخش‌ها و امکانات شهر توانا
                  </h3>
                  <p className="text-[11px] text-amber-300/80 font-mono">
                    Tavana Supercity Complete Navigation Portal (۱۵ بخش اصلی)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-400 hover:text-white p-2 rounded-lg bg-stone-800 border border-stone-700 text-xs font-bold"
              >
                ✕ بستن
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <button
                onClick={() => { setActiveSection("metaverse"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "metaverse" ? "bg-amber-500 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.navMetaverse} (ابرشهر توانا)</span>
              </button>

              <button
                onClick={() => { setActiveSection("manifesto"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "manifesto" ? "bg-amber-500 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <SparklesIcon className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{t.navManifesto} (کتاب آفرینش)</span>
              </button>

              <button
                onClick={() => { setActiveSection("globalExpansion"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "globalExpansion" ? "bg-emerald-500 text-stone-950 font-bold border-emerald-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-emerald-500/50"}`}
              >
                <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.navGlobalExpansion} (Pitch Deck سرمایه‌گذاری)</span>
              </button>

              <button
                onClick={() => { setActiveSection("cinemaEntertainment"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "cinemaEntertainment" ? "bg-purple-500 text-stone-950 font-bold border-purple-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-purple-500/50"}`}
              >
                <Clapperboard className="w-4 h-4 text-purple-400 shrink-0" />
                <span>سینما، کمدی، تئاتر & استریم (NEW)</span>
              </button>

              <button
                onClick={() => { setActiveSection("communityChat"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "communityChat" ? "bg-teal-500 text-stone-950 font-bold border-teal-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-teal-500/50"}`}
              >
                <MessageSquare className="w-4 h-4 text-teal-400 shrink-0" />
                <span>تالارهای گفتگو & چت‌روم‌ها (HOT)</span>
              </button>

              <button
                onClick={() => { setActiveSection("iranMarketplaces"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "iranMarketplaces" ? "bg-amber-600 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Car className="w-4 h-4 text-amber-400 shrink-0" />
                <span>بورس‌ها و بازار‌های ایران (خودرو/املاک/پوشاک)</span>
              </button>

              <button
                onClick={() => { setActiveSection("tourismHub"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "tourismHub" ? "bg-sky-500 text-stone-950 font-bold border-sky-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-sky-500/50"}`}
              >
                <Plane className="w-4 h-4 text-sky-400 shrink-0" />
                <span>گردشگری، فرودگاه‌ها & هتل‌های پرواز</span>
              </button>

              <button
                onClick={() => { setActiveSection("childrenAndParents"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "childrenAndParents" ? "bg-rose-500 text-stone-950 font-bold border-rose-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-rose-500/50"}`}
              >
                <Baby className="w-4 h-4 text-rose-400 shrink-0" />
                <span>آفرینندگان فردا (کودکان & والدین)</span>
              </button>

              <button
                onClick={() => { setActiveSection("democracyLeagues"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "democracyLeagues" ? "bg-amber-400 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span>لیگ ارزش‌آفرینان & دمکراسی ثروت</span>
              </button>

              <button
                onClick={() => { setActiveSection("siavashSuite"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "siavashSuite" ? "bg-amber-600 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ویترین نرم‌افزارها (استودیو سیاوش)</span>
              </button>

              <button
                onClick={() => { setActiveSection("nexsus"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "nexsus" ? "bg-red-900 text-amber-100 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Brain className="w-4 h-4 text-amber-400 shrink-0" />
                <span>سامانه نکسوز (هوش مصنوعی احساسی)</span>
              </button>

              <button
                onClick={() => { setActiveSection("advisor"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "advisor" ? "bg-amber-600 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.navAdvisor} (ارزیابی کارشناسی فرش)</span>
              </button>

              <button
                onClick={() => { setActiveSection("gallery"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "gallery" ? "bg-amber-600 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <ImageIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.navGallery} (گالری فرش‌های فاخر)</span>
              </button>

              <button
                onClick={() => { setActiveSection("customWeave"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "customWeave" ? "bg-amber-600 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <User className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.navCustomWeave} (سفارش بافت چهره & پرچم)</span>
              </button>

              <button
                onClick={() => { setActiveSection("dyeSimulator"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "dyeSimulator" ? "bg-amber-600 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Droplet className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.navDyeSimulator} (شبیه‌ساز رنگرزی سنتی)</span>
              </button>

              <button
                onClick={() => { setActiveSection("merchantSubmit"); setIsMobileMenuOpen(false); }}
                className={`p-3 rounded-xl border text-start transition-all flex items-center gap-2.5 ${activeSection === "merchantSubmit" ? "bg-amber-600 text-stone-950 font-bold border-amber-300" : "bg-stone-950 text-stone-200 border-stone-800 hover:border-amber-500/50"}`}
              >
                <Handshake className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.navMerchantSubmit} (درخواست حجره در بورس)</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* High-Traffic & Load Shield Modal */}
      {showTrafficShieldModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-stone-900 border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 text-stone-200 shadow-2xl relative space-y-5"
          >
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-500/40">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-100 font-serif">
                    معماری پایداری شبکه و سپر هجوم ترافیک (High-Traffic Protection Shield)
                  </h3>
                  <p className="text-[11px] text-stone-400 font-mono">
                    Tavana Supercity Active Load Balancing & Rate Limiting Infrastructure
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowTrafficShieldModal(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg bg-stone-800 border border-stone-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs leading-relaxed text-stone-300">
              <p className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-stone-200">
                جهت اطمینان از اینکه حتی با هجوم همزمان میلیون‌ها کاربر به سامانه فرش‌بازار و ابرشهر توانا (شهر همراز و شهر آفرینا)، هیچ خللی در روند کاری، کارشناسی، ترجمه و ارتباط با هوش مصنوعی نکسوز ایجاد نشود، لایه‌های محافظتی زیر به طور پیوسته فعال می‌باشند:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-amber-400" />
                    ۱. کنترل نرخ و پنجره لغزان (Sliding Window IP Rate Limiter)
                  </h4>
                  <p className="text-stone-400 text-[11px]">
                    محدودیت هوشمند ۶۰ درخواست در دقیقه برای هر IP جهت جلوگیری از ربات‌های مخرب و حفظ پهنای باند برای کاربران واقعی.
                  </p>
                </div>

                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    ۲. سمافور همزمانی هوش مصنوعی (AI Concurrency Limits)
                  </h4>
                  <p className="text-stone-400 text-[11px]">
                    مدیریت تا حداکثر ۱۰ فراخوانی همزمان Gemini 3.6-Flash؛ جلوگیری از اشباع پردازشی و Timeout در سمت سرور.
                  </p>
                </div>

                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    ۳. سپر پاسخ فوری (High Traffic Shield Fallback)
                  </h4>
                  <p className="text-stone-400 text-[11px]">
                    در زمان پیک ترافیک فوق‌العاده سنگین، پاسخ‌های هوشمند ساختاریافته محلی فوراً تحویل داده می‌شوند تا برنامه هرگز با خطا یا توقف مواجه نشود.
                  </p>
                </div>

                <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 space-y-1.5">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ۴. کشینگ و پاسخ‌دهی بدون وقفه (Zero Downtime)
                  </h4>
                  <p className="text-stone-400 text-[11px]">
                    تضمین پایداری ۹۹.۹ درصدی سرویس‌ها و عدم نادیده گرفته شدن هیچ درخواستی، حتی در زمان ترافیک بی‌سابقه‌.
                  </p>
                </div>
              </div>

              {systemStatus && (
                <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-600/30 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-stone-400 block">وضعیت فعلی سرور:</span>
                    <span className="font-bold text-amber-200">{systemStatus.capacityMode}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">درخواست‌های پردازش‌شده:</span>
                    <span className="font-bold text-emerald-300">{systemStatus.totalRequests}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">پاسخ‌های محافظت‌شده:</span>
                    <span className="font-bold text-amber-400">{systemStatus.shieldedRequests}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 text-end">
              <button
                onClick={() => setShowTrafficShieldModal(false)}
                className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-5 py-2 rounded-xl text-xs font-bold transition-all border border-stone-700"
              >
                متوجه شدم (بستن)
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* TAVANA CITIZEN REGISTRATION & LOGIN MODAL (GOOGLE & MOBILE AUTH) */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border-2 border-amber-500/50 rounded-2xl max-w-lg w-full p-6 text-stone-200 shadow-[0_0_50px_rgba(245,158,11,0.25)] relative space-y-5"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 rounded-xl border border-amber-300 shadow-md">
                  <UserCheck className="w-6 h-6 text-stone-950" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-amber-100 font-serif">
                    {userProfile ? "کارت و پروفایل شهروندی توانا" : "عضویت & ورود به شهر توانا (FB New Meta)"}
                  </h3>
                  <p className="text-[11px] text-amber-300/80 font-mono">
                    Tavana Supercity Citizen Portal - Google & Mobile Authentication
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAuthModalOpen(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg bg-stone-800 border border-stone-700"
              >
                ✕
              </button>
            </div>

            {/* If Logged In: Show Digital Citizen Certificate */}
            {userProfile ? (
              <div className="space-y-5 text-xs">
                {/* Official Digital Citizen Card */}
                <div className="bg-gradient-to-r from-amber-950/80 via-stone-900 to-amber-950/80 p-5 rounded-2xl border-2 border-amber-400/60 space-y-4 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-amber-400 shrink-0" />
                      <span className="font-bold text-amber-200 text-sm font-serif">
                        کارت دیجیتال شهروندی ابرشهر توانا
                      </span>
                    </div>
                    <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2.5 py-0.5 rounded-full font-mono shadow">
                      {userProfile.citizenCode}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-stone-300">
                    <div>
                      <span className="text-stone-500 text-[10px] block">نام شهروند:</span>
                      <strong className="text-amber-100 text-xs font-serif">{userProfile.name}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 text-[10px] block">نوع احراز هویت:</span>
                      <strong className="text-emerald-400 text-xs font-mono">
                        {userProfile.authType === "google" ? "گوگل (Google Auth)" : "شماره موبایل (SMS Verified)"}
                      </strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-stone-500 text-[10px] block">شناسه تماس / ایمیل:</span>
                      <strong className="text-amber-300 text-xs font-mono">{userProfile.emailOrPhone}</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-stone-500 text-[10px] block">نقش در متاورس:</span>
                      <span className="text-emerald-300 font-bold text-[11px] bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800 inline-block">
                        {userProfile.cityRole}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-[10px] text-stone-400">
                    <span>تاریخ صدور: {userProfile.joinDate}</span>
                    <span className="text-amber-300 font-mono">تایید شده توسط هوش نکسوز v3.6</span>
                  </div>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2 text-stone-300">
                  <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    مزایای فعال شهروندی شما:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-stone-400">
                    <li>رزرو و مالکیت پارسل‌های مجازی در شهر همراز & شهر آفرینا</li>
                    <li>دسترسی به صرافی دیجیتال، معاملات صکوک و تسهیلات اعتباری</li>
                    <li>استفاده از هوش مصنوعی احساسی نکسوز و کارشناسی هوشمند فرش</li>
                    <li>حضور در پلتفرم آفرینندگان فردا (کودکان & والدین) و توریسم جهانی</li>
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={handleLogoutCitizen}
                    className="bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-700 px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    خروج از حساب شهروندی
                  </button>
                  <button
                    onClick={() => setIsAuthModalOpen(false)}
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-5 py-2 rounded-xl text-xs font-black transition-all shadow-md"
                  >
                    ورود به شهر توانا
                  </button>
                </div>
              </div>
            ) : (
              /* If Not Logged In: Registration Tabs (Google & Mobile) */
              <div className="space-y-4">
                {/* Method Switcher Tabs */}
                <div className="flex bg-stone-950 p-1 rounded-xl border border-amber-500/30 text-xs">
                  <button
                    onClick={() => setAuthTab("google")}
                    className={`flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                      authTab === "google"
                        ? "bg-gradient-to-r from-red-800 to-amber-700 text-amber-100 shadow"
                        : "text-stone-400 hover:text-white"
                    }`}
                  >
                    <Globe className="w-4 h-4 text-amber-300" />
                    <span>۱. ثبت‌نام & ورود با گوگل (Google)</span>
                  </button>

                  <button
                    onClick={() => setAuthTab("mobile")}
                    className={`flex-1 py-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                      authTab === "mobile"
                        ? "bg-gradient-to-r from-red-800 to-amber-700 text-amber-100 shadow"
                        : "text-stone-400 hover:text-white"
                    }`}
                  >
                    <User className="w-4 h-4 text-amber-300" />
                    <span>۲. ثبت‌نام با شماره موبایل</span>
                  </button>
                </div>

                {/* Tab 1: Google Account Sign-In */}
                {authTab === "google" && (
                  <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-4 text-xs">
                    <div className="text-center space-y-1">
                      <p className="font-bold text-amber-100 font-serif text-sm">
                        ورود و عضویت هوشمند و سریع با حساب گوگل (Google Account)
                      </p>
                      <p className="text-stone-400 text-[11px] leading-relaxed">
                        بدون نیاز به حفظ کلمه عبور؛ تنها با یک کلیک حساب گوگل خود را متصل کنید و کارت شهروندی توانا را دریافت نمایید.
                      </p>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={handleGoogleAuth}
                        disabled={authLoading}
                        className="w-full bg-white hover:bg-stone-100 text-stone-900 font-bold py-3 px-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 border border-stone-300"
                      >
                        {authLoading ? (
                          <div className="flex items-center gap-2 text-stone-700">
                            <div className="w-4 h-4 border-2 border-stone-800 border-t-transparent rounded-full animate-spin" />
                            <span>در حال اتصال به حساب گوگل...</span>
                          </div>
                        ) : (
                          <>
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                            </svg>
                            <span className="text-stone-900 font-sans text-xs font-extrabold">
                              ادامه و ورود یک‌کلیکی با گوگل (Google Sign-In)
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[10px] text-stone-500 text-center">
                      اطلاعات شما با پروتکل‌های امنیتی OAuth2 گوگل و فایربیس کاملاً محافظت می‌شود.
                    </p>
                  </div>
                )}

                {/* Tab 2: Mobile Phone SMS Registration */}
                {authTab === "mobile" && (
                  <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-4 text-xs">
                    {!otpSent ? (
                      <form onSubmit={handleSendMobileOtp} className="space-y-3">
                        <label className="block text-stone-300 font-bold">
                          شماره همراه خود را وارد کنید (ایران یا بین‌الملل):
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="مثلاً ۰۹۱۲۳۴۵۶۷۸۹ یا +989123456789"
                            value={mobileNum}
                            onChange={(e) => setMobileNum(e.target.value)}
                            className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-stone-100 placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500 font-mono"
                          />
                        </div>
                        <p className="text-[11px] text-stone-400">
                          کد تایید ۴ رقمی پیامکی به این شماره ارسال خواهد شد.
                        </p>

                        <button
                          type="submit"
                          disabled={authLoading || !mobileNum.trim()}
                          className="w-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold py-2.5 rounded-xl transition-all shadow flex items-center justify-center gap-2"
                        >
                          {authLoading ? "در حال ارسال SMS..." : "ارسال کد تایید پیامکی"}
                        </button>
                      </form>
                    ) : (
                      <form onSubmit={handleVerifyMobileOtp} className="space-y-3">
                        <div className="bg-emerald-950/80 p-2.5 rounded-lg border border-emerald-800 text-emerald-300 text-[11px]">
                          کد تایید پیامکی به شماره <strong className="font-mono text-amber-300">{mobileNum}</strong> ارسال گردید.
                        </div>

                        <label className="block text-stone-300 font-bold">
                          کد تایید دریافت شده را وارد کنید:
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={6}
                          placeholder="کد ۴ یا ۶ رقمی..."
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          className="w-full bg-stone-900 border border-amber-500/50 rounded-xl px-4 py-2.5 text-stone-100 placeholder-stone-500 text-center font-mono text-sm tracking-widest focus:outline-none focus:border-amber-400"
                        />

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setOtpSent(false)}
                            className="w-1/3 bg-stone-800 hover:bg-stone-700 text-stone-300 py-2.5 rounded-xl text-xs"
                          >
                            ویرایش شماره
                          </button>
                          <button
                            type="submit"
                            disabled={authLoading || !otpCode.trim()}
                            className="w-2/3 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold py-2.5 rounded-xl transition-all shadow"
                          >
                            {authLoading ? "در حال احراز..." : "تایید و دریافت کارت شهروندی"}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 border-t border-amber-600/20 py-8 px-4 mt-12 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          <div className="space-y-1">
            <p className="text-amber-200 font-bold font-serif">
              سامانه فرش‌بازار & متاورس دوگانه آفرینا و تنسی امراز (FarshBazaar & Nexsus Bi-City)
            </p>
            <p className="text-stone-500 text-[11px]">
              به یاد بود ماندگار مرحوم حاج حسین علی میری | قدرت گرفته از هوش مصنوعی احساسی نکسوز v3.6
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-emerald-400 font-mono">● AFRINA: 650,000 m² DEPLOYED</span>
            <span className="text-amber-400 font-mono">● TINASI CITY AMRAZ: 650,000 m² READY</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

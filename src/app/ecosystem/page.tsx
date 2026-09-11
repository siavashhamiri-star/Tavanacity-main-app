import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Blocks, CheckCircle, Clock, Music, Mic, Users, BookOpen, ToyBrick, Briefcase, BrainCircuit, Diamond, Banknote, Link as LinkIcon, ExternalLink, Sparkles, HeartPulse } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const ecosystemApps = [
    {
        name: "Farsh Bazaar (فرش بازار)",
        description: "A global marketplace for artisans, connecting creators directly with a worldwide audience. The first pillar of our new economy.",
        fa_description: "یک بازار جهانی برای صنعتگران که خالقان را مستقیماً به مخاطبان جهانی متصل می‌کند. اولین ستون اقتصاد جدید ما.",
        status: "Live",
        icon: <Blocks className="w-8 h-8 text-primary" />,
        link: "/"
    },
    {
        name: "OpenMind Nexus (هوش مصنوعی احساس‌محور)",
        description: "A revolutionary emotion-based AI platform. It bridges the gap between digital intelligence and human soul, designed for cognitive expansion.",
        fa_description: "یک پلتفرم انقلابی هوش مصنوعی احساس‌محور. این پروژه پلی میان هوش دیجیتال و روح انسانی است که برای گسترش شناختی طراحی شده است.",
        status: "Live",
        icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
        link: "https://openmind-nexuse-dbbbbb.netlify.app/",
        isExternal: true
    },
    {
        name: "LingoView (آپ گویا)",
        description: "A revolutionary educational platform focused on building 'capability', not just providing knowledge. Starting with language, expanding to all skills.",
        fa_description: "یک پلتفرم آموزشی انقلابی که بر ساختن «توانایی» تمرکز دارد، نه فقط ارائه دانش. شروع با زبان، و گسترش به تمام مهارت‌ها.",
        status: "Coming Soon",
        icon: <BrainCircuit className="w-8 h-8 text-muted-foreground" />,
        link: "/lingoview"
    },
    {
        name: "Nava Studio (استودیو نوا)",
        description: "An AI-powered suite for music creation. Generate melodies, write lyrics, produce songs, and create stunning music videos and karaoke tracks.",
        fa_description: "یک مجموعه ابزار مجهز به هوش مصنوعی برای خلق موسیقی. ملودی بسازید، شعر بنویسید، آهنگ تولید کنید و موزیک ویدیوها و ترک‌های کارائوکه خیره‌کننده بسازید.",
        status: "Planned",
        icon: <Mic className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Hamnava (هم‌نوا)",
        description: "The social heart of our music ecosystem. Connect with artists, share your creations, collaborate on new projects, and discover emerging talent.",
        fa_description: "قلب اجتماعی اکوسیستم موسیقی ما. با هنرمندان ارتباط برقرار کنید، آثار خود را به اشتراک بگذارید، در پروژه‌های جدید همکاری کنید و استعدادهای نوظهور را کشف نمایید.",
        status: "Planned",
        icon: <Users className="w-8 h-8 text-muted-foreground" />
    },
     {
        name: "Ghese Go (قصه‌گو)",
        description: "A magical space for children's stories, educational content, and a digital vault for capturing precious childhood moments like birthdays and milestones.",
        fa_description: "یک فضای جادویی برای قصه‌های کودکان، محتوای آموزشی و یک صندوقچه دیجیتال برای ثبت لحظات ارزشمند کودکی مانند تولدها و دستاوردهای شیرین.",
        status: "Planned",
        icon: <BookOpen className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Afarinesh Hub (آفرینش هاب)",
        description: "The central hub for creators. Leverage AI tools for content creation, connect with other visionaries, and bring your ideas to life within Tavana City.",
        fa_description: "هاب مرکزی برای آفرینش‌گران. از ابزارهای هوش مصنوعی برای تولید محتوا استفاده کنید، با دیگر ایده‌پردازان متصل شوید و ایده‌های خود را در شهر توانا به واقعیت تبدیل کنید.",
        status: "Coming Soon",
        icon: <Sparkles className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Siavash Studio (استودیو سیاوش)",
        description: "An exclusive, invitation-only virtual studio for a curated collective of elite, versatile specialists. This is the inner circle of Tavana City's master creators.",
        fa_description: "یک استودیوی مجازی انحصاری و دعوتی برای مجموعه‌ای از متخصصان زبده و همه‌فن‌حریف. این حلقه داخلی استادان و خالقان شهر توانا است.",
        status: "Planned",
        icon: <Diamond className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Tavana Work (توانا کار)",
        description: "The future-of-work platform. Find freelance opportunities, advertise your skills, and leverage AI to enhance your capabilities. Merit over resumes.",
        fa_description: "پلتفرم آینده‌ی کار. فرصت‌های فریلنسری پیدا کنید، مهارت‌های خود را تبلیغ کنید و از هوش مصنوعی برای افزایش توانایی‌هایتان بهره ببرید. شایستگی فراتر از رزومه.",
        status: "Coming Soon",
        icon: <Briefcase className="w-8 h-8 text-muted-foreground" />
    },
     {
        name: "Bazi Land (بازی لند)",
        description: "The entertainment and gaming wing of Tavana City, where playing games creates value and connects the community in new, exciting ways.",
        fa_description: "بازوی سرگرمی و بازی شهر توانا، جایی که بازی کردن، ارزش خلق می‌کند و جامعه را به شیوه‌هایی نوین و هیجان‌انگیز به هم متصل می‌سازد.",
        status: "Planned",
        icon: <ToyBrick className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Mehr Bank (مهر بانک)",
        description: "A community-driven micro-investment and funding platform designed to support new projects and ideas that align with the ecosystem's values.",
        fa_description: "یک پلتفرم سرمایه‌گذاری خرد و تأمین مالی جامعه‌محور که برای حمایت از پروژه‌ها و ایده‌های جدید همسو با ارزش‌های اکوسیستم طراحی شده است.",
        status: "Planned",
        icon: <Banknote className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Unity Chain (زنجیره وحدت)",
        description: "Our native digital currency and blockchain infrastructure, designed to facilitate a fair, transparent, and self-sustaining economy within Tavana City.",
        fa_description: "ارز دیجیتال بومی و زیرساخت بلاکچین ما که برای تسهیل یک اقتصاد عادلانه، شفاف و خودپایدار در شهر توانا طراحی شده است.",
        status: "Planned",
        icon: <LinkIcon className="w-8 h-8 text-muted-foreground" />
    }
];

export default function EcosystemPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/20">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Blocks className="w-10 h-10 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold">The FB New Meta Ecosystem</h1>
                        <p className="mt-2 text-xl text-muted-foreground">The Executive Arms of Tavana City (بازوهای اجرایی شهر توانا)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ecosystemApps.map((app) => (
                            <Card key={app.name} className="flex flex-col group hover:shadow-lg transition-all duration-300 border-primary/5 hover:border-primary/20">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-4">
                                            {app.icon}
                                            <CardTitle className="font-headline text-xl">{app.name}</CardTitle>
                                        </div>
                                        <Badge variant={app.status === 'Live' ? 'default' : 'outline'} className={app.status === 'Live' ? 'bg-green-600/20 text-green-700 border-green-600/50 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/50' : ''}>
                                            {app.status === 'Live' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                                            {app.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-foreground/80">{app.description}</p>
                                    <p className="text-sm text-muted-foreground mt-2">({app.fa_description})</p>
                                    
                                    {app.link && (
                                        <div className="mt-4 pt-4 border-t border-primary/5">
                                            {app.isExternal ? (
                                                <a 
                                                    href={app.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-primary font-bold text-sm flex items-center gap-2 hover:underline"
                                                >
                                                    ورود به برنامه <ExternalLink className="w-4 h-4" />
                                                </a>
                                            ) : (
                                                <Link 
                                                    href={app.link}
                                                    className="text-primary font-bold text-sm flex items-center gap-2 hover:underline"
                                                >
                                                    مشاهده جزئیات <ExternalLink className="w-4 h-4" />
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-16 space-y-6">
                        <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 max-w-4xl mx-auto shadow-inner">
                            <p className="text-xl font-headline font-bold text-primary mb-4">سوگند به همت و اصالت</p>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                تمام این منظومه، از «فرش بازار» تا «OpenMind Nexus»، گواهی بر یک حقیقت است: برای کسی که بر سر سفره‌ی پربرکت هنر ایران بزرگ شده و همت عالی را از اسطوره‌ای چون <span className="font-bold text-foreground">حاج حسین علیمیری</span> آموخته، محدودیت معنا ندارد. حتی با یک گوشی کوچک، می‌توان دنیاهایی بزرگ آفرید.
                            </p>
                            <p className="text-sm text-muted-foreground mt-4 italic">
                                "In the memory of Haj Hossein Alimiri and the family legacy of Alimiri Carpets & Sons. Knotted with capability, built on a dream."
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
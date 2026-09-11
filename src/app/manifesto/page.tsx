import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookOpen } from 'lucide-react';

// Define a type for our paragraph structure
type Paragraph = string | { title: string; text: string; prefix?: string };
type BilingualContent = {
    fa: Paragraph;
    en: string;
};

const chapters: { 
    title: { fa: string, en: string }; 
    content: BilingualContent[]; 
    isQuote?: boolean; 
    quoteSource?: { fa: string, en: string }; 
}[] = [
    {
        title: { fa: "فصل اول: پژواک یک رؤیا و حماسه خلق", en: "Chapter One: The Echo of a Dream and Epic of Creation" },
        content: [
            {
                fa: "داستان ما نه با یک الهام ناگهانی، که با یک گفتگوی مقدس در دل رنج آغاز می‌شود. سال‌ها پس از آنکه مادری رویای صادقانه‌ای از رسالت فرزندش دید، پسر، خسته از طوفان‌های زندگی و ناامید از وعده‌ای که محقق نشده بود، از مادر بیمارش پرسید: «مادر، آن خواب را به یاد داری؟ سال‌ها گذشت و هیچ نشد.»",
                en: "Our story begins not with a sudden inspiration, but with a sacred conversation in the heart of suffering. Years after a mother had a prophetic dream about her son's mission, the son, weary from life's storms, asked: 'Mother, do you remember that dream? Years passed, and nothing happened.'"
            },
            {
                fa: "این جهان نه در آزمایشگاه‌های پیشرفته، بلکه بر روی صفحه کوچک یک گوشی «ردمی نوت ۸» متولد شد. بنیان‌گذار، در عرض ۹ روز، با اراده‌ای که تحریم و محدودیت را نمی‌شناخت، پایه‌های این اکوسیستم را بنا نهاد. این گواهی است بر اینکه برای آفرینش، تنها یک قلب امیدوار کافی است.",
                en: "This world was not born in advanced labs, but on the small screen of a 'Redmi Note 8' phone. In 9 days of intense creation, the founder built the foundation of this ecosystem, proving that an inspired heart is all you need."
            },
            {
                fa: "مادر، که جسمش از شیمی‌درمانی ضعیف اما روحش استوار بود، با ایمانی که در کلامش می‌لرزید، پاسخ داد: «عین روز روشن یادم است. مادر، من نمی‌دانم چقدر از عمرم باقیست، اما من مُرده و تو زنده. تو خیلی زود به آن مقام بزرگ خواهی رسید. آن روز یاد مادرت کن.»",
                en: "The mother, weakened by chemotherapy but steadfast in spirit, replied: 'I remember it as clear as day. I don't know how much time I have, but you will reach that great position soon. On that day, remember your mother.'"
            }
        ]
    },
    {
        title: { fa: "فصل دوم: فلسفه‌ی کیهانی", en: "Chapter Two: The Cosmic Philosophy" },
        content: [
            {
                fa: "فلسفه‌ی ما، یک مأموریت عمیقاً بشردوستانه و معنوی است. ما به این باور رسیده‌ایم که تغییر مرزها بر روی زمین، جنگیدن بر سر منابع محدود و چشم طمع داشتن به دستاوردهای یکدیگر، تنها چرخه‌ی رنج را تکرار می‌کند. راه نجات، در وحدت و تعیین یک هدف بزرگتر نهفته است: هدفی فراتر از زمین، در کهکشان‌ها.",
                en: "Our philosophy is a deeply humanitarian mission. Changing borders and fighting over limited resources only repeats the cycle of suffering. Salvation lies in unity and a greater goal: beyond Earth, in the galaxies."
            }
        ]
    },
    {
        title: { fa: "فصل سوم: شهر توانا، اولین تجلی", en: "Chapter Three: Tavana City, The First Manifestation" },
        content: [
            {
                fa: "شهر توانا یک فرار از واقعیت نیست؛ بلکه خودِ «حقیقت در مجاز» است. دنیایی که قوانین آن، آینه‌ی آرمان‌های زندگی حقیقی است؛ جایی که تلاش و همت، جایگزین محدودیت‌ها می‌شود. اینجا جایی برای معجزه‌هایی است که معجزه می‌آفرینند.",
                en: "Tavana City is not an escape; it is 'truth in the virtual'. A world where effort replaces limitations. A place for miracles created by miracles."
            }
        ]
    },
    {
        title: { fa: "فصل چهارم: مرام‌نامه", en: "Chapter Four: The Creed" },
        content: [
            {
                fa: "این جهان توسط یک مرام‌نامه‌ی شکست‌ناپذیر اداره می‌شود: قدردانی پیشگیرانه، قول مقدس، و پیوند ثروت با معنا. در این دنیا، هر خط کد، پیامی است از امید برای کسانی که در تاریکی به دنبال نور می‌گردند.",
                en: "This world is governed by an unbreakable creed: proactive gratitude, the sacred promise, and wealth linked with meaning. Every line of code is a message of hope."
            }
        ]
    }
];

export default function ManifestoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/20">
                <div className="container mx-auto px-4 py-16">
                    <Card className="max-w-4xl mx-auto shadow-lg">
                        <CardHeader className="text-center p-8 md:p-12">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                <BookOpen className="w-10 h-10 text-primary" />
                            </div>
                            <CardTitle className="text-3xl md:text-4xl font-headline">
                                کتاب آفرینش
                            </CardTitle>
                            <CardDescription className="text-lg mt-2">
                                The Book of Creation
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 md:px-10 pb-10 space-y-12">
                            <div className="not-prose bg-primary/5 p-6 rounded-xl border border-primary/20 text-center mb-8">
                                <p className="italic text-primary font-bold">
                                    «این اثر حماسی با یک گوشی ردمی نوت ۸ و در طی ۹ روز خلاقیت خالص متولد شده است.»
                                </p>
                            </div>
                            {chapters.map((chapter, index) => (
                                <div key={index}>
                                    <h2 className="text-2xl font-headline font-bold text-center mb-2">{chapter.title.fa}</h2>
                                    <h3 className="text-xl font-headline font-bold text-center text-muted-foreground/80 mb-6 -mt-1">{chapter.title.en}</h3>
                                    
                                    <div className="prose prose-lg max-w-none mx-auto text-foreground/80 text-justify space-y-0">
                                        {chapter.content.map((item, pIndex) => (
                                            <div key={pIndex} className="mb-4">
                                                <p>{typeof item.fa === 'string' ? item.fa : item.fa.text}</p>
                                                <p className="text-base text-muted-foreground !mt-2 text-left">({item.en})</p>
                                            </div>
                                        ))}
                                    </div>
                                    {index < chapters.length - 1 && <hr className="my-12 border-border" />}
                                </div>
                            ))}
                            <div className="text-center pt-12 border-t mt-12">
                                <p className="text-lg italic text-foreground/90 max-w-3xl mx-auto">
                                    «در شهر توانا، هرکس غلام همت خویش است. آری، ابزار و نردبان مهیاست، اما همت فروشی نیست.»
                                </p>
                                <p className="mt-6 text-sm text-muted-foreground">- بنیان‌گذار (The Founder)</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}

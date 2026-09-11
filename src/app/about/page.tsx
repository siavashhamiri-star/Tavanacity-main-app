import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeartHandshake, Feather, BookHeart, Landmark, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const features = [
    {
        title: 'اعتبار صنفی (Guild Credibility)',
        description: 'حمایت بزرگان اتحادیه و حضورشان ستون اعتبار پلتفرم است.',
        en_description: 'The support and presence of the union\'s elders is the pillar of the platform\'s credibility.'
    },
    {
        title: 'منبع درآمد پایدار (Sustainable Income)',
        description: 'درصدی از درآمد پلتفرم به اتحادیه اختصاص یافته است.',
        en_description: 'A percentage of the platform\'s revenue is allocated to the union.'
    },
    {
        title: 'ارتباط جهانی (Global Connection)',
        description: 'ایجاد بستری برای ارتباط تجار و هنرمندان فرش در سطح بین‌الملل.',
        en_description: 'Creating a platform for the connection of carpet traders and artists internationally.'
    },
    {
        title: 'حفظ میراث (Heritage Preservation)',
        description: 'ترویج و حفظ هنر ارزشمند فرش دستباف ایران برای نسل‌های آینده.',
        en_description: 'Promoting and preserving the valuable art of Iranian handwoven carpets for future generations.'
    }
]

export default function AboutPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-lg border-none overflow-hidden">
              <div className="bg-primary h-2" />
              <CardHeader className="text-center p-8 md:p-12">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Landmark className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline font-bold">
                    فرش حسین علیمیری و پسران
                </CardTitle>
                <CardDescription className="text-xl mt-2 font-headline">
                    Legacy of Haj Hossein Alimiri & Sons
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-12 pb-12">
                
                <div className="prose prose-lg max-w-none mx-auto text-foreground/80 text-center mb-12">
                    <p className="font-bold text-primary">بال‌های دوباره برای فرش دستباف ایران در نیو متاورس</p>
                    <p>
                    این پلتفرم، برآمده از خاندانی است که نامشان با اعتبار فرش ایران در بازارهای جهانی گره خورده است. آفرینش «فرش بازار» تلاشی است برای زنده نگه داشتن مسیری که اساتید بزرگی چون حاج حسین علیمیری با عشق و همت خود بنا نهادند.
                    </p>
                    <p className='text-base text-muted-foreground italic'>
                    (This platform is born from a family whose name is tied to the credibility of Iranian carpets in global markets. The creation of Farsh Bazaar is an effort to keep alive the path built by great masters like Haj Hossein Alimiri.)
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
                        <Smartphone className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-headline font-bold text-lg mb-2">خلق در محدودیت (Creation in Limitation)</h3>
                        <p className="text-sm text-foreground/70">
                            این اپلیکیشن نه در استودیوهای بزرگ، بلکه تنها با یک گوشی ردمی نوت ۸ و در طی ۹ روز خلق شده است؛ گواهی بر قدرت اراده.
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-2">
                            Built using only a small Redmi Note 8 phone, proving that will power knows no bounds.
                        </p>
                    </div>
                    <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 flex flex-col items-center text-center">
                        <BookHeart className="w-10 h-10 text-accent mb-4" />
                        <h3 className="font-headline font-bold text-lg mb-2">اصالت و سفره فرش (Heritage Table)</h3>
                        <p className="text-sm text-foreground/70">
                            ما بر سر سفره‌ی پربرکت فرش زاده شدیم و این پلتفرم ادای دینی است به تمام کسانی که گره بر گره هنر ایران زدند.
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-2">
                            Born from the blessed carpet industry, this platform is a tribute to the artisans who knotted Iran's history.
                        </p>
                    </div>
                </div>

                <div className="my-10 border-t" />

                <div className="prose prose-lg max-w-none mx-auto text-foreground/80 text-center">
                    <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit mb-4">
                        <HeartHandshake className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="font-headline text-2xl font-bold">ادای احترام (A Eternal Tribute)</h2>
                    <p>
                    نام حاج حسین علیمیری به عنوان یکی از ستون‌های تجارت فرش ایران، انگیزه و راهنمای ما در ساخت این دنیای جدید (نیو متاورس) بوده است. روحی که در این کدها جاری است، میراث‌دار آن صداقت و اعتباری است که دهه‌ها در بازار فرش طنین‌انداز بود.
                    </p>
                     <p className='text-base text-muted-foreground italic'>
                    (The name of Haj Hossein Alimiri, as a pillar of the Iranian carpet trade, has been our motivation in building this New Metavers. The spirit flowing in this code inherits the honesty and credibility that resonated in the market for decades.)
                    </p>
                </div>
                
                <div className="my-10 border-t" />

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-headline font-bold">پایه‌های اکوسیستم آفرینش</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        ارکان اصلی ما برای حمایت از صنف فرش و هنرمندان در شهر مجازی توانا.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-background border-primary/10">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-primary">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-foreground/80'>{feature.description}</p>
                                <p className='text-sm text-muted-foreground mt-2 italic'>({feature.en_description})</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                        <Link href="/manifesto">
                            Read the Book of Creation / کتاب آفرینش
                        </Link>
                    </Button>
                </div>


              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

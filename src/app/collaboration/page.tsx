
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { Handshake, DollarSign, Megaphone, BrainCircuit, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
  
const partnershipAreas = [
    {
        id: 'invest',
        icon: <DollarSign className="w-10 h-10 text-primary" />,
        title: 'Invest in the Vision / سرمایه‌گذاری در چشم‌انداز',
        description: 'We are seeking partners who believe in our mission to build a new digital economy based on meaning and capability. Your investment can fuel the growth of the FB New Meta ecosystem, from Farsh Bazaar to Tavana City.',
        fa_description: 'ما به دنبال شرکایی هستیم که به رسالت ما برای ساختن یک اقتصاد دیجیتال جدید مبتنی بر معنا و توانایی باور دارند. سرمایه‌گذاری شما می‌تواند به رشد اکوسیستم «FB New Meta»، از فرش بازار تا شهر توانا، کمک کند.',
        link: 'mailto:info@fbnewmeta.com?subject=Investment%20Inquiry'
    },
    {
        id: 'amplify',
        icon: <Megaphone className="w-10 h-10 text-primary" />,
        title: 'Amplify the Story / روایت‌گر داستان ما باشید',
        description: 'If you are a content creator, journalist, or social media influencer, we invite you to collaborate. Help us tell the story of Farsh Bazaar and our larger vision for a connected, empowered world.',
        fa_description: 'اگر شما یک تولیدکننده محتوا، روزنامه‌نگار یا فعال شبکه‌های اجتماعی هستید، از شما برای همکاری دعوت می‌کنیم. به ما کمک کنید تا داستان فرش بازار و چشم‌انداز بزرگتر ما برای یک دنیای متصل و توانمند را روایت کنیم.',
        link: 'mailto:info@fbnewmeta.com?subject=Content%20Collaboration'
    },
    {
        id: 'talent',
        icon: <BrainCircuit className="w-10 h-10 text-primary" />,
        title: 'Lend Your Talent / استعداد خود را به اشتراک بگذارید',
        description: 'Are you an expert in education, technology, community management, or international trade? We are building a new world and need pioneers. Join us as a consultant or a core team member to build this new paradigm.',
        fa_description: 'آیا شما در زمینه آموزش، فناوری، مدیریت جامعه یا تجارت بین‌الملل متخصص هستید؟ ما در حال ساختن دنیایی جدید هستیم و به پیشگامان نیاز داریم. به عنوان مشاور یا عضو تیم اصلی به ما بپیوندید تا این پارادایم جدید را بسازیم.',
        link: 'mailto:info@fbnewmeta.com?subject=Talent%20Partnership'

    }
]

  export default function PartnershipPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-lg border-none">
              <CardHeader className="text-center p-8 md:p-12">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Handshake className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-headline">
                  Join the Mission / همسفر شوید
                </CardTitle>
                <CardDescription className="text-lg mt-2 max-w-2xl mx-auto">
                    Our vision is vast, and our mission is to build new worlds. This is not a journey we can take alone. We invite you to become a partner in this creation.
                    <br />
                    <span className="text-base text-muted-foreground/80">(چشم‌انداز ما گسترده است و رسالت ما ساختن دنیاهای جدید. این سفری نیست که به تنهایی بتوانیم آن را طی کنیم. ما از شما دعوت می‌کنیم تا در این آفرینش، یک شریک و همسفر باشید.)</span>
                </CardDescription>
                <div className="not-prose mt-6">
                    <Button asChild variant="outline">
                        <Link href="/manifesto">
                            Read Our Book of Creation <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </CardHeader>
              <CardContent className="px-6 md:px-10 pb-10 space-y-8">
                <div className="border-t my-8" />
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {partnershipAreas.map((area) => (
                        <Card key={area.id} id={area.id} className="bg-card/50 hover:shadow-md transition-shadow">
                             <CardHeader>
                                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                    <div className="bg-primary/10 p-3 rounded-full w-fit flex-shrink-0">
                                        {area.icon}
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl font-headline">{area.title}</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="text-center md:text-left">
                                <p className='text-foreground/80'>{area.description}</p>
                                <p className='text-sm text-muted-foreground mt-2'>({area.fa_description})</p>
                                <div className='mt-6 text-center'>
                                     <Button asChild>
                                        <Link href={area.link}>
                                            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  

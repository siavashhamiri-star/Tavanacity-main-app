import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { BrainCircuit } from 'lucide-react';
  
  export default function LegwitPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <BrainCircuit className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">
                  آپ گویا (LingoView): از دانش تا توانایی
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  LingoView App: From Knowledge to Capability
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-center text-foreground/80 mx-auto">
                <p>
                فلسفه‌ی ما این است که آموزش واقعی، به مدرک و گواهی‌نامه محدود نمی‌شود؛ آموزش واقعی، خلق «توانایی» است. «پروژه آفرینش» در گام‌های بعدی خود، بر ساختن انسان‌های توانا تمرکز دارد.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                (Our philosophy is that true education is not limited to degrees; it's the creation of 'capability'. 'Project Afarinesh' focuses on building empowered individuals.)
                </p>
                <div className="my-8 border-t" />
                <h3 className='font-headline text-2xl'>متدولوژی ما (Our Methodology)</h3>
                <p>
                 در «آپ گویا»، ما با قدردانی از زبان مادری، پل‌هایی برای ارتباط جهانی خواهیم ساخت. زبان، تنها یک ابزار ارتباط نیست، بلکه پلی برای ایجاد وحدت و درک متقابل فرهنگ‌هاست. این پروژه، آغازگر راهی برای صدور این متدولوژی آموزشی به تمام حوزه‌ها در «شهر توانا» خواهد بود.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                (In Gooya, with appreciation for our mother tongue, we will build bridges for global connection. Language is a bridge for creating unity. This project will export this educational methodology to all fields within 'Tavana City'.)
                </p>
                 <div className="mt-8 pt-6 border-t">
                    <p className="font-semibold text-foreground">
                    ما از تمام متخصصان و مدرسانی که به این پارادایم جدید آموزشی ایمان دارند، برای همکاری دعوت می‌کنیم.
                    </p>
                    <p className="text-sm text-muted-foreground">
                    (We invite all specialists who believe in this new educational paradigm to collaborate.)
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
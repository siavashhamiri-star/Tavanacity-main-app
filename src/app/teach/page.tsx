
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
  
  export default function TeachPage() {
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
                  انقلابی در آموزش: از دانش تا توانایی
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  A Revolution in Education: From Knowledge to Capability
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none text-center text-foreground/80 mx-auto">
                <p>
                ما در آستانه‌ی یک تحول بزرگ در دنیای آموزش هستیم. فلسفه‌ی ما این است که آموزش واقعی، به مدرک و گواهی‌نامه محدود نمی‌شود؛ آموزش واقعی، خلق «توانایی» است. ما در حال توسعه‌ی یک متدولوژی نوین هستیم که دانش نظری را به مهارت عملی و کاربردی در صنعت، تجارت، کشاورزی و هنر پیوند می‌زند.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                (We are on the verge of a major transformation in the world of education. Our philosophy is that true education is not limited to degrees and certificates; true education is the creation of 'capability'. We are developing a new methodology that links theoretical knowledge to practical, applicable skills in industry, trade, agriculture, and art.)
                </p>
                <div className="my-8 border-t" />
                <h3 className='font-headline text-2xl'>پروژه لگویت (Project Legwit): اولین قدم</h3>
                <p>
                اولین تجلی این دیدگاه، پروژه «لگویت» خواهد بود. در «لگویت»، ما با قدردانی از زبان مادری، فارسی را به جهانیان و انگلیسی را به فارسی‌زبانان خواهیم آموخت. زبان، تنها یک ابزار ارتباط نیست، بلکه پلی برای ایجاد وحدت و درک متقابل فرهنگ‌هاست. این پروژه، آغازگر راهی برای صدور این متدولوژی آموزشی به تمام حوزه‌ها خواهد بود.
                </p>
                <p className="text-base text-muted-foreground mt-2">
                (The first manifestation of this vision will be 'Project Legwit'. In Legwit, with appreciation for our mother tongue, we will teach Persian to the world and English to Persian speakers. Language is not just a tool for communication; it is a bridge for creating unity and mutual understanding between cultures. This project will be the beginning of the path to export this educational methodology to all fields.)
                </p>
                 <div className="mt-8 pt-6 border-t">
                    <p className="font-semibold text-foreground">
                    ما از تمام متخصصان، مدرسان و نوآورانی که به این پارادایم جدید آموزشی ایمان دارند، برای همکاری دعوت می‌کنیم.
                    </p>
                    <p className="text-sm text-muted-foreground">
                    (We invite all specialists, instructors, and innovators who believe in this new educational paradigm to collaborate. Details will be announced.)
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
  

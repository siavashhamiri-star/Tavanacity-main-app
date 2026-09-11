import Link from 'next/link';
import { Logo } from './logo';
import { Sparkles, Smartphone, Heart, ExternalLink, HeartPulse } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Logo className="w-8 h-8" />
              <span className="font-bold font-headline text-2xl tracking-tight text-primary">Farsh Bazaar</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
              این پلتفرم، اولین تجلی از اکوسیستم <span className="font-bold text-primary">«FB New Meta»</span> و <span className="font-bold text-primary">«شهر مجازی توانا»</span> است. 
              میراثی برآمده از عشق، اصالت و همت عالی در نیو متاورس.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground bg-primary/5 p-2 rounded-lg border border-primary/10 w-fit">
              <Smartphone className="w-3 h-3 text-primary" />
              <span>خلق شده تنها با یک گوشی ردمی نوت ۸ در ۹ روز</span>
            </div>
          </div>

          {/* AI Projects Section */}
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              هوش مصنوعی آفرینش
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/lingoview" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  آپ گویا (LingoView)
                </Link>
              </li>
              <li>
                <a 
                  href="https://openmind-nexuse-dbbbbb.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rose-600 font-bold hover:underline flex items-center gap-2"
                >
                  <HeartPulse className="w-4 h-4" />
                  OpenMind Nexus (هوش مصنوعی احساس‌محور) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg">دسترسی سریع</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">درباره ما</Link></li>
              <li><Link href="/manifesto" className="text-muted-foreground hover:text-primary">کتاب آفرینش</Link></li>
              <li><Link href="/ecosystem" className="text-muted-foreground hover:text-primary">اکوسیستم</Link></li>
              <li><Link href="/feedback" className="text-muted-foreground hover:text-primary">بازخورد</Link></li>
              <li><Link href="/collaboration" className="text-muted-foreground hover:text-primary">مشارکت</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">حریم خصوصی</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Farsh Bazaar. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
              در بزرگداشت نام <span className="font-bold text-foreground">حاج حسین علیمیری</span> و میراث <span className="font-bold text-foreground">فرش علیمیری و پسران</span> <Heart className="w-2 h-2 fill-primary text-primary" />
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-bold text-primary/60">
            <span>نیو متاورس</span>
            <span className="w-1 h-1 bg-primary/20 rounded-full" />
            <span>شهر مجازی توانا</span>
            <span className="w-1 h-1 bg-primary/20 rounded-full" />
            <span>پروژه آفرینش</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

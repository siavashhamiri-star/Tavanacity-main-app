
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function EmergencyGuide() {
    return (
      <div className="min-h-screen bg-white" dir="rtl">
        <div className="p-2 space-y-10">
            <h1 className="bg-red-600 text-white p-4">نجات کد (فوری)</h1>
            
            <div className="border-8 border-black p-4 bg-yellow-200">
                <p className="text-4xl font-bold">۱. دکمه دانلود کجاست؟</p>
                <p className="text-3xl">در بالاترین قسمت کل سایت (نه چت)، کنار اسم پروژه، یک علامت فلش رو به پایین است. آن را بزنید.</p>
            </div>

            <div className="border-8 border-black p-4 bg-green-200">
                <p className="text-4xl font-bold">۲. اگر دکمه را نمی‌بینید:</p>
                <p className="text-3xl">صفحه را به چپ و راست بکشید (اسکرول افقی). ممکن است در نیمه شکسته باشد.</p>
            </div>

            <Button asChild className="w-full h-40">
                <Link href="/">برگشت به صفحه اصلی</Link>
            </Button>
            
            <div className="bg-black text-white p-4">
                <p className="text-2xl">بنیان‌گذار عزیز، گوشی را به شارژ بزنید. کدها در امنیت هستند.</p>
            </div>
        </div>
      </div>
    );
}

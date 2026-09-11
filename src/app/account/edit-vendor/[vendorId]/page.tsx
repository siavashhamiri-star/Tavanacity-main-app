
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFirestore, useUser, useDoc } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { toast } from '@/hooks/use-toast';
import type { Vendor } from '@/lib/types';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { Loader2 } from 'lucide-react';

export default function EditVendorPage() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const params = useParams();
  const vendorId = params.vendorId as string;

  const firestore = useFirestore();
  const { data: user, isLoading: userLoading } = useUser();
  
  const vendorRef = useMemo(() => 
    vendorId ? doc(firestore, 'vendors', vendorId) : undefined
  , [firestore, vendorId]);

  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);

  useEffect(() => {
    if (vendor) {
      const typedVendor = vendor as Vendor;
      setName(typedVendor.name);
      setLocation(typedVendor.location);
      setBio(typedVendor.bio);
      setSpecialties(typedVendor.specialties?.join(', ') || '');
    }
  }, [vendor]);
  
  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/login');
    }
    if (!userLoading && user && !vendorLoading && vendor) {
        if(vendor.userId !== user.uid) {
            toast({ title: "عدم دسترسی", variant: "destructive"});
            router.push('/account');
        }
    }
  }, [user, userLoading, vendor, vendorLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user || !vendorId || !vendorRef) {
      setError('خطایی رخ داد. لطفا دوباره تلاش کنید.');
      return;
    }
    
    if (vendor?.userId !== user.uid) {
        toast({ title: "عدم دسترسی", description: "شما اجازه ویرایش این نمایشگاه را ندارید.", variant: "destructive" });
        return;
    }

    setIsSubmitting(true);
    const vendorUpdateData = {
        name,
        location,
        bio,
        specialties: specialties.split(',').map(s => s.trim()).filter(Boolean),
        avatarUrl: user.photoURL || `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`,
    };

    try {
        await updateDoc(vendorRef, vendorUpdateData);
        toast({
          title: "ویرایش موفق!",
          description: "اطلاعات نمایشگاه شما با موفقیت به‌روزرسانی شد.",
        });
        router.push(`/vendors/${vendorId}`);
    } catch (serverError: any) {
        console.error('Error updating vendor profile in Firestore:', serverError);
        const permissionError = new FirestorePermissionError({
            path: vendorRef.path,
            operation: 'update',
            requestResourceData: vendorUpdateData,
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(serverError.message);
        toast({
          title: "خطا در به‌روزرسانی",
          description: serverError.message,
          variant: "destructive",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  if (userLoading || vendorLoading) {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p>در حال بارگذاری ویرایشگر نمایشگاه...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!vendor || vendor.userId !== user?.uid) {
     return null; // Handle via redirect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">مدیریت نمایشگاه مجازی</CardTitle>
              <CardDescription>
                اطلاعات نمایشگاه و برند خود را در اینجا به‌روز کنید.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">نام نمایشگاه یا گالری</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="مثال: فرش علیمیری و پسران"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">موقعیت مکانی (شهر/منطقه)</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="مثال: بازار تهران، سرای بوعلی"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="specialties">تخصص‌ها (با کاما جدا کنید)</Label>
                  <Input
                    id="specialties"
                    type="text"
                    placeholder="مثال: فرش کلاسیک، ابریشم، گبه"
                    value={specialties}
                    onChange={(e) => setSpecialties(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bio">درباره فروشگاه و سوابق</Label>
                  <Textarea
                    id="bio"
                    placeholder="شرح مختصری از اصالت و سوابق هنری خود بنویسید."
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={6}
                  />
                </div>
                
                {error && <p className="text-destructive text-sm font-bold">{error}</p>}
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin" /> : 'ذخیره تغییرات نمایشگاه'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

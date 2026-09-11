
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFirestore, useUser, useDoc } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useRouter, useParams, useSearchParams, notFound } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { toast } from '@/hooks/use-toast';
import type { Carpet } from '@/lib/types';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { Loader2 } from 'lucide-react';

export default function EditCarpetPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [consignment, setConsignment] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const carpetId = params.vendorId as string; 
  const vendorId = searchParams.get('vendorId');
  
  if (!vendorId) {
    notFound();
  }

  const firestore = useFirestore();
  const { data: user, isLoading: userLoading } = useUser();

  const carpetRef = useMemo(() => 
    vendorId && carpetId ? doc(firestore, 'vendors', vendorId, 'carpets', carpetId) : undefined
  , [firestore, vendorId, carpetId]);

  const { data: carpet, loading: carpetLoading } = useDoc(carpetRef);
  
  const vendorRef = useMemo(() => 
    vendorId ? doc(firestore, 'vendors', vendorId) : undefined
  , [firestore, vendorId]);

  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);

  useEffect(() => {
    if (carpet) {
      const typedCarpet = carpet as Carpet;
      setName(typedCarpet.name);
      setDescription(typedCarpet.description);
      setPrice(typedCarpet.price);
      setImageUrl(typedCarpet.imageUrl);
      setConsignment(typedCarpet.consignment || false);
    }
  }, [carpet]);

  const isOwner = user && vendor && user.uid === vendor.userId;

  useEffect(() => {
    if (!userLoading && !vendorLoading && user && vendor) {
      if (vendor.userId !== user.uid) {
        toast({ title: "عدم دسترسی", description: "شما اجازه ویرایش این مورد را ندارید.", variant: "destructive" });
        router.push(`/vendors/${vendorId}`);
      }
    } else if (!userLoading && !user) {
        router.push('/login');
    }
  }, [user, userLoading, vendor, vendorLoading, router, vendorId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isOwner || !carpetRef) {
      setError('خطایی رخ داد. لطفا دوباره تلاش کنید.');
      return;
    }

    setIsSubmitting(true);
    const carpetUpdateData = {
        name,
        description,
        price,
        imageUrl,
        consignment,
    };

    try {
        await updateDoc(carpetRef, carpetUpdateData);
        toast({
          title: 'به‌روزرسانی موفق!',
          description: 'جزئیات فرش با موفقیت ذخیره شد.',
        });
        router.push(`/carpets/${carpetId}?vendorId=${vendorId}`);
    } catch (serverError: any) {
        console.error('Error updating carpet in Firestore:', serverError);
        const permissionError = new FirestorePermissionError({
            path: carpetRef.path,
            operation: 'update',
            requestResourceData: carpetUpdateData,
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(serverError.message);
        toast({
          title: 'خطا در به‌روزرسانی',
          description: serverError.message,
          variant: 'destructive',
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  if (userLoading || carpetLoading || vendorLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p>در حال بارگذاری ویرایشگر...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isOwner) {
    return null; // Redirect logic will handle this
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">ویرایش جزئیات فرش</CardTitle>
              <CardDescription>
                تغییرات مورد نظر خود را در فرم زیر وارد نمایید.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">نام یا عنوان فرش</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">قیمت</Label>
                  <Input
                    id="price"
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="imageUrl">آدرس تصویر</Label>
                  <Input
                    id="imageUrl"
                    type="text"
                    required
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  {imageUrl && <img src={imageUrl} alt="Carpet preview" className="mt-2 rounded-md object-cover w-full h-48 border" />}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">توضیحات و شناسنامه</Label>
                  <Textarea
                    id="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={6}
                  />
                </div>

                <div className="flex items-center space-x-2 gap-2">
                  <Checkbox
                    id="consignment"
                    checked={consignment}
                    onCheckedChange={(checked) => setConsignment(checked as boolean)}
                  />
                  <Label
                    htmlFor="consignment"
                    className="text-sm font-medium leading-none"
                  >
                    درخواست فروش در کاتالوگ تخصصی فرش بازار (امانی)
                  </Label>
                </div>

                {error && <p className="text-destructive text-sm font-bold">{error}</p>}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin" /> : 'ذخیره تغییرات نهایی'}
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

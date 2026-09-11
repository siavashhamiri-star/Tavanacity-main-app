
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createStory, StoryState } from '@/app/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';

const initialState: StoryState = { message: null, story: null, errors: {} };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          در حال بافتن رویا...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          تولید داستان هوشمند
        </>
      )}
    </Button>
  );
}

export function StoryGenerator() {
  const [state, formAction] = useActionState(createStory, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageDataUri, setImageDataUri] = useState<string | null>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: 'خطا',
        description: state.message,
        variant: 'destructive',
      });
    }
    if (state.story) {
      formRef.current?.reset();
      setImageDataUri(null);
    }
  }, [state, toast]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setImageDataUri(loadEvent.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setImageDataUri(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold">افسانه‌ی فرش جادویی</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          هر فرش داستانی دارد که در تار و پود آن بافته شده است. عکسی آپلود کنید یا نامی وارد کنید تا تاریخ، هنر و اصالت آن را زنده کنیم.
        </p>

        <Card className="mt-8">
          <form action={formAction} ref={formRef}>
            <CardHeader>
              <CardTitle className="font-headline">تولید محتوای هوشمند</CardTitle>
              <CardDescription>
                تصویر فرش را آپلود کنید یا نوع آن را بنویسید و سبک نگارش را انتخاب کنید.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-2">
                <Label htmlFor="image">تصویر فرش (اختیاری)</Label>
                {imageDataUri ? (
                    <div className="relative">
                        <Image src={imageDataUri} alt="Carpet preview" width={400} height={300} className="rounded-md object-cover w-full h-48" />
                        <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={handleRemoveImage}>
                            <X className="h-4 w-4" />
                            <span className="sr-only">حذف تصویر</span>
                        </Button>
                    </div>
                ) : (
                    <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <ImageIcon className="w-8 h-8 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">برای آپلود کلیک کنید</span></p>
                            <p className="text-xs text-muted-foreground">PNG, JPG یا WEBP</p>
                        </div>
                        <Input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                    </label>
                )}
                 <input type="hidden" name="imageDataUri" value={imageDataUri || ''} />
              </div>
              
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">یا</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="carpetType">نوع یا منطقه فرش</Label>
                <Input
                  id="carpetType"
                  name="carpetType"
                  placeholder="مثال: تبریز ریزبافت، نائین ابریشم"
                  disabled={!!imageDataUri}
                />
                {state.errors?.carpetType && (
                  <p className="text-sm text-destructive">{state.errors.carpetType[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="style">سبک روایت</Label>
                <Select name="style" defaultValue="Narrative">
                  <SelectTrigger id="style">
                    <SelectValue placeholder="انتخاب سبک..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Narrative">روایی (Narrative)</SelectItem>
                    <SelectItem value="Historical">تاریخی (Historical)</SelectItem>
                    <SelectItem value="Poetic">شاعرانه (Poetic)</SelectItem>
                    <SelectItem value="Mystical">عرفانی (Mystical)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>

      <div className="mt-8 md:mt-0">
         <Card className="h-full min-h-[400px]">
           <CardHeader>
            <CardTitle className="font-headline">داستان بافته شده</CardTitle>
            <CardDescription>روایت هوشمند شما در اینجا ظاهر می‌شود.</CardDescription>
           </CardHeader>
           <CardContent>
             {state.story ? (
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap leading-relaxed">
                    {state.story}
                </div>
             ) : (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
                    <Wand2 className="w-12 h-12 mb-4 animate-pulse text-primary/30"/>
                    <p>در انتظار خلق یک شاهکار...</p>
                </div>
             )}
           </CardContent>
         </Card>
      </div>
    </div>
  );
}

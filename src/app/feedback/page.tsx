'use client';
import { useState } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Lightbulb, Send } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function FeedbackPage() {
  const [suggestionText, setSuggestionText] = useState('');
  const [userType, setUserType] = useState<'buyer' | 'vendor' | ''>('');
  const [error, setError] = useState<string | null>(null);
  const firestore = useFirestore();
  const { data: user, isLoading } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to submit feedback.',
        variant: 'destructive',
      });
      return;
    }

    if (!suggestionText.trim() || !userType) {
      setError('Please select your role and write a suggestion.');
      return;
    }

    addDoc(collection(firestore, 'suggestions'), {
      suggestionText,
      userType,
      userId: user.uid,
      userName: user.displayName,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        toast({
          title: 'Feedback Submitted!',
          description:
            "Thank you for your suggestion. We appreciate you helping us improve.",
        });

        setSuggestionText('');
        setUserType('');
      })
      .catch((err) => {
        console.error('Error submitting feedback to Firestore:', err);
        setError(err.message);
        toast({
          title: 'Error Submitting Feedback',
          description: err.message,
          variant: 'destructive',
        });
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto space-y-12">
            <Card>
              <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                      <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                <CardTitle className="text-2xl font-headline mt-4">
                  Share Your Suggestions
                </CardTitle>
                <CardDescription>
                  Help us improve Farsh Bazaar. We value feedback from both our
                  buyers and our vendors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="userType">I am a...</Label>
                    <Select
                      onValueChange={(value: 'buyer' | 'vendor') =>
                        setUserType(value)
                      }
                      value={userType}
                    >
                      <SelectTrigger id="userType">
                        <SelectValue placeholder="Select your role..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buyer">Buyer / User (خریدار)</SelectItem>
                        <SelectItem value="vendor">
                          Vendor / Colleague (فروشنده / همکار)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="suggestion">Your Suggestion</Label>
                    <Textarea
                      id="suggestion"
                      placeholder="What's on your mind? How can we make things better?"
                      required
                      value={suggestionText}
                      onChange={(e) => setSuggestionText(e.target.value)}
                      rows={6}
                    />
                  </div>

                  {error && <p className="text-destructive text-sm">{error}</p>}

                  <Button type="submit" className="w-full" disabled={!user && !isLoading}>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Suggestion
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl font-headline">A Note for the Guild</CardTitle>
                    <CardDescription>Support for the Carpet Union and Artisans.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                    <p>
                        Farsh Bazaar is committed to supporting the traditional carpet industry. A percentage of the platform's proceeds is dedicated to the Carpet Union to foster artisan training and support.
                    </p>
                    <Separator />
                    <p className="italic text-muted-foreground">
                        "We were born from the table of the magnificent art of Iranian carpets. This platform is a tribute to the grand name of Haj Hossein Alimiri."
                    </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
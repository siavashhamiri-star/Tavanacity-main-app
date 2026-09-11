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
import { useFirestore, useUser } from '@/firebase';
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { toast } from '@/hooks/use-toast';

export default function BecomeVendorPage() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const firestore = useFirestore();
  const { data: user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
    if (!isLoading && user?.isVendor) {
        router.push('/account');
    }
  }, [user, isLoading, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      setError('You must be logged in to create a vendor profile.');
      return;
    }

    const vendorsCollection = collection(firestore, 'vendors');
    const vendorData = {
        name,
        location,
        bio,
        specialties: specialties.split(',').map(s => s.trim()).filter(Boolean),
        userId: user.uid,
        avatarUrl: user.photoURL || `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`,
      };

    addDoc(vendorsCollection, vendorData)
      .then((vendorRef) => {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userUpdateData = {
            isVendor: true,
            vendorId: vendorRef.id,
        };
        updateDoc(userDocRef, userUpdateData)
            .then(() => {
                router.push(`/vendors/${vendorRef.id}`);
            })
            .catch(serverError => {
                 console.error('Error updating user profile to vendor:', serverError);
                 const permissionError = new FirestorePermissionError({
                    path: userDocRef.path,
                    operation: 'update',
                    requestResourceData: userUpdateData,
                });
                errorEmitter.emit('permission-error', permissionError);
                setError(serverError.message);
                toast({ title: "Error", description: "Could not update user profile to vendor.", variant: "destructive"})
            });
      })
      .catch(serverError => {
        console.error('Error creating vendor profile:', serverError);
        const permissionError = new FirestorePermissionError({
            path: vendorsCollection.path,
            operation: 'create',
            requestResourceData: vendorData
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(serverError.message);
        toast({ title: "Error", description: "Could not create vendor profile.", variant: "destructive"})
      });
  };

  if (isLoading || !user) {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Become a Vendor</CardTitle>
              <CardDescription>
                Create your virtual showroom on Farsh Bazaar and reach a global audience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Vendor Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="e.g., Isfahan Carpet Masters"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Isfahan, Iran"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="specialties">Specialties</Label>
                  <Input
                    id="specialties"
                    type="text"
                    placeholder="e.g., Classic Isfahan, Nain, Fine Silk (comma-separated)"
                    value={specialties}
                    onChange={(e) => setSpecialties(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about your history, your passion, and what makes your collection unique."
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                  />
                </div>
                
                {error && <p className="text-destructive text-sm">{error}</p>}
                
                <Button type="submit" className="w-full">
                  Create My Showroom
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
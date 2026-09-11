'use client';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Input } from '@/components/ui/input';
import { MapPin, Search, ShieldCheck } from 'lucide-react';
import { useCollection, useFirestore } from '@/firebase';
import { collection } from 'firebase/firestore';
import type { Vendor } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { useMemo, useState } from 'react';

function VendorCardSkeleton() {
    return (
        <Card className="flex flex-col overflow-hidden">
            <CardHeader className="flex-row items-center gap-4 p-6 bg-card">
                <Skeleton className="w-16 h-16 rounded-full" />
                <div className='space-y-2'>
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Skeleton className="h-5 w-20 rounded-full" />
                    <Skeleton className="h-5 w-24 rounded-full" />
                </div>
                <div className='space-y-2'>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            </CardContent>
            <CardFooter className="p-4 bg-card-foreground/5">
                <Skeleton className="h-10 w-full" />
            </CardFooter>
        </Card>
    )
}

export default function VendorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const firestore = useFirestore();
  const vendorsRef = collection(firestore, 'vendors');
  const { data: vendors, loading } = useCollection(vendorsRef);

  const typedVendors = (vendors as Vendor[]) || [];

  const filteredVendors = useMemo(() => {
    if (!searchTerm) return typedVendors;

    const lowercasedTerm = searchTerm.toLowerCase();
    return typedVendors.filter(vendor => 
        vendor.name.toLowerCase().includes(lowercasedTerm) ||
        vendor.location.toLowerCase().includes(lowercasedTerm) ||
        (vendor.bio && vendor.bio.toLowerCase().includes(lowercasedTerm)) ||
        (vendor.specialties && vendor.specialties.some(s => s.toLowerCase().includes(lowercasedTerm)))
    );
  }, [searchTerm, typedVendors]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">
              Global Vendor Directory
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Discover the world's most talented carpet artisans and traders,
              all in one place.
            </p>
          </div>

          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                    type="search"
                    placeholder="Search by name, location, specialty..."
                    className="pl-12 h-12 text-base"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && Array.from({ length: 3 }).map((_, i) => <VendorCardSkeleton key={i} />)}
            
            {!loading && filteredVendors.map((vendor) => (
              <Card
                key={vendor.id}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card"
              >
                <CardHeader className="flex-row items-center gap-4 p-6">
                  <Avatar className="w-16 h-16 border-2 border-primary/20">
                    <AvatarImage
                      src={vendor.avatarUrl}
                      alt={vendor.name}
                    />
                    <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-xl leading-tight flex items-center gap-2">
                      {vendor.name}
                      {vendor.isVerified && (
                          <ShieldCheck className="h-5 w-5 text-blue-500" title="Verified Vendor" />
                      )}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1 text-sm">
                      <MapPin className="w-3 h-3" />
                      {vendor.location}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vendor.specialties?.slice(0, 3).map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="secondary"
                        className="font-normal"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {vendor.bio}
                  </p>
                </CardContent>
                <CardFooter className="p-4 bg-card-foreground/5 mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/vendors/${vendor.id}`}>View Showroom</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {!loading && filteredVendors.length === 0 && (
             <Card>
                <CardContent className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
                    <p>
                        {typedVendors.length > 0 ? "No vendors match your search." : "No vendors have registered yet."}
                    </p>
                    {typedVendors.length === 0 && (
                         <Button asChild variant="link" className="mt-2">
                            <Link href="/account/become-vendor">Be the first to become a vendor!</Link>
                        </Button>
                    )}
                </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

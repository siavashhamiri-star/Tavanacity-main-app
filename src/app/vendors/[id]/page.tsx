'use client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Phone, Pencil, ShieldCheck } from 'lucide-react';
import { useCollection, useDoc, useFirestore, useUser } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import type { Vendor, Carpet } from '@/lib/types';
import Link from 'next/link';
import { ReviewsSection } from '@/components/reviews';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

export default function VendorShowroomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const firestore = useFirestore();
  const { data: user } = useUser();
  const vendorRef = doc(firestore, 'vendors', id);
  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);

  const carpetsRef = collection(firestore, 'vendors', id, 'carpets');
  const { data: vendorCarpets, loading: carpetsLoading } =
    useCollection(carpetsRef);

  if (vendorLoading || carpetsLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading showroom...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!vendor) {
    notFound();
  }

  const typedVendor = vendor as Vendor;
  const typedCarpets = (vendorCarpets as Carpet[]) || [];
  const isOwner = user && user.uid === typedVendor.userId;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="overflow-hidden mb-12 shadow-lg">
            <CardHeader className="p-8 bg-card">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <Avatar className="w-32 h-32 border-4 border-primary/10">
                  <AvatarImage
                    src={typedVendor.avatarUrl}
                    alt={typedVendor.name}
                  />
                  <AvatarFallback className="text-4xl">
                    {typedVendor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-headline font-bold">
                        {typedVendor.name}
                    </h1>
                    {typedVendor.isVerified && (
                        <div className="flex items-center gap-1 text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-sm font-medium">Verified Vendor</span>
                        </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" /> {typedVendor.location}
                  </div>
                  <p className="mt-4 text-foreground max-w-prose">
                    {typedVendor.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {typedVendor.specialties?.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="outline"
                        className="font-normal border-primary/50 text-primary/80"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                {isOwner ? (
                   <Button asChild className="w-full md:w-auto mt-4 md:mt-0">
                      <Link href={`/account/edit-vendor/${id}`}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit Showroom
                      </Link>
                   </Button>
                ) : (
                  <Button className="w-full md:w-auto mt-4 md:mt-0 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Phone className="w-4 h-4 mr-2" /> Contact Vendor
                  </Button>
                )}
              </div>
            </CardHeader>
          </Card>

          <div className="flex justify-between items-center mb-8">
             <h2 className="text-3xl font-headline font-bold">
                Virtual Showroom
            </h2>
            {isOwner && (
                <Button asChild>
                    <Link href={`/account/add-carpet/${id}`}>Add a Carpet</Link>
                </Button>
            )}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {typedCarpets.map((carpet) => (
              <Card
                key={carpet.id}
                className="overflow-hidden group flex flex-col"
              >
                <Link href={`/carpets/${carpet.id}?vendorId=${id}`} className="flex flex-col flex-grow">
                  <CardHeader className="p-0 relative">
                    <Image
                      src={carpet.imageUrl}
                      alt={carpet.name}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <CardTitle className="font-headline text-lg">
                      {carpet.name}
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm line-clamp-2">
                      {carpet.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <p className="font-semibold text-primary">{carpet.price}</p>
                    <Button variant="ghost" size="sm" asChild>
                      <span className="cursor-pointer">View Details</span>
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
            {typedCarpets.length === 0 && (
              <Card className="col-span-full">
                <CardContent className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
                    <p>This vendor's showroom is currently empty.</p>
                    {isOwner && <p className="mt-2 text-sm">You can add your first carpet now!</p>}
                </CardContent>
              </Card>
            )}
          </div>

          <Separator className="my-16" />

          <ReviewsSection vendorId={id} vendorUserId={typedVendor.userId} />

        </div>
      </main>
      <Footer />
    </div>
  );
}

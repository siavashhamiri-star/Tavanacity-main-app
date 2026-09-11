'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useDoc, useFirestore, useUser } from '@/firebase';
import type { Carpet, Vendor } from '@/lib/types';
import { deleteDoc, doc } from 'firebase/firestore';
import { MapPin, Pencil, Store, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import * as React from 'react';

export default function CarpetDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ vendorId?: string }>;
}) {
  const { id: carpetId } = React.use(params);
  const { vendorId } = React.use(searchParams);
  const router = useRouter();

  const firestore = useFirestore();
  const { data: user } = useUser();

  const carpetRef =
    vendorId && carpetId
      ? doc(firestore, 'vendors', vendorId, 'carpets', carpetId)
      : undefined;
  const { data: carpet, loading: carpetLoading } = useDoc(carpetRef);

  const vendorRef = vendorId
    ? doc(firestore, 'vendors', vendorId)
    : undefined;
  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);

  if (carpetLoading || vendorLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading Carpet Details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!carpet || !vendor || !vendorId) {
    notFound();
  }

  const typedCarpet = carpet as Carpet;
  const typedVendor = vendor as Vendor;
  const isOwner = user && user.uid === typedVendor.userId;

  const handleDelete = () => {
    if (!isOwner || !carpetRef) {
      toast({
        title: 'Unauthorized',
        description: 'You do not have permission to delete this carpet.',
        variant: 'destructive',
      });
      return;
    }
    deleteDoc(carpetRef)
        .then(() => {
            toast({
                title: 'Carpet Deleted',
                description: `${typedCarpet.name} has been removed from your showroom.`,
            });
            router.push(`/vendors/${vendorId}`);
        })
        .catch(serverError => {
            console.error('Error deleting carpet from Firestore:', serverError);
            const permissionError = new FirestorePermissionError({
                path: carpetRef.path,
                operation: 'delete',
            });
            errorEmitter.emit('permission-error', permissionError);
            toast({
                title: 'Error Deleting Carpet',
                description: serverError.message,
                variant: 'destructive',
            });
        });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Main Content */}
            <div className="md:col-span-3">
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={typedCarpet.imageUrl}
                    alt={typedCarpet.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-headline font-bold">
                    {typedCarpet.name}
                  </h1>
                  <p className="mt-2 text-2xl font-semibold text-primary">
                    {typedCarpet.price}
                  </p>
                </div>

                <div className="prose prose-sm max-w-none text-foreground/80">
                  <p>{typedCarpet.description}</p>
                </div>

                <Card>
                  <CardHeader className="flex-row items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={typedVendor.avatarUrl}
                        alt={typedVendor.name}
                      />
                      <AvatarFallback>
                        {typedVendor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">Sold by</p>
                      <CardTitle className="text-lg font-bold">
                        {typedVendor.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" /> {typedVendor.location}
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/vendors/${vendorId}`}>
                        <Store className="mr-2 h-4 w-4" />
                        View Showroom
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {isOwner && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Admin Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href={`/account/edit-carpet/${carpetId}?vendorId=${vendorId}`}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete the carpet "{typedCarpet.name}"
                              from your showroom.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete}>
                              Yes, Delete Carpet
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

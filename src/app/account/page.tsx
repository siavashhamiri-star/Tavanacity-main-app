'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Store } from 'lucide-react';

export default function AccountPage() {
  const { data: user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>My Account</CardTitle>
                  <CardDescription>Your personal information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Display Name</h3>
                    <p className="text-muted-foreground">{user.displayName}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Email Address</h3>
                    <p className="text-muted-foreground">{user.email}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Vendor Actions</CardTitle>
                  <CardDescription>
                    Manage your presence on Farsh Bazaar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {user.isVendor && user.vendorId ? (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">You are a registered vendor. Manage your showroom and listings.</p>
                      <Button asChild className="w-full">
                        <Link href={`/vendors/${user.vendorId}`}>
                          <Store className="mr-2 h-4 w-4" />
                          View My Showroom
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                       <p className="text-sm text-muted-foreground">Join our global marketplace by creating your own virtual showroom.</p>
                      <Button asChild className="w-full">
                        <Link href="/account/become-vendor">
                          <Building className="mr-2 h-4 w-4" />
                          Become a Vendor
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { FileText } from 'lucide-react';
  import { useState, useEffect } from 'react';
  
  export default function TermsOfServicePage() {
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString());
    }, []);

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">
                  Terms of Service
                </CardTitle>
                <CardDescription className="text-lg">
                  Last Updated: {currentDate || '...'}
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none mx-auto text-foreground/80">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to Farsh Bazaar. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using Farsh Bazaar, you agree to be bound by these Terms.
                </p>

                <h2>2. User Accounts</h2>
                <p>
                  To use certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>

                <h2>3. Vendor Responsibilities</h2>
                <p>
                  Vendors agree to provide accurate information about themselves and their products. Vendors are solely responsible for the quality, authenticity, and legality of the carpets they list.
                </p>

                <h2>4. Financial Transactions, Commissions, and Taxes</h2>
                <p>
                    Farsh Bazaar is a platform that connects buyers and sellers. We may facilitate transactions in the future. As a vendor, you agree that Farsh Bazaar will collect a service commission fee, estimated between 2% and 5% of the total sale price, for sales facilitated through the platform. This commission is for the use of our platform and services.
                </p>
                <p>
                    <strong>Important Tax Information:</strong> You, as the vendor, are solely responsible for the collection and remittance of any and all applicable taxes on your sales, including but not limited to Value Added Tax (VAT), in accordance with the laws of Iran and any other relevant jurisdiction. Farsh Bazaar's commission is exclusive of these taxes. It is your responsibility to price your items accordingly and handle all tax obligations.
                </p>

                <h2>5. Prohibited Conduct</h2>
                <p>
                  You agree not to use the service for any unlawful purpose or to violate any laws in your jurisdiction. You may not list fraudulent or stolen items.
                </p>

                <h2>6. Limitation of Liability</h2>
                <p>
                  Farsh Bazaar is an intermediary platform. We are not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our service or from any transactions between users.
                </p>

                <h2>7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of any significant changes. Your continued use of the service after such changes constitutes your acceptance of the new Terms.
                </p>

              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
  import { Shield } from 'lucide-react';
  import { useState, useEffect } from 'react';
  
  export default function PrivacyPolicyPage() {
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
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">
                  Privacy Policy
                </CardTitle>
                <CardDescription className="text-lg">
                  Last Updated: {currentDate || '...'}
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none mx-auto text-foreground/80">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us when you create an account, list a product, or communicate with us. This may include your name, email address, and any other information you choose to provide. We use Google for authentication, and we may collect profile information from your Google account with your permission.
                </p>

                <h2>2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to operate, maintain, and provide the features and functionality of Farsh Bazaar. This includes connecting buyers and sellers, processing transactions (in the future), and communicating with you.
                </p>

                <h2>3. Information Sharing</h2>
                <p>
                  We may share information between buyers and vendors to facilitate transactions. For example, a vendor's public profile and location are visible to all users. We do not sell your personal information to third parties. We may share information with law enforcement if required by law.
                </p>

                <h2>4. Data Security</h2>
                <p>
                    We use reasonable measures to protect your information from unauthorized access or disclosure. We utilize secure services like Firebase Authentication to handle sensitive user data. However, no security system is impenetrable.
                </p>

                <h2>5. Your Choices</h2>
                <p>
                  You may review and update your account information at any time by logging into your account. You may also close your account at any time.
                </p>
                
                <h2>6. International Data Transfers</h2>
                <p>
                  Farsh Bazaar is a global platform. By using our services, you consent to the transfer of your information to our servers and processing globally.
                </p>

                <h2>7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through our feedback page.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

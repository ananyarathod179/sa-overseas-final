import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

/**
 * Privacy Policy Page
 */
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-foreground/70">Last updated: July 2026</p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p className="text-foreground/80 mb-4">
                SA Overseas ("we", "us", "our", or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Information Collection and Use</h2>
              <p className="text-foreground/80 mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>Personal Data: Name, email address, phone number, address</li>
                <li>Usage Data: Browser type, IP address, pages visited, time and date of visit</li>
                <li>Cookies: We use cookies to track activity on our website</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Use of Data</h2>
              <p className="text-foreground/80 mb-4">
                SA Overseas uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Security of Data</h2>
              <p className="text-foreground/80 mb-4">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
              <p className="text-foreground/80 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none space-y-2 text-foreground/80">
                <li>Email: contact@sa-overseas.co.in</li>
                <li>Phone: +91 9173029197</li>
                <li>Location: Gujarat, India</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

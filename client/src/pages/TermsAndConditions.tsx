import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

/**
 * Terms and Conditions Page
 */
export default function TermsAndConditions() {
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
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms and Conditions</h1>
            <p className="text-lg text-foreground/70">Last updated: July 2026</p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-foreground/80 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
              <p className="text-foreground/80 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on SA Overseas website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Disclaimer</h2>
              <p className="text-foreground/80 mb-4">
                The materials on SA Overseas website are provided on an 'as is' basis. SA Overseas makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Limitations</h2>
              <p className="text-foreground/80 mb-4">
                In no event shall SA Overseas or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if SA Overseas or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Accuracy of Materials</h2>
              <p className="text-foreground/80 mb-4">
                The materials appearing on SA Overseas website could include technical, typographical, or photographic errors. SA Overseas does not warrant that any of the materials on its website are accurate, complete, or current. SA Overseas may make changes to the materials contained on its website at any time without notice.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Links</h2>
              <p className="text-foreground/80 mb-4">
                SA Overseas has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SA Overseas of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Modifications</h2>
              <p className="text-foreground/80 mb-4">
                SA Overseas may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Governing Law</h2>
              <p className="text-foreground/80 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact Information</h2>
              <p className="text-foreground/80 mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
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

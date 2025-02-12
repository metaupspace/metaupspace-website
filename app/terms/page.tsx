"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
    const formattedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing and using MetaUpSpace&apos;s services, you agree to be bound by these Terms & Conditions. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Services</h2>
            <p>
              MetaUpSpace provides IT staffing and development services. We reserve the right to withdraw or amend our services
              without notice. We will not be liable if any part of our services is unavailable at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Intellectual Property</h2>
            <p>
              The content, features, and functionality of our services are owned by MetaUpSpace and are protected by
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. User Responsibilities</h2>
            <p>
              You are responsible for ensuring that your use of our services complies with applicable laws and regulations.
              You agree not to use our services for any unlawful purpose or in any way that could damage or impair the services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
            <p>
              MetaUpSpace shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use or inability to use our services.
            </p>
          </section>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-sm text-gray-400">
              Last updated: {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Professional information (resume, work history)</li>
              <li>Technical information (device data, usage data)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you about opportunities</li>
              <li>Process job applications</li>
              <li>Analyze and enhance our platform&apos;s performance</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Potential employers (with your consent)</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
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
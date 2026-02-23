import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-200">
        <a href="/" className="inline-flex items-center gap-2 text-[#7653ff] font-semibold hover:text-[#6039e6] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </a>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>At Jamaica Property Care (JPC), we take your privacy and the security of your tenant data seriously.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Data Collection</h2>
          <p>[1. Data Controller vs. Data Processor
Under the JDPA, the Landlord or Property Management Agency acts as the Data Controller for their tenants' data. Jamaica Property Care acts as the Data Processor, securely storing and processing this data strictly on behalf of the agency to facilitate the Service.

2. Information We Collect
Account Data: Names, email addresses, phone numbers, and agency details (including TRN) provided during registration.
Tenancy Data: Lease details, property addresses, and maintenance requests entered by the agency or tenant.
Usage Data: System logs and diagnostic data to ensure platform security and reliability.]</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. JDPA Compliance</h2>
          <p>[3. How We Use Your Data
We use your information exclusively to provide, secure, and improve the Jamaica Property Care platform. We do not sell your personal data to third parties. Data may be shared with trusted third-party service providers (e.g., secure cloud hosting) strictly to operate the platform.

4. Your Data Rights
Under the JDPA, individuals have the right to request access to, correction of, or deletion of their personal data. Tenants wishing to exercise these rights should primarily contact their Property Manager (the Data Controller). Account holders can utilize the "Delete Account" function in their profile settings to permanently erase their data and associated tenant records from our systems.

5. Security
We implement robust, industry-standard security measures, including row-level security (RLS) and encrypted database storage, to protect against unauthorized access, alteration, or destruction of your personal data.]</p>
        </div>
      </div>
    </div>
  );
}


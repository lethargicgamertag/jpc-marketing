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
          <p>[Insert your legal data collection policy here regarding leases, IDs, and financial records...]</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. JDPA Compliance</h2>
          <p>[Insert your compliance statement here...]</p>
        </div>
      </div>
    </div>
  );
}


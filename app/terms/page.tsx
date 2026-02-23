import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-200">
        <a href="/" className="inline-flex items-center gap-2 text-[#7653ff] font-semibold hover:text-[#6039e6] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </a>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>Welcome to Jamaica Property Care (JPC). By using our platform, you agree to the following terms and conditions.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Account Responsibilities</h2>
          <p>[You are responsible for maintaining the confidentiality of your account credentials.
You agree to provide accurate, current, and complete information regarding your agency and tenants.
Landlords/Agencies: You agree to use this platform in accordance with the Rent Restriction Act of Jamaica and all other applicable local housing and tenancy laws.]</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Subscription & Billing</h2>
          <p>[Access to administrative features requires an active subscription. Subscription fees are billed in advance on a recurring basis. Failure to maintain an active payment method may result in temporary suspension of administrative access.]</p>
        </div>
      </div>
    </div>
  );
}


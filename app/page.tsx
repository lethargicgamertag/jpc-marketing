'use client';
import React, { useState } from 'react';
import { CheckCircle, Home, Shield, Wrench, Mail, MapPin, Phone, ArrowRight, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- DYNAMIC NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-[#7653ff] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              J
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">JPC</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-[#7653ff] transition-colors">Features</a>
            <a href="#about" className="hover:text-[#7653ff] transition-colors">About</a>
            <a href="#pricing" className="hover:text-[#7653ff] transition-colors">Pricing</a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Log in
            </a>
            <a href="/signup" className="bg-[#7653ff] hover:bg-[#6039e6] text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Sign Up Free <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4 z-40">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-[#7653ff]">Features</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-[#7653ff]">About</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-[#7653ff]">Pricing</a>
            <div className="h-px bg-slate-100 my-2 w-full"></div>
            <a href="/login" className="text-base font-medium text-slate-600 hover:text-[#7653ff]">Log in</a>
            <a href="/signup" className="bg-[#7653ff] text-white px-4 py-3 rounded-xl text-center font-medium shadow-md">
              Sign Up Free
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Run Your Rental Properties <br className="hidden md:block" />
            Like a <span className="text-[#7653ff]">Professional Business.</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Say goodbye to chaotic WhatsApp chats, lost receipts, and forgotten due dates. JPC is the all-in-one platform designed specifically for Jamaican landlords to automate rent tracking, handle maintenance, and stay legally compliant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/signup" className="bg-[#7653ff] hover:bg-[#6039e6] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Create Your Free Account
            </a>
            <a href="#pricing" className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Property Management Doesn't Have to be a Headache.</h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to secure your investment in one secure dashboard.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#f3f0ff] rounded-xl flex items-center justify-center mb-6 text-[#7653ff]">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Rent & Accounting</h3>
              <p className="text-slate-600 leading-relaxed">
                Track every dollar. JPC handles complex partial payments, automatically shifts due dates, and enforces the legal 7.5% annual rent increase guardrails so you never make a math error.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#f3f0ff] rounded-xl flex items-center justify-center mb-6 text-[#7653ff]">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Tenant Vault</h3>
              <p className="text-slate-600 leading-relaxed">
                Secure, JDPA-compliant storage. Keep your move-in photos, ID copies, signed leases, and payment receipts perfectly organized and instantly accessible for every tenant.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-[#f3f0ff] rounded-xl flex items-center justify-center mb-6 text-[#7653ff]">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Maintenance on Autopilot</h3>
              <p className="text-slate-600 leading-relaxed">
                No more 2 AM phone calls. Tenants submit repair tickets directly through their portal. You log the expense, upload the receipt, and automatically track your property ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden bg-slate-200 shadow-inner">
              {/* PLACEHOLDER FOR FOUNDER IMAGE */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <span className="text-sm font-medium">[Insert Professional Photo Here]</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Built for the Jamaican Real Estate Market.</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Hi, I'm the founder of JPC. I built this platform because I saw firsthand how difficult it was for local landlords to keep track of their properties using messy spreadsheets and endless WhatsApp groups.
                </p>
                <p>
                  Property management software shouldn't be complicated, and it shouldn't ignore the unique realities of renting in Jamaica. 
                </p>
                <p>
                  JPC was designed from the ground up to give you total control over your investments, protect you legally with proper documentation, and give your tenants a seamless, modern experience they respect.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="font-bold text-xl text-slate-900 font-serif italic">The JPC Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Simple Pricing. Start Free Today.</h2>
            <p className="mt-4 text-lg text-slate-600">Scale your portfolio with tools built for every stage of your growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* FREE TIER */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
              <p className="text-slate-500 text-sm mb-6 min-h-[40px]">For small landlords getting organized. Simple, reliable, and secure.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">0</span>
                <span className="text-slate-500 font-medium"> JMD / mo</span>
              </div>
              <a href="/signup" className="w-full bg-[#f3f0ff] hover:bg-[#e9e4ff] text-[#7653ff] font-semibold py-3 rounded-xl text-center transition-colors mb-8">
                Sign Up Free
              </a>
              <ul className="space-y-4 text-sm text-slate-600 flex-1">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Up to 2 properties & 6 renters</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Automated rent tracking</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Tenant portal</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> In-app rent due alerts</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Rent increase guardrail (7.5%)</li>
              </ul>
            </div>

            {/* STARTER TIER (HIGHLIGHTED) */}
            <div className="bg-[#7653ff] rounded-3xl p-8 border border-[#7653ff] shadow-xl flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#7653ff] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-blue-100 text-sm mb-6 min-h-[40px]">For landlords who want total control and JDPA-compliant documentation.</p>
              <div className="mb-8 text-white">
                <span className="text-4xl font-extrabold">5,000</span>
                <span className="text-blue-200 font-medium"> JMD / mo</span>
              </div>
              <a href="/signup" className="w-full bg-white hover:bg-slate-50 text-[#7653ff] font-bold py-3 rounded-xl text-center transition-colors shadow-md mb-8">
                Start Building Free
              </a>
              <ul className="space-y-4 text-sm text-white flex-1">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Up to 10 properties & 25 renters</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Tenant document vault (Leases & IDs)</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Move-in photo condition records</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Payment receipt vault</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Direct messaging with tenants</li>
              </ul>
            </div>

            {/* PRO TIER */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
              <p className="text-slate-500 text-sm mb-6 min-h-[40px]">For serious operators running their rentals like a fully branded business.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">15,000</span>
                <span className="text-slate-500 font-medium"> JMD / mo</span>
              </div>
              <a href="/signup" className="w-full bg-[#f3f0ff] hover:bg-[#e9e4ff] text-[#7653ff] font-semibold py-3 rounded-xl text-center transition-colors mb-8">
                Scale With Us Free
              </a>
              <ul className="space-y-4 text-sm text-slate-600 flex-1">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Unlimited properties & renters</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Custom branding (logo + name)</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Vanity portal URL for tenants</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Preventative maintenance scheduling</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Compliance data exports</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-[#7653ff] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <span className="text-xl font-bold tracking-tight text-white">JPC</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Modern property management software built for the Jamaican real estate market.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/login" className="hover:text-white transition-colors">Landlord Login</a></li>
                <li><a href="/tenant" className="hover:text-white transition-colors">Tenant Portal</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Security</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#7653ff] shrink-0" />
                  <span>Kingston, Jamaica</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#7653ff] shrink-0" />
                  <a href="mailto:support@jpc.com" className="hover:text-white transition-colors">support@jpc.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#7653ff] shrink-0" />
                  <span>+1 (876) 000-0000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} JPC Property Management. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

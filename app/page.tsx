'use client';
import React, { useState } from 'react';
import { CheckCircle, Home, Shield, Wrench, Mail, MapPin, Phone, ArrowRight, Menu, X, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add : Variants to the container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Add : Variants to the item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#7653ff] selection:text-white overflow-hidden">
      
      {/* --- DYNAMIC NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm relative transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-br from-[#7653ff] to-[#4facfe] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
              J
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">Jamaica Property Care</span>
            <span className="text-xl font-bold tracking-tight text-slate-800 sm:hidden">JPC</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-[#7653ff] transition-colors">Features</a>
            <a href="#about" className="hover:text-[#7653ff] transition-colors">About</a>
            <a href="#pricing" className="hover:text-[#7653ff] transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Portal Login
            </a>
            <a href="/signup" className="bg-[#7653ff] hover:bg-[#6039e6] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              Sign Up Free <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-[#7653ff] focus:outline-none p-2 transition-colors">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl py-6 px-4 flex flex-col gap-5 z-40"
          >
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 hover:text-[#7653ff]">Features</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 hover:text-[#7653ff]">About</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 hover:text-[#7653ff]">Pricing</a>
            <div className="h-px bg-slate-100 my-2 w-full"></div>
            <a href="/login" className="text-lg font-medium text-slate-700 hover:text-[#7653ff]">Portal Login</a>
            <a href="/signup" className="bg-[#7653ff] text-white px-4 py-4 rounded-xl text-center font-bold shadow-md hover:bg-[#6039e6]">
              Create Free Account
            </a>
          </motion.div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7653ff] rounded-full blur-[120px] opacity-15 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
             <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">JDPA Compliant</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Run Your Rental Properties <br className="hidden md:block" />
            Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7653ff] to-[#4facfe]">Professional Business.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Say goodbye to chaotic WhatsApp chats and lost receipts. <strong className="text-slate-800">Jamaica Property Care (JPC)</strong> is the all-in-one ecosystem designed specifically for Jamaican real estate.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
          >
            <a href="/signup" className="bg-[#7653ff] hover:bg-[#6039e6] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-[#7653ff]/25 hover:-translate-y-1 flex items-center justify-center gap-2">
              Create Free Account <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#pricing" className="bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center">
              View Pricing
            </a>
          </motion.div>

          {/* Floating Glassmorphism UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mx-auto max-w-3xl"
          >
             <motion.div 
               animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative"
             >
               <div className="absolute -inset-1 bg-gradient-to-r from-[#7653ff] to-[#4facfe] rounded-2xl blur opacity-25"></div>
               <div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-2xl shadow-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                     <div className="h-12 w-12 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="h-6 w-6" />
                     </div>
                     <div className="text-left">
                        <p className="text-sm font-bold text-slate-900">Rent Payment Verified</p>
                        <p className="text-xs text-slate-500">From: Michael Scott • Unit 4A</p>
                     </div>
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
                     <p className="text-xl font-black text-[#7653ff]">$85,000 JMD</p>
                     <p className="text-xs font-medium text-slate-400">Next due date updated</p>
                  </div>
               </div>
             </motion.div>
          </motion.div>

        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need to secure your investment.</h2>
            <p className="mt-4 text-lg text-slate-600">Built from the ground up to handle the realities of the Jamaican rental market.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: Home, title: "Automated Rent & Accounting", desc: "Track every dollar seamlessly. JPC handles complex partial payments, automatically rolls due dates forward, and enforces the legal 7.5% annual rent increase guardrails." },
              { icon: Shield, title: "The Tenant Vault", desc: "Secure, JDPA-compliant digital storage. Keep your move-in condition photos, government ID copies, signed leases, and digital payment receipts perfectly organized." },
              { icon: Users, title: "A Complete Team Ecosystem", desc: "Don't manage alone. Give secure, restricted portal access to your real estate agents, property assistants, and trusted contractors." },
              { icon: Wrench, title: "Maintenance on Autopilot", desc: "No more 2 AM phone calls. Tenants submit repair tickets directly. Assign them to a contractor, log the expense, upload the receipt, and automatically track ROI." }
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-[#7653ff]/30 hover:shadow-lg transition-all group">
                <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#7653ff] group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#7653ff] rounded-full blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative aspect-square md:h-[500px] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-700">
                <span className="text-sm font-medium tracking-widest uppercase">[Insert Professional Photo Here]</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Built for the Jamaican Real Estate Market.</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                <p>Hi, I'm the founder of Jamaica Property Care. I built this platform because I saw firsthand how difficult it was for local landlords to keep track of their properties using messy spreadsheets and endless WhatsApp groups.</p>
                <p>Property management software shouldn't be complicated, and it shouldn't ignore the unique realities of renting in Jamaica.</p>
                <p>JPC was designed from the ground up to give you total control over your investments, protect you legally with proper documentation, and give your tenants, agents, and contractors a seamless, modern experience.</p>
              </div>
              <div className="mt-10 pt-8 border-t border-slate-800">
                <p className="font-bold text-2xl text-white font-serif italic tracking-wide">The JPC Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple Pricing. Start Free Today.</h2>
            <p className="mt-4 text-lg text-slate-600">Scale your portfolio with tools built for every stage of your growth.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center"
          >
            
            {/* FREE TIER */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
              <p className="text-slate-500 text-sm mb-6 min-h-[40px]">For small landlords getting organized. Simple, reliable, and secure.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">0</span>
                <span className="text-slate-500 font-medium"> JMD / mo</span>
              </div>
              <a href="/signup" className="block w-full bg-[#f3f0ff] hover:bg-[#e9e4ff] text-[#7653ff] font-bold py-4 rounded-xl text-center transition-colors mb-8">Sign Up Free</a>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Up to 2 properties & 6 renters</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Automated rent tracking</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Dedicated tenant portal</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> In-app rent due alerts</li>
              </ul>
            </motion.div>

            {/* STARTER TIER */}
            <motion.div variants={itemVariants} className="bg-gradient-to-b from-[#7653ff] to-[#5a39cf] rounded-3xl p-8 border border-[#7653ff] shadow-2xl relative transform lg:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#7653ff] text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-blue-100 text-sm mb-6 min-h-[40px]">For landlords who want total control and JDPA-compliant documentation.</p>
              <div className="mb-8 text-white">
                <span className="text-5xl font-extrabold">5,000</span>
                <span className="text-blue-200 font-medium"> JMD / mo</span>
              </div>
              <a href="/signup" className="block w-full bg-white hover:bg-slate-50 text-[#7653ff] font-bold py-4 rounded-xl text-center transition-colors shadow-lg mb-8">Start Building Free</a>
              <ul className="space-y-4 text-sm text-white font-medium">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Up to 10 properties & 25 renters</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Tenant document vault (Leases & IDs)</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Move-in condition photo records</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-blue-200 shrink-0" /> Direct messaging with tenants</li>
              </ul>
            </motion.div>

            {/* PRO TIER */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
              <p className="text-slate-500 text-sm mb-6 min-h-[40px]">For serious operators running their rentals like a fully branded business.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900">15,000</span>
                <span className="text-slate-500 font-medium"> JMD / mo</span>
              </div>
              <a href="/signup" className="block w-full bg-[#f3f0ff] hover:bg-[#e9e4ff] text-[#7653ff] font-bold py-4 rounded-xl text-center transition-colors mb-8">Scale With Us Free</a>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Unlimited properties & renters</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Agent & Contractor portal access</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Custom branding (logo + name)</li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#7653ff] shrink-0" /> Compliance data exports</li>
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* --- FOOTER (Same as before) --- */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-[#7653ff] to-[#4facfe] rounded-lg flex items-center justify-center text-white font-bold text-xl">J</div>
                <span className="text-xl font-bold tracking-tight text-white">Jamaica Property Care</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Modern property management software built exclusively for the Jamaican real estate market.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#features" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Features</a></li>
                <li><a href="#pricing" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Pricing</a></li>
                <li><a href="/login" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Landlord Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-[#7653ff] shrink-0" /><span>Kingston, Jamaica</span></li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#7653ff] shrink-0" /><a href="mailto:support@jpc.com" className="hover:text-white transition-colors">support@jpc.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Jamaica Property Care (JPC). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

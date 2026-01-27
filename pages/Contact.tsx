
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-3 justify-between border-b border-slate-200 dark:border-slate-800">
        <button 
          onClick={() => navigate(-1)}
          className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold flex-1 text-center pr-10">Contact Support</h2>
      </header>

      <main className="max-w-md mx-auto pb-24 px-4 sm:px-6">
        <div className="pt-8 pb-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Technical Assistance</span>
          <h3 className="text-slate-900 dark:text-white tracking-tight text-3xl font-black leading-tight">Get in Touch</h3>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed mt-2">
            Our technical support team is available 24/7 for urgent inquiries and system maintenance.
          </p>
        </div>

        <section className="mt-2 space-y-5">
          <div className="flex flex-col gap-4">
            <div className="space-y-1.5">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Full Name</label>
              <input 
                className="w-full rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-base transition-shadow" 
                placeholder="E.g. John Doe" 
                type="text"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Email Address</label>
              <input 
                className="w-full rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-base transition-shadow" 
                placeholder="john@company.com" 
                type="email"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Service Category</label>
              <div className="relative">
                <select className="w-full rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark h-14 px-4 text-base appearance-none transition-shadow">
                  <option value="">Select a service...</option>
                  <option value="electrical">Electrical Wiring</option>
                  <option value="security">Security & Surveillance</option>
                  <option value="biometric">Biometric Access Control</option>
                  <option value="parking">Parking Management</option>
                  <option value="hr">HR Systems</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Message</label>
              <textarea 
                className="w-full rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/40 border border-slate-200 dark:border-slate-700 bg-white dark:bg-card-dark min-h-[140px] placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 py-4 text-base transition-shadow resize-none" 
                placeholder="Tell us about your technical requirements..."
              ></textarea>
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 active:scale-95">
              <span>Send Message</span>
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </section>

        <section className="mt-10">
          <div className="bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h4 className="text-slate-900 dark:text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">contact_page</span>
              Direct Support
            </h4>
            
            <div className="grid grid-cols-1 gap-5">
              <a href="tel:0175162938" className="flex items-center gap-4 group p-2 -m-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="size-11 flex items-center justify-center bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-[22px]">smartphone</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">Mobile Support</p>
                  <p className="text-slate-900 dark:text-white font-bold text-lg leading-none">0175162938</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
              </a>

              <a href="tel:045880616" className="flex items-center gap-4 group p-2 -m-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="size-11 flex items-center justify-center bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-[22px]">call</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">HQ Office</p>
                  <p className="text-slate-900 dark:text-white font-bold text-lg leading-none">04-5880616</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
              </a>

              <a href="mailto:mshtechnology@gmail.com" className="flex items-center gap-4 group p-2 -m-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="size-11 flex items-center justify-center bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-[22px]">alternate_email</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">Email Inquiry</p>
                  <p className="text-slate-900 dark:text-white font-bold text-lg leading-none truncate max-w-[180px] xs:max-w-none">mshtechnology@gmail.com</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">chevron_right</span>
              </a>

              <div className="flex items-start gap-4 p-2 -m-2">
                <div className="size-11 flex items-center justify-center bg-primary/10 rounded-xl shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Our Location</p>
                  <p className="text-slate-900 dark:text-white font-bold text-base leading-snug">
                    No: 10, Lrg 10/SS1 Bandar Tasik Mutiara,<br />
                    S.P.S. Penang, Malaysia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 mb-12">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
            <img 
              alt="Office Location Map" 
              className="w-full h-full object-cover opacity-70 dark:opacity-40 grayscale group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGhmcPe9oWMEL4TyPk2y6j39qlEHBz0gXukn2Y93vTkuja_41Vorc9hnnZzNPpSBJzIqcdKBOqfotCp2LjZ8w57ECgYI0AtkFJHmtRl1M0sb7OuqzfYupxIR123kewtnQ0PAimQixWGXVFtLs4MkgAxNmZA08xNBs58KATYQ_TflIbBI3cdo2foSsjJ5Lc70xaGRWAF0lKtrWMXzwvB5N_HTYyNjgjctAvvkYq0NQowj45noFz4kwUNgXRyQizdJlvD8iNX5eMAeA"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors">
              <div className="bg-primary p-3 rounded-full shadow-2xl mb-3 animate-bounce shadow-primary/40">
                <span className="material-symbols-outlined text-white text-[28px]">location_on</span>
              </div>
              <span className="bg-white/95 dark:bg-slate-800/95 px-5 py-2.5 rounded-full text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md shadow-lg border border-white/20">
                Open in Google Maps
              </span>
            </div>
          </div>
        </section>

        <footer className="text-center py-4 border-t border-slate-200 dark:border-slate-800">
          <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-bold">
            Pakmike Technology • 24/7 Technical Reliability
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Contact;

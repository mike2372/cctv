
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { ServiceItem } from '../types';

const Solutions: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      setLoading(true);
      const { data } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setServices(data);
      setLoading(false);
    }
    fetchServices();
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
          </button>
          <h2 className="text-lg font-bold flex-1 text-center">Solutions</h2>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        <section className="px-4 pt-8 pb-4">
          <h1 className="text-[36px] font-bold leading-tight tracking-tight mb-2">Technical Excellence</h1>
          <p className="text-slate-500 dark:text-silver-accent text-base font-normal leading-relaxed">
            Innovative engineering and digital infrastructure solutions for Pakmike Technology's global clients.
          </p>
        </section>

        <div className="space-y-6 px-4">
          {loading ? (
            <div className="py-10 text-center text-slate-500">Loading services...</div>
          ) : (
            services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-white dark:bg-[#1c1f27] shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <div
                  className="w-full aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                <div className="flex flex-col gap-4 p-5">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2">{service.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                        <p className="text-slate-600 dark:text-silver-accent text-sm">{service.description}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                        <p className="text-slate-600 dark:text-silver-accent text-sm">Expert installation & 24/7 technical support</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/service/${service.id}`)}
                    className="w-full py-3 bg-primary text-white rounded-lg font-semibold text-sm transition-transform active:scale-95"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <section className="p-8 text-center mt-6">
          <h4 className="text-lg font-semibold mb-2">Need a custom solution?</h4>
          <p className="text-slate-500 dark:text-silver-accent text-sm mb-6">Our engineers are ready to design your infrastructure.</p>
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="px-4 py-2 text-primary font-bold">04-5880616</span>
              <a href="tel:045880616" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity">
                Office
              </a>
            </div>
            <p className="text-xs text-slate-400 font-medium">Or reach us via mobile: 0175162938</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Solutions;

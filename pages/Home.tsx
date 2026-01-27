
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { ServiceItem, Project } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data: servicesData } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: true });

      const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: true });

      if (servicesData) setServices(servicesData);
      if (projectsData) setProjects(projectsData);
      setLoading(false);
    }
    fetchData();
  }, []);

  const parkingService = services.find(s => s.id === 'parking-systems') || services[4];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-2xl">memory</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Pakmike Tech</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">call</span>
            <p className="text-primary text-sm font-bold tracking-tight">0175162938</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        {/* HeroSection */}
        <section className="p-4">
          <div className="container">
            <div
              className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-10 relative overflow-hidden group"
              style={{
                backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.1) 0%, rgba(16, 22, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuByKkMlnIk8z_fbzt-S0kl0hwLlmp2g9cFhHi7T6tpH8y4M7wSOYuqsYyixZCvF_4ua8KhX1BAZ1Ty_JBEVeyIE_vE1tkHO2ar2gd5Nbm1q89J1hi-bWZKICqkNfQlXAE07i_i76RES_v-BQGFladOpOE_x5zsOrx8V8RyMlpww0wI2I_9qKsXoPj12mdHGECU3gAAYhZiaPX5-vuc6tE24V0_6PuHqFAgfhvefTuFXHGYr-Ya1yp_lc7FfVD2zzTVirL9GO62NukY")'
              }}
            >
              <div className="flex flex-col gap-2 text-left relative z-10">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary w-fit border border-primary/30 mb-2">
                  Technical Excellence
                </span>
                <h1 className="text-white text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Integrated Technical Solutions
                </h1>
                <h2 className="text-silver-accent text-base font-normal leading-relaxed">
                  Empowering your business with professional Electrical, Security, and Management systems.
                </h2>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-all active:scale-95 shadow-lg shadow-primary/20 relative z-10"
              >
                <span className="truncate">Request a Quote</span>
              </button>
            </div>
          </div>
        </section>

        {/* SectionHeader */}
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Expert Services</h2>
          <button onClick={() => navigate('/solutions')} className="text-primary text-sm font-semibold hover:underline">View All</button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 gap-4 p-4">
          {loading ? (
            <div className="col-span-2 py-10 text-center text-slate-500">Loading services...</div>
          ) : (
            <>
              {services.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  onClick={() => navigate(`/service/${service.id}`)}
                  className="flex flex-col gap-3 p-3 bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg relative"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  >
                    <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur-sm p-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-sm">{service.icon}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-sm font-bold leading-snug">{service.title}</p>
                    <p className="text-silver-accent text-xs font-normal mt-1 leading-normal">{service.description}</p>
                  </div>
                </div>
              ))}

              {/* Car Park System (Wide Card) */}
              {parkingService && (
                <div
                  onClick={() => navigate(`/service/${parkingService.id}`)}
                  className="flex flex-col gap-3 p-3 bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 col-span-2 cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <div
                    className="w-full bg-center bg-no-repeat h-32 bg-cover rounded-lg relative"
                    style={{ backgroundImage: `url("${parkingService.image}")` }}
                  >
                    <div className="absolute top-2 left-2 bg-background-dark/60 backdrop-blur-sm p-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-sm">{parkingService.icon}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-sm font-bold leading-snug">{parkingService.title}</p>
                    <p className="text-silver-accent text-xs font-normal mt-1 leading-normal">{parkingService.description}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Portfolio Preview Section */}
        <section className="mt-8">
          <div className="flex items-center justify-between px-4 pb-4">
            <div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Recent Projects</h2>
              <p className="text-silver-accent text-xs font-normal">Previously completed installations</p>
            </div>
            <button onClick={() => navigate('/gallery')} className="text-primary text-sm font-semibold hover:underline">Full Gallery</button>
          </div>

          <div className="flex overflow-x-auto gap-4 px-4 pb-6 hide-scrollbar snap-x snap-mandatory">
            {loading ? (
              <div className="w-full py-10 text-center text-slate-500">Loading projects...</div>
            ) : (
              projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate('/gallery')}
                  className="flex-none w-[280px] bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden snap-center cursor-pointer group"
                >
                  <div
                    className="w-full aspect-video bg-cover bg-center transition-transform group-hover:scale-105 duration-500"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                  <div className="p-4">
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest block mb-1">{project.category}</span>
                    <h3 className="text-slate-900 dark:text-white font-bold text-base leading-snug mb-1 line-clamp-1">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))
            )}
            <div
              onClick={() => navigate('/gallery')}
              className="flex-none w-[140px] flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">View All</span>
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className="p-4">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark p-6 shadow-sm">
            <div className="flex flex-col gap-2">
              <p className="text-slate-900 dark:text-white text-lg font-bold">Ready to start your project?</p>
              <p className="text-silver-accent text-sm leading-relaxed">Contact our technical team for a comprehensive consultation and tailored quote for your business infrastructure.</p>
            </div>
            <div className="flex flex-col w-full gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
              >
                <span className="truncate">Request a Quote</span>
              </button>
              <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold border border-slate-200 dark:border-slate-700 active:scale-95 transition-transform">
                <span className="truncate">Download Catalog</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

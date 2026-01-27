
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  // Choose appropriate icon for the header based on category
  const getHeaderIcon = () => {
    switch (service.category) {
      case ServiceCategory.ELECTRICAL: return 'electrical_services';
      case ServiceCategory.SECURITY: return 'videocam';
      case ServiceCategory.BIOMETRIC: return 'fingerprint';
      case ServiceCategory.HR: return 'groups';
      case ServiceCategory.PARKING: return 'local_parking';
      default: return 'settings';
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-[#dbdfe6] dark:border-gray-800">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-primary cursor-pointer">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Pakmike Technology</h2>
        </div>
        <div className="flex items-center">
          <button className="flex size-10 items-center justify-center rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-xl text-primary">{getHeaderIcon()}</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-10">
        <section className="px-4 py-8">
          <div className="flex flex-col gap-6">
            <div 
              className="relative w-full aspect-video bg-center bg-no-repeat bg-cover rounded-xl shadow-md border border-[#dbdfe6] dark:border-gray-700 overflow-hidden" 
              style={{ backgroundImage: `url("${service.image}")` }}
            >
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-sm tracking-wider uppercase">{service.category} Solutions</span>
                <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-[#111318] dark:text-white">
                  {service.title}
                </h1>
                <p className="text-base font-normal leading-relaxed text-silver-gray dark:text-gray-400">
                  {service.longDescription}
                </p>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:scale-[0.98] active:scale-95 transition-all"
              >
                {service.ctaText}
              </button>
            </div>
          </div>
        </section>

        <div className="px-4 py-2 mt-4">
          <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-3">Advanced Features</h2>
        </div>

        <section className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features?.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-sm">
              <div className="text-primary bg-primary/10 size-12 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-2xl">
                  {index % 4 === 0 ? 'verified' : index % 4 === 1 ? 'bolt' : index % 4 === 2 ? 'hub' : 'shield'}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-tight">{feature}</h3>
                <p className="text-silver-gray dark:text-gray-400 text-sm font-normal">Enterprise-grade {feature.toLowerCase()} for your facility.</p>
              </div>
            </div>
          ))}
        </section>

        <div className="p-6 mt-6 flex flex-col items-center gap-4 text-center">
          <h3 className="text-xl font-bold">Ready to modernize your infrastructure?</h3>
          <p className="text-silver-gray dark:text-gray-400 text-sm max-w-[280px]">Contact our engineers to design a custom solution for your facility.</p>
          <div className="flex flex-col w-full gap-3 items-center">
            <button 
              onClick={() => navigate('/contact')}
              className="flex w-full max-w-[280px] cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 active:scale-95 transition-all"
            >
              Request a Consultation
            </button>
            <a className="flex items-center gap-2 text-primary font-bold text-lg py-2" href="tel:0175162938">
              <span className="material-symbols-outlined">call</span>
              0175162938
            </a>
          </div>
          <p className="text-xs text-silver-gray mt-2">Professional installation • 1-year hardware warranty</p>
        </div>

        <footer className="p-6 bg-white dark:bg-gray-900 border-t border-[#dbdfe6] dark:border-gray-800 text-center">
          <p className="text-xs text-silver-gray">© 2026 Pakmike Technology. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default ServiceDetail;

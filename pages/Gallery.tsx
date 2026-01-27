
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Project, ServiceCategory } from '../types';

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string | 'All'>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const categories = ['All', ...Object.values(ServiceCategory)];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-[#dbdfe6] dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="text-primary cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Portfolio</h2>
        <button className="flex size-10 items-center justify-center rounded-lg bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl text-primary">collections</span>
        </button>
      </header>

      <main className="max-w-md mx-auto pb-24">
        <section className="px-4 pt-8 pb-4">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">Our Portfolio</span>
            <h1 className="text-3xl font-black leading-tight tracking-[-0.033em]">Project Gallery</h1>
            <p className="text-base font-normal leading-relaxed text-silver-gray dark:text-gray-400">
              Showcasing our track record of excellence in technical installations and systems integration.
            </p>
          </div>
        </section>

        <div className="flex gap-2 px-4 py-4 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === cat
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-900 border border-[#dbdfe6] dark:border-gray-700 text-slate-700 dark:text-silver-accent'
                }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        <section className="p-4 grid grid-cols-1 gap-6">
          {loading ? (
            <div className="py-10 text-center text-slate-500">Loading projects...</div>
          ) : (
            filteredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-[#dbdfe6] dark:border-gray-700 shadow-sm">
                <div
                  className="relative aspect-[16/10] bg-center bg-cover"
                  style={{ backgroundImage: `url("${project.image}")` }}
                >
                  <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-silver-gray dark:text-gray-400">{project.description}</p>
                </div>
              </div>
            ))
          )}
        </section>

        <div className="p-6 mt-6 mb-10 flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-1 bg-primary/20 rounded-full mb-4"></div>
          <h3 className="text-2xl font-black">Start Your Project</h3>
          <p className="text-silver-gray dark:text-gray-400 text-sm max-w-[280px]">Ready to bring your technical requirements to life? Get in touch with us today.</p>
          <div className="flex flex-col w-full gap-3 items-center mt-4">
            <button onClick={() => navigate('/contact')} className="flex w-full max-w-[280px] cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 active:scale-95 transition-all">
              Consult Our Experts
            </button>
            <div className="flex flex-col items-center mt-4">
              <span className="text-[10px] text-silver-gray mb-1 uppercase tracking-[0.2em] font-extrabold">Speak with us</span>
              <div className="flex flex-col gap-1 items-center">
                <a className="flex items-center gap-2 text-primary font-bold text-2xl py-1" href="tel:045880616">
                  <span className="material-symbols-outlined">call</span>
                  04-5880616
                </a>
                <a className="flex items-center gap-2 text-primary/80 font-semibold text-lg" href="tel:0175162938">
                  <span className="material-symbols-outlined text-sm">smartphone</span>
                  0175162938
                </a>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-silver-gray mt-6 uppercase tracking-widest">Premium Technical Solutions • Malaysia</p>
        </div>
      </main>
    </div>
  );
};

export default Gallery;

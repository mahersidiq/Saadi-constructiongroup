import { useState } from 'react';

function ProjectCard({ project }) {
  const { title, location, size, scope_type, description } = project;
  return (
    <div className="group flex flex-col h-full rounded-xl bg-white border border-gray-200 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 p-6">
      {scope_type && (
        <span className="self-start mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-gold/10 text-gold border border-gold/20">
          {scope_type}
        </span>
      )}
      <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-navy transition-colors leading-snug">{title}</h3>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
        {location && (
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
            {location}
          </span>
        )}
        {size && <span className="px-2 py-0.5 rounded bg-light-gray text-xs font-medium text-charcoal">{size}</span>}
      </div>
      {description && <p className="mt-4 text-sm text-gray-600 leading-relaxed flex-1">{description}</p>}
    </div>
  );
}

const projectCategories = ['Custom Home', 'Design-Build', 'Luxury', 'New Construction', 'Addition', 'Plans & Permits'];

export default function ProjectsFilter({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState(null);
  const filtered = activeFilter ? projects.filter((p) => p.scope_type === activeFilter) : projects;
  const allFilters = ['All', ...projectCategories];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 py-8">
        {allFilters.map((category) => {
          const isActive = category === 'All' ? !activeFilter : activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category === 'All' ? null : category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive ? 'bg-gold text-white shadow-md' : 'bg-light-gray text-charcoal hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </>
  );
}

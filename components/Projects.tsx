'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Code2, GitBranch, Terminal } from 'lucide-react'

type Category = 'All' | 'Full-Stack' | 'Frontend'

type Project = {
    title: string
    description: string
    category: Exclude<Category, 'All'>
    stack: string[]
    href?: string
    source?: string
    badge?: 'Client Work' | 'Demo'
}

const filters: Category[] = ['All', 'Full-Stack', 'Frontend']

const projects: Project[] = []

function ComingSoonCard({ category }: { category: Exclude<Category, 'All'> }) {
    return (
        <article className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0b0f19]/80 p-6 backdrop-blur-xl transition-all hover:border-cyan-500/40">
            {/* Terminal Topline */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-cyan-400/80" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400/40" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400/20" />
                </div>
                <span className="font-mono text-xs text-white/60">mint_codes / {category.toLowerCase()}</span>
            </div>

            {/* Terminal Body */}
            <div className="space-y-4 font-mono">
                <p className="text-xs text-cyan-400">&gt; scanning {category.toLowerCase()} pipeline</p>
                <p className="text-sm font-bold text-white tracking-wider">// STATUS: PIPELINE COMPILING</p>
                <p className="text-xs text-white/60 leading-relaxed">
                    New work is taking shape.<br />Check back soon for case studies.
                </p>
            </div>

            {/* Badge / Indicator */}
            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-400 border border-cyan-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Active R&amp;D
                </span>
                <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">Coming Soon</span>
            </div>
        </article>
    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="showcase-card showcase-card--project">
            <div className="project-card-glow" aria-hidden="true" />
            <div className="project-card-header">
                <span className="project-index">0{projects.indexOf(project) + 1}</span>
                <span className="project-category">{project.category}</span>
            </div>
            <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list" aria-label={`${project.title} technology stack`}>
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
            </div>
            <div className="project-links">
                <a href={project.href} aria-label={`View live demo of ${project.title}`}>Live Demo <ArrowUpRight aria-hidden="true" /></a>
                <a href={project.source} aria-label={`View source code for ${project.title}`}>Source <Code2 aria-hidden="true" /></a>
            </div>
        </article>
    )
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<Category>('All')
    const visibleProjects = useMemo(
        () => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter),
        [activeFilter],
    )

    return (
        <section id='projects' className="showcase-section scroll-mt-10" aria-labelledby="projects-heading">
            <div className="showcase-shell content-shell">
                <div className="showcase-heading-row">
                    <div>
                        <p className="section-index">// 02 - FEATURED PROJECTS</p>
                        <h1 id="projects-heading" className="section-title">Projects <span className="section-title-accent">&amp;</span> Case Studies</h1>
                        <p className="showcase-intro">Production-ready applications and scalable workflows built with purpose and clarity.</p>
                    </div>
                </div>
                <div className='flex items-center mt-15 mb-6 pr-1'>
                    <div className='flex justify-between w-full'>
                        <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeFilter === filter}
                                    className={activeFilter === filter ? 'filter-button is-active' : 'filter-button'}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <div className="project-count" aria-label={`${visibleProjects.length} active projects`}>
                            <strong>{String(visibleProjects.length).padStart(2, '0')}</strong>
                            <span>active<br />projects</span>
                        </div>
                    </div>
                </div>

                <div className="projects-grid" key={activeFilter}>
                    {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
                    {(activeFilter === 'All' || visibleProjects.length < 1) && <ComingSoonCard category={activeFilter === 'All' ? 'Frontend' : activeFilter} />}
                    {activeFilter === 'All' && <ComingSoonCard category="Full-Stack" />}
                </div>

                <div className="showcase-footer"><GitBranch aria-hidden="true" /><span>More work is always in the pipeline.</span><span className="footer-line" /></div>
            </div>
        </section>
    )
}

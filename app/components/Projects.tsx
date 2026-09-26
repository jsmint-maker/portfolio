'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Code2, GitBranch, Terminal } from 'lucide-react'

type Category = 'All' | 'Full-Stack' | 'Frontend' | 'APIs & Automation'

type Project = {
    title: string
    description: string
    category: Exclude<Category, 'All'>
    stack: string[]
    href?: string
    source?: string
}

const filters: Category[] = ['All', 'Full-Stack', 'Frontend', 'APIs & Automation']

const projects: Project[] = [
    {
        title: 'Pulseboard',
        description: 'A real-time command center for teams that ship with clarity.',
        category: 'Full-Stack',
        stack: ['Next.js', 'TypeScript', 'Postgres'],
        href: '#',
        source: '#',
    },
    {
        title: 'Northstar UI',
        description: 'A flexible interface system built for modern product teams.',
        category: 'Frontend',
        stack: ['React', 'Tailwind', 'Storybook'],
        href: '#',
        source: '#',
    },
    {
        title: 'Flowline',
        description: 'Tiny, dependable automations that keep the busywork moving.',
        category: 'APIs & Automation',
        stack: ['Node.js', 'REST APIs', 'Cron'],
        href: '#',
        source: '#',
    },
]

function ComingSoonCard({ category }: { category: Exclude<Category, 'All'> }) {
    return (
        <article className="showcase-card showcase-card--soon">
            <div className="terminal-topline">
                <Terminal aria-hidden="true" />
                <span>mint_codes / projects</span>
                <span className="terminal-dots" aria-hidden="true">•••</span>
            </div>
            <div className="terminal-body">
                <p className="terminal-command"><span>&gt;</span> scanning {category.toLowerCase()}</p>
                <p className="terminal-status">// STATUS: PIPELINE COMPILING</p>
                <p className="terminal-copy">New work is taking shape.<br />Check back soon.</p>
            </div>
            <span className="soon-label">Coming Soon</span>
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
        <section id='projects'  className="showcase-section" aria-labelledby="projects-heading">
            <div className="showcase-shell">
                <div className="showcase-heading-row">
                    <div>
                        <p className="section-index">// 03 - Selected Works</p>
                        <h1 id="projects-heading">Projects <em>Showcase</em></h1>
                        <p className="showcase-intro">A selection of digital products, systems, and experiments built with intention.</p>
                    </div>
                    <div className="project-count" aria-label={`${visibleProjects.length} active projects`}>
                        <strong>{String(visibleProjects.length).padStart(2, '0')}</strong>
                        <span>active<br />projects</span>
                    </div>
                </div>

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

                <div className="projects-grid" key={activeFilter}>
                    {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
                    {(activeFilter === 'All' || visibleProjects.length < 2) && <ComingSoonCard category={activeFilter === 'All' ? 'Frontend' : activeFilter} />}
                    {activeFilter === 'All' && <ComingSoonCard category="APIs & Automation" />}
                </div>

                <div className="showcase-footer"><GitBranch aria-hidden="true" /><span>More work is always in the pipeline.</span><span className="footer-line" /></div>
            </div>
        </section>
    )
}

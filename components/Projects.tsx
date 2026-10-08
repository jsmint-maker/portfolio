'use client'

import { useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Code2, GitBranch, Terminal, X } from 'lucide-react'

type Category = 'All' | 'Full-Stack' | 'Frontend'

type Project = {
    title: string
    description: string
    category: Exclude<Category, 'All'>
    stack: string[]
    href?: string
    source?: string
    sourcePrivate?: boolean
    badge?: 'Client Work' | 'Demo'
}

const filters: Category[] = ['All', 'Full-Stack', 'Frontend']

const projects: Project[] = [
    {
        title: 'Kalea Coffee & Roastery',
        description: 'A high-performance artisanal cafe and bakery web application featuring live menu fetching, custom ordering, and smooth WhatsApp order integration.',
        category: 'Full-Stack',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Supabase'],
        href: 'https://cafe-demo-psi-one.vercel.app/',
        source: 'https://github.com/jsmint-maker/cafe-demo',
    },
    {
        title: "Axumite Crown Properties",
        description:
            "A luxury real estate frontend demo featuring curated Addis Ababa listings, dynamic filters, responsive property galleries, persistent favorites, and interactive inquiry and tour flows.",
        category: "Frontend",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Lucide"],
        href: "https://realestate-demo-hazel.vercel.app/",
        sourcePrivate: true,
    }
]

function ComingSoonCard({ category }: { category: Exclude<Category, 'All'> }) {
    return (
        <article className="relative min-h-80 self-center overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0b0f19]/80 p-5 opacity-50 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:opacity-90">
            {/* Terminal Topline */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-cyan-400/80" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400/40" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400/20" />
                </div>
                <span className="font-mono text-xs text-white/60">mint_codes / {category.toLowerCase()}</span>
            </div>

            {/* Terminal Body */}
            <div className="space-y-3 font-mono">
                <p className="text-xs text-cyan-400">&gt; scanning {category.toLowerCase()} pipeline</p>
                <p className="text-sm font-bold text-white tracking-wider">// STATUS: PIPELINE COMPILING</p>
                <p className="text-xs text-white/60 leading-relaxed">
                    New work is taking shape.<br />Check back soon for case studies.
                </p>
            </div>

            {/* Badge / Indicator */}
            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-3">
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
    const sourceDialogRef = useRef<HTMLDialogElement>(null)

    return (
        <article className="relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-[rgba(157,188,197,0.14)] bg-[linear-gradient(145deg,rgba(21,32,47,0.88),rgba(12,18,30,0.88))] p-6 transition-[transform,border-color,box-shadow] duration-250 hover:-translate-y-1.25 hover:border-[rgba(0,242,254,0.52)] hover:shadow-[0_15px_45px_rgba(0,242,254,0.1)] max-[560px]:min-h-75">
            <div className="absolute -top-25 -right-22.5 size-55 rounded-full bg-mint/8 blur-[35px]" aria-hidden="true" />
            <div className="relative flex justify-between font-mono text-[11px] tracking-[0.08em] text-[#5f7680] uppercase">
                <span>0{projects.indexOf(project) + 1}</span>
                <span className="text-[9px] text-mint">{project.category}</span>
            </div>
            <div className="relative mt-auto pb-10">
                <h3 className="mb-3 text-[27px] tracking-[-0.04em]">{project.title}</h3>
                <p className="max-w-65 text-[13px] leading-[1.65] text-[#93a4aa]">{project.description}</p>
                <div className="mt-5.5 flex flex-wrap gap-1.5" aria-label={`${project.title} technology stack`}>
                    {project.stack.map((item) => <span className="rounded-sm border border-mint/20 bg-mint/6 px-2 py-1.25 font-mono text-[10px] text-[#a1bbc1]" key={item}>{item}</span>)}
                </div>
            </div>
            <div className="flex gap-5 border-t border-[rgba(157,188,197,0.13)] pt-4.25 [&_a]:inline-flex [&_a]:items-center [&_a]:gap-1.5 [&_a]:text-[11px] [&_a]:text-[#bdcdd1] [&_a]:no-underline [&_a:hover]:text-mint [&_svg]:size-3.25">
                <a href={project.href} aria-label={`View live demo of ${project.title}`}>Live Demo <ArrowUpRight aria-hidden="true" /></a>
                {project.source ? (
                    <a href={project.source} aria-label={`View source code for ${project.title}`}>Source <Code2 aria-hidden="true" /></a>
                ) : project.sourcePrivate ? (
                    <button
                        type="button"
                        onClick={() => sourceDialogRef.current?.showModal()}
                        aria-haspopup="dialog"
                        className="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[11px] text-[#bdcdd1] hover:text-mint"
                    >
                        Source <Code2 aria-hidden="true" />
                    </button>
                ) : null}
            </div>
            {project.sourcePrivate && (
                <dialog
                    ref={sourceDialogRef}
                    aria-labelledby="private-source-title"
                    className="m-auto w-[calc(100%-2rem)] max-w-md rounded-xl border border-cyan-300/20 bg-[#0b0f19] p-6 text-white shadow-2xl backdrop:bg-black/70"
                    onClick={(event) => {
                        if (event.target === sourceDialogRef.current) sourceDialogRef.current?.close()
                    }}
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 id="private-source-title" className="text-lg font-semibold">The source code is private</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                If you&apos;d like access to the code, send me a DM on Telegram.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => sourceDialogRef.current?.close()}
                            aria-label="Close dialog"
                            className="rounded-md p-1 text-slate-400 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            <X aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                    <a
                        href={`https://t.me/MintCodes_16?text=${encodeURIComponent(`Hello, I want the source code of "${project.title}".`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2.5 text-sm font-mono text-mint transition-colors hover:bg-cyan-300/20 focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                        Message me on Telegram <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                </dialog>
            )}
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
        <section id='projects' className="py-[clamp(3rem,2vw,4.5rem)] scroll-mt-10" aria-labelledby="projects-heading">
            <div className="mx-auto w-[calc(100%-48px)] max-w-290">
                <div className="flex items-end justify-between gap-8 max-[800px]:items-start">
                    <div className="w-full">
                        <p className="mb-5.5 font-mono text-[11px] tracking-[0.18em] text-mint uppercase">// 02 - FEATURED PROJECTS</p>
                        <h1 id="projects-heading" className="text-[clamp(2.75rem,7vw,5.375rem)] leading-[0.95] font-[650] tracking-[-0.07em]">Projects <span className="text-mint">&amp;</span> Case Studies</h1>
                        <p className="mt-6 max-w-125t-[15px] leading-[1.7] text-[#8da1aa]">Production-ready applications and scalable workflows built with purpose and clarity.</p>
                    </div>
                </div>
                <div className='flex items-center mt-15 mb-6 pr-1'>
                    <div className='flex justify-between w-full'>
                        <div className="inline-flex gap-1 rounded-lg border border-border bg-[rgba(16,24,37,0.72)] p-1 max-[560px]:grid max-[560px]:w-full max-[560px]:grid-cols-3" role="tablist" aria-label="Filter projects by category">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeFilter === filter}
                                    className={`rounded-[5px] px-4 py-2.5 text-[11px] font-semibold tracking-[0.08em] transition-[color,background,box-shadow] hover:text-foreground focus-visible:text-foreground focus-visible:outline-none ${activeFilter === filter ? 'bg-mint text-[#041217] shadow-[0_0_18px_rgba(0,242,254,0.22)]' : 'text-[#82969e]'}`}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-end gap-2.5 pb-2 font-mono text-[10px] leading-tight tracking-[0.12em] text-[#6d818b] uppercase max-[800px]:hidden" aria-label={`${visibleProjects.length} active projects`}>
                            <strong className="text-[30px] font-normal tracking-[-0.08em] text-foreground">{String(visibleProjects.length).padStart(2, '0')}</strong>
                            <span>active<br />projects</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500 max-[800px]:grid-cols-2 max-[560px]:grid-cols-1" key={activeFilter}>
                    {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
                    {activeFilter !== 'Frontend' && <ComingSoonCard category="Full-Stack" />}
                </div>

                <div className="mt-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.08em] text-[#5f767f] uppercase [&_svg]:w-3.5 [&_svg]:text-mint"><GitBranch aria-hidden="true" /><span>More work is always in the pipeline.</span><span className="h-px flex-1 bg-linear-to-r from-mint/32 to-transparent" /></div>
            </div>
        </section>
    )
}

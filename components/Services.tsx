import {
    ArrowUpRight,
    Bug,
    Code2,
    Layers3,
    Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
    number: string
    icon: LucideIcon
    title: string
    description: string
    action: string
    accent: string
    iconStyle: string
}

const services: Service[] = [
    {
        number: '01',
        icon: Bug,
        title: 'Rapid Frontend Bug Fixes & Diagnostics',
        description:
            'Quick patching of mobile layout overflows, broken grids, and Next.js hydration errors for fast turnaround.',
        action: 'Inquire Now',
        accent: 'border-cyan-400/40 bg-cyan-400/[0.04]',
        iconStyle: 'bg-cyan-400/15 text-cyan-300',
    },
    {
        number: '02',
        icon: Code2,
        title: 'Frontend Pages from Scratch',
        description:
            'High-converting, mobile-first landing pages or digital hubs built from the ground up for businesses with zero web presence.',
        action: 'Inquire Now',
        accent: 'border-cyan-400/30 bg-cyan-400/[0.03]',
        iconStyle: 'bg-cyan-400/10 text-cyan-400',
    },
    {
        number: '03',
        icon: Sparkles,
        title: 'Frontend Polish & UI Transformation',
        description:
            'Modernizing existing layouts into pixel-perfect, responsive code using Tailwind and modern design systems.',
        action: 'Inquire Now',
        accent: 'border-cyan-400/25 bg-cyan-400/[0.02]',
        iconStyle: 'bg-cyan-400/10 text-cyan-300',
    },
    {
        number: '04',
        icon: Layers3,
        title: 'Full-Stack Builds & API Integrations',
        description:
            'End-to-end custom architecture, secure database design, and robust third-party API integrations built to scale.',
        action: 'Inquire Now',
        accent: 'border-cyan-400/35 bg-cyan-400/[0.04]',
        iconStyle: 'bg-cyan-400/15 text-cyan-300',
    },
]

export default function Servicesw() {
    return (
        <main id='services' className="overflow-hidden bg-[#0b0f19] py-[clamp(3rem,2vw,4.5rem)] text-slate-100 scroll-mt-10">
            <div className="mx-auto w-[calc(100%-48px)] max-w-290">
                <section className="relative">
                    <div className="relative max-w-3xl">
                        <p className="mb-5.5 font-mono text-[11px] tracking-[0.18em] text-mint uppercase">
                            // 03 - CORE SERVICES
                        </p>
                        <h1 className="text-balance text-[clamp(2.75rem,7vw,5.375rem)] leading-[0.95] font-[650] tracking-[-0.07em] text-white">
                            Services <span className="text-mint">&amp;</span> Offerings
                        </h1>
                        <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                            Thoughtful engineering for your product — from the first pixel to the final API call.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <article
                                    key={service.number}
                                    className={`group flex min-h-108 flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_20px_70px_-30px_rgba(0,242,254,0.35)] ${service.accent}`}
                                >
                                    <div>
                                        <div className="flex items-start justify-between">
                                            <div className={`flex size-11 items-center justify-center rounded-lg ${service.iconStyle}`}>
                                                <Icon aria-hidden="true" className="size-5" />
                                            </div>
                                            <span className="font-mono text-xs text-slate-400">{service.number}</span>
                                        </div>
                                        <h2 className="mt-10 text-xl font-medium leading-tight tracking-[-0.02em] text-white">
                                            {service.title}
                                        </h2>
                                        <p className="mt-5 text-sm leading-6 text-slate-400">{service.description}</p>
                                    </div>
                                    <a
                                        href={`https://t.me/MintCodes_16?text=${encodeURIComponent(`Hi, I'm interested in your service: ${service.title}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative mt-6 flex items-center justify-between gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-300/20 focus-visible:ring-2 focus-visible:ring-cyan-300">
                                        {service.action}
                                        <ArrowUpRight aria-hidden="true" size={16} className="absolute top-3 right-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </article>
                            )
                        })}
                    </div>
                </section>

                <section id="contact" className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Have a project in mind?</p>
                        <h2 className="mt-3 text-2xl font-medium tracking-tight text-white">Let&apos;s build something sharp.</h2>
                    </div>
                    <a href="https://t.me/MintCodes_16" className="inline-flex w-fit items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#0b0f19] transition-transform hover:scale-[1.03]">
                        Start a conversation <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                </section>
            </div>
        </main>
    )
}

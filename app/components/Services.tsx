import {
    ArrowUpRight,
    Bug,
    Code2,
    Layers3,
    Sparkles,
} from 'lucide-react'

const services = [
    {
        number: '01',
        icon: Bug,
        title: 'Rapid Frontend Bug Fixes & Diagnostics',
        description:
            'Quick patching of mobile layout overflows, broken grids, and Next.js hydration errors for fast turnaround.',
        action: 'Inquire Now',
        accent: 'border-cyan-400/35 bg-cyan-400/[0.04]',
        iconStyle: 'bg-cyan-400/10 text-cyan-300',
    },
    {
        number: '02',
        icon: Code2,
        title: 'Frontend Pages from Scratch',
        description:
            'High-converting, mobile-first landing pages or digital hubs built from the ground up for businesses with zero web presence.',
        action: 'Book Service',
        accent: 'border-violet-400/25 bg-violet-400/[0.04]',
        iconStyle: 'bg-violet-400/10 text-violet-300',
    },
    {
        number: '03',
        icon: Sparkles,
        title: 'Frontend Polish & UI Transformation',
        description:
            'Modernizing existing layouts into pixel-perfect, responsive code using Tailwind and modern design systems.',
        action: 'Inquire Now',
        accent: 'border-emerald-400/25 bg-emerald-400/[0.04]',
        iconStyle: 'bg-emerald-400/10 text-emerald-300',
    },
    {
        number: '04',
        icon: Layers3,
        title: 'Full-Stack Builds & API Integrations',
        description:
            'End-to-end custom architecture utilizing NestJS, Supabase, Redis, and payment gateways like Chapa and Stripe.',
        action: 'Book Service',
        accent: 'border-amber-300/25 bg-amber-300/[0.04]',
        iconStyle: 'bg-amber-300/10 text-amber-200',
    },
]

export default function Servicesw() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#0b0f19] text-slate-100">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
                <section id="services" className="relative py-20 sm:py-28">
                    <div className="pointer-events-none absolute -right-40 -top-32 size-112 rounded-full bg-cyan-400/[0.07] blur-3xl" />
                    <div className="relative max-w-3xl">
                        <p className="section-index">
                            // 04 - what I do
                        </p>
                        <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                            Services <span className="text-slate-500">&amp;</span> Offerings
                        </h1>
                        <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                            Thoughtful engineering for ambitious products — from the first pixel to the final API call.
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
                                            <div className={`flex size-11 items-center justify-center rounded-xl ${service.iconStyle}`}>
                                                <Icon aria-hidden="true" className="size-5" />
                                            </div>
                                            <span className="font-mono text-xs text-slate-500">{service.number}</span>
                                        </div>
                                        <h2 className="mt-10 text-xl font-medium leading-tight tracking-[-0.02em] text-white">
                                            {service.title}
                                        </h2>
                                        <p className="mt-5 text-sm leading-6 text-slate-400">{service.description}</p>
                                    </div>
                                    <a
                                        href="#contact"
                                        className="mt-10 inline-flex w-fit items-center gap-2 border-b border-cyan-300/40 pb-1 text-sm font-medium text-cyan-300 transition-colors group-hover:border-cyan-300 group-hover:text-cyan-200"
                                    >
                                        {service.action}
                                        <ArrowUpRight aria-hidden="true" className="size-4" />
                                    </a>
                                </article>
                            )
                        })}
                    </div>
                </section>

                <section id="contact" className="flex flex-col gap-6 border-t border-white/10 py-12 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Have a project in mind?</p>
                        <h2 className="mt-3 text-2xl font-medium tracking-tight text-white">Let&apos;s build something sharp.</h2>
                    </div>
                    <a href="mailto:hello@mintcodes.dev" className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#0b0f19] transition-transform hover:scale-[1.03]">
                        Start a conversation <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                </section>
            </div>
        </main>
    )
}

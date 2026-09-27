import type { ComponentType } from "react";
import { SiCloudflare, SiTelegram, SiResend, SiStripe, SiNextdotjs, SiTypescript, SiTailwindcss, SiNestjs, SiSupabase, SiRedis, SiSentry, SiUpstash, SiPrisma } from "react-icons/si";
import { Twilio, Chapa, BullMQ } from './OtherIcons';

type Technology = {
    name: string
    mark: string
    icon?: ComponentType<{ className?: string }>
    detail: string
}

type Category = {
    number: string
    title: string
    description: string
    technologies: Technology[]
}

const categories: Category[] = [
    {
        number: '01',
        title: 'Core Frontend',
        description: 'Interfaces that feel as good as they perform.',
        technologies: [
            { name: 'Next.js', mark: 'N', icon: SiNextdotjs, detail: 'React framework' },
            { name: 'TypeScript', mark: 'TS', icon: SiTypescript, detail: 'Type safety' },
            { name: 'Tailwind CSS', mark: '≈', icon: SiTailwindcss, detail: 'Utility styling' },
        ],
    },
    {
        number: '02',
        title: 'Backend & APIs',
        description: 'Secure services built for real-world scale.',
        technologies: [
            { name: 'NestJS', mark: 'N', icon: SiNestjs, detail: 'Node architecture' },
            { name: 'Supabase', mark: 'S', icon: SiSupabase, detail: 'Postgres & Auth' },
            { name: 'Chapa', mark: 'C', icon: Chapa, detail: 'Payments' },
            { name: 'Stripe', mark: 'S', icon: SiStripe, detail: 'Payments' },
            { name: 'Resend', mark: 'R', icon: SiResend, detail: 'Transactional email' },
            { name: 'Twilio', mark: 'T', icon: Twilio, detail: 'SMS & Voice API' },
            { name: 'Telegram API', mark: '✈', icon: SiTelegram, detail: 'Event triggers' },
        ],
    },
    {
        number: '03',
        title: 'Data & Operations',
        description: 'The quiet infrastructure behind reliable products.',
        technologies: [
            { name: 'Redis', mark: 'R', icon: SiRedis, detail: 'In-memory data' },
            { name: 'BullMQ', mark: 'B', icon: BullMQ, detail: 'Job queues' },
            { name: 'Cloudflare R2', mark: 'R2', icon: SiCloudflare, detail: 'Cloud storage' },
            { name: 'Prisma', mark: 'P', icon: SiPrisma, detail: 'Type-safe ORM' },
        ],
    },
    {
        number: '04',
        title: 'Reliability & Monitoring',
        description: 'Confidence from first deploy to first million users.',
        technologies: [
            { name: 'Sentry', mark: 'S', icon: SiSentry, detail: 'Error tracking' },
            { name: 'UptimeRobot', mark: 'U', icon: SiUpstash, detail: 'Uptime monitoring' },
        ],
    },
]



export default function TechStack() {
    return (
        <main className="architecture-page">
            <section id="skills" className="architecture-shell content-shell scroll-mt-12" aria-labelledby="architecture-title">

                <div className="intro">
                    <p className="section-index">// 01 — TECH STACK</p>
                    <h1 id="architecture-title" className="section-title">Tech Stack <span className="section-title-accent">&amp;</span> Engineering Architecture</h1>
                    <p className="intro-copy">A considered stack for building digital products that are fast, resilient, and made to last.</p>
                </div>

                <div className="category-grid">
                    {categories.map((category) => (
                        <article className="category-card rounded-2xl" key={category.number}>
                            <div className="card-topline"><span>{category.number}</span></div>
                            <div className="category-heading">
                                <h2>{category.title}</h2>
                                <p>{category.description}</p>
                            </div>
                            <div className="tech-list">
                                {category.technologies.map((technology) => {
                                    const IconComponent = technology.icon;

                                    return (
                                        <div className="tech-item" key={technology.name}>
                                            <span className="tech-node" aria-hidden="true">
                                                {IconComponent ? (<IconComponent className="w-4 h-4 text-cyan-400" />) : (<span>{technology.mark}</span>)

                                                }
                                            </span>
                                            <span className="tech-name">{technology.name}</span>
                                            <span className="tech-detail">{technology.detail}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

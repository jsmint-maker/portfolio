import { SiCloudflare, SiTelegram, SiResend, SiStripe, SiNextdotjs, SiTypescript, SiTailwindcss, SiNestjs, SiSupabase, SiRedis, SiSentry, SiUpstash, SiPrisma } from "react-icons/si";
import { Twilio, Chapa, BullMQ } from './otherIcons';

const categories = [
    {
        number: '01',
        title: 'Core Frontend',
        description: 'Interfaces that feel as good as they perform.',
        technologies: [
            { name: 'Next.js', mark: 'N', icon: SiNextdotjs, detail: 'React framework' },
            { name: 'TypeScript', mark: 'TS', icon: SiTypescript, detail: 'Typed systems' },
            { name: 'Tailwind CSS', mark: '≈', icon: SiTailwindcss, detail: 'Utility styling' },
        ],
    },
    {
        number: '02',
        title: 'Backend & APIs',
        description: 'Secure services built for real-world scale.',
        technologies: [
            { name: 'NestJS', mark: 'N', icon: SiNestjs, detail: 'Node architecture' },
            { name: 'Supabase', mark: 'S', icon: SiSupabase, detail: 'Backend platform' },
            { name: 'Chapa', mark: 'C', icon: Chapa, detail: 'Payments' },
            { name: 'Stripe', mark: 'S', icon: SiStripe, detail: 'Payments' },
            { name: 'Resend', mark: 'R', icon: SiResend, detail: 'Transactional email' },
            { name: 'Twilio', mark: 'T', icon: Twilio, detail: 'Communications' },
            { name: 'Telegram', mark: '✈', icon: SiTelegram, detail: 'Messaging API' },
        ],
    },
    {
        number: '03',
        title: 'Data & Operations',
        description: 'The quiet infrastructure behind reliable products.',
        technologies: [
            { name: 'Redis', mark: 'R', icon: SiRedis, detail: 'In-memory data' },
            { name: 'BullMQ', mark: 'B', icon: BullMQ, detail: 'Job queues' },
            { name: 'Cloudflare R2', mark: 'R2', icon: SiCloudflare, detail: 'Object storage' },
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

function NetworkGraphic() {
    return (
        <svg className="network-graphic" viewBox="0 0 900 500" fill="none" aria-hidden="true">
            <path d="M-40 282C89 217 125 304 221 254S384 148 491 220s151 50 227-25 113-68 222-108" />
            <path d="M90 540c34-96 83-167 155-187s111 25 163-54 52-162 142-179 155 23 231-50" />
            <path d="M296-40c8 96-9 148 48 202s145 3 172 93 19 159 101 183 141-11 195 62" />
            <g className="network-nodes">
                <circle cx="90" cy="261" r="3" /><circle cx="221" cy="254" r="3" /><circle cx="384" cy="171" r="3" />
                <circle cx="491" cy="220" r="3" /><circle cx="718" cy="195" r="3" /><circle cx="875" cy="87" r="3" />
                <circle cx="245" cy="353" r="3" /><circle cx="408" cy="299" r="3" /><circle cx="550" cy="120" r="3" />
                <circle cx="757" cy="248" r="3" /><circle cx="296" cy="162" r="3" />
            </g>
        </svg>
    )
}

export default function TechStack() {
    return (
        <main className="architecture-page">
            <NetworkGraphic />
            <section id="skills" className="architecture-shell" aria-labelledby="architecture-title">
                <header className="architecture-header">
                    <div className="eyebrow"><span className="eyebrow-dot" /> MINT CODES // V1.0</div>
                    <div className="header-line" />
                    <div className="status">[STATUS: ONLINE]</div>
                </header>

                <div className="intro">
                    <p className="section-index">// 02 — STACK</p>
                    <h1 id="architecture-title">Tech Stack <span>&amp;</span><br />Engineering Architecture</h1>
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

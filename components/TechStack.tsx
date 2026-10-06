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
        <main className="relative overflow-hidden bg-[#0b0f19] py-[clamp(3rem,2vw,4.5rem)] text-[#edfafd]">
            <section id="skills" className="relative z-[1] mx-auto w-[calc(100%-48px)] max-w-[1160px] scroll-mt-12 max-[560px]:pt-6" aria-labelledby="architecture-title">

                <div className="max-w-none py-10 pb-5 max-[560px]:py-8 max-[560px]:pb-6">
                    <p className="mb-[22px] font-mono text-[11px] tracking-[0.18em] text-[#00f2fe] uppercase">// 01 — TECH STACK</p>
                    <h1 id="architecture-title" className="text-[clamp(2.75rem,7vw,5.375rem)] leading-[0.95] font-[650] tracking-[-0.07em]">Tech Stack <span className="text-[#00f2fe]">&amp;</span> Engineering Architecture</h1>
                    <p className="mt-[30px] max-w-[430px] text-[15px] leading-[1.7] text-[#8295a3]">A considered stack for building digital products that are fast, resilient, and made to last.</p>
                </div>

                <div className="grid grid-cols-4 gap-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
                    {categories.map((category) => (
                        <article className="min-h-[395px] border border-[rgba(126,223,231,0.15)] bg-[linear-gradient(145deg,rgba(26,40,53,0.64),rgba(13,22,34,0.46))] p-[18px] shadow-[inset_0_1px_rgba(255,255,255,0.04),0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-[14px] transition-[border-color,transform,background] duration-300 hover:border-[rgba(0,242,254,0.48)] hover:bg-[linear-gradient(145deg,rgba(27,55,67,0.72),rgba(13,22,34,0.58))] motion-reduce:transition-none max-[900px]:min-h-[360px] max-[560px]:min-h-0" key={category.number}>
                            <div className="flex justify-between font-mono text-[11px] tracking-[0.14em] text-[#5f7680]"><span>{category.number}</span></div>
                            <div className="min-h-[132px] pt-5 max-[560px]:min-h-[112px] max-[560px]:pt-[38px]">
                                <h2 className="text-[19px] font-medium tracking-[-0.035em] text-[#e9fafc]">{category.title}</h2>
                                <p className="mt-[10px] max-w-[190px] text-xs leading-[1.6] text-[#7f919f]">{category.description}</p>
                            </div>
                            <div className="border-t border-[rgba(126,223,231,0.13)]">
                                {category.technologies.map((technology) => {
                                    const IconComponent = technology.icon;

                                    return (
                                        <div className="grid grid-cols-[26px_1fr_auto] items-center gap-[9px] border-b border-[rgba(126,223,231,0.09)] py-[11px]" key={technology.name}>
                                            <span className="grid size-6 place-items-center rounded-full border border-[rgba(0,242,254,0.4)] font-mono text-[10px] text-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.08)]" aria-hidden="true">
                                                {IconComponent ? (<IconComponent className="w-4 h-4 text-cyan-400" />) : (<span>{technology.mark}</span>)

                                                }
                                            </span>
                                            <span className="text-xs text-[#d6eff2]">{technology.name}</span>
                                            <span className="text-right font-mono text-[9px] text-slate-400">{technology.detail}</span>
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

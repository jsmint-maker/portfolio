import { ArrowUpRight, Code2, Globe2, Sparkles } from 'lucide-react'

function NodeMark() {
    return (
        <div className="relative flex size-10 items-center justify-center" aria-hidden="true">
            <div className="absolute inset-0 rounded-xl border border-[#00f2fe]/35 bg-[#00f2fe]/5 shadow-[0_0_28px_rgba(0,242,254,0.16)]" />
            <svg className="relative size-7 text-[#00f2fe]" viewBox="0 0 32 32" fill="none">
                <path d="M8 9.5 16 5l8 4.5v9L16 27l-8-8.5v-9Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="m8.5 9.5 7.5 4.2 7.5-4.2M16 13.7V27" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8" cy="9.5" r="2" fill="currentColor" />
                <circle cx="24" cy="9.5" r="2" fill="currentColor" />
                <circle cx="16" cy="27" r="2" fill="currentColor" />
            </svg>
        </div>
    )
}

export default function Hero() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#0b0f19] text-white selection:bg-[#00f2fe]/25 selection:text-white">
            <div className="relative isolate min-h-screen">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(0,242,254,0.12),transparent_25%),radial-gradient(circle_at_15%_80%,rgba(0,242,254,0.05),transparent_25%)]" />
                <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />

                <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
                    <a href="#top" className="group flex items-center gap-3" aria-label="Mint Codes home">
                        <NodeMark />
                        <span className="text-lg font-semibold tracking-[-0.04em] text-white">Mint<span className="text-[#00f2fe]">.</span>Codes</span>
                    </a>
                    <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex" aria-label="Primary navigation">
                        <a className="transition-colors hover:text-white" href="#work">Work</a>
                        <a className="transition-colors hover:text-white" href="#about">About</a>
                        <a className="transition-colors hover:text-white" href="#contact">Contact</a>
                    </nav>
                    <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-[#00f2fe]/60 hover:text-white sm:inline-flex">Let&apos;s talk <ArrowUpRight className="ml-1 size-3.5" aria-hidden="true" /></a>
                </header>

                <section id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-6 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-4">
                    <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-12">
                        <div className="max-w-3xl">
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00f2fe]/20 bg-[#00f2fe]/5 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-[#9afaff] uppercase">
                                <span className="size-1.5 animate-pulse rounded-full bg-[#00f2fe] shadow-[0_0_12px_#00f2fe]" />
                                Independent digital studio
                            </div>
                            <h1 className="max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                                Architecting <span className="text-[#00f2fe] [text-shadow:0_0_35px_rgba(0,242,254,0.25)]">high-performance</span> full-stack web applications.
                            </h1>
                            <p className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">Mint Codes partners with ambitious teams worldwide and local businesses to turn complex ideas into fast, scalable digital products that move the needle.</p>
                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <a href="#work" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#00f2fe] px-6 text-sm font-semibold text-[#061116] shadow-[0_0_32px_rgba(0,242,254,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#68f8ff] hover:shadow-[0_0_42px_rgba(0,242,254,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00f2fe]">Explore Projects <ArrowUpRight className="size-4" aria-hidden="true" /></a>
                                <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/3 px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#00f2fe]/60 hover:bg-[#00f2fe]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00f2fe]">Get in Touch</a>
                            </div>
                            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-4 text-xs text-slate-500">
                                <span className="flex items-center gap-2"><Globe2 className="size-4 text-[#00f2fe]" aria-hidden="true" /> Global &amp; local partnerships</span>
                                <span className="flex items-center gap-2"><Code2 className="size-4 text-[#00f2fe]" aria-hidden="true" /> Built for the next stage</span>
                            </div>
                        </div>

                        <div id="about" className="relative mx-auto w-full max-w-md lg:justify-self-end">
                            <div className="absolute -inset-10 rounded-full bg-[#00f2fe]/10 blur-3xl" />
                            <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-sm sm:p-7">
                                <div className="mb-14 flex items-center justify-between text-[10px] tracking-[0.2em] text-slate-500 uppercase"><span>System / 01</span><Sparkles className="size-4 text-[#00f2fe]" aria-hidden="true" /></div>
                                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-[#00f2fe]/15 bg-[#0b1520]">
                                    <div className="absolute size-56 rounded-full border border-[#00f2fe]/15" />
                                    <div className="absolute size-36 rounded-full border border-[#00f2fe]/20" />
                                    <div className="absolute h-px w-full bg-linear-to-r from-transparent via-[#00f2fe]/30 to-transparent" />
                                    <div className="absolute h-full w-px bg-linear-to-b from-transparent via-[#00f2fe]/30 to-transparent" />
                                    <div className="relative flex size-24 items-center justify-center rounded-3xl border border-[#00f2fe]/50 bg-[#00f2fe]/10 shadow-[0_0_50px_rgba(0,242,254,0.3)]"><NodeMark /></div>
                                    <span className="absolute top-8 right-8 size-2 rounded-full bg-[#00f2fe] shadow-[0_0_14px_#00f2fe]" /><span className="absolute bottom-10 left-10 size-1.5 rounded-full bg-white/60" />
                                </div>
                                <div className="mt-5 flex items-end justify-between"><div><p className="text-sm font-medium text-white">Ideas into interfaces.</p><p className="mt-1 text-xs text-slate-500">Strategy · Design · Engineering</p></div><span className="font-mono text-xs text-[#00f2fe]">01—∞</span></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="work" className="sr-only">Selected projects</div><div id="contact" className="sr-only">Contact Mint Codes</div>
            </div>
        </main>
    )
}


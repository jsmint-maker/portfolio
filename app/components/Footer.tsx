import { GitBranch, Mail, Send } from 'lucide-react'

const links = [
    { label: 'Telegram', href: 'https://t.me/mintcodes', icon: Send },
    { label: 'GitHub', href: 'https://github.com/mintcodes', icon: GitBranch },
    { label: 'Email', href: 'mailto:hello@mintcodes.dev', icon: Mail },
]

export default function Footer() {
    return (
        <main className="flex min-h-fit items-end bg-[#0b0f19] px-5 py-5 text-slate-100 sm:px-8 sm:py-7">
            <footer className="mx-auto flex w-full max-w-5xl flex-col gap-6 border-t border-slate-800/80 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                    <span className="font-mono text-sm font-semibold tracking-tight text-white">Mint Codes</span>
                    <span className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" aria-hidden="true" />
                        Available for selective freelance projects
                    </span>
                </div>

                <nav aria-label="Social links" className="flex items-center gap-5 text-xs">
                    {links.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noreferrer' : undefined}
                            className="group flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
                        >
                            <Icon className="size-3.5 transition-transform group-hover:-translate-y-px" aria-hidden="true" />
                            <span>{label}</span>
                        </a>
                    ))}
                </nav>

                <span className="font-mono text-[11px] text-slate-600">// Crafted with precision</span>
            </footer>
        </main>
    )
}

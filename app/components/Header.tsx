import { ArrowUpRight } from "lucide-react";
import MintCodesLogoMark from "./MintCodesLogoMark";

export default function Header() {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];
    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 mx-auto flex w-full md:w-fit items-center justify-between md:gap-20 px-6 py-2 lg:px-10 md:my-5 mt-5 bg-[#0b0f19]/85 backdrop-blur-md rounded-b-2xl`}
        >
            <a href="#home" className="group flex items-center gap-3" aria-label="Mint Codes home">
                <MintCodesLogoMark />
                <span className="text-lg font-semibold tracking-[-0.04em] text-white">Mint<span className="text-[#00f2fe]">.</span>Codes</span>
            </a>
            <nav className="hidden md:flex items-center gap-5">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-[#00f2fe] transition-colors font-medium tracking-wide"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
            <a href="#contact" className="rounded-xl border border-white/15 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-[#00f2fe]/60 hover:text-white whitespace-nowrap flex">Let&apos;s talk <ArrowUpRight className="ml-1 size-3.5" aria-hidden="true" /></a>
        </header>
    )
}
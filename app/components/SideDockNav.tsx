"use client"

import { useState } from 'react';
import { Home, FolderGit2, Cpu, Wrench, Mail, PanelRightClose, PanelRightOpen } from 'lucide-react';

export default function SideDockNav() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#', icon: Home },
        { name: 'Skills', href: '#skills', icon: Cpu },
        { name: 'Projects', href: '#projects', icon: FolderGit2 },
        { name: 'Services', href: '#services', icon: Wrench },
        { name: 'Contact', href: '#contact', icon: Mail },
    ];

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
            {/* Toggle Tab Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute z-2 bg-[#0b0f19]/50 backdrop-blur-xl border-y border-l border-white/20 text-[#00f2fe] flex items-center justify-center h-20 w-5 px-0.5 rounded-l-xl hover:bg-[#00f2fe]/10 transition-all duration-300
                      ${isOpen ? 'right-[57.5px]' : 'right-0'}
                    `}
                aria-label="Toggle Navigation Dock"
            >
                {isOpen ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
            </button>

            {/* Side Dock Container */}
            <div className={`bg-[#0b0f19]/50 border-y border-l border-white/20 rounded-l-2xl backdrop-blur-xl py-1 flex flex-col  shadow-2xl transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                }`}>
                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="group flex flex-col items-center justify-center p-2 rounded-xl hover:bg-[#00f2fe]/10 transition-colors"
                        >
                            <IconComponent className="size-5 text-white  transition-colors" />
                            <span className="text-[10px] tracking-wider text-gray-400 mt-1 font-medium">
                                {item.name}
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
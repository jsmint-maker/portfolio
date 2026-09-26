export default function MintCodesLogoMark() {
    return (
        <div className="relative flex size-10 items-center justify-center" aria-hidden="true">
            <div className="absolute inset-0 rounded-xl border border-[#00f2fe]/35 bg-[#0b0f19]/20 shadow-[0_0_28px_rgba(0,242,254,0.16)]" />
            <svg 
                className="relative size-5.5 text-[#00f2fe]" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M50 15 L15 85 L85 85 Z" 
                    stroke="currentColor" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <circle cx="50" cy="15" r="10" fill="currentColor" />
                <circle cx="15" cy="85" r="10" fill="currentColor" />
                <circle cx="85" cy="85" r="10" fill="currentColor" />
            </svg>
        </div>
    );
}
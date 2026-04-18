export function BackgroundPattern() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Mobile Pattern (Larger relative size, e.g., 5 columns = 80px) */}
            <svg className="block md:hidden" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern
                        id="pill-pattern-mobile"
                        x="0"
                        y="0"
                        width="80"
                        height="140"
                        patternUnits="userSpaceOnUse"
                        viewBox="0 0 80 140"
                    >
                        {/* Left Half */}
                        <path d="M 36 5 L 36 85 Q 36 135 4 135 L 4 45 A 35 35 0 0 1 36 5 Z" fill="#1a1a1a" style={{ fill: '#1a1a1a' }} />
                        {/* Right Half */}
                        <path d="M 44 5 A 35 35 0 0 1 76 45 L 76 135 Q 44 135 44 85 L 44 5 Z" fill="#1a1a1a" style={{ fill: '#1a1a1a' }} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pill-pattern-mobile)" />
            </svg>

            {/* Desktop Pattern (Smaller relative size, e.g., ~12 columns default = 120px) */}
            <svg className="hidden md:block" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern
                        id="pill-pattern-desktop"
                        x="0"
                        y="0"
                        width="120"
                        height="210"
                        patternUnits="userSpaceOnUse"
                        viewBox="0 0 80 140"
                    >
                        {/* Left Half */}
                        <path d="M 36 5 L 36 85 Q 36 135 4 135 L 4 45 A 35 35 0 0 1 36 5 Z" fill="#1a1a1a" style={{ fill: '#1a1a1a' }} />
                        {/* Right Half */}
                        <path d="M 44 5 A 35 35 0 0 1 76 45 L 76 135 Q 44 135 44 85 L 44 5 Z" fill="#1a1a1a" style={{ fill: '#1a1a1a' }} />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pill-pattern-desktop)" />
            </svg>
        </div>
    )
}

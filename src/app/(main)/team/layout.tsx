import React from 'react';

interface TeamLayoutProps {
    children: React.ReactNode;
}

export default function TeamLayout({ children }: TeamLayoutProps) {
    return (
        <div className="team-layout">
            <main className="team-content">
                {children}
            </main>
        </div>
    );
}
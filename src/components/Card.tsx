import React from "react";

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`rounded-2xl border shadow-sm p-5 bg-white/70 backdrop-blur ${className ?? ""}`}>
        {children}
    </div>
);

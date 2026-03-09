import React from 'react';

export default function GlassCard({ children, color = 'default', className = '', ...props }) {
    let colorClass = 'glass-panel';
    if (color === 'gold') colorClass = 'glass-panel-gold';
    if (color === 'green') colorClass = 'glass-panel-green';
    if (color === 'red') colorClass = 'glass-panel-red';

    return (
        <div className={`${colorClass} ${className}`} {...props}>
            {children}
        </div>
    );
}

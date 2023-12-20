import React from "react";

export default function TabContent({ children, link = undefined }) {
    return (
        <div className="tab-content" data-link={link !== undefined ? link.toLowerCase() : ''}>
            {children}
        </div>
    )
}
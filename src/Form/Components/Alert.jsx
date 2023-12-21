import React from "react";

export default function Alert({ children, type = 'success' }) {
    return (
        <span role="alert" className={`alert alert-${type}`}>{children}</span>
    )
}
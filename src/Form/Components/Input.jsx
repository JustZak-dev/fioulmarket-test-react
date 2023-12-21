import React from "react";
import Alert from "./Alert";

export default function Input({ children, label, type = 'text', id, name, placeholder, register, errors }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                ref={register}
            />
            {errors ? errors[name] && <Alert type="error">{errors[name].message}</Alert> : ''}

            {children}
        </div>
    )
}
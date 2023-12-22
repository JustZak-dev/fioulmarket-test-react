import React, {useRef, useState} from "react"
import './LoginForm.css'
import {useForm} from 'react-hook-form'
import Input from "../Components/Input";
import Alert from "../Components/Alert";
import {changePasswordType} from "../../Helpers/Handler";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange'
    })

    const [success, setSuccess] = useState(undefined)

    const openedEyeEl = useRef()
    const closedEyeEl = useRef()

    const handleChangePasswordType = (baseEl) => {
        const passwordEl = document.querySelector('input[name=password]')

        const isChanged = changePasswordType(baseEl, passwordEl)

        const showEye = (eye) => {
            const openedEye = openedEyeEl.current
            const closedEye = closedEyeEl.current

            if(eye === 'active') {
                openedEye.style.display = 'none'
                closedEye.style.display = 'block'
            } else {
                openedEye.style.display = 'block'
                closedEye.style.display = 'none'
            }
        }

        if(isChanged) {
            showEye('active')
        } else {
            showEye('disable')
        }
    }

    const onSubmit = (data) => {
        setSuccess('Connexion réussie.')

        alert(JSON.stringify(data))
    }

    return (
        <form method="post" className="login-form" onSubmit={handleSubmit(onSubmit)}>
            {success && <Alert type="success">{success}</Alert>}
            <Input
                type="email"
                id="address"
                name="address"
                placeholder="john.doe@gmail.com"
                label="Email"
                register={e => register(e, { required: 'Veuillez remplir ce champ.' })}
                errors={errors}
            />
            <Input
                type="password"
                id="password"
                name="password"
                placeholder="****************"
                label="Mot de passe"
                register={e => register(e, { required: 'Veuillez remplir ce champ.' })}
                errors={errors}
            >
                <div className="icon" onClick={handleChangePasswordType}>
                    <svg ref={openedEyeEl} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="active">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg ref={closedEyeEl} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="disable">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                </div>
            </Input>

            <a className="forgot-password" href="">Mot de passe oublié ?</a>

            <button type="submit" disabled={!isValid} className="submit">Me connecter</button>
        </form>
    )
}
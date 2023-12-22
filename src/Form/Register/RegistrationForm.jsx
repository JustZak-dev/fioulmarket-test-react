import React, {useState} from "react";

import './RegisterForm.css'
import Alert from "../Components/Alert";
import Input from "../Components/Input";
import {useForm} from "react-hook-form";

export default function RegistrationForm() {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  })

  const [success, setSuccess] = useState(undefined)

  const onSubmit = (data) => {
    setSuccess('Inscription réussie.')

    alert(JSON.stringify(data))
  }

  return (
      <form method="post" className="register-form" onSubmit={handleSubmit(onSubmit)}>
        {success && <Alert type="success">{success}</Alert>}

        <Input
            type="email"
            id="address-register"
            name="address"
            placeholder="john.doe@gmail.com"
            label="Email"
            register={e => register(e, {
              required: 'Veuillez remplir ce champ.',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: 'Votre adresse mail est invalide.'
              }
            })}
            errors={errors}
        />
        <Input
            type="password"
            id="password-register"
            name="password"
            placeholder="****************"
            label="Mot de passe"
            register={e => register(e, {
              required: 'Veuillez remplir ce champ.',
              minLength: {
                value: 5,
                message: 'Le mot de passe doit être supérieur à 5 caractères.'
              },
              maxLength: {
                value: 16,
                message: 'Le mot de passe doit être inférieur à 16 caractères.'
              }
            })}
            errors={errors}
        />
        <Input
            type="password"
            id="confirm-password-register"
            name="confirm-password"
            placeholder="****************"
            label="Confirmer le mot de passe"
            register={e => register(e, {
              required: 'Veuillez remplir ce champ.',
              validate: (value) => {
                if(watch('password') !== value) {
                  return 'Les mots de passes doivent être similaire.'
                }
              }
            })}
            errors={errors}
        />

        <button type="submit" disabled={!isValid} className="submit">S'inscrire !</button>
      </form>
  )
}
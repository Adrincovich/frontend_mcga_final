import React from 'react'
import styles from './input.module.css'
const Input = ({type, requiredTags, register, inputName, errors}) => {
  return (<>
        <input
        type={type}
        className={styles.input}
        {...register(inputName, requiredTags)}
        />
        {errors &&
        <p className={styles.errorLabel}>
            { errors.type === 'required' ? 'Requerido'
            : errors.type === 'maxLength' ? 'Longitud máxima excedida'
            : errors.type === 'minLength' ? 'Longitud mínima excedida'
            : errors.type === 'min' ? 'Cantidad no válida'
            : 'Patrón no válido'}
        </p>}
    </>
  )
}

export default Input
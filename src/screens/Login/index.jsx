import React, { useEffect, useState } from 'react'
import styles from './login.module.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import InputContainer from '../../components/Shared/InputContainer'
import Input from '../../components/Shared/Input'
import Button from '../../components/Shared/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/users/thunks'
import InformationModal from '../../components/Shared/Modal'

const Login = () => {
    const [open, setOpen] = useState(false);
    let userStorage = localStorage.getItem("user");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, isError, data } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(userStorage)
            return navigate('/');
    }, [userStorage, navigate])

    const onSubmit = (e) => {
        let body = {
            "email": e.email,
            "pass": e.password
        };

        dispatch(getUsers(body));

        if(isError){
            setOpen(true);
        }

        if(!isLoading && !isError && localStorage.getItem('user')){
            navigate('/');
        }
    }

    return (
        <div className={styles.login}>
            { isError &&
            <InformationModal
                Message={data.Message}
                Title='Error in login!'
                open={open}
                setOpen={setOpen}
            />}

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.title}>Login</h2>
                <InputContainer label={'Email'}>
                    <Input
                        register={register}
                        inputName={'email'}
                        requiredTags={{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }}
                        errors={errors.email}
                    />
                </InputContainer>
                <InputContainer label={'Password'}>
                    <Input
                        register={register}
                        inputName={'password'}
                        requiredTags={{ required: true }}
                        type='password'
                        errors={errors.password}
                    />
                </InputContainer>
                <Button
                    content='Log In' 
                    background='#28a745'
                    type='submit'
                 />
            </form>
        </div>
    )
}

export default Login
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {SignInConfirmation} from './SignInConfirmation';

export const SignInForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const allUsersArray = useSelector(state => state.authenticationReducer.users);

    const onSubmit = (data) => {
        console.log(data)
        const targetUser = allUsersArray.filter((elem) => elem.email === data.email);
        console.log(targetUser);
        // if (targetUserEmail && targetUserPassword) return setFormSubmitted(true)
        alert("wrong password or email")
    }

    return (
        (formSubmitted ? <SignInConfirmation state={setFormSubmitted}/> : <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref={register({ required: true })} />
                {errors.email && <small>Please provide your email!</small>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={register({ required: true })} />
                {errors.password && <small>Please provide your password!</small>}
            </div>
            <button type="submit">Log In</button>
        </form>)
    )
}

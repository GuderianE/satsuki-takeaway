import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addUser } from "../actions/authenticationAction";
import { SignUpConfirmation } from "./SignUpConfirmation";

export const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const allUsersArray = useSelector(
    (state) => state.authenticationReducer.users
  );

  const onSubmit = (data) => {
    const targetUser = allUsersArray.find((elem) => elem.email === data.email);
    if (targetUser) return alert("User already exits!");
    setFormSubmitted(true);
    dispatch(addUser({ data }));
  };
  return formSubmitted ? (
    <SignUpConfirmation state={setFormSubmitted} />
  ) : (
    <form className="myForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign Up</h3>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Adam"
          ref={register({ required: true })}
        />
        {errors.firstName && <small>First name is required!</small>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Cook"
          ref={register({ required: true })}
        />
        {errors.lastName && <small>Last name is required!</small>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="adam@example.com"
          ref={register({ required: true })}
        />
        {errors.email && <small>Email is required!</small>}
      </div>
      <div>
        <label htmlFor="emailConfirm">Confirm your Email</label>
        <input
          type="email"
          name="emailConfirm"
          placeholder="adam@example.com"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password && <small>min length 8 characters!</small>}
      </div>
      <div>
        <label htmlFor="passwordConfirm">Confirm your Password</label>
        <input
          type="password"
          name="passwordConfirm"
          placeholder="repeat password"
          ref={register({ required: true, minLength: 8 })}
        />
      </div>
      <div>
        <label htmlFor="streetName">Street</label>
        <input
          type="text"
          name="streetName"
          placeholder="2nd Ave 204"
          ref={register({ required: true })}
        />
        {errors.streetName && <small>Street name is required!</small>}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          placeholder="Melborne"
          ref={register({ required: true })}
        />
        {errors.city && <small>City is required!</small>}
      </div>
      <div>
        <label htmlFor="postalcode">Postalcode</label>
        <input
          type="number"
          name="postalcode"
          placeholder="32455"
          ref={register({ required: true })}
        />
        {errors.postalcode && <small>Postalcode is required!</small>}
      </div>
      <div>
        <label htmlFor="tel">Telephone</label>
        <input
          type="tel"
          name="tel"
          placeholder="12345657"
          ref={register({ required: true })}
        />
        {errors.tel && <small>we need your phone number to find you!</small>}
      </div>
      <div className="userAgreement">
        <label htmlFor="useragreement">User agreement</label>
        <input
          type="radio"
          name="useragreement"
          ref={register({ required: true })}
        />
        {errors.useragreement && (
          <small>please agree to the user agreement!</small>
        )}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

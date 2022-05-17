import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import './sign-up-form.style.scss';
const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: '',


}
const SignUpForm = () => {
   const [formFields, setFormField] = useState(defaultformFields);
   const { displayName, email, password, confirmpassword } = formFields;
console.log(formFields);

const restFormFields = () => {
    setFormField(defaultformFields);

}

        const handleSubmit = async (event) => {
            event.preventDefault();
            if(password !== confirmpassword){
                    alert("passwords do not match");
                    return;

            }
            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                
                await createUserDocumentFromAuth(user, {displayName})
                restFormFields();
            } catch(error) {
                if(error.code == 'auth/email-already-in-use'){
                    alert('Cannont create user, email already in use');
                }
                else {
                console.log('user created encountered an error', error)

            }}
            

        };

   const handleChange = (event) => {  
       const {name, value } =event.target;
        setFormField({...formFields, [name]: value})
   };


    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>
            Sign up with your email and password
            </span>
            <form onSubmit={handleSubmit}> 
            <FormInput label="Display Name" type="text" required onChange={handleChange} name ="displayName" value={displayName}/>
            <FormInput label="Email" type="email" required onChange={handleChange} name ="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleChange} name ="password" value={password}/>
            <FormInput label="Confirm Password" type="password" required onChange={handleChange} name ="confirmpassword" value={confirmpassword}/>
            <Button type="submit">Sign Up </Button>
            
            </form>


        </div>

    );

};

export default SignUpForm;
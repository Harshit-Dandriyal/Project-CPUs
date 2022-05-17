import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import { signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword

 } from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import './sign-in-form.style.scss';
const defaultformFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
   const [formFields, setFormField] = useState(defaultformFields);
   const { email, password} = formFields;
console.log(formFields);

const restFormFields = () => {
    setFormField(defaultformFields);

};
const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
 await createUserDocumentFromAuth(user)
};

        const handleSubmit = async (event) => {
            event.preventDefault();
           
            try {
                const response = await signInAuthUserWithEmailAndPassword(email, password);
                console.log(response);
                restFormFields();
            } catch(error) {
                

            }
            

        };

   const handleChange = (event) => {  
       const {name, value } =event.target;
        setFormField({...formFields, [name]: value})
   };


    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>
            Sign in with your email and password
            </span>
            <form onSubmit={handleSubmit}> 
            <FormInput label="Email" type="email" required onChange={handleChange} name ="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleChange} name ="password" value={password}/>
            <div className="buttons-container">
            <Button type="submit">Sign In </Button>
            <Button buttonType='google' onClick= {signInWithGoogle }>Google Sign In </Button>
            </div>
            </form>


        </div>

    );

};

export default SignInForm;
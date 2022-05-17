
import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
 } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
const Authentification = () => {
   
   
return(
<div>

    <h1>Sign In Page</h1>
        <SignInForm />
        <SignUpForm />

</div>

)



}
export default Authentification;

import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
 } from "../../../utils/firebase/firebase.utils";
import './authentification.style.scss'
 import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
const Authentification = () => {
   
   
return(
<div className="authentification-container">
        <SignInForm />
        <SignUpForm />

</div>

)



}
export default Authentification;
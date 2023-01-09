import { async } from "@firebase/util";
import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";
import {UserContext} from "../../context/user.context";

const defautformFields = {
    email: '',
    password: '',
}


const SignInFrom = () => {
    const [formFields, setFormFields] = useState(defautformFields);
    const { email, password } = formFields;
    const {setCurrentUser} = useContext(UserContext);
    console.log(formFields);

    const resetFromFields = () => {
        setFormFields(defautformFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFromFields();

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };


    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    );

}


export default SignInFrom
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth} from '../../utils/firebase/firebase.utils';
import { async } from '@firebase/util';
import SignUpFrom from '../../component/sign-up/sign-up-form.component';
import SignInFrom from '../../component/sign-in/sign-in-form.component';


const Authentication = () => {

    /*useEffect (async () => {
        const response = await getRedirectResult(auth);
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, []);*/

    useEffect(() => {
        async function fetchData() {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        fetchData();
    }, []);

    
    
    return (
        <div>
            <h1>Sign In Page</h1>
            
            <SignInFrom />
            <SignUpFrom />
        </div>
    );
}

export default Authentication;
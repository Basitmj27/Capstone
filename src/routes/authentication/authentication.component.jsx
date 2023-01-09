import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { createUserDocumentFromAuth, auth} from '../../utils/firebase/firebase.utils';
import { async } from '@firebase/util';
import SignUpFrom from '../../component/sign-up/sign-up-form.component';
import SignInFrom from '../../component/sign-in/sign-in-form.component';
import './authentication.styles.scss'

const Authentication = () => {
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
        <div className='authentication-container'>
            <SignInFrom />
            <SignUpFrom />
        </div>
    );
}

export default Authentication;
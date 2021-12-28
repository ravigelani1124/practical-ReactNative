
export const ButtonStrings = {
    LOGIN: 'Login',
}

export const Routes = {
    Dashboard: 'Dashboard',
    Login: 'Login'
}

export const appString = {
    Login: 'Login'
}

export const placeHolderString = {
    EMAIL_ADDRESS: 'Enter Email Address',
    PASSWORD: 'PEnter Password'
}
export const validationString = {
    email_empty: 'Please enter email address',
    email_valid: 'Please enter valid email address',
    password_empty: 'Please enter password',
    password_wrong: 'Email and password are not match'
}

export const checkEmailValid = (emailAddress) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(emailAddress) === false) {
        return false;
    } else {
        return true;
    }
}
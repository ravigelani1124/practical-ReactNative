
export const authDetails = {
    baseURL: "https://dummyapi.io/data/v1/",
    appID: "61c46490b73b1ae6c46e37ff",
    GET: 'get',
    POST: 'post'
}

export const userDetailsStrings = {
    userId :'userId'
}

export const ButtonStrings = {
    LOGIN: 'Login',
}

export const Routes = {
    Dashboard: 'Dashboard',
    Login: 'Login',
    UserInfo:'UserInfo'
}

export const appString = {
    Login: 'Login',
    ProfileDetails : 'Profile Details'
}

export const placeHolderString = {
    EMAIL_ADDRESS: 'Enter Email Address',
    PASSWORD: 'Please Enter Password',
    LOAD_MORE: 'Load more'
}
export const validationString = {
    email_empty: 'Please enter email address',
    email_valid: 'Please enter valid email address',
    email_not_record: 'User is not register',
    password_empty: 'Please enter password',
    password_valid: 'Please enter valid password',
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
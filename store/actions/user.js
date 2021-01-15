const handleSignIn = (userObject) => ({
    type: 'HANDLE_SIGN_IN',
    payload: {value: userObject}
})

export {handleSignIn}
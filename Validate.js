// program to validate an email address

/**
 * Validates an email address.
 *
 * @param {string} email_id - The email address to be validated.
 * @return {undefined} This function does not return a value.
 */
function validateEmail(email_id) {
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email_id)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}

//valid
validateEmail('abc123@gmail.com');
// not valid
validateEmail('hello@com');

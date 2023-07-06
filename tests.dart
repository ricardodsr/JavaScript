test('Valid email address', () => {
    validateEmail('test@example.com');
    // Expected output: The email address is valid
});

test('Invalid email address', () => {
    validateEmail('test@example');
    // Expected output: The email address is not valid
});

test('Invalid email address with special characters', () => {
    validateEmail('test@example!@#$%^&*.com');
    // Expected output: The email address is not valid
});

test('Invalid email address with missing domain', () => {
    validateEmail('test@');
    // Expected output: The email address is not valid
});

test('Invalid email address with missing local part', () => {
    validateEmail('@example.com');
    // Expected output: The email address is not valid
});
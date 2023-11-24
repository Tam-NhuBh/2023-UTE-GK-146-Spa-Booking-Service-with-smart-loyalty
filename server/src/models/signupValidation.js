function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=[A-Z])(?=\w{4,})/
    const phone_pattern = /^\+?[0-9\s.-]+$/

    if (values.birthDate === "") {
        error.birthDate = 'This filed is required';
    } else {
        error.birthDate = '';
    }

    if (values.fullName === "") {
        error.fullName = 'This filed is required';
    } else {
        error.fullName = '';
    }

    if (values.address === "") {
        error.address = 'This filed is required';
    } else {
        error.address = '';
    }

    if (values.city === "") {
        error.city = 'This filed is required';
    } else {
        error.city = '';
    }

    if (values.email === "") {
        error.email = 'Email should not be empty';
    } else if (!email_pattern.test(values.email)) {
        error.email = 'Email is not valid';
    } else {
        error.email = '';
    }

    if (values.phone === "") {
        error.phone = 'Phone number should not be empty';
    } else if (!phone_pattern.test(values.phone)) {
        error.phone = 'Phone number is not valid';
    } else {
        error.phone = '';
    }

    if (values.password === "") {
        error.password = 'Password should not be empty';
    } else if (!password_pattern.test(values.password)) {
        error.password = 'Password must have at least 4 letters with first letter is capital';
    } else {
        error.password = '';
    }


    return error;
}
export default Validation;
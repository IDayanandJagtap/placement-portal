const useUpdateStudentFormValidation = (data, files) => {
    let errors = [];
    if (
        data.name.trim() == "" ||
        data.degree.trim() == "" ||
        data.year.trim() == "" ||
        data.skills.length == 0
    ) {
        errors.push("Please fill all the fields");
    }

    let academicError = false;
    for (let i = 0; i < 2; i++) {
        if (data.academics[i] == 0) {
            academicError = true;
        }
    }
    academicError &&
        errors.push("Please enter the academic details of sem1 and sem2");

    if (data.phone.length == 10 && data.phone == "0000000000") {
        errors.push("Please enter the contact no !");
    }
    if (files.length < 2) {
        errors.push("Please upload profile and resume both");
    }

    return errors;
};

const useSignupFormValidation = (data, files) => {
    const { email, password, confirmPassword, userType } = data;
    const errors = [];

    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    if (!isValidEmail(email)) {
        errors.push("Please enter a valid email!");
    }

    if (password !== confirmPassword) {
        errors.push("Password and confirm password must be the same");
    }

    if (password.length < 6) {
        errors.push("Password should be minimum 6 characters");
    }

    if (userType === "") {
        errors.push("Please select user type");
    }

    return errors;
};

const usePostJobFormValidtion = (data) => {
    let errors = [];
    if (!data.type) {
        errors.push("Please select job type!");
    }
    if (data.skills.length == 0) {
        errors.push("Please select at least on skill");
    }

    if (data.title.trim().length < 5) {
        errors.push("Title should contain atleast 5 characters");
    }
    if (data.description.trim().length < 10) {
        errors.push("Please keep the description descriptive!");
    }

    return errors;
};

export {
    usePostJobFormValidtion,
    useUpdateStudentFormValidation,
    useSignupFormValidation,
};

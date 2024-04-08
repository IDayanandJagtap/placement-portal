const useUpdateStudentFormValidation = (data) => {
    let error = [];
    if (
        data.name.trim() == "" ||
        data.degree.trim() == "" ||
        data.year.trim() == "" ||
        data.skills.length == 0
    ) {
        error.push("Please fill all the fields");
    }

    let academicError = false;
    for (let i = 0; i < 2; i++) {
        if (data.academics[i] == 0) {
            academicError = true;
        }
    }
    academicError &&
        error.push("Please enter the academic details of sem1 and sem2");

    if (data.phone.length == 10 && data.phone == "0000000000") {
        error.push("Please enter the contact no !");
    }

    return error;
};

export { useUpdateStudentFormValidation };

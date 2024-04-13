const obj = {
    name: "DJ",
    age: 20,
    printName: () => {
        console.log("DJ");
    },
};

// Destructuring;
// const { name, age } = obj;
const { name, age } = obj;

console.log(name, age);

const menuLinks = [
    { name: "Company", link: "/company" },
    { name: "Student", link: "/students" },
    { name: "Jobs", link: "/jobs" },
    { name: "History", link: "/history" },
];

menuLinks.map((e) => {
    console.log(e.link + " " + e.name);
});

/* 
    user -> storeUserDetails, fetchUserDetails, login, signup, logout
    Faculty -> approvestudent, approveCompany, deleteCompany, deleteStudent, deleteJob;
    student -> update, deleteProfile, fetchStudents, fetchSingleStudent, searchStudent
    company -> update, PostJob, DeleteJob, fetchJobs, fetchSingleJob, fetchCompanies, fetchSingleCompany, searchCompany


    #Context structure
    User
        Faculty
            student
                company
                    <App>
                company
            student
        Faculty
    User


         

    ? studentProfile -> download CV not working 
    ? auth -> confirm password eye, check logout once
    ? student dashboard show applied jobs
    


    * company : 
        done 1. companyCard uniform size 
        done 2. Load jobs posted by that company 

        later : 
            delete Job 

    
    * student :
        done 1. getall students
        todo :2. Dashboard fixes  

        later : 
            cancel application
    
    * Faculty : 
        1. Dashboard : 
            a. insights 
            b. Approval system (make changes everywhere show approved or not)
            c. edit profile 
            d. add new faculty 
            e. notifications (add new notifications, show all, delete)
            f. invalidate & delete company or student

    
    ? Above Fixes 
*/

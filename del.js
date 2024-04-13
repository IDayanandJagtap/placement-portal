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


    ?Company dashboard 
     -Job posting 
     - Job listing
     - delete job 

    ?Faculty dashboard 


    ?Backend 


    ?Home page 


    ?History 

    
    ?Responsiveness 

    ----------------------------------------------------
                |-----------------------------------------


    Components : 
        

        history?

         

    ? studentProfile -> download CV not working 
    ? auth -> confirm password eye, check logout once
    
    ? company -> dashboard  ??? done 

    ? fetch jobs done , fetch single job done ... 
    !? show applied students! -> apply to job ,,, show students and don't let same student apply more ...and map description properly

    /// just integration
    ? fetch all students 
    ? fetch all companies 


    ? student apply to job 
    ? student dashboard show applied jobs

    ? faculty dashboard

*/

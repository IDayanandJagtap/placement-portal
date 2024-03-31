import { Stack } from "@chakra-ui/react";
import React from "react";
import { default as StudentDashboard } from "./student/dashboard";
import { default as FacultyDashboard } from "./faculty/Dashboard";

const DashboardContainer = () => {
    // bring from useContext;
    const user = "faculty";

    return (
        <Stack overflow={"scroll"}>
            {user === "faculty" && <FacultyDashboard />}
            {/* {user === "company" && CompanyDashboard} */}
            {user === "student" && <StudentDashboard />}
        </Stack>
    );
};

export default DashboardContainer;

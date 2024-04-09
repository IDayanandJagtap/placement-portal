import { Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { default as StudentDashboard } from "./student/dashboard";
import { default as FacultyDashboard } from "./faculty/Dashboard";
import { default as CompanyDashboard } from "./company/dashboard";
import { UserContext } from "../contextApi/UserContext";
const DashboardContainer = () => {
    const { user } = useContext(UserContext);

    return (
        <Stack overflow={"scroll"}>
            {user.userType === "faculty" && <FacultyDashboard />}
            {user.userType === "company" && <CompanyDashboard />}
            {user.userType === "student" && <StudentDashboard />}
        </Stack>
    );
};

export default DashboardContainer;

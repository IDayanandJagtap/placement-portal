import { Stack } from "@chakra-ui/react";
import React from "react";
import Dashboard from "./student/dashboard";

const DashboardContainer = () => {
    // bring from useContext;
    const user = "student";

    return (
        <Stack overflow={"scroll"}>
            {/* {user === "faculty" && FacultyDashboard} */}
            {/* {user === "company" && CompanyDashboard} */}
            {user === "student" && <Dashboard />}
        </Stack>
    );
};

export default DashboardContainer;

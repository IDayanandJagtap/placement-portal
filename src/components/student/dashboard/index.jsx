import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import ChangeSectionSidebar from "../../utils/ChangeSectionSidebar";
import StudentProfile from "../description/StudentProfile";
import UpdateStudent from "../update/UpdateStudent";

const list = [
    { name: "View Profile", section: "profile" },
    { name: "Edit profile", section: "editprofile" },
    { name: "Jobs", section: "jobs" },
    { name: "Settings", section: "settings" },
];

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState("editprofile");
    const changeSection = (section) => {
        setCurrentSection(section);
    };

    // Fetch from context
    const studentInfo = {
        id: 1,
        name: "Dayanand Jagtap",
        degree: "Bsc computer science",
        year: "3rd",
        skills: ["JavaScript", "Java", "C"],
    };

    return (
        <Stack flexDirection={"row"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                {/* Student profile , update, jobs, setting */}
                {currentSection == "profile" && (
                    <StudentProfile studentInfo={studentInfo} />
                )}
                {currentSection == "editprofile" && <UpdateStudent />}
            </Stack>

            {/* Sidebar  -> show only in big screens*/}
            <Stack
                display={["none", "none", "none", "flex"]}
                w={"25%"}
                overflow={"scroll"}
                p={[2, 2, 2, 2, 4]}
                background={"#EEF2FF"}
            >
                <ChangeSectionSidebar
                    list={list}
                    currentSection={currentSection}
                    handler={changeSection}
                />
            </Stack>
        </Stack>
    );
};

export default Dashboard;

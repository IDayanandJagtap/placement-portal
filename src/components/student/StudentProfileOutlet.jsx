import { Stack } from "@chakra-ui/react";
import React from "react";
import PageInfoSideBar from "../utils/PageInfoSideBar";
import StudentProfile from "./StudentProfile";

const sideBarItems = [
    { name: "Profile", section: "#profile" },
    { name: "Skills", section: "#skills" },
    { name: "Achievements", section: "#achievements" },
    { name: "Academics", section: "#academics" },
];

const StudentProfileOutlet = () => {
    return (
        <Stack flexDirection={"row"} h={"full"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                <StudentProfile />
            </Stack>

            {/* Sidebar  -> show only in big screens*/}
            <Stack
                display={["none", "none", "none", "flex"]}
                w={"25%"}
                overflow={"scroll"}
                p={[2, 2, 2, 2, 4]}
                background={"#EEF2FF"}
            >
                <PageInfoSideBar list={sideBarItems} />
            </Stack>
        </Stack>
    );
};

export default StudentProfileOutlet;

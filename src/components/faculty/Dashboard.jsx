import { Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
    FaUser,
    FaUserPlus,
    FaGear,
    FaNoteSticky,
    FaChartLine,
} from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { ChangeSectionSidebar, MobileSecondaryNav } from "../utils";
import Insights from "./Insights";
import Approval from "./Approval";
import EditProfile from "./EditProfile";
import AddFaculty from "./AddFaculty";
import Settings from "./Settings";
import Notifications from "./Notifications";

const list = [
    {
        name: "Insights",
        icon: <FaChartLine size={20} />,
        section: "insights",
    },
    {
        name: "Edit Profile",
        icon: <FaUser size={18} />,
        section: "editprofile",
    },
    {
        name: "Approvals",
        icon: <IoMdCheckmark size={20} />,
        section: "approval",
    },
    {
        name: "Add new faculty",
        icon: <FaUserPlus size={20} />,
        section: "addFaculty",
    },
    {
        name: "Notifications",
        icon: <FaNoteSticky size={20} />,
        section: "notifications",
    },
    { name: "Settings", icon: <FaGear size={20} />, section: "settings" },
];

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState("approval");
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
        <Stack
            flexDirection={"row"}
            overflow={"auto"}
            gap={0}
            position={"relative"}
        >
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                {currentSection === "insights" && <Insights />}
                {currentSection === "approval" && <Approval />}
                {currentSection === "editprofile" && <EditProfile />}
                {currentSection === "addFaculty" && <AddFaculty />}
                {currentSection === "notifications" && <Notifications />}
                {currentSection === "settings" && <Settings />}
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
                    menu={list}
                    currentSection={currentSection}
                    handler={changeSection}
                />
            </Stack>

            <MobileSecondaryNav
                menu={list}
                currentSection={currentSection}
                onClickHandler={changeSection}
            />
        </Stack>
    );
};

export default Dashboard;

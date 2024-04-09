import { Stack, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ChangeSectionSidebar from "../../utils/ChangeSectionSidebar";
import StudentProfile from "../description/StudentProfile";
import UpdateStudent from "../update/UpdateStudent";
import Jobs from "./Jobs";
import Settings from "./Settings";
import MobileSecondaryNav from "../../utils/MobileSecondaryNav";
import { FaUser, FaUserPen, FaSuitcase, FaGear } from "react-icons/fa6";
import { StudentContext } from "../../../contextApi/StudentContext";
import { UserContext } from "../../../contextApi/UserContext";

const list = [
    { name: "View Profile", icon: <FaUser size={18} />, section: "profile" },
    {
        name: "Edit profile",
        icon: <FaUserPen size={20} />,
        section: "editprofile",
    },
    { name: "Jobs", icon: <FaSuitcase size={20} />, section: "jobs" },
    { name: "Settings", icon: <FaGear size={20} />, section: "settings" },
];

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState("profile");
    const changeSection = (section) => {
        setCurrentSection(section);
    };
    const toast = useToast();
    const [studentInfo, setStudentInfo] = useState({
        name: "",
        year: "",
        degree: "",
        skills: [],
        resumeUrl: "",
        achievements: "",
        academics: Array(6).fill(0),
        contact: { github: "", linkedin: "", twitter: "" },
    });

    const { fetchMyInfo } = useContext(StudentContext);

    useEffect(() => {
        const getInfo = async () => {
            const response = await fetchMyInfo();
            if (response.error) {
                toast({
                    title: response.error,
                    status: "error",
                    duration: 9000,
                });
            } else {
                setStudentInfo(response);
            }
        };
        getInfo();
    }, []);

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
                {/* Student profile , update, jobs, setting */}
                {currentSection == "profile" && (
                    <StudentProfile studentInfo={studentInfo} />
                )}
                {currentSection == "editprofile" && (
                    <UpdateStudent
                        studentInfo={studentInfo}
                        setCurrentSection={setCurrentSection}
                    />
                )}
                {currentSection == "jobs" && <Jobs />}
                {currentSection == "settings" && <Settings />}
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

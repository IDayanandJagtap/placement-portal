import { Stack, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FaGear, FaUserPen, FaSuitcase, FaPlus } from "react-icons/fa6";
import { ChangeSectionSidebar, MobileSecondaryNav } from "../../utils";
import NewJob from "./NewJob";
import JobPosted from "./JobPosted";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import { CompanyContext } from "../../../contextApi/CompanyContext";

const list = [
    {
        name: "New Job",
        icon: <FaPlus size={20} />,
        section: "newjob",
    },
    {
        name: "Jobs posted",
        icon: <FaSuitcase size={20} />,
        section: "jobs",
    },
    {
        name: "Edit Profile",
        icon: <FaUserPen size={18} />,
        section: "editprofile",
    },

    { name: "Settings", icon: <FaGear size={20} />, section: "settings" },
];

const Dashboard = () => {
    const [currentSection, setCurrentSection] = useState("newjob");
    const { getMyInfo } = useContext(CompanyContext);
    const [companyInfo, setCompanyInfo] = useState({
        name: "",
        imgUrl: "",
        tagline: "",
        bio: "",
        contact: { linkedin: "", twitter: "" },
    });
    const toast = useToast();

    const changeSection = (section) => {
        setCurrentSection(section);
    };

    // Fetch from context
    useEffect(() => {
        const getInfo = async () => {
            let response = await getMyInfo();
            if (response.error) {
                toast({
                    title: response.error,
                    status: "error",
                    duration: 3000,
                });
            }

            setCompanyInfo(response);
            console.log(companyInfo.imgUrl);
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
                {currentSection == "newjob" && (
                    <NewJob setCurrentSection={setCurrentSection} />
                )}
                {currentSection == "jobs" && <JobPosted />}
                {currentSection == "editprofile" && (
                    <EditProfile
                        companyInfo={companyInfo}
                        setCurrentSection={setCurrentSection}
                    />
                )}
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

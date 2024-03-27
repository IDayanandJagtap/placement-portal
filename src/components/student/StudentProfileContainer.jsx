import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { PageInfoSidebar } from "../utils";
import { StudentProfile } from "./description";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const sideBarItems = [
    { name: "Profile", section: "#profile" },
    { name: "Skills", section: "#skills" },
    { name: "Achievements", section: "#achievements" },
    { name: "Academics", section: "#academics" },
];

const StudentProfileContainer = () => {
    const navigate = useNavigate();

    return (
        <Stack flexDirection={"row"} h={"full"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                <Button
                    mt={[2, 3, 5]}
                    mx={[3, 4, 4, 5, 6]}
                    alignSelf={"start"}
                    color={"white"}
                    padding={"2"}
                    colorScheme="primary"
                    borderRadius={"full"}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <IoArrowBack size={24} />
                </Button>
                {/* main */}
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
                <PageInfoSidebar list={sideBarItems} />
            </Stack>
        </Stack>
    );
};

export default StudentProfileContainer;

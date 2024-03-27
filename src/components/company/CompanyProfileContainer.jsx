import { Stack } from "@chakra-ui/react";
import React from "react";
import { CompanyProfile } from ".";
import { PageInfoSidebar } from "../utils";

const sideBarItems = [
    { name: "Profile", section: "#profile" },
    { name: "Jobs", section: "#jobs" },
];

const CompanyProfileContainer = () => {
    return (
        <Stack flexDirection={"row"} h={"full"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                <CompanyProfile />
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

export default CompanyProfileContainer;

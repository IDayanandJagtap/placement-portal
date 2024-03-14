import { Button, Divider, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Approval from "./Approval";
import Dashboard from "./Dashboard";

const DashboardLayout = () => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <Stack minH={"90vh"} background={"#f1f1f1"} p={6}>
            <Stack
                flexDirection={"row"}
                background={"white"}
                minH={"80vh"}
                borderRadius={"md"}
                boxShadow={"md"}
                p={4}
            >
                <Stack
                    width={"250px"}
                    flexDirection={"column"}
                    alignItems={"stretch"}
                    borderRight={"2px solid #718096"}
                    // background={"white"}
                    pr={4}
                >
                    {data.map((e, index) => {
                        return (
                            <Button
                                key={index}
                                backgroundColor={
                                    activeSection == index ? "blue.700" : ""
                                }
                                color={activeSection == index ? "white" : ""}
                                border={
                                    activeSection == index
                                        ? "1px solid #2C5282"
                                        : ""
                                }
                                _hover={{}}
                                onClick={() => {
                                    setActiveSection(index);
                                }}
                            >
                                {e.name}
                            </Button>
                        );
                    })}
                </Stack>
                <Stack width={"100%"}>
                    {activeSection == 0 && <Dashboard />}
                    {activeSection == 2 && <Approval />}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default DashboardLayout;

const data = [
    {
        name: "Dashboard",
        data: "no of students, company, placedStudents, Jobs , open jobs",
    },
    {
        name: "Profile",
        data: "about faculty member",
    },
    {
        name: "Approvals",
        data: "companies and students for approval, to include only names or other data ! let's see",
    },

    {
        name: "Feedbacks",
        data: "Show user feedbacks !",
    },
];

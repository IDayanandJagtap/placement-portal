import { Avatar, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaHistory, FaSuitcase } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { PiStudentFill } from "react-icons/pi";
import { BiMenuAltLeft } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
    { name: "Jobs", link: "/jobs", icon: <FaSuitcase /> },
    { name: "Company", link: "/companies", icon: <VscOrganization /> },
    { name: "Students", link: "/students", icon: <PiStudentFill /> },
    { name: "History", link: "/history", icon: <FaHistory /> },
];

const MainNav = ({ outletRef }) => {
    //change component name.
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const hamMenuRef = useRef(0);
    const mainHeadingRef = useRef(0);
    const mainNavRef = useRef(0);

    const showMenu = () => {
        // Hide outlet component and ham-menu
        outletRef.current.style.display = "none";
        hamMenuRef.current.style.display = "none";

        // show heading(title) and nav labels
        mainHeadingRef.current.style.display = "block";
        let navlabels = Array.from(
            document.getElementsByClassName("navlabels")
        );
        console.log(navlabels);
        navlabels.forEach((e) => {
            e.style.display = "block";
        });

        // Add padding to nav
        mainNavRef.current.style.padding = "1rem";
    };
    const hideMenu = () => {
        // show outlet component and ham-menu
        outletRef.current.style.display = "flex";
        hamMenuRef.current.style.display = "flex";

        // Hide heading(title) & nav labels
        mainHeadingRef.current.style.display = "none";
        let navlabels = Array.from(
            document.getElementsByClassName("navlabels")
        );
        navlabels.forEach((e) => {
            e.style.display = "none";
        });

        // remove padding to nav
        mainNavRef.current.style.padding = "";
    };

    const handleOnLinkClick = (link) => {
        if (window.screen.width <= 768) {
            hideMenu();
        }
        navigate(link);
    };

    return (
        <VStack
            ref={mainNavRef}
            h={"full"}
            w={"100%"}
            px={[0, 0, 0, 1, 2, 4]}
            py={[0, 2]}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
        >
            {/* When on mobile device show ham-menu */}
            <HStack
                w={"full"}
                ml={[-1, 0]}
                display={["block", "block", "none"]}
                ref={hamMenuRef}
            >
                <BiMenuAltLeft size={36} color="white" onClick={showMenu} />
            </HStack>
            <Heading
                ref={mainHeadingRef}
                as={"h1"}
                display={["none", "none", "block"]}
                fontSize={["22px", "24px", "24px", "28px", "32px", "36px"]}
                color={"whiteAlpha.800"}
            >
                PLACED
            </Heading>

            <VStack gap={[8, 6]} p={[0, 1, 1, 1, 2]}>
                {links.map((e, i) => (
                    <HStack
                        key={i}
                        width={"full"}
                        fontSize={"26px"}
                        gap={[4, 4, 1.5, 3, 5]}
                        color={
                            pathname.includes(e.link)
                                ? "white"
                                : "whiteAlpha.600"
                        }
                        fontWeight={
                            pathname.includes(e.link) ? "bold" : "normal"
                        }
                        _hover={{ color: "whiteAlpha.900" }}
                        transition={"all 0.1s linear"}
                        cursor={"pointer"}
                        onClick={() => {
                            handleOnLinkClick(e.link);
                        }}
                    >
                        {e.icon}
                        <Text
                            display={["none", "none", "block"]}
                            className={"navlabels"}
                            fontSize={["16px", "16px", "14px", "16px", "18px"]}
                        >
                            {e.name}
                        </Text>
                    </HStack>
                ))}
            </VStack>

            {/* For spacing */}
            <HStack h={"20vh"}></HStack>

            {/* If logged in show this else show login button */}
            <HStack>
                <HStack
                    width={"full"}
                    gap={[3, 3, 1.5, 3]}
                    color={"whiteAlpha.600"}
                    _hover={{ color: "whiteAlpha.900" }}
                    transition={"all 0.2s linear"}
                    cursor={"pointer"}
                    pb={[1, 0]}
                    onClick={() => {
                        handleOnLinkClick("me");
                    }}
                >
                    <Avatar size={"sm"} name="Dayanand Jagtap"></Avatar>
                    <Text
                        display={["none", "none", "block"]}
                        className={"navlabels"}
                        fontSize={["16px", "16px", "14px", "16px", "18px"]}
                    >
                        Profile
                    </Text>
                </HStack>
            </HStack>
        </VStack>
    );
};

export default MainNav;

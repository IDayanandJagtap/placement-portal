import {
    Avatar,
    Box,
    Button,
    HStack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserDrawer from "./header/UserDrawer";

const navLinks = [
    { name: "Job", link: "/" },
    { name: "Student", link: "/students" },
    { name: "Company", link: "/companies" },
    { name: "History", link: "/history" },
];

const Header = () => {
    // const location = useLocation();
    // const currentLocation = location.pathname;

    // Local login variable for testing :
    const [isLoggedIn, setIsLoggedIn] = useState(0);

    // User Drawer
    const { isOpen, onOpen, onClose } = useDisclosure();

    // For navigation
    const navigate = useNavigate();

    return (
        <Box
            as="nav"
            maxW={"full"}
            // border={"1px solid black"}
            p={3}
            boxShadow={"md"}
        >
            <HStack justifyContent={"space-between"}>
                <Text as={"h1"} fontSize={"30px"}>
                    PLACED
                </Text>
                <HStack>
                    {navLinks.map((e) => {
                        return (
                            <Link to={e.link} key={e.link}>
                                <Text
                                    mx={"3"}
                                    fontSize={"18px"}
                                    _hover={{ color: "#3182ce" }}
                                >
                                    {e.name}
                                </Text>
                            </Link>
                        );
                    })}

                    {/* If logged in show user icon else show login button */}
                    {isLoggedIn ? (
                        <>
                            <Avatar
                                name="Dayanand Jagtap"
                                bg={"blue.300"}
                                mx={3}
                                cursor={"pointer"}
                                onClick={onOpen}
                            />
                            <UserDrawer isOpen={isOpen} onClose={onClose} />
                        </>
                    ) : (
                        <Button
                            backgroundColor={"blue.700"}
                            color={"white"}
                            border={"1px solid #2C5282"}
                            _hover={{ background: "white", color: "#2C5282" }}
                            mx={4}
                            onClick={() => {
                                // navigate("/login");
                                setIsLoggedIn(1);
                            }}
                        >
                            Login
                        </Button>
                    )}
                </HStack>
            </HStack>
        </Box>
    );
};

export default Header;

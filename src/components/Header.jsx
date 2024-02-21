import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import LeftSideMenu from "./header/LeftSideMenu";
import SearchBar from "./header/SearchBar";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
    { name: "Job", link: "/" },
    { name: "Student", link: "/students" },
    { name: "Company", link: "/companies" },
    { name: "History", link: "/history" },
];

const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    // console.log(currentLocation);

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
                    <Button
                        backgroundColor={"blue.700"}
                        color={"white"}
                        border={"1px solid #2C5282"}
                        _hover={{ background: "white", color: "#2C5282" }}
                        mx={4}
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </Button>
                </HStack>
            </HStack>
        </Box>
    );
};

export default Header;

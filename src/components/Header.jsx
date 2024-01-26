import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import LeftSideMenu from "./header/LeftSideMenu";
import SearchBar from "./header/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    console.log(currentLocation);

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
                <LeftSideMenu />
                <SearchBar />
                {currentLocation != "/login" ? (
                    <Button
                        colorScheme={"blue"}
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </Button>
                ) : (
                    <Button
                        disabled
                        variant={"ghost"}
                        style={{ visibility: "hidden" }}
                    >
                        {" "}
                    </Button>
                )}
            </HStack>
        </Box>
    );
};

export default Header;

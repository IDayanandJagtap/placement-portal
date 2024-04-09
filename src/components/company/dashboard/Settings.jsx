import { Button, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../contextApi/UserContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { logout } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleOnLogout = () => {
        setIsLoading(true);
        logout();
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };
    return (
        <VStack
            p={[3, 4, 4, 4, 6]}
            rowGap={[1, 4, 4, 5, 6]}
            w={"full"}
            minH={"95vh"}
            justifyContent={"center"}
        >
            <Text>Logout</Text>
            <Button
                size={["sm", "sm", "md"]}
                colorScheme="primary"
                onClick={handleOnLogout}
                isLoading={isLoading}
            >
                Logout
            </Button>
        </VStack>
    );
};

export default Settings;

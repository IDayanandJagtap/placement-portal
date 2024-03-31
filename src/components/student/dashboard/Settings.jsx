import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
    return (
        <VStack
            p={[3, 4, 4, 4, 6]}
            rowGap={[1, 4, 4, 5, 6]}
            w={"full"}
            minH={"95vh"}
            justifyContent={"center"}
        >
            <Text>Page under development</Text>
        </VStack>
    );
};

export default Settings;

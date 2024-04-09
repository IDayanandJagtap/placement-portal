import { Divider, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UserContext } from "../../contextApi/UserContext";

const ChangeSectionSidebar = ({ menu, currentSection, handler }) => {
    const { user } = useContext(UserContext);
    return (
        <Stack p={4}>
            <Text as={"h3"} fontSize={"20px"}>
                {user.userName ? user.userName : user.userEmail}
            </Text>
            <Divider />
            <VStack mt={8} alignItems={"stretch"}>
                {menu.map((e, i) => (
                    <Text
                        key={i}
                        background={
                            currentSection == e.section ? "primary.900" : ""
                        }
                        color={currentSection == e.section ? "white" : "black"}
                        py={3}
                        px={4}
                        cursor={"pointer"}
                        borderRadius={"md"}
                        fontSize={"18px"}
                        onClick={() => handler(e.section)}
                    >
                        {e.name}
                    </Text>
                ))}
            </VStack>
        </Stack>
    );
};

export default ChangeSectionSidebar;

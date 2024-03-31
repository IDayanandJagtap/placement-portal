import { Divider, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ChangeSectionSidebar = ({ menu, currentSection, handler }) => {
    return (
        <Stack p={4}>
            <Text as={"h3"} fontSize={"20px"}>
                ON THIS PAGE
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

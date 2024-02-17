import { Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Tag from "../utils/Tag";

const Skills = ({ data }) => {
    return (
        <Stack
            justifyContent={"start"}
            w={"full"}
            py={4}
            px={6}
            my={2}
            backgroundColor={"white"}
            boxShadow={"md"}
            borderRadius={"lg"}
        >
            <Text as={"h3"} fontSize={"32px"}>
                Skills
            </Text>
            <HStack pl={10} py={4}>
                {data.map((e) => {
                    return <Tag key={e} name={e} />;
                })}
            </HStack>
        </Stack>
    );
};

export default Skills;

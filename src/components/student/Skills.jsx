import { Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Tag from "../utils/Tag";

const Skills = ({ data }) => {
    return (
        <Stack
            justifyContent={"start"}
            w={"full"}
            py={8}
            px={10}
            my={2}
            backgroundColor={"teal.50"}
            boxShadow={"lg"}
            borderRadius={"lg"}
        >
            <Text as={"h3"} fontSize={"32px"}>
                Skills :
            </Text>
            <HStack pl={10} py={2}>
                {data.map((e) => {
                    return <Tag key={e} name={e} />;
                })}
            </HStack>
        </Stack>
    );
};

export default Skills;

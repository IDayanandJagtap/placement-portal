import { Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
    return (
        <Stack
            justifyContent={"start"}
            w={"full"}
            py={8}
            px={10}
            my={2}
            backgroundColor={"teal.50"}
            borderRadius={"lg"}
        >
            <Text as={"h3"} fontSize={"32px"}>
                Skills :
            </Text>
            <HStack pl={10} py={2}>
                <Tag tag={"JavaScript"} />
                <Tag tag={"TypeScript"} />
                <Tag tag={"Java"} />
                <Tag tag={"C"} />
                <Tag tag={"Python"} />
            </HStack>
        </Stack>
    );
};

const Tag = ({ tag }) => {
    return (
        <Text
            as={"span"}
            px={2}
            py={1}
            mx={1}
            backgroundColor={"blue.100"}
            color={"blue.900"}
            cursor={"pointer"}
            border={"2px solid #3182ce"}
            borderRadius={8}
        >
            {tag}
        </Text>
    );
};

export default Skills;

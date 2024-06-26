import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Tag from "../../utils/Tag";

const Skills = ({ skills }) => {
    return (
        <Stack
            justifyContent={"start"}
            w={"full"}
            py={[4]}
            px={[4, 6]}
            my={2}
            backgroundColor={"secondary.50"}
            boxShadow={"md"}
            borderRadius={"lg"}
            id="skills"
        >
            <Text
                as={"h3"}
                fontWeight={500}
                fontSize={["22px", "24px", "26px", "32px"]}
            >
                Skills :
            </Text>

            {skills.length > 0 ? (
                <HStack pl={[0, 0, 10]} py={[1, 1, 3]}>
                    {skills.map((skill, index) => {
                        return <Tag key={index} name={skill} />;
                    })}
                </HStack>
            ) : (
                <Text pl={[0, 0, 10]} py={[1, 1, 3]}>
                    No skills selected
                </Text>
            )}
        </Stack>
    );
};

export default Skills;

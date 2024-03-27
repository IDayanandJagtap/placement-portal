import { HStack, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Achievements = () => {
    return (
        <Stack
            justifyContent={"start"}
            w={"full"}
            py={4}
            px={[4, 6]}
            my={2}
            backgroundColor={"secondary.50"}
            boxShadow={"md"}
            borderRadius={"lg"}
            id="achievements"
        >
            <Text
                as={"h3"}
                fontWeight={"500"}
                fontSize={["22px", "24px", "26px", "32px"]}
            >
                Achievements :
            </Text>
            <HStack
                pl={[0, 0, 10]}
                py={[1, 1, 3]}
                fontSize={["14px", "16px", "16px", "18px"]}
            >
                <UnorderedList>
                    <ListItem>
                        Won first prize at mmcoe in programming{" "}
                    </ListItem>
                    <ListItem>
                        Won champion trophy in technical event at Jaikranti
                        college, katraj
                    </ListItem>
                </UnorderedList>
            </HStack>
        </Stack>
    );
};

export default Achievements;

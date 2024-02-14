import { HStack, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Achievements = () => {
    return (
        <Stack
            justifyContent={"start"}
            w={"full"}
            p={8}
            my={2}
            backgroundColor={"teal.50"}
            boxShadow={"lg"}
            borderRadius={"lg"}
        >
            <Text as={"h3"} fontSize={"32px"}>
                Achievements :
            </Text>
            <HStack pl={10} py={2}>
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

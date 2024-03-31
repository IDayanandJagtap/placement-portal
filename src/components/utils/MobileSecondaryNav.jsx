import { HStack, Stack } from "@chakra-ui/react";
import React from "react";

const MobileSecondaryNav = ({ menu, currentSection, onClickHandler }) => {
    return (
        <HStack
            display={["flex", "flex", "flex", "none"]}
            position={"fixed"}
            bottom={0}
            left={["11%", "9%", "15%"]}
            w={["89%", "91%", "85%"]}
            background={"primary.900"}
            py={3}
            px={8}
            color={"primary.900"}
            justifyContent={"space-between"}
        >
            {menu.map((e, i) => {
                return (
                    <Stack
                        // border={"2px solid red"}
                        onClick={() => onClickHandler(e.section)}
                        p={2}
                        borderRadius={"full"}
                        background={currentSection == e.section ? "white" : ""}
                        color={
                            currentSection == e.section
                                ? "primary.900"
                                : "white"
                        }
                    >
                        {e.icon}
                    </Stack>
                );
            })}
        </HStack>
    );
};

export default MobileSecondaryNav;

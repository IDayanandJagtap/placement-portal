import { Button, Checkbox, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StudentFilter = ({
    checkBoxes,
    filterBoxValues,
    handleCheckboxClick,
    handleOnApplyFilter,
    handleOnClearFilter,
}) => {
    return (
        <Stack p={[0, 0, 0, 1, 6]} mt={4}>
            <Stack
                px={5}
                py={2}
                boxShadow={"lg"}
                borderRadius={"md"}
                backgroundColor={"white"}
            >
                <Text as={"h1"} fontSize={"26px"}>
                    Filters
                </Text>
                <Stack>
                    <Text fontSize={"20px"}>Skills : </Text>

                    {checkBoxes.map((element, index) => {
                        return (
                            <Checkbox
                                key={index}
                                isChecked={filterBoxValues[index]}
                                onChange={(e) => {
                                    handleCheckboxClick(e, index);
                                }}
                            >
                                {element}
                            </Checkbox>
                        );
                    })}
                </Stack>

                <HStack alignSelf={"flex-end"} justifySelf={"flex-end"} mt={2}>
                    <Button
                        // border={"1px solid #2C5282"}
                        color={"primary.900"}
                        colorScheme="primary"
                        variant={"outline"}
                        size={"sm"}
                        onClick={handleOnClearFilter}
                    >
                        Clear
                    </Button>
                    <Button
                        colorScheme="primary"
                        variant={"solid"}
                        size={"sm"}
                        onClick={handleOnApplyFilter}
                    >
                        Apply
                    </Button>
                </HStack>
            </Stack>
        </Stack>
    );
};

export default StudentFilter;

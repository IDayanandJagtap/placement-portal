import {
    Box,
    Button,
    HStack,
    Heading,
    Stack,
    Text,
    Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Tag } from "../utils";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ApplyToJob = () => {
    const [showTextArea, setShowTextArea] = useState(0);
    const navigate = useNavigate();

    const handleOnClickApply = () => {
        if (showTextArea == 0) {
            setShowTextArea(1);
        } else {
            // submit;
        }
    };

    const handleOnClickCancel = () => {
        setShowTextArea(0);
    };

    return (
        <Stack p={[3, 4, 4, 4, 6]}>
            <Box w={"100%"} mx={"auto"}>
                {/* Back button */}
                <Button
                    alignSelf={"start"}
                    color={"white"}
                    padding={"2"}
                    background={"primary.900"}
                    colorScheme="primary"
                    borderRadius={"full"}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <IoArrowBack size={24} />
                </Button>

                <Stack
                    background={"secondary.50"}
                    p={4}
                    mt={5}
                    border={"1px solid #e7e7e7"}
                    borderRadius={"md"}
                    boxShadow={"md"}
                >
                    <Heading
                        as={"h2"}
                        fontSize={["18px", "20px", "20px", "22px", "24px"]}
                    >
                        JobTitle
                    </Heading>
                    <Text
                        fontSize={["12px", "12px", "14px", "14px", "14px"]}
                        fontWeight={"500"}
                    >
                        CompanyName
                    </Text>
                    <Text
                        as={"p"}
                        fontSize={["12px", "12px", "14px", "16px"]}
                        mt={"2"}
                        fontWeight={"500"}
                    >
                        Job type : <Text as={"span"}>Internship</Text>
                    </Text>
                    <Text
                        as={"p"}
                        mt={3}
                        color={"gray.500"}
                        fontSize={["12px", "14px", "16px"]}
                    >
                        <Text as={"span"} fontWeight={"500"}>
                            Description : <br></br>
                        </Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam consequuntur pariatur, fugit rem perferendis ad
                        placeat. Voluptatem nisi excepturi, architecto est illo
                        perferendis error enim quam qui numquam aliquid ipsam
                        minima explicabo natus eveniet et similique cumque id
                        modi, dolores voluptatum! Quam explicabo voluptatum
                        earum ipsum fugit et assumenda unde.
                    </Text>

                    <Text as={"p"} mt={5} fontSize={["16px", "18px"]}>
                        Expected Skills :
                    </Text>
                    <HStack flexWrap={"wrap"}>
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                        <Tag name={"JavaScript"} />
                    </HStack>

                    {/* Textarea display on apply click */}
                    {showTextArea && (
                        <Stack mt={5}>
                            <Text as={"h3"} fontSize={["16px", "18px"]}>
                                Your bio :
                            </Text>
                            <Textarea
                                rows={"10"}
                                border={"2px solid #E2E8F0"}
                                fontSize={["12px", "14px", " 16px"]}
                                placeholder="Explain why you are suitable for this job..."
                            ></Textarea>
                        </Stack>
                    )}

                    <HStack justifyContent={"end"} mt={10}>
                        {showTextArea && (
                            <Button
                                colorScheme="red"
                                px={[2, 4, 6]}
                                size={["sm", "sm", "sm", "md"]}
                                onClick={handleOnClickCancel}
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            colorScheme="green"
                            px={[2, 4, 6]}
                            size={["sm", "sm", "sm", "md"]}
                            onClick={handleOnClickApply}
                        >
                            {showTextArea ? "Submit" : "Apply"}
                        </Button>
                    </HStack>
                </Stack>
            </Box>
        </Stack>
    );
};

export default ApplyToJob;

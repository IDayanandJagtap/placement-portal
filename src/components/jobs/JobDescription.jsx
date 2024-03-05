import { Box, Button, HStack, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import Tag from "../utils/Tag";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const JobDescription = () => {
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
        <Stack p={4} minH={"100vh"} background={"#f1f1f1"}>
            <Box w={"70%"} mx={"auto"}>
                <Button
                    alignSelf={"start"}
                    background={"white"}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <IoIosArrowRoundBack size={40} />
                </Button>

                <Stack
                    background={"white"}
                    p={4}
                    mt={5}
                    borderRadius={"md"}
                    boxShadow={"md"}
                >
                    <Text as={"h2"} fontSize={"26px"}>
                        JadeGlobal
                    </Text>
                    <Text as={"p"} color={"gray.500"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam consequuntur pariatur, fugit rem perferendis ad
                        placeat. Voluptatem nisi excepturi, architecto est illo
                        perferendis error enim quam qui numquam aliquid ipsam
                        minima explicabo natus eveniet et similique cumque id
                        modi, dolores voluptatum! Quam explicabo voluptatum
                        earum ipsum fugit et assumenda unde.
                    </Text>

                    <Text as={"p"} mt={5} fontSize={"18px"}>
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
                            <Text as={"h3"} fontSize={"18px"}>
                                Your bio :
                            </Text>
                            <Textarea
                                rows={"10"}
                                border={"2px solid #E2E8F0"}
                                placeholder="Explain why you are suitable for this job..."
                            ></Textarea>
                        </Stack>
                    )}

                    <HStack justifyContent={"end"} mt={10}>
                        {showTextArea && (
                            <Button
                                colorScheme="red"
                                px={6}
                                onClick={handleOnClickCancel}
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            colorScheme="green"
                            px={6}
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

export default JobDescription;

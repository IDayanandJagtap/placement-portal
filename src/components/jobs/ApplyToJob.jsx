import {
    Box,
    Button,
    HStack,
    Heading,
    Stack,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { Tag } from "../utils";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { StudentContext } from "../../contextApi/StudentContext";

const ApplyToJob = ({ jobDetails }) => {
    const [showTextArea, setShowTextArea] = useState(0);
    const navigate = useNavigate();

    const { title, companyName, description, skills, type, salaryRange } =
        jobDetails;
    const postedDate = new Date(jobDetails.postedDate).toLocaleDateString();
    const descRef = useRef(null);
    const { applyToJob } = useContext(StudentContext);
    const toast = useToast();

    const handleOnClickApply = async () => {
        if (showTextArea == 0) {
            setShowTextArea(1);
        } else {
            const description = descRef.current.value;
            const response = await applyToJob(jobDetails._id, description);
            if (response.success) {
                toast({ title: "Applied", status: "success", duration: 3000 });
            } else {
                toast({
                    title: response.error,
                    status: "warning",
                    duration: 3000,
                });
            }
        }
    };

    const handleOnClickCancel = () => {
        setShowTextArea(0);
        descRef.current.value = "";
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
                    <HStack justifyContent={"space-between"}>
                        <Text
                            fontWeight={"500"}
                            as={"h2"}
                            fontSize={["18px", "20px", "20px", "22px", "24px"]}
                        >
                            {title}
                        </Text>
                        <Text
                            color={"gray.500"}
                            fontSize={["12px", "12px", "14px", "14px", "14px"]}
                        >
                            {postedDate}
                        </Text>
                    </HStack>
                    <Text
                        fontSize={["12px", "12px", "14px", "14px", "14px"]}
                        fontWeight={"500"}
                    >
                        {companyName}
                    </Text>
                    <Text
                        as={"p"}
                        fontSize={["12px", "12px", "14px", "16px"]}
                        mt={"2"}
                        fontWeight={"500"}
                    >
                        Job type : <Text as={"span"}>{type}</Text>
                    </Text>
                    <Text as={"p"} fontSize={["10px", "10px", "12px", "14px"]}>
                        {"₹"}
                        {salaryRange.min} - {"₹"}
                        {salaryRange.max}
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
                        {description}
                    </Text>

                    <Text as={"p"} mt={5} fontSize={["16px", "18px"]}>
                        Expected Skills :
                    </Text>
                    <HStack flexWrap={"wrap"}>
                        {skills.map((e, i) => {
                            return <Tag key={i} name={e} />;
                        })}
                    </HStack>

                    {/* Textarea display on apply click */}
                    {showTextArea && (
                        <Stack mt={5}>
                            <Text as={"h3"} fontSize={["16px", "18px"]}>
                                Your bio :
                            </Text>
                            <Textarea
                                rows={"10"}
                                ref={descRef}
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

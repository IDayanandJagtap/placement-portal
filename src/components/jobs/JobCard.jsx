import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tag } from "../utils";
import { IoArrowForward } from "react-icons/io5";

const JobCard = ({ job }) => {
    const navigate = useNavigate();

    return (
        <Stack
            flexDirection={"column"}
            p={[3, 4, 4, 5, 6]}
            background={"primary.50"}
            border={"1px solid #e7e7e7"}
            borderRadius={"xl"}
            _hover={{ boxShadow: "md" }}
            onClick={() => {
                // In mobile navigate button is not displayed, so navigation is used here
                navigate("/job/" + job.jobId.toString());
            }}
        >
            <Heading
                as={"h3"}
                fontSize={["16px", "18px", "18px", "20px", "22px"]}
            >
                {job.companyName}
            </Heading>
            <Text as={"p"} fontSize={["12px", "12px", "14px", "14px", "14px"]}>
                {job.jobDescription}
            </Text>

            <Text as={"p"} mt={[0, 1, 1, 1, 3]} fontSize={["14px", "16px"]}>
                Expected Skills :
            </Text>
            <HStack flexWrap={"wrap"}>
                {job.expectedSkills.map((skill, index) => {
                    return <Tag name={skill} key={index} />;
                })}
            </HStack>
            <Button
                display={["none", "none", "none", "flex"]}
                background={"primary.500"}
                color={"white"}
                width={"20px"}
                padding={"2"}
                borderRadius={"full"}
                justifySelf={"flex-end"}
                alignSelf={"flex-end"}
                _hover={{ transform: "scale(1.1)" }}
                onClick={() => {
                    navigate("/job/" + job.jobId.toString());
                }}
            >
                <IoArrowForward size={20} />
            </Button>
        </Stack>
    );
};

export default JobCard;

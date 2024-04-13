import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tag } from "../utils";
import { IoArrowForward } from "react-icons/io5";

const JobCard = ({ job }) => {
    const navigate = useNavigate();
    const postedDate = new Date(job.postedDate).toLocaleDateString();

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
                navigate("/job/" + job._id.toString());
            }}
        >
            <Heading
                as={"h3"}
                fontSize={["16px", "18px", "18px", "20px", "22px"]}
            >
                {job.title}
            </Heading>
            <Text
                fontSize={["12px", "12px", "14px", "14px", "14px"]}
                fontWeight={"500"}
            >
                {job.companyName}
            </Text>

            <Text
                as={"p"}
                fontSize={["12px", "12px", "14px", "16px"]}
                mt={"2"}
                fontWeight={"500"}
            >
                Job type : <Text as={"span"}>{job.type}</Text>
            </Text>

            <Text as={"p"} fontSize={["12px", "12px", "14px", "14px", "14px"]}>
                {job.description && job.description.substring(0, 200)} {"..."}
            </Text>

            <Text as={"p"} mt={[0, 1, 1, 1, 3]} fontSize={["14px", "16px"]}>
                Expected Skills :
            </Text>
            <HStack flexWrap={"wrap"}>
                {job.skills &&
                    job.skills.map((skill, index) => {
                        return <Tag name={skill} key={index} />;
                    })}
            </HStack>

            <HStack justifyContent={"space-between"}>
                <Text
                    color={"gray.500"}
                    fontSize={["12px", "12px", "14px", "14px", "14px"]}
                >
                    {postedDate}
                </Text>
                <Button
                    display={["none", "none", "none", "flex"]}
                    background={"primary.500"}
                    color={"white"}
                    width={"20px"}
                    padding={"2"}
                    borderRadius={"full"}
                    _hover={{ transform: "scale(1.1)" }}
                    onClick={() => {
                        navigate("/job/" + job._id.toString());
                    }}
                >
                    <IoArrowForward size={20} />
                </Button>
            </HStack>
        </Stack>
    );
};

export default JobCard;

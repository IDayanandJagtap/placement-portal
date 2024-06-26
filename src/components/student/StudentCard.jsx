import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Tag } from "../utils";
import "../../global.css";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ student }) => {
    const navigate = useNavigate();

    return (
        <VStack
            className="studentCard"
            alignItems={"start"}
            backgroundColor={"white"}
            border={"1px solid #e7e7e7"}
            boxShadow={"xs"}
            borderRadius={6}
            cursor={"pointer"}
            h={"fit-content"}
            py={3}
            px={5}
            _hover={{ background: "secondary.50", boxShadow: "md" }}
            onClick={() => {
                navigate(`/students/${student._id}`);
            }}
        >
            {/* Use some professional font */}
            <Text
                as={"h3"}
                fontWeight={"500"}
                fontSize={["16px", "18px", "20px", "24px", "26px"]}
            >
                {student.name}
            </Text>
            <Text mt={-1.5} fontSize={["12px", "12px", "14px", "14px", "16px"]}>
                {student.degree} , {student.year}
            </Text>

            {/* Only in ShowAppliedStudents Component */}
            {student.jobDescription && (
                <Text
                    fontSize={["12px", "12px", "14px", "14px", "16px"]}
                    color={"gray.600"}
                >
                    About student :{" "}
                    <Text as={"span"}>{student.jobDescription}</Text>
                </Text>
            )}

            <HStack mt={2}>
                {student.skills.map((element, index) => {
                    return <Tag key={index} name={element} />;
                })}
            </HStack>
        </VStack>
    );
};

export default StudentCard;

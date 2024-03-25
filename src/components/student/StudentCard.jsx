import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Tag from "../utils/Tag";
import "../../global.css";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ student }) => {
    const navigate = useNavigate();

    return (
        <VStack
            className="studentCard"
            alignItems={"start"}
            backgroundColor={"white"}
            border={"1px solid #b4b4b4"}
            boxShadow={"md"}
            borderRadius={6}
            cursor={"pointer"}
            h={"fit-content"}
            py={3}
            px={5}
            _hover={{ background: "primary.50" }}
            onClick={() => {
                navigate(`/students/${student.id}`);
            }}
        >
            {/* Use some professional font */}
            <Heading
                as={"h3"}
                fontSize={["16px", "18px", "20px", "24px", "26px"]}
            >
                {student.name}
            </Heading>
            <Text mt={-1.5} fontSize={["12px", "12px", "14px", "14px", "16px"]}>
                {student.degree} , {student.year}
            </Text>

            <HStack mt={2}>
                {student.skills.map((element, index) => {
                    return <Tag key={index} name={element} />;
                })}
            </HStack>
        </VStack>
    );
};

export default StudentCard;

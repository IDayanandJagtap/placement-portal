import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Tag from "../utils/Tag";
import "../../global.css";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ id, name, degree, year, skills }) => {
    const navigate = useNavigate();

    return (
        <VStack
            className="studentCard"
            alignItems={"start"}
            backgroundColor={"blue.200"}
            borderRadius={6}
            cursor={"pointer"}
            h={"fit-content"}
            py={3}
            px={5}
            onClick={() => {
                navigate(`/student/${id}`);
            }}
        >
            <Text as={"h3"} fontSize={"1.8rem"}>
                {name}
            </Text>
            <Text mt={-2}>
                {degree} , {year}
            </Text>

            <HStack mt={6}>
                {skills.map((element, index) => {
                    return <Tag key={index} name={element} />;
                })}
            </HStack>
        </VStack>
    );
};

export default StudentCard;

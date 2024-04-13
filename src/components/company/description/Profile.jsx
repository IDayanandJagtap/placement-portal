import {
    Divider,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
import demoImg from "../../../assets/jade.png";
import CompanyList from "../CompanyList";

const Profile = ({ company }) => {
    return (
        <Stack
            minH={"90dvh"}
            id="profile"
            background={"primary.50"}
            p={[4, 6]}
            borderRadius={"md"}
        >
            <Stack
                h={"fit-content"}
                flexDirection={["column", "column", "column", "row"]}
                justifyContent={"center"}
                alignItems={"center"}
                gap={8}
            >
                <Image
                    src={company.imgUrl}
                    w={200}
                    h={200}
                    p={1}
                    objectFit={"contain"}
                    boxShadow={"md"}
                    backgroundColor={"white"}
                />
                <VStack
                    alignItems={"flex-start"}
                    w={["100%", "100%", "100%", "80%"]}
                    p={4}
                >
                    <Stack
                        w={"full"}
                        textAlign={["center", "center", "center", "left"]}
                    >
                        <Heading
                            as={"h1"}
                            fontSize={["22px", "24px", "28px", "32px"]}
                        >
                            {company.name}
                        </Heading>
                        <Text
                            fontSize={["14px", "16px", "16px", "18px"]}
                            pl={3}
                        >
                            <q>{company.tagline}</q>
                        </Text>
                    </Stack>

                    {/* Socials */}
                    <HStack
                        w={"full"}
                        mt={12}
                        gap={4}
                        justifyContent={["center", "center", "center", "start"]}
                    >
                        <a target="_blank" href="#">
                            <IoMail size={30} className="hoverIcon" />
                        </a>
                        <a target="_blank" href="#">
                            <FaXTwitter size={30} className="hoverIcon" />
                        </a>
                        <a target="_blank" href="#">
                            <IoLogoLinkedin size={30} className="hoverIcon" />
                        </a>
                    </HStack>
                </VStack>
            </Stack>

            {/* Space */}
            <Stack h={["2vh", "2vh", "2vh", "4vh"]}></Stack>
            <Divider borderColor={"gray.300"} borderWidth={"1px"} />
            <Stack h={["2vh", "2vh", "2vh", "4vh"]}></Stack>

            {/* About section */}
            <Stack ml={1}>
                <Heading fontSize={["22px", "24px", "28px"]}>
                    About us :{" "}
                </Heading>
                <Text
                    letterSpacing={".7px"}
                    pl={[0, 0, 0, 6]}
                    fontSize={["12px", "14px", "14px", "16px"]}
                >
                    {company.bio}
                </Text>
            </Stack>
        </Stack>
    );
};

export default Profile;

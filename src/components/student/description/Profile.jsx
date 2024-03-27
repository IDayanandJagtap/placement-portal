import {
    Button,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import demoImg from "../../../assets/react.svg";

const Profile = ({ student }) => {
    return (
        <Stack
            w={"full"}
            p={5}
            my={2}
            flexDirection={["column-reverse", "column-reverse", "row"]}
            backgroundColor={"secondary.50"}
            boxShadow={"md"}
            borderRadius={"md"}
            id="profile"
        >
            {/* Main info */}
            <VStack
                width={"full"}
                alignItems={["center", "center", "start"]}
                justifyContent={"start"}
                pl={1}
            >
                <Heading
                    as={"h1"}
                    fontSize={["24px", "26px", "26px", "30px", "32px"]}
                >
                    {student.name}
                    {/* isVerified */}
                    {/* <IoCheckmarkSharp /> */}
                </Heading>
                <Text
                    as={"h3"}
                    color={"gray.500"}
                    mt={[-1, -2]}
                    pl={1}
                    fontSize={["14px", "16px", "16px", "18px"]}
                >
                    {student.degree}{" "}
                    <Text as={"span"}>, {student.year} year</Text>
                </Text>

                {/* Portfolio link */}
                <HStack color={"blue.700"} mt={1} mb={2}>
                    <FaLink size={"20"} />
                    <Text fontSize={["16px", "18px", "20px"]}>
                        <a
                            target="_blank"
                            href="https://dayanandjagtap.vercel.app"
                        >
                            Portfolio
                        </a>
                    </Text>
                </HStack>

                {/* Socials */}
                <HStack mt={4} gap={4}>
                    <a target="_blank" href="#">
                        <IoLogoGithub size={24} className="hoverIcon" />
                    </a>
                    <a target="_blank" href="#">
                        <FaXTwitter size={24} className="hoverIcon" />
                    </a>
                    <a target="_blank" href="#">
                        <IoLogoLinkedin size={24} className="hoverIcon" />
                    </a>
                </HStack>

                {/* Buttons */}
                <HStack mt={12}>
                    <Button
                        size={["sm", "md"]}
                        colorScheme="primary"
                        // background={"primary.900"}
                    >
                        Download CV
                    </Button>
                    <Button
                        variant={"outline"}
                        border={"1px solid #2C5282"}
                        color={"#2c5282"}
                        size={["sm", "md"]}
                    >
                        Contact
                    </Button>
                </HStack>
            </VStack>

            {/* Profile pic */}
            <VStack w={["100%", "100%", "50%"]} py={2} pb={[3, 3, 0]}>
                <Image
                    src={demoImg}
                    width={200}
                    height={200}
                    borderRadius={"full"}
                    backgroundColor={"#b4b4b4"}
                    filter={"drop-shadow(2px 2px 4px #000)"}
                ></Image>
            </VStack>
        </Stack>
    );
};

export default Profile;

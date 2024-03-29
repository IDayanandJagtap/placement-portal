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

const Profile = () => {
    return (
        <Stack
            minH={"90dvh"}
            id="profile"
            background={"primary.50"}
            p={6}
            borderRadius={"md"}
        >
            <Stack h={"fit-content"} flexDirection={"row"} gap={8}>
                <Image
                    src={demoImg}
                    w={200}
                    h={200}
                    p={1}
                    objectFit={"contain"}
                    boxShadow={"md"}
                    backgroundColor={"white"}
                />
                <VStack alignItems={"flex-start"} w={"80%"} p={4}>
                    <Stack>
                        <Heading as={"h1"} fontSize={"40px"}>
                            Jade Global
                        </Heading>
                        <Text fontSize={"18px"} pl={3}>
                            <q>We hire the besht</q>
                        </Text>
                    </Stack>

                    {/* Socials */}
                    <HStack mt={12} gap={4}>
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
            <Stack h={"6vh"}></Stack>
            <Divider borderColor={"gray.300"} borderWidth={"1px"} />
            <Stack h={"4vh"}></Stack>

            {/* About section */}
            <Stack ml={1}>
                <Heading fontSize={"28px"}>About us : </Heading>
                <Text letterSpacing={".7px"} pl={6}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit dignissimos nihil itaque aliquam, nisi facere
                    est nulla modi ducimus accusantium harum impedit, ad laborum
                    porro perspiciatis perferendis. Explicabo, eaque, voluptate,
                    architecto minus dolorum itaque consequatur fugiat qui
                    doloremque reprehenderit mollitia atque dolor cupiditate
                    similique rerum libero laboriosam quo provident impedit at
                    nulla incidunt? Repellendus quidem excepturi, eligendi
                    architecto quo consequuntur? Ipsum minus ex recusandae rem
                    cum possimus ea architecto aliquam quas qui! Optio quaerat,
                    perspiciatis, ab doloribus exercitationem eius, cum
                    molestiae assumenda nisi corporis consectetur ut? Obcaecati,
                    sequi! Eius qui dolor illum voluptate maxime ipsam
                    reprehenderit fugit quasi, incidunt assumenda eos expedita
                    delectus perferendis hic debitis. Voluptas, earum
                    voluptatum. Porro nihil asperiores ducimus? Provident
                    explicabo, omnis quam unde illo sint hic alias ducimus ipsa
                    aliquam animi id harum eaque cumque quisquam esse
                    repellendus autem aut pariatur. Omnis voluptates, at
                    nesciunt, doloribus perferendis, libero non in neque rem
                    quod quae aut molestiae voluptatem culpa quidem similique
                    temporibus atque? Dignissimos eligendi ipsum nulla iste
                    magni, eum reprehenderit ipsam magnam unde illum aperiam.
                    Praesentium ullam consectetur nemo eveniet! Aliquid nemo sed
                    ducimus obcaecati eius molestias labore cum ex minus
                    voluptatibus?
                </Text>
            </Stack>
        </Stack>
    );
};

export default Profile;

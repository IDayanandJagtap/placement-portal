import {
    Button,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";

import demoImg from "../../../assets/logo.jpeg";
import { FaLinkedin, FaPlus, FaXTwitter } from "react-icons/fa6";
import { useRef } from "react";
import { CompanyContext } from "../../../contextApi/CompanyContext";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ companyInfo, setCurrentSection }) => {
    const [formFields, setFormFields] = useState(companyInfo);
    const [imgUrl, setImgUrl] = useState();
    const profileImageRef = useRef();
    const { updateCompany } = useContext(CompanyContext);
    const navigate = useNavigate();
    const toast = useToast();

    const handleFileButtonClick = () => {
        profileImageRef.current.click();
    };

    const handleOnInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormFields({ ...formFields, [field]: value });
        console.log(formFields);
    };

    const hanldeOnSocialsChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormFields({
            ...formFields,
            contact: { ...formFields.contact, [field]: value },
        });
    };

    const handleOnUpdateClick = async () => {
        const result = await updateCompany(formFields, imgUrl);
        // navigate again so the user info will be updated (fetch) and set current section to profile
        navigate("/me");
        setCurrentSection("newjob");
        toast({
            title: result.title,
            description: result.description,
            status: result.status,
            duration: 3000,
            isClosable: true,
        });
    };
    return (
        <Stack px={[4, 6]} py={4} mb={[8, 8, 8, 4]} minH={"90vh"} gap={6}>
            <Text
                as={"h2"}
                my={6}
                fontWeight={"600"}
                fontSize={["22px", "24px"]}
            >
                Edit profile
            </Text>
            {/* profile - image and name */}
            <Stack gap={6}>
                <VStack
                    position={"relative"}
                    width={["full", "full", "20%"]}
                    h={["150px", "150px", "full"]}
                >
                    <Input
                        display={"none"}
                        type="file"
                        name="img"
                        accept=".jpeg .jpg .png"
                        ref={profileImageRef}
                        onChange={(e) => {
                            setImgUrl(e.target.files[0]);
                        }}
                    ></Input>
                    <Image
                        src={companyInfo.imgUrl ? companyInfo.imgUrl : demoImg}
                        h={"full"}
                        opacity={0.4}
                    ></Image>
                    <HStack
                        position={"absolute"}
                        top={"50%"}
                        left={"50%"}
                        transform={"translate(-50%, -50%)"}
                        p={3}
                        cursor={"pointer"}
                        borderRadius={"full"}
                        _hover={{ backgroundColor: "#CBD5E0" }}
                        transition={"all 0.3s linear"}
                        onClick={handleFileButtonClick}
                    >
                        <FaPlus size={32} />
                    </HStack>
                </VStack>

                <Stack gap={4}>
                    <Stack>
                        <Text as={"label"}>Company name</Text>
                        <Input
                            type="text"
                            placeholder="Enter company name"
                            name="name"
                            value={formFields.name}
                            onChange={handleOnInputChange}
                        />
                    </Stack>
                    <Stack>
                        <Text as={"label"}>Tagline</Text>
                        <Input
                            type="text"
                            placeholder="Enter tagline"
                            name="tagline"
                            value={formFields.tagline}
                            onChange={handleOnInputChange}
                        />
                    </Stack>
                </Stack>
            </Stack>

            {/* socials */}
            <Text as={"h3"} fontSize={["22px", "24px"]} fontWeight={500}>
                Socials
            </Text>
            <Stack
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={4}
                justifyContent={"space-between"}
            >
                <Stack w={["full", "full", "45%"]}>
                    <HStack>
                        <FaXTwitter size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.x.com/username"
                            border={"2px solid #E2E8F0"}
                            fontSize={["14px", "16px"]}
                            p={[2, 3]}
                            name="twitter"
                            value={formFields.contact.twitter}
                            onChange={hanldeOnSocialsChange}
                        ></Input>
                    </HStack>
                </Stack>
                <Stack w={["full", "full", "45%"]}>
                    <HStack>
                        <FaLinkedin size={32} />
                        <Input
                            type="text"
                            placeholder="https://www.linkedin.com/username"
                            border={"2px solid #E2E8F0"}
                            fontSize={["14px", "16px"]}
                            p={[2, 3]}
                            name="linkedin"
                            value={formFields.contact.linkedin}
                            onChange={hanldeOnSocialsChange}
                        ></Input>
                    </HStack>
                </Stack>
            </Stack>

            {/* About section */}
            <Stack>
                <Text as={"h3"} fontSize={["22px", "24px"]} fontWeight={500}>
                    About
                </Text>
                <Textarea
                    rows={7}
                    placeholder="Write about company.."
                    name="bio"
                    value={formFields.bio}
                    onChange={handleOnInputChange}
                ></Textarea>
            </Stack>

            {/* button */}
            <HStack justifyContent={"flex-end"}>
                <Button size={["sm", "sm", "md"]}>Clear</Button>
                <Button
                    size={["sm", "sm", "md"]}
                    colorScheme="primary"
                    onClick={handleOnUpdateClick}
                >
                    Update
                </Button>
            </HStack>

            {/* Spacing for mobile */}
            <Stack minH={"10vh"}></Stack>
        </Stack>
    );
};

export default EditProfile;

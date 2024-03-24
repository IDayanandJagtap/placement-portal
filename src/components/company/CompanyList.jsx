import {
    Button,
    HStack,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoArrowForward, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import demoImg from "../../assets/jade.png";

const cardColors = [
    { dark: "#EF4444", light: "#FEF2F2" },
    { dark: "#EAB308", light: "#FEFCE8" },
    { dark: "#22C55E", light: "#F0FDF4" },
];
const length = cardColors.length;

const CompanyList = () => {
    const navigate = useNavigate();
    return (
        <Stack p={[3, 4, 4, 4, 6]}>
            {/* Search bar */}
            <HStack justifyContent={"center"}>
                <InputGroup w={["100%", "100%", "70%", "50%"]}>
                    <Input
                        type="text"
                        placeholder="Search company..."
                        variant={"outline"}
                        border={"2px solid #3182CE"}
                    />
                    <InputRightElement w={"4rem"}>
                        <IoSearch size={"24"} cursor={"pointer"} />
                    </InputRightElement>
                </InputGroup>
            </HStack>

            {/* fetch here */}
            <VStack mt={10} gap={6}>
                {companyData.map((e, i) => {
                    return (
                        <Stack
                            key={i}
                            p={[3, 4, 4, 5, 6]}
                            flexDirection={["column", "column", "row"]}
                            alignItems={"center"}
                            justifyContent={"center"}
                            boxShadow={"md"}
                            background={cardColors[i % length].light}
                            border={"1px solid " + cardColors[i % length].dark}
                            borderRadius={"xl"}
                            minH={["fit-content", "fit-content", "18%"]}
                            onClick={() => {
                                // In mobile navigate button is not displayed, so navigation is used here
                                navigate(e.id.toString());
                            }}
                        >
                            <Stack w={"50%"}>
                                <Image
                                    src={demoImg}
                                    height={"100px"}
                                    w={"auto"}
                                    objectFit={"contain"}
                                    borderRadius={"md"}
                                />
                            </Stack>
                            <VStack
                                p={4}
                                alignItems={"start"}
                                position={"relative"}
                                w={["100%", "100%", "50%"]}
                                h={"full"}
                            >
                                <Heading
                                    as={"h3"}
                                    fontSize={[
                                        "16px",
                                        "18px",
                                        "20px",
                                        "24px",
                                        "26px",
                                    ]}
                                >
                                    {e.name}
                                </Heading>
                                <Text
                                    as={"p"}
                                    mt={4}
                                    fontSize={[
                                        "12px",
                                        "12px",
                                        "14px",
                                        "14px",
                                        "16px",
                                    ]}
                                >
                                    {e.description}
                                </Text>
                                <Button
                                    display={["none", "none", "flex"]}
                                    background={cardColors[i % length].dark}
                                    color={"white"}
                                    width={"20px"}
                                    padding={"2"}
                                    borderRadius={"full"}
                                    position={"absolute"}
                                    bottom={1}
                                    right={1}
                                    _hover={{ transform: "scale(1.1)" }}
                                    onClick={() => {
                                        navigate(e.id);
                                    }}
                                >
                                    <IoArrowForward size={20} />
                                </Button>
                            </VStack>
                        </Stack>
                    );
                })}
            </VStack>
        </Stack>
    );
};

const companyData = [
    {
        id: 1,
        name: "JadeGlobal",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        id: 12,
        name: "BaramatiTech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        id: 123,
        name: "Persistant",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        id: 1234,
        name: "Mastercard",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        id: 12345,
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        id: 12345,
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        id: 12345,
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        id: 12345,
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
];

export default CompanyList;

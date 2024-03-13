import {
    Grid,
    GridItem,
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
import { IoSearch } from "react-icons/io5";
import demoImg from "../../assets/userAvatar.png";
const FetchCompany = () => {
    return (
        <Stack p={5} background={"#f1f1f1"} minH={"90vh"}>
            <Stack>
                {/* Search bar */}
                <HStack justifyContent={"center"}>
                    <InputGroup w={"50%"} size={"lg"}>
                        <Input
                            type="text"
                            placeholder="Search..."
                            variant={"outline"}
                            border={"2px solid #3182CE"}
                        />
                        <InputRightElement w={"4rem"}>
                            <IoSearch size={"24"} cursor={"pointer"} />
                        </InputRightElement>
                    </InputGroup>
                </HStack>

                {/* fetch here */}
                <HStack mt={10}>
                    <VStack w={"20%"}></VStack>
                    <Grid
                        w={"80%"}
                        templateColumns={"repeat(auto-fit, minmax(250px, 40%))"}
                        templateRows={"auto"}
                        gap={5}
                    >
                        {companyData.map((e, i) => {
                            return (
                                <GridItem
                                    background={"white"}
                                    borderRadius={"md"}
                                    boxShadow={"md"}
                                    cursor={"pointer"}
                                    key={i}
                                >
                                    <Image
                                        src={demoImg}
                                        height={"150px"}
                                        w={"100%"}
                                        objectFit={"contain"}
                                        borderRadius={"6px 6px 0 0"}
                                    />
                                    <VStack p={4} alignItems={"start"}>
                                        <Heading as={"h3"} fontSize={"24px"}>
                                            {e.name}
                                        </Heading>
                                        <Text as={"p"} mt={4}>
                                            {e.description}
                                        </Text>
                                    </VStack>
                                </GridItem>
                            );
                        })}
                    </Grid>
                </HStack>
            </Stack>
        </Stack>
    );
};

const companyData = [
    {
        name: "JadeGlobal",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        name: "BaramatiTech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        name: "Persistant",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        name: "Mastercard",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
    {
        name: "Infotech",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem corporis reiciendis qui quo eaque, unde voluptatum officiis nihil distinctio possimus?",
    },
];

export default FetchCompany;

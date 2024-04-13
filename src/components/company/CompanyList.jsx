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
    useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { IoArrowForward, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../../contextApi/CompanyContext";

const CompanyList = () => {
    const navigate = useNavigate();
    const [searchedCompany, setSearchedCompany] = useState(companyData);
    const { getAll } = useContext(CompanyContext);
    const toast = useToast();

    const handleOnSearchInputChange = (e) => {
        let searchable = e.target.value.toLowerCase();

        if (searchable.trim() != "") {
            let company = companyData.filter((element) => {
                // make comparison of lowercase values
                return element.name.toLowerCase().includes(searchable);
            });
            setSearchedCompany(company);
        } else {
            setSearchedCompany(companyData);
        }
    };

    const getCompanyData = async () => {
        let result = await getAll();
        if (result.error) {
            return toast({ title: result.error, status: "error" });
        }
        companyData = result;
        setSearchedCompany(result);
    };
    useEffect(() => {
        // fetch from db
        getCompanyData();
    }, []);

    return (
        <Stack p={[3, 4, 4, 4, 6]}>
            {/* Search bar */}
            <HStack justifyContent={"center"}>
                <InputGroup w={["100%", "100%", "70%", "50%"]}>
                    <Input
                        type="text"
                        placeholder="Search company..."
                        variant={"outline"}
                        onChange={handleOnSearchInputChange}
                        border={"2px solid #3182CE"}
                    />
                    <InputRightElement w={"4rem"}>
                        <IoSearch size={"24"} cursor={"pointer"} />
                    </InputRightElement>
                </InputGroup>
            </HStack>

            {/* fetch here */}
            <VStack mt={10} gap={6}>
                {searchedCompany.map((e, i) => {
                    return (
                        <Stack
                            key={i}
                            p={[3, 4, 4, 5, 6]}
                            w={"full"}
                            flexDirection={["column", "column", "row"]}
                            alignItems={"center"}
                            justifyContent={"center"}
                            border={"1px solid #e7e7e7"}
                            borderRadius={"xl"}
                            _hover={{ boxShadow: "md" }}
                            minH={["fit-content", "fit-content", "18%"]}
                            onClick={() => {
                                // In mobile navigate button is not displayed, so navigation is used here
                                navigate("/company/" + e._id.toString());
                            }}
                        >
                            <Stack w={"50%"}>
                                <Image
                                    src={e.imgUrl}
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
                                    {e.bio && e.bio.substring(0, 200)} {"..."}
                                </Text>
                                <Button
                                    display={["none", "none", "flex"]}
                                    background={"primary.500"}
                                    color={"white"}
                                    width={"20px"}
                                    padding={"2"}
                                    borderRadius={"full"}
                                    position={"absolute"}
                                    bottom={1}
                                    right={1}
                                    _hover={{ transform: "scale(1.1)" }}
                                    onClick={() => {
                                        navigate(
                                            "/company/" + e._id.toString()
                                        );
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

let companyData = [];
export default CompanyList;

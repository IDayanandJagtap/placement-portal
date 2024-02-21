import {
    Box,
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRef, useState } from "react";

const Signup = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputPassword = useRef(null);

    const toggleShowPassword = (e) => {
        if (isPasswordVisible) {
            inputPassword.current.type = "password";
            setIsPasswordVisible(false);
        } else {
            inputPassword.current.type = "text";
            setIsPasswordVisible(true);
        }
    };

    return (
        <VStack
            w={["100%", "100%", "95%", "70%"]}
            mx={"auto"}
            h={"90vh"}
            justifyContent={"center"}
        >
            <VStack
                w={["95%", "90%", "80%", "50%"]}
                mx={"auto"}
                boxShadow={"lg"}
                p={6}
                background={"gray.300"}
                borderRadius={"8"}
                gap={4}
            >
                <Text as={"h1"} fontSize={"30"} mb={4} fontWeight={"semibold"}>
                    Signup
                </Text>
                <Input
                    type="text"
                    id="name"
                    placeholder="Enter full name"
                    border={"none"}
                    background={"white"}
                    required
                ></Input>
                <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    border={"none"}
                    background={"white"}
                    required
                ></Input>
                <InputGroup>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        border={"none"}
                        background={"white"}
                        ref={inputPassword}
                        required
                    ></Input>
                    <InputRightElement
                        opacity={".7"}
                        cursor={"pointer"}
                        onClick={toggleShowPassword}
                    >
                        {isPasswordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                    </InputRightElement>
                </InputGroup>
                <Input
                    type="password"
                    placeholder="Confirm password"
                    border={"none"}
                    background={"white"}
                    required
                ></Input>
                <Select
                    placeholder="Signup as"
                    border={"none"}
                    background={"white"}
                    required
                    color={"gray.500"}
                >
                    <option value="student">Student</option>
                    <option value="company">Company</option>
                    <option value="faculty">Faculty</option>
                </Select>

                <HStack justifyContent={"space-between"} w={"full"} mt={6}>
                    <Text as={"p"} pl={1}>
                        Already have an account ? &nbsp;
                        <Link to={"/login"} style={{ color: "#3182CE" }}>
                            Login here
                        </Link>
                    </Text>
                    <Button  backgroundColor={"blue.700"}
                            color={"white"}
                            border={"1px solid #2C5282"}
                            _hover={{ background: "white", color: "#2C5282" }}>Signup</Button>
                </HStack>
            </VStack>
            <Text my={2}>
                You will be redirected to dashboard to create your profile.
            </Text>
        </VStack>
    );
};

export default Signup;

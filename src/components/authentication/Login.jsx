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
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
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
                    Login
                </Text>
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
                        onClick={toggleShowPassword}
                        cursor={"pointer"}
                    >
                        {isPasswordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                    </InputRightElement>
                </InputGroup>
                <Select
                    placeholder="Login as"
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
                        Don't have an account ? &nbsp;
                        <Link to={"/signup"} style={{ color: "#3182CE" }}>
                            Signup here
                        </Link>
                    </Text>
                    <Button colorScheme="blue">Login</Button>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Login;
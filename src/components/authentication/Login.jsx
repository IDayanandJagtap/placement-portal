import {
    Box,
    Button,
    HStack,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputRightElement,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLockClosed, IoMail, IoPeople } from "react-icons/io5";
import loginImg from "../../assets/loginHero.png";
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
        <Stack
            zIndex={1}
            background={"primary.900 "}
            w={"100vw"}
            h={"100vh"}
            position={"fixed"}
            top={0}
            right={0}
            p={4}
            justifyContent={"center"}
            flexDirection={"row"}
        >
            <Stack
                w={"full"}
                border={"1px solid red"}
                justifyContent={"space-between"}
                alignItems={"center"}
                p={6}
            >
                <Text
                    fontSize={"20"}
                    //fontWeight={"semibold"}
                    //textAlign={"center"}
                    color={"white"}
                >
                    <Text as={"span"} fontSize={"40px"} fontWeight={"500"}>
                        PLACED
                    </Text>
                    <br />
                    Your gateway to career opportunities.
                    <br /> Login to explore job listings, connect with
                    employers, and take the next step towards your professional
                    journey.
                </Text>
                <Image w={450} src={loginImg} />
            </Stack>
            <Stack
                w={"full"}
                background={"white"}
                p={6}
                gap={4}
                borderRadius={"xl"}
            >
                <Stack
                    w={"60%"}
                    h={"60%"}
                    // background={"gray.200"}
                    justifyContent={"space-between"}
                    m={"auto"}
                    p={4}
                >
                    <Text
                        as={"h1"}
                        fontSize={"30"}
                        textAlign={"center"}
                        fontWeight={"semibold"}
                    >
                        Welcome back !
                    </Text>
                    <Stack gap={6}>
                        <InputGroup>
                            <InputLeftElement ml={-1}>
                                <IoMail size={20} />
                            </InputLeftElement>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                variant={"flushed"}
                                borderBottom={"2px solid #b4b4b4"}
                                required
                            ></Input>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement ml={-1}>
                                <IoLockClosed size={20} />
                            </InputLeftElement>
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                variant={"flushed"}
                                borderBottom={"2px solid #b4b4b4"}
                                ref={inputPassword}
                                required
                            ></Input>
                            <InputRightElement
                                onClick={toggleShowPassword}
                                cursor={"pointer"}
                            >
                                {isPasswordVisible ? (
                                    <IoMdEyeOff />
                                ) : (
                                    <IoMdEye />
                                )}
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup borderBottom={"2px solid #b4b4b4"}>
                            <InputLeftElement ml={-1}>
                                <IoPeople size={20} />
                            </InputLeftElement>
                            <Select
                                placeholder="Login as"
                                variant={"flushed"}
                                required
                                color={"gray.500"}
                                pl={8}
                            >
                                <option value="student">Student</option>
                                <option value="company">Company</option>
                                <option value="faculty">Faculty</option>
                            </Select>
                        </InputGroup>
                        <Button colorScheme="primary" mt={2}>
                            Login
                        </Button>
                    </Stack>
                    <HStack justify={"center"} w={"full"}>
                        <Text as={"p"} pl={1}>
                            Don't have an account ? &nbsp;
                            <Link to={"/signup"} style={{ color: "#3182CE" }}>
                                Signup here
                            </Link>
                        </Text>
                    </HStack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Login;

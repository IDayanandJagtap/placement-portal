import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLockClosed, IoMail, IoPeople, IoPlayForward } from "react-icons/io5";
import loginImg from "../../assets/authBackground.jpg";

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
            // zIndex={1}
            background={`url(${loginImg})`}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            w={"100vw"}
            h={["100vh"]}
            position={"fixed"}
            overflow={"auto"}
            top={0}
            right={0}
            p={4}
            justifyContent={"center"}
        >
            <Stack
                w={"full"}
                h={"full"}
                flexDirection={["column", "column", "row"]}
            >
                <Stack
                    w={"full"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={6}
                >
                    <Stack
                        w={["100%", "100%", "100%", "60%"]}
                        h={"fit-content"}
                        background={"rgba(125, 194, 230, 0.5)"}
                        borderRadius={"md"}
                        p={8}
                        fontSize={["24px", "28px", "32px", "40px"]}
                        color={"white"}
                    >
                        <Text
                            fontWeight={"600"}
                            fontSize={["32px", "40px", "50px"]}
                        >
                            PLACED
                        </Text>
                        <HStack mt={2}>
                            <IoPlayForward />
                            <Text as={"span"}>Your gateway to</Text>
                        </HStack>
                        <Text>
                            <Text
                                as={"span"}
                                color={"black"}
                                fontWeight={"500"}
                            >
                                career
                            </Text>{" "}
                            opportunities.
                        </Text>
                        <Text fontSize={["16px", "18px", "20px"]} mt={8}>
                            Login to explore Job listings, connect with
                            Employers and take the next step towards your
                            professional journey!
                        </Text>
                    </Stack>
                    {/* <Image w={450} src={loginImg} /> */}
                </Stack>
                <Stack
                    w={"full"}
                    minHeight={"60vh"}
                    background={"white"}
                    p={6}
                    // gap={4}
                    borderRadius={"xl"}
                >
                    <Stack
                        w={["100%", "100%", "100%", "60%"]}
                        h={["80%", "80%", "80%", "60%"]}
                        // background={"gray.200"}
                        justifyContent={"space-between"}
                        m={"auto"}
                        p={4}
                    >
                        <Text
                            as={"h1"}
                            fontSize={["24", "26", "28", "30"]}
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
                                    fontSize={["14px", "16px"]}
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
                                    fontSize={["14px", "16px"]}
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
                                    fontSize={["14px", "16px"]}
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
                            <Text
                                as={"p"}
                                pl={1}
                                fontSize={["12px", "14px", "16px"]}
                            >
                                Don't have an account ? &nbsp;
                                <Link
                                    to={"/signup"}
                                    style={{ color: "#3182CE" }}
                                >
                                    Signup here
                                </Link>
                            </Text>
                        </HStack>
                    </Stack>
                </Stack>

                {/* Spacer in mobile */}
                <Stack
                    minH={"15vh"}
                    background={"transparent"}
                    display={["flex", "flex", "flex", "none"]}
                ></Stack>
            </Stack>
        </Stack>
    );
};

export default Login;

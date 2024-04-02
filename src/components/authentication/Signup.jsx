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
    VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoLockClosed, IoMail, IoPeople, IoPlayForward } from "react-icons/io5";
import loginImg from "../../assets/loginImg5.jpg";

const Signup = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputPassword = useRef(null);
    const navigate = useNavigate();
    const signupComponentRef = useRef(0); // ref to the main parent to change it's style

    const toggleShowPassword = (e) => {
        if (isPasswordVisible) {
            inputPassword.current.type = "password";
            setIsPasswordVisible(false);
        } else {
            inputPassword.current.type = "text";
            setIsPasswordVisible(true);
        }
    };

    const handleOnSignupClick = (e) => {
        signupComponentRef.current.style.top = "-100vh";
        setTimeout(() => navigate("/"), 300);
    };

    return (
        <Stack
            ref={signupComponentRef}
            background={`url(${loginImg})`}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            w={"100vw"}
            h={"100vh"}
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
                    minHeight={"65vh"}
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
                            Get started !
                        </Text>
                        <Stack gap={6}>
                            <InputGroup>
                                <InputLeftElement ml={-1}>
                                    <IoMail size={20} />
                                </InputLeftElement>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    variant={"flushed"}
                                    fontSize={["14px", "16px"]}
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
                                    placeholder="Password"
                                    variant={"flushed"}
                                    fontSize={["14px", "16px"]}
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
                            <InputGroup>
                                <InputLeftElement ml={-1}>
                                    <IoLockClosed size={20} />
                                </InputLeftElement>
                                <Input
                                    type="password"
                                    placeholder="Confirm password"
                                    variant={"flushed"}
                                    fontSize={["14px", "16px"]}
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
                                    placeholder="Signup as"
                                    variant={"flushed"}
                                    fontSize={["14px", "16px"]}
                                    required
                                    color={"gray.500"}
                                    pl={8}
                                >
                                    <option value="student">Student</option>
                                    <option value="company">Company</option>
                                </Select>
                            </InputGroup>
                            <Text fontSize={"12px"} pl={1} color={"red.500"}>
                                You'll be redirected to complete your profile.
                            </Text>
                            <Button
                                colorScheme="primary"
                                mt={2}
                                onClick={handleOnSignupClick}
                            >
                                Signup
                            </Button>
                        </Stack>
                        <VStack justify={"center"} w={"full"} py={[2, 2, 0]}>
                            <Text
                                as={"p"}
                                pl={1}
                                fontSize={["12px", "14px", "16px"]}
                            >
                                Already have an account ? &nbsp;
                                <Link
                                    to={"/login"}
                                    style={{ color: "#3182CE" }}
                                >
                                    Login here
                                </Link>
                            </Text>
                        </VStack>
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

export default Signup;

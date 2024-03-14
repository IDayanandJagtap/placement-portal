import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    HStack,
    Image,
    Text,
    VStack,
    Divider,
    ButtonGroup,
    Avatar,
} from "@chakra-ui/react";

import { FaPlus, FaUser, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Button data
// ------------------------ check how can i make this link dynamic so that I can redirect user to the url having their id in it --------------------------------------
const studentOptions = [
    { name: "View profile", link: "/student/", iconName: <FaUser /> },
    {
        name: "Edit profile",
        link: "/student/update/",
        iconName: <FaUserEdit />,
    },
    {
        name: "View applied jobs",
        link: "/student/appliedjobs/",
        iconName: <FaUser />,
    },
];

const companyOptions = [
    { name: "Jobs posted", link: "company/jobs/", iconName: <FaUser /> },
    { name: "View profile", link: "/company/", iconName: <FaUser /> },
    {
        name: "Edit profile",
        link: "/company/update/",
        iconName: <FaUserEdit />,
    },
];

const facultyOptions = [
    { name: "Dashboard", link: "faculty/dashboard/", iconName: <FaUser /> },
    { name: "View profile", link: "/company/", iconName: <FaUser /> },
    ,
];

const UserDrawer = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    //for development purpose only
    const userId = "1";
    //fetch user status: (faculty/student/company)        ... using props is better way to modularize this component ... but it'll make header unnecessarily complex
    const drawerUser = "faculty"; // useSelector or useContext

    let options;
    if (drawerUser === "company") {
        options = companyOptions;
    } else if (drawerUser === "student") {
        options = studentOptions;
    } else if (drawerUser === "faculty") {
        options = facultyOptions;
    }

    return (
        <>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        {drawerUser.charAt(0).toUpperCase() +
                            drawerUser.slice(1)}{" "}
                        login
                    </DrawerHeader>

                    <Divider my={2} />
                    <DrawerBody>
                        <HStack columnGap={5}>
                            <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                                size={"lg"}
                            />
                            <Text
                                as="h3"
                                fontWeight={"semibold"}
                                fontSize={"20px"}
                                color={"blackAlpha.800"}
                            >
                                Dayanand Jagtap
                            </Text>
                        </HStack>

                        <Divider my={6} />
                        <VStack my={4} alignItems={"stretch"} gap={2}>
                            {drawerUser === "company" && (
                                <>
                                    <Button
                                        size={"lg"}
                                        borderRadius={"22px"}
                                        leftIcon={<FaPlus />}
                                        background={"blue.700"}
                                        color={"white"}
                                        border={"1px solid #2C5282"}
                                        _hover={{
                                            background: "white",
                                            color: "#2C5282",
                                        }}
                                    >
                                        New Job
                                    </Button>
                                    <Divider my={6} />
                                </>
                            )}
                            {options.map((e) => {
                                return (
                                    <Button
                                        key={e.link}
                                        leftIcon={e.iconName}
                                        py={6}
                                        px={4}
                                        display={"flex"}
                                        justifyContent={"start"}
                                        columnGap={1}
                                        color={"blackAplha.700"}
                                        onClick={() => {
                                            navigate(e.link + userId);
                                            onClose();
                                        }}
                                    >
                                        {e.name}
                                    </Button>
                                );
                            })}
                        </VStack>
                        <Divider my={6} />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            variant="outline"
                            mx={"auto"}
                            colorScheme="blue"
                            onClick={onClose}
                        >
                            Logout
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default UserDrawer;

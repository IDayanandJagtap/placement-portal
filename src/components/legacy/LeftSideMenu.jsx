import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const menuLinks = [
    { name: "Company", link: "/company" },
    { name: "Student", link: "/students" },
    { name: "Jobs", link: "/jobs" },
    { name: "History", link: "/history" },
];

const LeftSideMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const navigate = useNavigate();

    return (
        <aside>
            <Button
                colorScheme="blue"
                borderRadius={"full"}
                p={0}
                ref={btnRef}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={20} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <VStack alignItems={"stretch"}>
                            {menuLinks.map((e) => {
                                return (
                                    <Button
                                        key={e.link}
                                        variant={"ghost"}
                                        colorScheme="blue"
                                        onClick={() => {
                                            navigate(e.link);
                                        }}
                                    >
                                        {e.name}
                                    </Button>
                                );
                            })}
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme="blue">Demo</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </aside>
    );
};

export default LeftSideMenu;

import { HStack, Stack, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import "../global.css";
import MainNav from "./MainNav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    const outletRef = useRef(0);

    return (
        <HStack
            h={"100dvh"}
            maxH={"100vh"}
            // background={"#2563EB"}
            background={"#312E81"}
            maxW={"100vw"}
            p={[2, 2, 2, 3, 4]}
            gap={0}
        >
            <Stack
                w={["10%", "10%", "15%", "15%", "12%"]}
                h={"full"}
                //  border={"1px solid red"}
            >
                <MainNav outletRef={outletRef} />
            </Stack>
            <Stack
                w={["90%", "92%", "85%", "85%", "88%"]}
                background={"#fff"}
                h={"full"}
                overflow={"hidden"}
                borderRadius={"xl"}
                ref={outletRef}
            >
                <Outlet />
            </Stack>
        </HStack>
    );
};

export default RootLayout;

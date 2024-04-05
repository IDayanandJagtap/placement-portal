import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const HistoryOutlet = () => {
    return (
        <Stack flexDirection={"row"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                <Text>Link to the pdfs</Text>
            </Stack>

            {/* Sidebar  -> show only in big screens*/}
            <Stack
                display={["none", "none", "none", "flex"]}
                w={"25%"}
                overflow={"scroll"}
                p={[2, 2, 2, 2, 4]}
                background={"#EEF2FF"}
            >
                <Notifications />
            </Stack>
        </Stack>
    );
};

export default HistoryOutlet;

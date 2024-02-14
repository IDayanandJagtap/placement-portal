import { Text } from "@chakra-ui/react";

const Tag = ({ name }) => {
    return (
        <Text
            as={"span"}
            px={2}
            py={1}
            mx={1}
            backgroundColor={"blue.100"}
            color={"blue.900"}
            cursor={"pointer"}
            border={"2px solid #3182ce"}
            borderRadius={8}
        >
            {name}
        </Text>
    );
};

export default Tag;

import { Text } from "@chakra-ui/react";

const Tag = ({ name }) => {
    return (
        <Text
            as={"span"}
            px={2}
            py={1}
            mx={1}
            backgroundColor={"blue.700"}
            color={"#fff"}
            // cursor={"pointer"}
            // border={"2px solid #a020f0"}
            borderRadius={8}
        >
            {name}
        </Text>
    );
};

export default Tag;

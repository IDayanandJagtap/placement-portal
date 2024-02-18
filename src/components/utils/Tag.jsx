import { HStack, Text } from "@chakra-ui/react";

const Tag = ({ name, showIcon, onClickHandler }) => {
    const handleOnTagClick = (e) => {
        if (onClickHandler) {
            onClickHandler(e);
        }
    };
    return (
        <HStack
            px={2}
            py={1}
            mx={1}
            data-tagname={name}
            // backgroundColor={"#03A9F4"} // light blue
            // backgroundColor={"cyan.800"}
            // backgroundColor={"#0369A1"}
            // backgroundColor={"blue.600"}
            backgroundColor={"blue.700"}
            color={"#fff"}
            width={"fit-content"}
            cursor={onClickHandler ? "pointer" : "normal"}
            borderRadius={8}
            onClick={handleOnTagClick}
        >
            <Text as={"span"}>{name}</Text>
            {showIcon == "delete" && (
                <Text as={"span"} fontWeight={"bold"} px={1}>
                    X
                </Text>
            )}
        </HStack>
    );
};

export default Tag;

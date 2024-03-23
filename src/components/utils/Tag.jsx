import { HStack, Text } from "@chakra-ui/react";

const Tag = ({ name, showIcon, onClickHandler }) => {
    const handleOnTagClick = (e) => {
        if (onClickHandler) {
            onClickHandler(e);
        }
    };
    return (
        <HStack
            px={[1.5, 2]}
            py={1}
            mx={[0, 1]}
            my={[0, 1]}
            data-tagname={name}
            backgroundColor={"#0369A1"}
            color={"#fff"}
            width={"fit-content"}
            cursor={onClickHandler ? "pointer" : "normal"}
            borderRadius={8}
            onClick={handleOnTagClick}
        >
            <Text
                as={"span"}
                data-tagname={name}
                fontSize={["10px", "10px", "12px", "12px", "14px", "16px"]}
            >
                {name}
            </Text>

            {showIcon && (
                <Text
                    as={"span"}
                    fontWeight={"bold"}
                    px={1}
                    fontSize={"18px"}
                    color={"whiteAlpha.600"}
                    data-tagname={name}
                >
                    {showIcon == "delete" && "-"}
                    {showIcon == "add" && "+"}
                </Text>
            )}
            {/* added tagname for all components because user can click on any component! */}
        </HStack>
    );
};

export default Tag;

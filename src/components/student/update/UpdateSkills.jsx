import { HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Tag from "../../utils/Tag";

const tags = [
    "C",
    "C++",
    "Java",
    "Python",
    "C#",
    "Go",
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "React",
    "MySql",
    "Postgres",
    "MongoDb",
    "NodeJs",
    "NextJs",
    "TypeScript",
    "Mern",
    "Mean",
    "Vue",
    "Angular",
    "Power Bi",
];

const UpdateSkills = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [allTags, setAllTags] = useState(tags);

    const handleOnRemoveTag = (e) => {
        // console.log(e.dataset.tagname);
    };

    const handleOnAddTag = (e) => {};

    return (
        <Stack h={"full"} p={4}>
            <Text as={"h2"} fontWeight={"semibold"} fontSize={"24px"} mb={3}>
                Skills
            </Text>

            {/* selected tags */}
            <HStack
                border={"2px solid #b4b4b4"}
                p={3}
                flexWrap={"wrap"}
                borderRadius={"md"}
            >
                <Tag
                    name={"JavaScript"}
                    showIcon={"delete"}
                    onClickHandler={handleOnRemoveTag}
                />
            </HStack>

            {/* All tags */}
            <HStack
                border={"2px solid #b4b4b4"}
                p={3}
                my={3}
                flexWrap={"wrap"}
                borderRadius={"md"}
            >
                {allTags.map((e) => {
                    return <Tag name={e} onClickHandler={handleOnAddTag} />;
                })}
            </HStack>
        </Stack>
    );
};

export default UpdateSkills;

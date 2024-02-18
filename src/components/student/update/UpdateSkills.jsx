import { HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tag from "../../utils/Tag";

const tags = [
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "Go",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Kotlin",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "MySql",
    "Postgres",
    "MongoDb",
    "React",
    "NodeJs",
    "NextJs",
    "Django",
    "Flask",
    "Mern",
    "Mean",
    "Vue",
    "Angular",
    "React Native",
    "Os",
    "CN",
    "Cloud computing",
    "Aws",
    "Google cloud",
    "Azure",
    "Power Bi",
    "pandas",
    "scikit",
    "Tensorflow",
    "Matplotlib",
];

const UpdateSkills = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [allTags, setAllTags] = useState(tags);

    const handleOnRemoveTag = (event) => {
        // Remove from selectedTags and then add into allTags;
        let removeTag = event.target.dataset.tagname;

        // remove
        let tags = selectedTags.filter((elem) => {
            if (removeTag != elem) return elem;
        });
        setSelectedTags(tags);

        // add
        setAllTags([...allTags, removeTag]);
    };

    const handleOnAddTag = (event) => {
        // Add into selectedTags and then remove from alltags;
        let addTag = event.target.dataset.tagname;

        // Add into selectedTags
        setSelectedTags([...selectedTags, addTag]);

        // remove from all tags
        let filteredAllTags = allTags.filter((elem) => {
            if (elem != addTag) return addTag;
        });
        setAllTags(filteredAllTags);
    };

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
                {selectedTags.length >= 1 ? (
                    selectedTags.map((elem, index) => {
                        return (
                            <Tag
                                key={index}
                                name={elem}
                                showIcon={"delete"}
                                onClickHandler={handleOnRemoveTag}
                            />
                        );
                    })
                ) : (
                    <Text color={"gray.500"}>No skill selected !</Text>
                )}
            </HStack>

            {/* All tags */}
            <HStack
                border={"2px solid #b4b4b4"}
                p={3}
                my={3}
                justifyContent={"start"}
                alignItems={"start"}
                flexWrap={"wrap"}
                borderRadius={"md"}
                height={"full"}
            >
                {allTags.map((e, index) => {
                    return (
                        <Tag
                            key={index}
                            name={e}
                            showIcon={"add"}
                            onClickHandler={handleOnAddTag}
                        />
                    );
                })}
            </HStack>
        </Stack>
    );
};

export default UpdateSkills;

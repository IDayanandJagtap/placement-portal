import { HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Tag } from "./";

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

const SelectSkills = ({ selectedTags, setSelectedTags }) => {
    // const [selectedTags, setSelectedTags] = useState([]);
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
        <Stack>
            {/* selected tags */}
            <HStack
                border={"2px solid #E2E8F0"}
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
                border={"2px solid #e2e8f0"}
                p={3}
                my={3}
                justifyContent={"start"}
                alignItems={"start"}
                flexWrap={"wrap"}
                borderRadius={"md"}
                height={"full"}
                overflow={"auto"}
                maxH={"50vh"}
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

export default SelectSkills;

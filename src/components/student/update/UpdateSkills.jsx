import React, { useEffect, useState } from "react";
import { SelectSkills } from "../../utils";
import { Stack, Text } from "@chakra-ui/react";

const UpdateSkills = ({ formFields, setFormFields }) => {
    const [selectedTags, setSelectedTags] = useState(formFields.skills);

    useEffect(() => {
        setFormFields({
            ...formFields,
            skills: [...selectedTags],
        });
        // console.log(formFields);
    }, [selectedTags]);

    return (
        <Stack
            w={"full"}
            py={[4]}
            px={[4, 6]}
            my={2}
            boxShadow={"md"}
            borderRadius={"lg"}
        >
            <Text
                as={"h2"}
                fontWeight={"semibold"}
                fontSize={["18px", "20px", "22px", "24px"]}
                mb={3}
            >
                Skills
            </Text>
            <SelectSkills
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            />
        </Stack>
    );
};

export default UpdateSkills;

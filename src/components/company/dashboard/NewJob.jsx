import {
    Button,
    HStack,
    Heading,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SelectSkills } from "../../utils";

const NewJob = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    return (
        <Stack px={[4, 6]} py={4} mb={[8, 8, 8, 4]} minH={"90vh"}>
            <Heading my={6} fontSize={["22px", "24px"]}>
                Post new Job
            </Heading>
            <Stack gap={6}>
                <Stack>
                    <Text as={"label"}>Job title</Text>
                    <Input type="text" placeholder="Enter job title"></Input>
                </Stack>
                <Stack>
                    <Text as={"label"}>Job Type</Text>
                    <Select>
                        <option value={"full-time"}>Full time</option>
                        <option value={"internship"}>Internship</option>
                        <option value={"part-time"}>Part time</option>
                    </Select>
                </Stack>
                <Stack>
                    <Text as={"label"}>Job Description</Text>
                    <Textarea
                        placeholder="Enter job description"
                        rows={7}
                    ></Textarea>
                </Stack>
                <Stack>
                    <Text as={"label"}>Expected skills</Text>
                    <SelectSkills
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />
                </Stack>

                {/* buttons */}
                <HStack mt={6} justifyContent={"flex-end"}>
                    <Button>Cancel</Button>
                    <Button colorScheme="primary">Post</Button>
                </HStack>

                {/* space */}
                <Stack minH={"10vh"}></Stack>
            </Stack>
        </Stack>
    );
};

export default NewJob;

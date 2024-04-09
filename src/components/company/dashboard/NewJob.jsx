import {
    Button,
    HStack,
    Heading,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { SelectSkills } from "../../utils";
import { CompanyContext } from "../../../contextApi/CompanyContext";
import { useNavigate } from "react-router-dom";

const NewJob = ({ setCurrentSection }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [formFields, setFormFields] = useState({
        title: "",
        type: "",
        description: "",
        skills: [],
    });
    const [salary, setSalary] = useState({ min: "", max: "" });
    const { postJob } = useContext(CompanyContext);
    const toast = useToast();
    const navigate = useNavigate();

    const handleOnSalaryChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setSalary({ ...salary, [field]: value });
    };

    const handleOnInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setFormFields({ ...formFields, [field]: value });
    };

    const handleOnPostClick = async () => {
        const data = {
            ...formFields,
            salaryRange: salary,
            skills: selectedTags,
        };
        console.log(data);
        const result = await postJob(data);
        toast({
            title: result.title,
            status: result.status,
            duration: 3000,
            description: result.description,
        });

        if (result.status == "success") {
            setCurrentSection("jobs");
        }
    };

    return (
        <Stack px={[4, 6]} py={4} mb={[8, 8, 8, 4]} minH={"90vh"}>
            <Heading my={6} fontSize={["22px", "24px"]}>
                Post new Job
            </Heading>
            <Stack gap={6}>
                <Stack>
                    <Text as={"label"}>Job title</Text>
                    <Input
                        type="text"
                        placeholder="Enter job title"
                        name="title"
                        value={formFields.title}
                        onChange={handleOnInputChange}
                    ></Input>
                </Stack>
                <Stack>
                    <Text as={"label"}>Job Type</Text>
                    <Select name="type" onChange={handleOnInputChange}>
                        <option value={"Full time"}>Full time</option>
                        <option value={"Internship"}>Internship</option>
                        <option value={"Part time"}>Part time</option>
                    </Select>
                </Stack>
                <Stack>
                    <Text as={"label"}>Job Description</Text>
                    <Textarea
                        placeholder="Enter job description"
                        rows={7}
                        name="description"
                        value={formFields.description}
                        onChange={handleOnInputChange}
                    ></Textarea>
                </Stack>
                <Stack>
                    <Text as={"label"}>Expected skills</Text>
                    <SelectSkills
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />
                </Stack>
                <Stack>
                    <Text as={"p"} fontWeight={"500"}>
                        Salary range
                    </Text>
                    <Text as={"label"}>Minimum amount</Text>
                    <Input
                        type="number"
                        placeholder="300000"
                        value={salary[0]}
                        name="min"
                        onChange={handleOnSalaryChange}
                    ></Input>
                    <Text as={"label"}> Max amount</Text>
                    <Input
                        type="number"
                        placeholder="700000"
                        value={salary[1]}
                        name="max"
                        onChange={handleOnSalaryChange}
                    ></Input>
                </Stack>

                {/* buttons */}
                <HStack mt={6} justifyContent={"flex-end"}>
                    <Button>Cancel</Button>
                    <Button colorScheme="primary" onClick={handleOnPostClick}>
                        Post
                    </Button>
                </HStack>

                {/* space */}
                <Stack minH={"10vh"}></Stack>
            </Stack>
        </Stack>
    );
};

export default NewJob;

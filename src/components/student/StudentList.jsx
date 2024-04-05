import {
    Stack,
    HStack,
    InputGroup,
    Input,
    InputRightElement,
    Grid,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import StudentCard from "./StudentCard";

const StudentList = ({ studentData }) => {
    const [searchedStudents, setSearchedStudents] = useState(studentData);

    const handleOnSearchInputChange = (e) => {
        let searchable = e.target.value.toLowerCase();

        if (searchable.trim() != "") {
            let students = studentData.filter((element) => {
                // make comparison of lowercase values
                return element.name.toLowerCase().includes(searchable);
            });
            setSearchedStudents(students);
        } else {
            setSearchedStudents(studentData);
        }
    };
    return (
        <Stack p={[3, 4, 4, 4, 6]} rowGap={[4, 5, 5, 5, 6]} minH={"90vh"}>
            <HStack justifyContent={"center"}>
                <InputGroup w={["100%", "100%", "70%", "50%"]}>
                    <Input
                        type="text"
                        placeholder="Search student..."
                        variant={"outline"}
                        onChange={handleOnSearchInputChange}
                        border={"2px solid #3182CE"}
                    />
                    <InputRightElement w={"4rem"}>
                        <IoSearch size={"24"} cursor={"pointer"} />
                    </InputRightElement>
                </InputGroup>
            </HStack>
            <Grid
                w={"full"}
                gap={5}
                overflow={"scroll"}
                templateColumns={["1fr", "1fr", "1fr 1fr"]}
            >
                {searchedStudents.map((student) => {
                    return <StudentCard key={student.id} student={student} />;
                })}
            </Grid>

            {searchedStudents.length == 0 && (
                <Stack
                    w={"full"}
                    justifyContent={"center"}
                    align={"center"}
                    h={"full"}
                >
                    <Text>Searched student not found!</Text>
                </Stack>
            )}
        </Stack>
    );
};

export default StudentList;

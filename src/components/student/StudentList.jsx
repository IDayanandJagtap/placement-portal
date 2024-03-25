import {
    Stack,
    HStack,
    InputGroup,
    Input,
    InputRightElement,
    Grid,
} from "@chakra-ui/react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import StudentCard from "./StudentCard";

const StudentList = ({ studentData }) => {
    return (
        <Stack p={[3, 4, 4, 4, 6]} rowGap={[4, 5, 5, 5, 6]}>
            <HStack justifyContent={"center"}>
                <InputGroup w={["100%", "100%", "70%", "50%"]}>
                    <Input
                        type="text"
                        placeholder="Search student..."
                        variant={"outline"}
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
                // border={"1px solid red"}
                templateColumns={["1fr", "1fr", "1fr 1fr"]}
            >
                {studentData.map((student) => {
                    return <StudentCard key={student.id} student={student} />;
                })}
            </Grid>
        </Stack>
    );
};

export default StudentList;

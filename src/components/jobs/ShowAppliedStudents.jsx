import { Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { StudentCard } from "../student";

const ShowAppliedStudents = ({ students }) => {
    return (
        <Stack p={[3, 4, 4, 4, 6]}>
            <Text
                as={"h2"}
                fontWeight={"500"}
                fontSize={["18px", "18px", "22px", "26px"]}
                my={4}
            >
                Applicants :{" "}
            </Text>

            {/* message to show when no students have applied to job */}
            {((students instanceof Array && students.length == 0) ||
                !students) && <Text>No students have applied yet !</Text>}

            <Grid
                w={"full"}
                gap={5}
                overflow={"scroll"}
                templateColumns={["1fr", "1fr", "1fr 1fr"]}
            >
                {students instanceof Array &&
                    students.map((student, i) => {
                        return <StudentCard key={i} student={student} />;
                    })}
            </Grid>
        </Stack>
    );
};

export default ShowAppliedStudents;

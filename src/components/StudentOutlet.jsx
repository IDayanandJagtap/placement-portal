import { Stack, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { StudentList, StudentFilter } from "./student";
import { StudentContext } from "../contextApi/StudentContext";

const StudentOutlet = () => {
    const [filterBoxValues, setFilterBoxValues] = useState(
        Array(checkBoxes.length).fill(false)
    );
    const [studentData, setStudentData] = useState([]);
    const { getAllStudents } = useContext(StudentContext);
    const toast = useToast();

    const handleCheckboxClick = (e, index) => {
        let updatedChecked = [...filterBoxValues];
        updatedChecked[index] = e.target.checked;

        // console.log(updatedChecked);
        setFilterBoxValues(updatedChecked);
    };

    const handleOnClearFilter = () => {
        let emptyArray = Array(checkBoxes.length).fill(false);
        setFilterBoxValues(emptyArray);
        setStudentData(data);
    };

    const handleOnApplyFilter = () => {
        const checkedItems = filterBoxValues
            .map((elem, index) => {
                if (elem) return checkBoxes[index];
            })
            .filter((elem) => {
                if (elem) return elem;
            });

        if (checkedItems.length == 0) {
            setStudentData(data);
            return;
        }

        // Filter students based on skills
        const filteredStudents = data
            .map((student) => {
                let flag = 0;
                checkedItems.forEach((language) => {
                    if (student.skills.includes(language)) {
                        flag = 1;
                    }
                });

                if (flag) return student;
            })
            .filter((elem) => {
                if (elem) return elem;
            });

        setStudentData(filteredStudents);
    };

    // fetch
    const getStudentDetails = async () => {
        let result = await getAllStudents();
        if (result.error) {
            return toast({ title: result.error, status: "error" });
        }
        setStudentData(result.data);
    };

    useEffect(() => {
        getStudentDetails();
    }, []);

    return (
        <Stack flexDirection={"row"} overflow={"auto"} gap={0}>
            {/* Main component */}
            <Stack
                w={["100%", "100%", "100%", "75%"]}
                overflow={"scroll"}
                px={[0, 2, 2, 3, 4]}
            >
                <StudentList studentData={studentData} />
            </Stack>

            {/* Sidebar  -> show only in big screens*/}
            <Stack
                display={["none", "none", "none", "flex"]}
                w={"25%"}
                overflow={"scroll"}
                p={[2, 2, 2, 2, 4]}
                background={"#EEF2FF"}
            >
                <StudentFilter
                    checkBoxes={checkBoxes}
                    filterBoxValues={filterBoxValues}
                    handleCheckboxClick={handleCheckboxClick}
                    handleOnApplyFilter={handleOnApplyFilter}
                    handleOnClearFilter={handleOnClearFilter}
                />
            </Stack>
        </Stack>
    );
};

const checkBoxes = ["C", "C++", "Java", "JavaScript", "Python"];

// const data = [
//     {
//         id: 1,
//         name: "Dayanand Jagtap",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["JavaScript", "Java", "C"],
//     },
//     {
//         id: 2,
//         name: "Saba Shaikh",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["Python", "Java", "C"],
//     },
//     {
//         id: 3,
//         name: "Anurag Dalal",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["C", "Java"],
//     },
//     {
//         id: 4,
//         name: "Parshuram Kanade",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["Java", "C"],
//     },
//     {
//         id: 5,
//         name: "Hitesh Sethiya",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["Java", "C"],
//     },
//     {
//         id: 6,
//         name: "Rahul Girmaji",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["Java", "C", "Python"],
//     },
//     {
//         id: 7,
//         name: "Pratiksha Dhawale",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["Java"],
//     },
//     {
//         id: 8,
//         name: "Kiran Akhade",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["Python", "C", "Java"],
//     },
//     {
//         id: 9,
//         name: "Shireen Tekade",
//         degree: "Bsc computer science",
//         year: "3rd",
//         skills: ["Python", "Java", "C"],
//     },
// ];

export default StudentOutlet;

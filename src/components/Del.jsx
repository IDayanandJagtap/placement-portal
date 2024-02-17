import { Button, Checkbox, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const checkBoxes = ["c", "C++", "Java", "JavaScript", "Python"];

const Del = () => {
    const [checkedArray, setCheckedArray] = useState([0, 0, 0, 0, 0]);

    const handleOnCheckboxChange = (e, index) => {
        // const index = parseInt(e.target.dataset.index);

        let updatedChecked = [...checkedArray];
        updatedChecked[index] = e.target.checked;

        console.log(updatedChecked);
        setCheckedArray(updatedChecked);
    };

    const handleOnClear = () => {
        let length = checkBoxes.length;
        let emptyArray = [];

        for (let i = 0; i < length; i++) {
            emptyArray[i] = false;
        }

        setCheckedArray(emptyArray);
    };

    return (
        <VStack p={10} alignItems={"start"}>
            {checkBoxes.map((element, index) => {
                return (
                    <HStack>
                        <Checkbox
                            key={index}
                            type="checkbox"
                            isChecked={checkedArray[index]}
                            data-index={index}
                            onChange={(e) => {
                                handleOnCheckboxChange(e, index);
                            }}
                        >
                            {" "}
                            {element}
                        </Checkbox>
                        {/* <Text>{element}</Text> */}
                    </HStack>
                );
            })}
            <HStack>
                <Button onClick={handleOnClear}>Clear</Button>
                <Button>Apply</Button>
            </HStack>
        </VStack>
    );
};

export default Del;

// const handleOnApplyFilter = () => {
//     let checkedLanguages = filterBoxValues
//         .map((e, index) => {
//             if (e == 1) {
//                 return checkBoxes[index];
//             }
//         })
//         .filter((e) => {
//             if (e) return e;
//         });

//     // If the of checkedLanguages array is 0 then, no filter is applied so show all students;
//     if (checkedLanguages.length == 0) {
//         setStudentData(data);
//         return;
//     }

//     // api call, to fetch filtered students, param => checkedLanguages
//     // console.log(checkedLanguages);

//     const filteredStudents = data
//         .map((student) => {
//             let flag = 0;
//             checkedLanguages.forEach((language) => {
//                 if (student.skills.includes(language)) {
//                     flag = 1;
//                 }
//             });

//             if (flag) return student;
//         })
//         .filter((e) => {
//             if (e) return e;
//         });

//     // set state
//     setStudentData(filteredStudents);
// };

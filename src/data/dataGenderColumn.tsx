import DataStudent from "./dataStudent"

const maleCount = DataStudent.filter(data => data.gender === "Male").length;
const femalecount = DataStudent.filter(data => data.gender === "Female").length;

const dataGenderColumn = [
    {
        gender: 'Male',
        count: maleCount,
    },
    {
        gender: 'Female',
        count: femalecount,
    }
]

export default dataGenderColumn
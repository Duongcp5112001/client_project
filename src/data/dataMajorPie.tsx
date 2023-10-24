import DataStudent from "./dataStudent"

const majorITCount = DataStudent.filter(data => data.major === "IT").length;
const majorBusinessCount = DataStudent.filter(data => data.major === "Business").length;
const majorDesignCount = DataStudent.filter(data => data.major === "Graphic Design").length;

const percentIt = (majorITCount/10)*100;
const percentBusiness = (majorBusinessCount/10)*100;
const percentDesign = (majorDesignCount/10)*100;

const dataMajorPie = [
    {
        major: 'IT',
        count: percentIt,
    },
    {
        major: 'Business',
        count: percentBusiness,
    },
    {
        major: 'Graphic Design',
        count: percentDesign,
    }
]

export default dataMajorPie
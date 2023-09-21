import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { id: 1, student: "Student 1", math_marks: 85 },
        { id: 2, student: "Student 2", math_marks: 78 },
        { id: 3, student: "Student 3", math_marks: 92 },
        { id: 4, student: "Student 4", math_marks: 88 },
        { id: 5, student: "Student 5", math_marks: 75 },
        { id: 6, student: "Student 6", math_marks: 95 },
        { id: 7, student: "Student 7", math_marks: 80 },
        { id: 8, student: "Student 8", math_marks: 89 },
        { id: 9, student: "Student 9", math_marks: 93 },
        { id: 10, student: "Student 10",math_marks: 87 }

    ];
    return (
        <div className='mt-10'>
            <LC width={800} height={400} data={mathMarksData}>
                <XAxis dataKey="id"></XAxis>
                <YAxis dataKey="math_marks"></YAxis>
            <Line type="monotone" dataKey="math_marks" stroke="#8884d8" />

            </LC>
        </div>
    );
};

export default LineChart;
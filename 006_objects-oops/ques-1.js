import "./styles.css";

export default function App() {
    const studentDetails = [
        {
            roll: "1",
            name: "Rohan Singh",
            maths: 86,
            science: 90,
            english: 75,
            computer: 85
        },
        {
            roll: "2",
            name: "Ritvik Patel",
            maths: 27,
            science: 30,
            english: 35,
            computer: 30
        },
        {
            roll: "3",
            name: "Neha Maurya",
            maths: 75,
            science: 69,
            english: 40,
            computer: 75
        },
        {
            roll: "4",
            name: "Mohit Verma",
            maths: 21,
            science: 31,
            english: 45,
            computer: 40
        },
        {
            roll: "5",
            name: "Karan Trivedi",
            maths: 70,
            science: 80,
            english: 35,
            computer: 60
        }
    ];
    studentDetails.map(
        (student) =>
        (student.totalmarks =
            student.english + student.maths + student.science + student.computer)
    );
    const Part1 = () => {
        return (
            <ul>
                {studentDetails.map((student) => (
                    <li key={student.roll}>
                        {student.name} total marks: {student.totalmarks}{" "}
                        {student.totalmarks >= 400 * 0.75
                            ? "A"
                            : student.totalmarks >= 400 * 0.6
                                ? "B"
                                : student.totalmarks >= 400 * 0.35
                                    ? "C"
                                    : "D"}
                    </li>
                ))}
            </ul>
        );
    };
    const Part2 = () => {
        let arr = [...studentDetails];
        arr.sort((a, b) => a.totalmarks - b.totalmarks);

        return (
            <div>
                Highest marks:
                {arr[arr.length - 1].totalmarks} Name: {arr[arr.length - 1].name}
            </div>
        );
    };
    const Part3 = () => {
        let arr = [...studentDetails];
        arr.sort((a, b) => a.totalmarks - b.totalmarks);

        return (
            <div>
                Lowest marks:
                {arr[0].totalmarks} Name: {arr[0].name}
            </div>
        );
    };
    const Part4 = () => {
        let totalcomp = 0;
        studentDetails.map((student) => (totalcomp += student.computer));
        return (
            <div>
                avg of class in computer:
                {totalcomp / 5}
            </div>
        );
    };
    const Part6 = () => {
        let count = 0;
        studentDetails.map((student) =>
            student.totalmarks >= 0.35 * 400 ? count++ : ""
        );
        return (
            <div>
                number of student passed:
                {count}
            </div>
        );
    };

    return (
        <div className="App">
            <ul>
                Given an array of objects of student's marks:{" "}
                <li>Print the name and total marks of each student.</li>
                <li> Print the name of student whose total marks is highest. </li>
                <li>Print the name of student whose total marks is lowest. </li>
                <li>Print the average marks of the class in computer subject. </li>
                <li>
                    Print the grades of all students: Grade A if total marks is higher
                    than or equal to 75%, Grade B if higher than or equal to 60%, Grade C
                    if higher than or equal to 35%, Grade D if lower than 35%.
                </li>{" "}
                <li>
                    Print the total number of students passed and their names. Pass when
                    total marks is greater than 35%.
                </li>
            </ul>
            <ol>
                <li>
                    Part 1&5 : <Part1 />
                </li>
                <li>
                    Part 2 : <Part2 />
                </li>
                <li>
                    Part 2 : <Part3 />
                </li>
                <li>
                    Part 4 : <Part4 />
                </li>
                <li></li>
                <li>
                    Part 6 : <Part6 />
                </li>
            </ol>
        </div>
    );
}
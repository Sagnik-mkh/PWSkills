//Add a student
function addStudent(firstName, lastName, age, grade, student) {
    let newStudent = {
        id: student[student.length - 1].id + 1,
        firstName: firstName,
        lastName: lastName,
        age: age,
        grade: grade
    }
    student.push(newStudent);
}

//Update student information
function updateStudent(id, key, value, students) {
    let idx = students.findIndex((student) => {
        return student.id == id;
    })

    students[idx][key] = value;
}

//delete a student
function deleteStudent(id, student) {
    let idx = student.findIndex((element) => {
        return element.id == id;
    })

    student.splice(idx, 1);
}

//list all students
function listAllStudents(students) {
    let counter = 1;
    students.forEach((student) => {
        console.log(`Student ${counter} : ${student.firstName} ${student.lastName}`);
        counter++;
    })
}

//find students by grade
function findStudentByGrade(students, grade) {
    let counter = 1;
    students.forEach((student) => {
        if (student.grade == grade) {
            console.log(`Grade : ${student.grade} -> Student ${counter} : ${student.firstName} ${student.lastName}`);
            counter++;
        }
    })
}

//average age
function averageAge(students) {
    let sum = 0;
    students.forEach((student) => {
        sum += student.age;
    })
    return sum / students.length;
}

const students = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 20,
        grade: "A"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        grade: "B"
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Johnson",
        age: 19,
        grade: "A"
    }
];

addStudent("New", "Student", 18, "D", students);
console.log(students);

updateStudent(4, "grade", "E", students);
console.log(students);

deleteStudent(4, students);
console.log(students);

listAllStudents(students);

let avgAge = averageAge(students);
console.log(`Avg age : ${avgAge}`);
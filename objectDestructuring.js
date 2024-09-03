const student={
    name:"Sammy",
    age:"16",
    gender:"Male"
}

function printStudent({name, age, gender}, course){
    console.log(`The student name is ${name}, their age is ${age}, and is a ${gender} and their course is ${course}`)
}

printStudent(student, "Computing")
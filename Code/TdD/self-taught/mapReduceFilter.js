// Map example
const numbers = [1, 2, 3, 4]
const doubled = numbers.map(item => item*2)
console.log(doubled);

// Filter examples
const evens = numbers.filter(item => item % 2 === 0)
console.log(evens);

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 },
]

const studentGrades = students.filter(student => student.grade >= 90)
console.log(studentGrades);

// Reduce examples

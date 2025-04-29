class Class {
  constructor(classroom) {
    this.classroom = classroom;
  }

  getTeacher() {
    const { _, classList } = this.classroom;
    const [teacher] = classList;
    return `The teacher is ${teacher}`;
  }

  getTA() {
    const { hasTeachingAssistant, classList } = this.classroom;
    if (!hasTeachingAssistant) {
      return "No Teaching Assistant";
    } else {
      const [_, TA] = classList;
      return `The teaching assistant is ${TA}`;
    }
  }

  getStudents() {
    const { hasTeachingAssistant, classList } = this.classroom;

    if (hasTeachingAssistant) {
      const [_, __, ...students] = classList;
      return students;
    } else {
      const [_, ...students] = classList;
      return students;
    }
  }
}

const computerClassList = {
  hasTeachingAssistant: false,
  classList: ["Teacher Bob", "Joe", "Student 1", "Student 2", "Student 3"],
};

const myComputerClass = new Class(computerClassList);
console.log(myComputerClass);
console.log(myComputerClass.getTeacher());
console.log(myComputerClass.getTA());
console.log(myComputerClass.getStudents());

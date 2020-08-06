class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "ULab";
    }
}

const student1 = new Student(12, "Shovo");
const student2 = new Student(13, "Sumi");
console.log(student1, student2);
class Student {
    fullname: string;
    constructor (public firstname: string, public midname : string, public lastname: string) {
        this.fullname = firstname + " " + midname + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
    fullname: string;
}

function greet(person: Person) {
    return "Hello " + person.fullname;
}

var newStudent = new Student("Dibya", "Ranjan", "Mallick");

document.body.textContent = greet(newStudent);
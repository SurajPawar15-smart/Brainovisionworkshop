class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Employee ID :" + this.id);
        console.log("Employee Name :" + this.name);
        console.log("Employee Age :" + this.age);
    }
}
var obj = new Employee(1, "Suraj Pawar", 98);
obj.display();
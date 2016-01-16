'use strict'

//OO
console.log("OO approach")

let Employee = function(salary) {
    this.salary = salary;
}

Employee.prototype.pay = function(){
 return "Employee pay: " + (this.salary / 12);
};

let Doctor = function(salary) {
    this.salary = salary;
}

Doctor.prototype = new Employee();

Doctor.prototype.pay = function(){
 return "Doctor pay:   " + (this.salary / 12) * 0.8;
};

var doctor = new Doctor(120000);
var nurse = new Employee(24000);

let employees = [doctor, nurse]

function payRun () {
	for (let i in employees) {
	  console.log(employees[i].pay());
	}
}

payRun();



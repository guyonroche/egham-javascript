'use strict'

//FP
console.log("FP approach")

let typeToPay = {
	doctor: salary => "Doctor pay:   " + (salary / 12) * 0.8,
	employee: salary => "Employee pay: " + (salary / 12)
}

var doctor = {
	type: 'doctor',
	salary: 120000
};
var nurse = {
	type: 'employee',
	salary: 24000
};

let employeesFp = [doctor, nurse]

function payRun(employeesFp) {
   return employeesFp.map(employee => typeToPay[employee.type](employee.salary))
}

console.log(payRun(employeesFp).join('\n'))

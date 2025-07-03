function salaryIncrement(salary) {
    return salary+ salary * 0.1;
}
//print(salaryIncrement(100));  
db.emp.find().forEach(function (doc) {
    let finalSalary = salaryIncrement(doc.sal, 0.18);
    print(doc.ename + ": " + finalSalary);
});
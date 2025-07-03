//Sum of Salaries by Department
db.emp.aggregate([
    { $group: { _id: "deptno", totalSalary: { $sum: "$sal" } } }
])
//Average Salary by Department
db.emp.aggregate([
    { $group: { _id: "$deptno", avgSalary: { $avg: "$sal" } } }
])

//Minimum and Maximum Salary by Department
db.emp.aggregate([
    {
        $group: {
            _id: "$deptno",
            minSalary: { $min: "$sal" },
            maxSalary: { $max: "$sal" }
        }
    }
])
//Count Employees in Each Department

db.emp.aggregate([
    { $group: { _id: "$deptno", totalEmployees: { $sum: 1 } } }
])
//Give Employee Names by Department
db.emp.aggregate([
    { $group: { _id: "$deptno", employees: { $push: "$ename" } } }
])
//Count All Employees (No Grouping)
db.emp.aggregate([
    { $count: "totalEmployees" }
])
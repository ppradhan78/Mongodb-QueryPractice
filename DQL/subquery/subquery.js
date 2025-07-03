// Step 1: Get deptno values from dept
var deptnos = db.dept.find({ loc: "DALLAS" }).map(d => d.deptno);
print(deptnos)

// Step 2: Use those in emp query
db.emp.find({ deptno: { $in: deptnos } });
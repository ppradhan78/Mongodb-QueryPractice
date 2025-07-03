db.createView(
    "high_salary_emps",    // view name
    "emp",                 // source collection
    [
        { $match: { sal: { $gt: 5000 } } }
    ]
);
db.high_salary_emps.find();
db.createView(
    "emp_with_dept",
    "emp",
    [
        {
            $lookup: {
                from: "dept",
                localField: "deptno",
                foreignField: "deptno",
                as: "dept"
            }
        },
        { $unwind: "$dept" },
        {
            $project: {
                ename: 1,
                sal: 1,
                deptno: 1,
                dname: "$dept.dname",
                loc: "$dept.loc"
            }
        }
    ]
);

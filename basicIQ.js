//I.	Display the dept no 20 & 30 Information
db.emp.find({"deptno":{$in: [20,30] } },{"sal":0,"comm ":0, "empno" : 0,"mgr" :0})
//II.	Display the employee details working in dept 10 & designation is manager
db.emp.find( { "deptno":{$eq: 10 } ,$and:[{"job" : "MANAGER"}] },{"sal":0,"comm ":0, "empno" : 0,"mgr" :0})
//III.	Display the employee name  contains E
db.Dept.find({"dname": /E/})
db.Dept.find({"dname":{'$regex':'RES'}})
//IV.	Nth highest salary 
db.emp.find( {}).sort({"Sal":-1}).limit(1)
db.emp.find( {}).sort({"Sal":-1}).skip(1).limit(1)
//V.	Sum of all salary
db.emp.aggregate( [{$group:{_id:null,sal_sum:{$sum:"$sal"}}}])
//VI.	Display the employee details who has  commission  
db.emp.find({ "comm ": { $ne: null } })

// Find employees whose name starts with 'A'
db.emp.find({ ename: { $regex: "^A", $options: "i" } })
//Find employees with job "CLERK" or "MANAGER"
db.emp.find({ job: { $in: ["CLERK", "MANAGER"] } })
// List employee name, department name, and location
db.emp.aggregate([
    {
        $lookup: {
            from: "dept",
            localField: "deptno",
            foreignField: "deptno",
            as: "deptInfo"
        }
    },
    { $unwind: "$deptInfo" },
    {
        $project: {
            ename: 1,
            dname: "$deptInfo.dname",
            location: "$deptInfo.loc"
        }
    }
])
//Highest salary in each department
db.emp.aggregate([
    { $group: { _id: "$deptno", maxSal: { $max: "$sal" } } }
])
//Employees who joined after Jan 1, 2021
db.emp.find({ hiredate: { $gt: ISODate("2021-01-01") } })
//Find departments with more than 2 employees
db.emp.aggregate([
    { $group: { _id: "$deptno", count: { $sum: 1 } } },
    { $match: { count: { $gt: 2 } } }
])
// List all managers (empno is referenced in mgr field)
db.emp.find({ empno: { $in: db.emp.distinct("mgr") } })
//Find employee with second highest salary
db.emp.aggregate([
    { $sort: { sal: -1 } },
    { $skip: 1 },
    { $limit: 1 }
])


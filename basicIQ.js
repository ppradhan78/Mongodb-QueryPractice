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
db.emp.find( { "comm ":{$ne: null} })

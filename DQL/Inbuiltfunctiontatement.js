db.emp.aggregate([
    {
        $project: {
            item: 1,
            totalSal: { $add: ["$sal", "$comm"] }  
        }
    }
])


db.emp.aggregate([
    {
        $project: {
            item: 1,
            totalSal:
            {
                $add: [
                    { $ifNull: ["$sal", 0] },
                    { $ifNull: ["$comm", 0] }
                ]
            }
        }
    }
])


db.emp.aggregate([
    {
        $project: {
            item: 1,
            totalSal:
            {
                $add: [
                    "$sal",
                    { $ifNull: ["$comm", 0] }
                ]
            }
        }
    }
])
/*
$subtract
$multiply
$divide
$mod	
*/

db.emp.aggregate([
    {
        $project: {
            item: 1,
            enameJob:
            {
                $concat: [
                    "$ename", ' work as ', "$job"
                ]
            }
        }
    }
])

db.emp.aggregate([
    {
        $project: {
            item: 1,
            enameJob:
            {
                $concat: [
                    "$ename", ' work as ', { $toUpper: "$job" }
                ]
            }
        }
    }
])


db.emp.aggregate([
    {
        $project: {
            item: 1,
            enameJob:
            {
                $concat: [
                    "$ename", ' work as ', "$job", ' for department  ', {$toString: "$deptno" } 
                ]
            }
        }
    }
])

db.emp.aggregate([
    {
        $project: {
            item: 1,
            joinYear:
            {
                $year:{ $toDate: "$hiredate" } 

            }
        }
    }
])

db.emp.aggregate([
    {
        $project: {
            item: 1,
            joinMonth:
            {
                $month: { $toDate: "$hiredate" }

            }
        }
    }
])

db.emp.aggregate([
    {
        $project: {
            item: 1,
            dayOfMonth:
            {
                $dayOfMonth: { $toDate: "$hiredate" }

            }
        }
    }
])
//{ $cond: { if: { $gt: ["$sal", 5000] }, then: "High Paid", else: "Low Paid" } }
db.emp.aggregate([
    {
        $project: {
            item: 1,
            SalaryStatus:
            {
                $cond: { if: { $gt: ["$sal", 1700] }, then: "High Paid", else: "Low Paid" } 
            }
        }
    }
])
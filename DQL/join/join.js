db.emp.aggregate([
    {
        $lookup: {
            from: "dept",         // foreign collection
            localField: "deptno", // field in emp
            foreignField: "deptno", // field in dept
            as: "deptInfo"        // output array field
        }
    }
])

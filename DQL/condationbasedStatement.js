db.users.find({ deptNo: { $lte: 30 } })
db.users.find({ deptNo: { $gte: 30 } })
db.users.find({ deptNo: { $eq: 30 } })
db.users.find({ deptNo: { $lt: 30 } })
db.users.find({ deptNo: { $gt: 30 } })
db.users.find({ deptNo: { $ne: 30 } })
db.emp.find({ "deptNo": { $ne: 20 } }, { "cellNum": 112395326234, "gender": "F" })

db.users.find({
    $and: [
        { deptNo: 10 },
        { gender: "M" }
    ]
})

db.users.find({
    $or: [
        { deptNo: 10 },
        { roleId: 4 }
    ]
})

db.users.find({
    deptNo: 20,
    $or: [
        { roleId: 4 },
        { roleId: 1 }
    ]
})
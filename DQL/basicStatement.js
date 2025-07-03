//db.collection - name.find({ key: value })
db.users.find()
db.users.find({ deptNo: 10 })

db.users.find().pretty()
//db.users.find().pretty({ id:2})
//db.users.find({}, {firstName: "boob", gender: "M", deptNo: 20 })
db.emp.find({ job: { $in: ["CLERK", "MANAGER"] } })


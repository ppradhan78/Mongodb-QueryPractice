db.users.find().count()
db.users.find({ deptNo: 10 }).count()
db.users.find({ deptNo: { $eq: 10 } }).count()
db.users.find({ deptNo: { $lte: 10 } }).count()
db.users.find({ deptNo: { $lt: 10 } }).count()
db.users.countDocuments()
db.users.distinct("deptNo").length
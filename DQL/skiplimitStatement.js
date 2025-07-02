db.users.find().skip(1)
db.users.find().limit(1) 
 
db.users.find({ deptNo: { $ne: 30 } }).skip(2)
db.users.find({ deptNo: { $ne: 30 } }).skip(2).limit(1)

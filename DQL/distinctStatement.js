db.users.distinct('deptNo')
db.users.distinct('gender')
db.users.distinct('createdDate')
db.users.distinct("deptNo", { roleId:1 })

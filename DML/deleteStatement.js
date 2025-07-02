//db.collection.deleteOne(<filter>)

db.emp.deleteOne({ name: "Alice" })

db.emp.deleteMany({ deptno: { $lt: 100 } })
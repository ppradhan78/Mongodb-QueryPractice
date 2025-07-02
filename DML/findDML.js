//db.collection.findOneAndDelete(filter)

db.emp.findOneAndDelete({ name: "Alice1" })

/*
db.collection.findOneAndReplace(
  <filter>,
  <replacementDocument>,
  <options> // optional
)
*/

db.emp.findOneAndReplace(
    { name: "Alice" },
    { name: "Alice Khan", age: 31, email: "alice31@example.com" }
)

/*
db.collection.findOneAndUpdate(
  <filter>,
  <update>,
  <options> // optional
)
*/

db.emp.findOneAndUpdate(
    { name: "Alice Khan" },
    { $set: { email: "alice.khan@wellsfargo.com" } }
)




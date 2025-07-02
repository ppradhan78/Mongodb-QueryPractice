/*
db.collection.updateOne(
  <filter>,
  <update>,
  { upsert: <boolean> } // optional
)

*/

db.emp.updateOne(
    { name: "Alice" },
    { $set: { age: 21 } }
)

/*
db.collection.updateMany(
  <filter>,
  <update>,
  { upsert: <boolean> } // optional
)
*/

db.emp.updateMany(
    { age: { $gte: 30 } },
    { $set: { email: "admin@example.com" } }
)
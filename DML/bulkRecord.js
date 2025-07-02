use test_practics

db.createCollection("test")

for (let i = 1; i <= 100000; i++) {
    db.test.insertOne({ id: i, userId: "user " + i, createdDate: new Date(), firstName: "firstName " + i, lastName: "lastName " + i, email: "firstName" + i + ".lastName" + i + "@gmail.com" });
}

let count = db.users.countDocuments();
print("Total documents inserted: " + count);

if (count > 0) {
    db.test.find().forEach(doc => printjson(doc));
}
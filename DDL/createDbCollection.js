//use < DB_Name >
use mongodb_practics
//Create collection
db.createCollection("emp")
db.createCollection("dept")
db.createCollection("employee")

//Create collection in loop
const collections = ['emp', 'dept', 'employee']
collections.forEach(function (collectionName) {
    print("Create collection: " + collectionName);
    db.createCollection(collectionName)
});


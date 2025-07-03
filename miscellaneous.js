//clear 
cls

function addTax(price) {
    return price * 1.18;
}
addTax(100)

var i = 0;
while (i < 5) {
    db.nums.insertOne({ num: i });
    i++;
}
const changeStream = db.emp.watch();

changeStream.on("change", (next) => {
    printjson(next); // Acts like a trigger: you can run code when change happens
});
exports = function (changeEvent) {
    const fullDoc = changeEvent.fullDocument;
    const empName = fullDoc.ename;

    // send email / log / call API
    console.log(`New employee added: ${empName}`);
};


// Step 1: Create and insert temp data
db.temp_employees.insertMany([
    { name: "Alice", dept: "HR" },
    { name: "Bob", dept: "IT" }
]);

// Step 2: Query it like a regular collection
db.temp_employees.find();

// Step 3: Drop it when done
db.temp_employees.drop();

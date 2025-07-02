use mongodb_practics
//db.<collection>>.createIndex({ <columnName>: 1 })
db.test.createIndex({ email: 1 })

db.test.dropIndex({ email: 1 })
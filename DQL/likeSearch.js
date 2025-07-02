db.users.find({ "firstName": /p/ })
db.users.find({ "firstName": { '$regex': 'pr' } })

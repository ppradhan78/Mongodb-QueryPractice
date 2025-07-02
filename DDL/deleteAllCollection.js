// Get all collection names
use Test;
const collections = db.getCollectionNames();
// Loop through and drop each collection
collections.forEach(function (collectionName) {
    print("Dropping collection: " + collectionName);
    db[collectionName].drop();
});

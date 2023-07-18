migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn7hya2wbt5xnyx")

  collection.name = "sss"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn7hya2wbt5xnyx")

  collection.name = "users"

  return dao.saveCollection(collection)
})

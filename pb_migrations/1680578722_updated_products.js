migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6yrddjbw772jtv")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6yrddjbw772jtv")

  collection.listRule = null

  return dao.saveCollection(collection)
})

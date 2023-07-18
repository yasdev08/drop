migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("soksjcg56jkh0zs")

  collection.viewRule = "@request.data.pending = \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("soksjcg56jkh0zs")

  collection.viewRule = null

  return dao.saveCollection(collection)
})

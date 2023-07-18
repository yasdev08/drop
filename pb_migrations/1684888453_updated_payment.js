migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("soksjcg56jkh0zs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jbt9ddml",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q5g212h7q1ksdba",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("soksjcg56jkh0zs")

  // remove
  collection.schema.removeField("jbt9ddml")

  return dao.saveCollection(collection)
})

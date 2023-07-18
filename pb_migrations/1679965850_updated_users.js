migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn7hya2wbt5xnyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntraeysl",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn7hya2wbt5xnyx")

  // remove
  collection.schema.removeField("ntraeysl")

  return dao.saveCollection(collection)
})

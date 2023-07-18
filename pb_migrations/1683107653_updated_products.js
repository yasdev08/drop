migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6yrddjbw772jtv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l5dabhmh",
    "name": "category",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6yrddjbw772jtv")

  // remove
  collection.schema.removeField("l5dabhmh")

  return dao.saveCollection(collection)
})

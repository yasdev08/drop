migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6yrddjbw772jtv")

  // remove
  collection.schema.removeField("f8mxwqtx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "goduldq5",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h6yrddjbw772jtv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8mxwqtx",
    "name": "image",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("goduldq5")

  return dao.saveCollection(collection)
})

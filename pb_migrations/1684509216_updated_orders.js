migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dzha5e0xqf525jp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cp2dcrog",
    "name": "product",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "h6yrddjbw772jtv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dzha5e0xqf525jp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cp2dcrog",
    "name": "product",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "h6yrddjbw772jtv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})

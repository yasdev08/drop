migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dzha5e0xqf525jp")

  // remove
  collection.schema.removeField("sxwsdirv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "goufv5lw",
    "name": "phone",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dzha5e0xqf525jp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxwsdirv",
    "name": "phone",
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
  collection.schema.removeField("goufv5lw")

  return dao.saveCollection(collection)
})

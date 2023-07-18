migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q5g212h7q1ksdba")

  // remove
  collection.schema.removeField("4cuvqrem")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q5g212h7q1ksdba")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4cuvqrem",
    "name": "shop",
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
})

migrate((db) => {
  const collection = new Collection({
    "id": "v2xnijf0w5ul4k0",
    "created": "2023-05-24 00:31:30.166Z",
    "updated": "2023-05-24 00:31:30.166Z",
    "name": "payment",
    "type": "view",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM users"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v2xnijf0w5ul4k0");

  return dao.deleteCollection(collection);
})

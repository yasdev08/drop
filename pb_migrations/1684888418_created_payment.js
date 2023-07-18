migrate((db) => {
  const collection = new Collection({
    "id": "soksjcg56jkh0zs",
    "created": "2023-05-24 00:33:37.906Z",
    "updated": "2023-05-24 00:33:37.906Z",
    "name": "payment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d0qasmj1",
        "name": "pending",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cdqbcmcr",
        "name": "available",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rslimgfu",
        "name": "paid",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("soksjcg56jkh0zs");

  return dao.deleteCollection(collection);
})

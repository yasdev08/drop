migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nn7hya2wbt5xnyx");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nn7hya2wbt5xnyx",
    "created": "2023-03-27 21:21:20.601Z",
    "updated": "2023-03-30 03:57:19.973Z",
    "name": "sss",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "td2zowqa",
        "name": "full_name",
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
        "id": "yld5vu1r",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 8,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nyqytl47",
        "name": "shop",
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
        "id": "ntraeysl",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})

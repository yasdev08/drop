migrate((db) => {
  const collection = new Collection({
    "id": "q5g212h7q1ksdba",
    "created": "2023-03-30 03:57:59.166Z",
    "updated": "2023-03-30 03:57:59.166Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q5g212h7q1ksdba");

  return dao.deleteCollection(collection);
})

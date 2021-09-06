### To run:

```
yarn install
sqlite3 database.db < create.sql
node index.js
```

### To add user:
```
mutation {
  addUser(data: { name: "Ana" }) {
    name
  }
}
```

### To list users:
```
query {
  users {
    name
  }
}
```

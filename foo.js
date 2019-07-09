const fetch = require('isomorphic-unfetch');

fetch('https://api.github.com/graphql', {
  method: 'POST',
  mode: 'no-cors',
  body: JSON.stringify({"operationName":null,"variables":{},"query":"{\n  viewer {\n    login\n    __typename\n  }\n}\n"}),
  credentials: 'include',
  headers: {
    Authorization: "Bearer 8d275a171fb48c1f327e4f76816642ef6bb70cd3"
  }
})
.then(console.log)

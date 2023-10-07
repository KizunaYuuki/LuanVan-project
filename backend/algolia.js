// hello_algolia.js
const algoliasearch = require('algoliasearch')

// Connect and authenticate with your Algolia app
const client = algoliasearch('VAZ1FYY9VV', '02a838d49385a7e9f1f9de21702803a2')

// Create a new index and add a record
const index = client.initIndex('services')
const record = { objectID: 1, name: 'test_record' }
index.saveObject(record).wait()

// Search the index and print the results
index
    .search('test_record')
    .then(({ hits }) => console.log(hits[0]))
    .catch(({ error }) => console.log(error))

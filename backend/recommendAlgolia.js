const algoliarecommend = require('@algolia/recommend');

const client = algoliarecommend('VAZ1FYY9VV', '02a838d49385a7e9f1f9de21702803a2');

client.getRelatedProducts([
    {
        indexName: 'test',
        objectID: '684f125fc99a1_dashboard_generated_id',
    }
])
    .then(({ results }) => {
        console.log(results);
    })
    .catch(err => {
        console.log(err);
    });
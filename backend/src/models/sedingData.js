const mysql = require('mysql2');
const { dbconfig } = require("../config/db.config.js")
const algoliasearch = require('algoliasearch');
const client = algoliasearch(dbconfig.Algolia.ApplicationID, dbconfig.Algolia.APIKey);

// Create a new index - algolia
const index = client.initIndex('services');

const pool = mysql.createPool({
    host: dbconfig.db.HOST,
    user: dbconfig.db.USER,
    password: dbconfig.db.PASSWORD,
    database: dbconfig.db.DB,
}).promise()

pool.getConnection()
    .then(async (connection) => {
        console.log('Server đã kết nối thành công với MySQL.');
    })
    .catch((err) => {
        console.error('Lỗi kết nối khi kết nối với MySQL: ', err);
        pool.end(); // Đóng pool nếu không thể kết nối
    });



async function sendingData() {
    // const [rows] = await pool.query("select * from services")
    const [rows] = await pool.query(`
    SELECT services.id as service_id, services.name as service_name, services.delivery_date, services.delivery_max_time, services.delivery_min_time, services.weight, services.price, services.created,
    providers.id as provider_id, providers.name as provider_name, providers.image,
    location_from.domain as domain_from, location_from.province as province_from, location_from.district as district_from,
    location_to.domain as domain_to, location_to.province as province_to, location_to.district as district_to
    FROM services
    JOIN service_types ON services.service_type_id = service_types.id
    JOIN providers ON service_types.providers_id = providers.id
    JOIN locations as location_from ON services.id = location_from.service_id
    JOIN locations as location_to ON services.id = location_to.service_id
    WHERE location_from.type = 'FROM' AND location_to.type = 'TO'
    ORDER BY services.created DESC`)

    // add a record to algolia
    index.saveObjects(rows, { autoGenerateObjectIDIfNotExist: true })
        .wait()
        .catch(({ error }) => console.log(error));
    client.listIndices().then(({ items }) => {
        console.log(items);
    });
}
sendingData();
// command run
// node /Users/kizunayuuki/Downloads/LuanVan-project/backend/src/models/sedingData.js
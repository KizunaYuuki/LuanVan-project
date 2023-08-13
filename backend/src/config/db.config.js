const dotenv = require("dotenv"); 
dotenv.config();

const dbconfig = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        HOST: process.env.MYSQL_HOST || "localhost",
        USER: process.env.MYSQL_USER || "root",
        PASSWORD: process.env.MYSQL_PASSWORD || "TIMEJIKAN",
        DB: process.env.MYSQL_DATABASE || "notes_app"
    }
};
module.exports = {
    dbconfig
}
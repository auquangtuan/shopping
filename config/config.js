require('dotenv').config()
module.exports = {
    "development": {
        "username": "auquangtuan@shoppingshopdb",
        "password": "tuan1011A@",
        "database": "shopping_db",
        "host": "shoppingshopdb.mysql.database.azure.com",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
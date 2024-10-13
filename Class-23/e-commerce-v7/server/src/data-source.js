const mongoose = require('mongoose');

class Database {
    static async connect() {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/bazaar_db');
        }
        catch (e) {
            await mongoose.disconnect();
        }
    }
}

module.exports = Database;
const mongoose = require('mongoose');

class DBconnection {
    constructor() {
    }

    async _connect() {
        console.log('Connecting to database on mongodb://smartNote:SmartNote123!@mongodb/SmartNote');
        return mongoose.connect('mongodb://smartNote:SmartNote123!@mongodb/SmartNote')
    }
}

module.exports = DBconnection;
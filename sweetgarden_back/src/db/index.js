const mongoose = require('mongoose');

const connect = async (cb) => {
    try {
        await mongoose.connect('mongodb://mongo:27017/sweetgarden'); 
        cb();
    } catch (err) {
        cb(err);
    }
}

module.exports = {
    connect
}
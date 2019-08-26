const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin123_@acarmona-wrzqv.mongodb.net/test?retryWrites=true';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
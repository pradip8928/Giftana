const mongoose = require('mongoose');
const colors = require('colors')



mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`database connection established`);
}).catch((err) => {
    console.log(`Connection is not established due to error: ${err}`);
})
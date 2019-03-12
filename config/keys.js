module.exports = {
    mongoURI: 'mongodb+srv://Kaimura:'+ process.env.MONGO_ATLAS_PW +'@mern-receipt-list-fohcr.mongodb.net/test?retryWrites=true'
}
//+srv means SSL connection
//alternatively create global variable that is set up on the server side to hide password - like in nodemon.json
// + process.env.MONGO_ATLAS_PW +
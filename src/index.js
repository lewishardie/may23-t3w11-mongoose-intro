// Configure .env so we can use it all around the documentation
// for env
// require('dotenn').config();

const { databaseConnect } = require('./database')
const {app} = require('./server');

app.listen(3000, async () => {
    await databaseConnect();
    console.log("Server running...");
});

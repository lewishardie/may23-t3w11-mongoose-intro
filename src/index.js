// Configure .env so we can use it all around the documentation
// for env
// require('dotenn').config();

const {app} = require('./server');

app.listen(3000, () => {
    console.log("Server running...");
});

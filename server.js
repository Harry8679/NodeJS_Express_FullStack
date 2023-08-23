const http = require('http');
const app = require('./app');
require('dotenv').config();
const port = 3500|| process.env.PORT;

http.createServer(app).listen(3500, () => {
    console.log(`Server is running on the port ${port}`);
})
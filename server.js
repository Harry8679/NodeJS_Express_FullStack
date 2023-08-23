const http = require('http');
require('dotenv').config();
const port = 3500|| process.env.PORT;

http.createServer().listen(3500, () => {
    console.log(`Server is running on the port ${port}`);
})
const express = require('express');
const cors = require('cors');

const app = express();

// Use middleware to form our contact for incoming json payloads ONLY !
app.use(express.json());
// Use url for url encoding
app.use(express.urlencoded({ extended: true }));
// Use middleware to handle cors policy
app.use(cors());

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Service is up' });
});

// routers
// app.use('/register', registrationRouter)
// bad url or error we can handle
// With middleware
app.use((req, res, next) => {
    const error = new Error('Non trouvé');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
        }
    })
});

module.exports = app;
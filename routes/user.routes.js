const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Successful - GET',
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Successful - GET Id',
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    });
});

router.post('/', (req, res, next) => {
    const name = req.body.name;
    res.status(201).json({
        message: 'Successful - POST',
        metadata: {
            name,
            hostname: req.hostname,
            method: req.method
        }
    });
});

router.put('/:id', (req, res, next) => {
    const name = req.body.name;
    res.status(200).json({
        message: 'Successful - PUT By Id',
        metadata: {
            name,
            hostname: req.hostname,
            method: req.method
        }
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Successful - DELETE By Id',
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    });
});

module.exports = router;
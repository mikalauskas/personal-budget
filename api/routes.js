const express = require('express');
const envelopeRoutes = express.Router();
const envelopes = require('../db/envelopes.js');

module.exports = envelopeRoutes;

envelopeRoutes.get('/envelopes', (req, res, next) => {
    res.json(envelopes);
});
const express = require('express');
const route = express.Router();
const { addToDatabase,
  getFromDatabaseAll,
  getFromDatabaseById,
  deleteFromDatabase,
  transferAmount,
  updateEnvelope } = require('./db');

module.exports = route;

route.param('id', (req, res, next, id) => {
  req.envId = parseInt(id);
  if (getFromDatabaseById(req.envId)) {
    next();
  } else {
    res.sendStatus(404);
  }
});

route.param('destId', (req, res, next, id) => {
  req.destId = parseInt(id);
  if (getFromDatabaseById(req.destId)) {
    next();
  } else {
    res.sendStatus(404);
  }
});

// get all envelopes
route.get('/envelopes', (req, res) => {
  res.json(getFromDatabaseAll());
});

// get one envelope
route.get('/envelopes/:id', (req, res) => {
  const envelope = getFromDatabaseById(req.envId);
  res.json(envelope);
});

// create an envelope
route.post('/envelopes', (req, res) => {
  const envelopeId = addToDatabase(req.body);

  if (envelopeId) {
    res.status(201).json(envelopeId);
  } else {
    res.status(400).send();
  }
  
});

// transfer from one envelope to another
route.post('/envelopes/transfer/:id/:destId', (req, res) => {
  const result = transferAmount(req.envId, req.destId, req.body.amount);
  res.status(200).json(result);
});

// update envelope
route.put('/envelopes/:id', (req, res) => {
  updateEnvelope(req.envId, req.body);
  res.status(200).send();
});

// delete envelope
route.delete('/envelopes/:id', (req, res) => {
  deleteFromDatabase(req.envId);
  res.sendStatus(204);
});

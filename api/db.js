let envelopes = [];

exports.addToDatabase = (obj) => {
  const id = envelopes.length + 1;
  const envIndex = envelopes.length;
  envelopes.push({
    _id: id,
    name: obj.name,
    amount: obj.amount
  });
  return envelopes[envIndex]._id;
};

exports.transferAmount = (srcId, destId, amount) => {
  envelopes = envelopes.map(element => {
    if (element._id === srcId) {
      element.amount = element.amount - amount;
    } else if (element._id === destId) {
      element.amount = element.amount + amount;
    }
    return element;
  });
  return envelopes;
};

exports.updateEnvelope = (id, obj) => {
  console.log(id, obj);
  const envelope = exports.getFromDatabaseById(id);
  const envelopeIndex = envelopes.indexOf(envelope);
  envelopes[envelopeIndex].name = obj.name;
  envelopes[envelopeIndex].amount = obj.amount;
  return true;
};

exports.deleteFromDatabase = (id) => {
  const envelope = exports.getFromDatabaseById(id);
  const envelopeIndex = envelopes.indexOf(envelope);
  envelopes.splice(envelopeIndex);
};

exports.getFromDatabaseAll = () => {
  return envelopes;
};

exports.getFromDatabaseById = (id) => {
  return envelopes.find((env) => {
    return env._id === id;
  });
};

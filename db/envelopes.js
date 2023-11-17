let envelopes = {
    grocery: {
        budget: 10000,
        name: 'Groceries'
    },
    gas: {
        budget: 5000,
        name: 'Gas'
    },
    bills: {
        budget: 10000,
        name: 'Utility bills'
    },
    debt: {
        budget: 10000,
        name: 'Credit debt'
    },
    other: {
        budget: 10000,
        name: 'Other'
    }
}

envelopes.totalBudget = 40000;

module.exports = envelopes;
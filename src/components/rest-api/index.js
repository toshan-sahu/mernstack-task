const express = require('express');
const app = express();
const port = 5000;

const transactions = [
    { id: 1, title: 'Transaction 1', description: 'Description 1', price: 100 },
    { id: 2, title: 'Transaction 2', description: 'Description 2', price: 200 },
    { id: 3, title: 'Transaction 3', description: 'Description 3', price: 300 },
    { id: 4, title: 'Transaction 4', description: 'Description 4', price: 400 },
    { id: 5, title: 'Transaction 5', description: 'Description 5', price: 500 },
    { id: 6, title: 'Transaction 6', description: 'Description 6', price: 600 },
    { id: 7, title: 'Transaction 7', description: 'Description 7', price: 700 },
    { id: 8, title: 'Transaction 8', description: 'Description 8', price: 800 },
    { id: 9, title: 'Transaction 9', description: 'Description 9', price: 900 },
    { id: 10, title: 'Transaction 10', description: 'Description 10', price: 1000 },
    { id: 11, title: 'Transaction 11', description: 'Description 11', price: 1100 },
    { id: 12, title: 'Transaction 12', description: 'Description 12', price: 1200 },
    // Add more transactions if necessary
];

// API to get transactions with search and pagination
app.get('/api/transactions', (req, res) => {
    let { page = 1, per_page = 10, search = '' } = req.query;
    page = parseInt(page);
    per_page = parseInt(per_page);
    
    // Filter transactions based on search query
    const filteredTransactions = transactions.filter(transaction => {
        return (
            transaction.title.toLowerCase().includes(search.toLowerCase()) ||
            transaction.description.toLowerCase().includes(search.toLowerCase()) ||
            transaction.price.toString().includes(search)
        );
    });

    // Calculate the start and end index for pagination
    const startIndex = (page - 1) * per_page;
    const endIndex = startIndex + per_page;
    
    // Get the transactions for the current page
    const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

    res.json({
        transactions: paginatedTransactions,
        total: filteredTransactions.length,
        page,
        per_page,
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Example search endpoint
app.get('/search', (req, res) => {
    const query = req.query.q; // Retrieve query parameter from URL
    // Here you would handle the search logic (e.g., querying a database)
    // For simplicity, let's just return the query for now
    res.json({ results: `Search results for "${query}"` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

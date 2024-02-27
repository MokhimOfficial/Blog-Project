const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// POST route to handle form submission
app.post('/submit-query', (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const query = req.body.query;

    // Here you can process the submitted data (e.g., save it to a database)
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Query:', query);

    // Send a response (you can customize this as needed)
    res.send('Query submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/notes.json');

const app = express();
const PORT = process.envPORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', async (req, res) => {
    await res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.get('api/notes', (req, res) => res.json())



app.get('/api/notes', (req, res) => res.json());


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
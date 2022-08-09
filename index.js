const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World com Node.js!!!!!');
})

app.listen(3000, () => {
    console.log('Server executing on port 3000');
})
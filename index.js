const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('We are in ECS demo!')
})

app.get('/health', (req, res) => {
    res.send('OK');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
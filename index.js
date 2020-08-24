const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const handler = require('github-webhook-handler')({ path: '/webhook', secret: '' });

app.use(express.json());

app.get('/', (req, res) => {
    res.json('hello');
})

app.post('/webhook', (req, res) => {
    console.log(`${req.body.payload}`);
    res.json('Yes,Sir');
});

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));
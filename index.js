const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const github = require('github-webhook-handler')({
    path: '/webhook',
    secret: process.env.SECRET || '',
    port: port
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/webhook', (req, res) => {
    console.log(`Repo: ${req.payload.repository.name} \nRef ${req.payload.ref}`);
    res.send('Yes,Sir');
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
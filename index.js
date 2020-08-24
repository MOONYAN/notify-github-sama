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

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

github.on('error', err => console.error('Error:', err.message));

github.on('push', ({ payload }) => console.log(`Receive $push for ${payload.repository.name} to ${payload.repository.ref}`));
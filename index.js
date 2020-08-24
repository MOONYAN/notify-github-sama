const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const handler = require('github-webhook-handler')({ path: '/webhook', secret: '' });

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('hello');
})

app.post('/webhook', (req, res) => {
    console.log(req.payload);
    res.json('Yes,Sir');
});

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
})

handler.on('issues', function (event) {
    console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title)
})
const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
// const handler = require('github-webhook-handler')({ path: '/webhook', secret: '' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('hello');
})

app.post('/webhook', (req, res) => {
    console.log('Received a push event for %s to %s',
        req.body.payload.repository.name,
        req.body.payload.ref);
    res.json('Yes,Sir');
});

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));
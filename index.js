const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const github = require('express-github-webhook')({
    path: '/webhook',
    secret: process.env.SECRET || ''
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/webhook', (req, res) => {
    // console.log(`Repo: ${req.payload.repository.name} \nRef ${req.payload.ref}`);
    console.log(`${req.body}`);
    res.send('Yes,Sir');
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
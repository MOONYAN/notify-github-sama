const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const handler = require('github-webhook-handler')({ path: '/webhook', secret: '' });
const bodyParser = require('body-parser');

const bot = require('./bot');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('hello');
})

app.post('/webhook', (req, res) => {    
    const message = `${req.body.repository.name}\n${req.body.ref}`;
    console.log(message);
    bot.notify(message);
    res.json('Yes,Sir');
});

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));
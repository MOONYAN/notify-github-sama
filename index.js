const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const handler = require('github-webhook-handler')({ path: '/webhook', secret: '' });
const bodyParser = require('body-parser');

const { LineClient } = require('messaging-api-line');
const config = {
    accessToken: process.env.ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};
const userId = process.env.USER_ID;
const client = LineClient.connect(config);
console.log(config);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('hello');
})

app.post('/webhook', (req, res) => {    
    const message = `${req.body.repository.name}\n${req.body.ref}`;
    console.log(message);
    client.pushText(userId, message);
    res.json('Yes,Sir');
});

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));
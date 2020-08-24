const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const github = require('express-github-webhook')({
    path: '/webhook',
    secret: process.env.SECRET || ''
});

app.use(bodyParser.json());
app.use(github);

github.on('*', function (event, repo, data) {
    console.log(event);
});

github.on('push', function (repo, data) {
    console.log(`repo:${repo} \ndata${data}`);
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
const { LineClient } = require('messaging-api-line');

const config = {
    accessToken: process.env.ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};

const userId = process.env.USER_ID;

const client = LineClient.connect(config);

console.log(config);

module.exports = {
    notify(message) {
        client.pushText(userId, message);
    }
}
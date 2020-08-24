const { LineClient } = require('messaging-api-line');

const config = {
    accessToken: process.env.ACCESS_TOKEN || 'accessToken',
    channelSecret: process.env.CHANNEL_SECRET || 'channelSecret',
};

const userId = process.env.USER_ID || 'userId'

const client = LineClient.connect(config);

module.exports = {
    notify(message) {
        client.pushText(userId, message);
    }
}
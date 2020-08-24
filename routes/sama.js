const express = require('express');
const router = express.Router();
const handler = require('github-webhook-handler')({ path: '/webhook', secret: '' });

router.post('/', (res, req) => {
    console.log(`REF: ${req.body.payload.ref}\nName: ${req.body.payload.repository.name}`);
    res.json('Yes,Sir');
})

module.exports = router;
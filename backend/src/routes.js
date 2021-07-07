const express = require('express');
const router = express.Router();

router.get('/backend/test', (req, res) => {
    console.log("Request: ", req);
    res.status(200).send({"message": "Working!"});
});

module.exports = router;
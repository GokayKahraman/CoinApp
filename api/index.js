const express = require('express')
const axios = require("axios")
var cache = require('memory-cache');
const app = express()


app.get('/coins', (req, res) => {
    if (cache.get("data")) {
        console.log("başarılı")
        res.json(cache.get("data"))
    } else {
        axios.get("https://api.coinlore.net/api/tickers/")
        .then(function(response) {
            cache.put("data", response.data, 30000)
            res.json(cache.get("data"))
        })
    }
})





module.exports = {
   path: '/api',
   handler: app
}

//https://api.coinlore.net/api/tickers/
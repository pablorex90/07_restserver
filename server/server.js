const express = require('express')
const app = express()

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})

app.post('/usuario', function(req, res) {
    res.json('post Usuario')
})

app.put('/usuario/:id', function(req, res) {
    let idx = req.params.id;
    res.json({ idx })
})

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
})

app.listen(8080, () => {
    console.log('Escuchando puerto 8080');
})
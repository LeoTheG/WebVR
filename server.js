const express = require('express');
const path = require('path');
const port = 8081;

app = express();
app.use(express.static(path.join(__dirname)));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'), (err) => {
        if (err) res.status(500).send(err);
    });
})

app.listen(port, () => console.log("Listening on port %s!", port));
    
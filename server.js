const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static( __dirname + '/public' ))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('index', {
        name: 'Renato',
        year: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Listening port ${port}`)
});
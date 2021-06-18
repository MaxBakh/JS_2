const express = require('express'); // подключаем express
const fs = require('fs'); //модуль для работы с файлами
const router = require('./cartRouter');//собственный модуль
const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', router);

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => { //читаем данные из файла 
        if (err) { //если ошибка, то сообщаем о ней
            res.sendStatus(404, JSON.stringify({ result: 0, text: err })); //
        } else {
            res.send(data); //если все ок, то выводим данные 
        }
    })
});

app.listen(3000, () => console.log('Listen on port 3000...'));
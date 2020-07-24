import express from 'express';
import data from './serverDummyData';

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
    console.log(data)
})

app.listen(5050, () => { console.log('server starts at 5050') })
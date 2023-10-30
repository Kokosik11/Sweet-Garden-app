const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const db = require('./db');

require('dotenv').config();

const CategoryService = require('./CategoryService');
const ProductService = require('./ProductService');

const app = express();

const PORT = process.env.PORT || 8001;

(async () => {
    await db.connect((err) => {
        if (err) throw err;
        console.log('MongoDB connection established');
    })
})()

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

const ApiRouter = express.Router();

ApiRouter.use('/category', CategoryService.router);
ApiRouter.use('/product', ProductService.router);

app.use('/api', ApiRouter);
app.get('/api/', (req, res) => {
    return res.status(200).json({ message: 'SweetGarden API 1.0.0' });
})

app.listen(PORT, () => {
    console.log('listening on http://localhost:' + PORT);
});
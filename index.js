import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json({ message: 'Hello CoronaBoard!'});
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})
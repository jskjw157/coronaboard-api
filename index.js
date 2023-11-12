const express = require('express');
const bodyParser = require('body-parser'); 
const { sequelize } = require('./database'); 

async function launchServer() {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req,res) => {
        res.json({ message: 'Hello CoronaBoard!'});
    });

    try {
        await sequelize.sync();
        console.log('Database connection successful');
    } catch (error) {
        console.log('Database connection failed');
        console.log(error);
        process.exit(1);
    }

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
}

launchServer();



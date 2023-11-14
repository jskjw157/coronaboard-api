const express = require('express');
const bodyParser = require('body-parser'); 
const { sequelize } = require('./database'); 
const globalStatController = require('./controller/global-stat.controller');

async function launchServer() {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req,res) => {
        res.json({ message: 'Hello CoronaBoard!'});
    });

    app.get('/global-stat', globalStatController.getAll);
    app.post('global-stat', globalStatController.insertOrUpdate);
    app.delete('global-stat', globalStatController.remove);

    try {
        await sequelize.sync({ alter: true });
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



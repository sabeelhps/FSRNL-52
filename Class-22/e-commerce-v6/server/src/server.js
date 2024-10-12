const app = require('./app');
const Database = require('./data-source');

const port = 8080;

(async () => {
    try {
        await Database.connect();
        console.log('DB Connection Open!');

        app.listen(port, () => {
            console.log(`Server started at port ${port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
})();
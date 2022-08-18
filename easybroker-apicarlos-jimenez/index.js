const server = require('./src/app.js');


server.listen(process.env.PORT||3007, () => {
    console.log(`%s listening at ${process.env.PORT||3007}`); // eslint-disable-line no-console
});
const debug = require('debug')('app:startup');
//const dbDebugger= require('debug')('app:db');
const Joi = require('joi');
const express = require('express');
const config = require('config');
const logger = require('./logger');
const courses = require('./routers/courses')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/courses', courses);
// app.get()
// app.post()
// app.put()
// app.delete

app.get('/', (req, res) => {
    res.render("index", { title: "demo here", message: "hello Niks" });
});



debug('application name  ' + config.get('name'))
debug('application mail  ' + config.get('mail.host'))

app.set('view engine', 'pug')
app.set('views', './views')
app.use(logger);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}....`));

//$env:VAR_NAME
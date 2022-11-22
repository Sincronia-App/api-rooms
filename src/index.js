const express = require('express');
const app = express();
const morgan = require('morgan');

// settings

//esta opcion es para procesar cualquier puerto, ya sea en la nube o si es local por default se ejecuta en el puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));
app.use('/api/rooms',require('./routes/rooms'));
//app.use('/api/v1',require('./routes/v1'));


//starting the server
app.listen(3000, () => {
    console.log(`Server started on port ${app.get('port')}`);
});
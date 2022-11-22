const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const rooms = require('../sample.json');


router.get('/', (req, res) =>{
    res.json(rooms);

});

router.post('/',(req, res) =>{
    const {id, room} = req.body;
    /* Se hace la comprobacion de que existan datos,
    de lo contrario se genera un error*/
    if(id && room){
        //se genera un id en automatico
        const id = rooms.length + 1;
        const newRoom = {...req.body, id};
        rooms.push(newRoom);
        res.json(rooms);
    }else{
        res.status(500).json({error: 'There was an error.'});
    }
});

/* Se crea el Metodo DELETE para eliminar salas*/

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    _.each(rooms, (room, i)=>{
        if (room.id == id){
            rooms.splice(i, 1);
        }
    });
    res.send(rooms);
})


module.exports = router;
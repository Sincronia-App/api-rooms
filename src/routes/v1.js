const {Router} = require('express');
const router = Router();
import fetch from "node-fetch";

const fetch = require('node-fetch');


router.get('/', async (req, res)=>{
    const response = await fetch('https://api-sincronia.codigohabil.com/api/v1/rooms/1');
    const v1 = await response.json();
    res.json(v1);
});

module.exports = router;
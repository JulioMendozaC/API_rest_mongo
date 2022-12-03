const express = require('express');
const app = express();
const port = 3977;


app.use(express.static(__dirname + '/templates'));


app.get('/', (req, res) =>{

let salida = {

    nombre: ' julio',

    url: req.url


}    
res.send(salida);

});



app.get('/otro server',(req, res) =>{

res.send('hola');

})

app.listen(port,()=>{

console.log(`escuchanod desde el servidor ${port}}`); 

})




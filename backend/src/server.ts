import express, { response, request } from 'express';

const app = express();
app.use(express.json());

//Request params: parametros que vem na propria rota que identificam um recurso
//query param : parametros ue vem na propria rota geralmente opcionais para filtros , paginação
// reqest body: parametros para criação /atualização de usuario

const users =[
    'Diego',
    'Nelson',
    'Robson',
    'Erneto',
    'Vanfffny'
    ];

app.get('/' , (request, response) =>{
  
    return response.json({message: 'Hello world'});
});



app.listen(3333);

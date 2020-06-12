import express from 'express';

const app = express();

app.use(express.json())
//Request Param: Parâmetros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para fitros, paginação
//Request Body: Parâmetros para criação/atualização de informações
const users = [
    'Juliana'
];

app.get('/users', (request, response) => {

    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers );
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id]

    return response.json(user);
})

app.post('/users', (request, response) => {

    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user)
})

app.listen(3333);
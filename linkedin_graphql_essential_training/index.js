import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

//const root = {hello: () => "Hi, I'm Tim"}; //root resolve
const root = {friend: () => {
    return {
        "id": 342342,
        "firstName": "John",
        "lastName": "Due",
        "gender": "Male",
        "language": "English",
        "email": [{email:"john@example.com"}, {email:"john@example2.com"}]
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,

}));

app.listen(8080, () => console.log('Running server o port localhost:8080'));
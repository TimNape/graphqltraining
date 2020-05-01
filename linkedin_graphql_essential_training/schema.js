import {buildSchema} from 'graphql';

const schema = buildSchema(`
type Friend {
    id: ID
    firstName: String!
    lastName: String
    gender: String
    language: String
    email: [Email]!
}

type Email {
    email: String
}

type Query {
    friend: Friend
}
`)

export default schema;
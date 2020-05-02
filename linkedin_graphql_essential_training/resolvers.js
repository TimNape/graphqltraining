
class Friend{
    constructor(id, {firstName, lastName, gender, age, language, email, contacts}){
        this.id = id; this.firstName = firstName; this.lastName = lastName; this.gender = gender; this.age = age, this.language = language; this.email = email;
        this.contacts = contacts;
    }
}

const friendDatabase = {};

//const root = {hello: () => "Hi, I'm Tim"}; //root resolve

// resolver map, a graphql-tools concept
export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation:{
        createFriend: ({ input }) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDatabase[id] = input;
            return new Friend(id, input);
        }
    }
};



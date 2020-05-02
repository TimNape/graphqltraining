
class Friend{
    constructor(id, {firstName, lastName, gender, age, language, email, contacts}){
        this.id = id; this.firstName = firstName; this.lastName = lastName; this.gender = gender; this.age = age, this.language = language; this.email = email;
        this.contacts = contacts;
    }
}

const friendDatabase = {};

//const root = {hello: () => "Hi, I'm Tim"}; //root resolve

const resolvers = {
    friend: () => {
    return {
        "id": 342342,
        "firstName": "John",
        "lastName": "Due",
        "gender": "Male",
        "language": "English",
        "email": "john@example.com"
        }
    },

    getFriend: ({ id }) => {
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({ input }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }

};


export default resolvers;


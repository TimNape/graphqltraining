import mongoose from 'mongoose'
import {Friends} from './dbConnectors'
// resolver map, a graphql-tools concept
export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation:{
        createFriend: ({ input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastNam: input.lastName,
                gender: input.gender,
                language: input.language,
                age: input.age,
                email: input.email,
                contacts: input.contacts
            });

            newFriend.id = newFriend._id;
            return new Promise((resolve, object)=>{
                newFriend.save((err)=>{
                    if(err) reject(err)
                    else resolve(newFriend)
                })
            })
        }
    }
};



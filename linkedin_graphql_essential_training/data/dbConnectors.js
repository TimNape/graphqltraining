import mongoose, { mongo } from 'mongoose'
import Sequalize from 'sequelize'
import _ from 'lodash'
import casual from 'casual'


// Mongo connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useMongoClient: true
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age:{
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts:{
        type: Array
    }

});

const Friends = mongoose.model('friends', friendSchema);


// SQL

const sequelize = new Sequalize('database', null, null, {
    dialect: 'sqlite',
    storage: './aliens.sqlite',
});

const Aliens = sequelize.define('aliens', {
    firstName: {type: Sequalize.STRING},
    lastName: {type: Sequalize.STRING},
    planet: {type: Sequalize.STRING},
});

Aliens.sync({force: true}).then(()=>{

    // use casual to generate mock data
    _.times(10, (i) => {
        Aliens.create({
            firstName: "firstName" + i, //casual._first_name
            lastName: "lastName" + i, //casual._last_name
            planet: casual.word,
        });
    });
});

export {Friends, Aliens}
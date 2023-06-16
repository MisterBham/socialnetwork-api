const { User, Thought } = require('../models');
const connection = require('../config/connection');

const userData = [
    {"username":"elupton0","email":"itoland0@e-recht24.de"},
    {"username":"vwyles1","email":"bodunneen1@nhs.uk"},
    {"username":"dberrycloth2","email":"gmcvitty2@google.ru"},
    {"username":"cterrington3","email":"rmalloch3@flavors.me"},
    {"username":"kstenbridge4","email":"cdalessandro4@whitehouse.gov"},
    {"username":"hnewcomb5","email":"sbloore5@homestead.com"},
    {"username":"msherbrook6","email":"frizzi6@biglobe.ne.jp"},
    {"username":"mdeakan7","email":"jhaig7@bloglovin.com"},
    {"username":"clevesley8","email":"selgey8@jimdo.com"},
    {"username":"ntruelock9","email":"mmensler9@soup.io"},
];

const thoughtData = [
    {
    "thoughtText": "Curabitur convallis.",
    "username": "elupton0"
    }, {
    "thoughtText": "Quisque ut erat.",
    "username": "vwyles1"
    }, {
    "thoughtText": "Sed vel enim sit amet nunc viverra dapibus.",
    "username": "dberrycloth2"
    }, {
    "thoughtText": "Suspendisse ornare consequat lectus.",
    "username": "cterrington3"
    }, {
    "thoughtText": "Nullam varius.",
    "username": "kstenbridge4"
    }, {
    "thoughtText": "Integer non velit.",
    "username": "hnewcomb5"
    }, {
    "thoughtText": "Vestibulum ac est lacinia nisi venenatis tristique.",
    "username": "msherbrook6"
    }, {
    "thoughtText": "Etiam faucibus cursus urna.",
    "username": "mdeakan7"
    }, {
    "thoughtText": "Aliquam erat volutpat.",
    "username": "clevesley8"
    }, {
    "thoughtText": "Curabitur gravida nisi at nibh.",
    "username": "ntruelock9"
    }
];

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connection to db successfully established.');

    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.collection.insertMany(userData);
        console.table(userData);
        console.log('---------- \n USERS seeded... \n ----------');
    await Thought.collection.insertMany(thoughtData);
        console.table(thoughtData);
        console.log('---------- \n THOUGHTS seeded... \n ----------');

    console.info('Seeding complete! 🌱');
    process.exit(0);
});

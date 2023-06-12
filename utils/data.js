const { User, Thought } = require('../models');
const { connect, connection } = require('mongoose');

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
    {"thoughtText":"Suspendisse potenti."},
    {"thoughtText":"Donec ut dolor."},
    {"thoughtText":"Proin at turpis a pede posuere nonummy."},
    {"thoughtText":"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."},
    {"thoughtText":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."},
    {"thoughtText":"Praesent lectus."},
    {"thoughtText":"Maecenas tincidunt lacus at velit."},
    {"thoughtText":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo."},
    {"thoughtText":"Aliquam erat volutpat."},
    {"thoughtText":"Nullam porttitor lacus at turpis."},
    {"thoughtText":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."},
    {"thoughtText":"Maecenas rhoncus aliquam lacus."},
    {"thoughtText":"Integer ac neque."},
    {"thoughtText":"Etiam justo."},
    {"thoughtText":"Maecenas tincidunt lacus at velit."},
    {"thoughtText":"Nunc purus."},
    {"thoughtText":"Curabitur convallis."},
    {"thoughtText":"In congue."},
    {"thoughtText":"In hac habitasse platea dictumst."},
    {"thoughtText":"Mauris sit amet eros."},
];



const seedUsers = () => User.insertMany(userData);

const seedThoughts = () => Thought.insertMany(thoughtData);

const seedAll = async () => {
    await seedUsers();
    console.log('---------- \n USERS seeded... \n ----------');
    await seedThoughts();
    console.log('---------- \n THOUGHTS seeded... \n ----------');
};

seedAll();

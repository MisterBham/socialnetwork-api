# Social Network API
![NodeJS](https://img.shields.io/badge/-NodeJS-339933?logo=node.js&logoColor=white&style=flat)
![Express](https://img.shields.io/badge/-Express-000000?logo=Express&logoColor=white&style=flat)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=white&style=flat)
![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=Express&logoColor=white&style=flat)
![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?logo=Insomnia&logoColor=white&style=flat)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?logo=Nodemon&logoColor=white&style=flat)
![.env](https://img.shields.io/badge/.ENV-ECD53F?logo=.ENV&logoColor=white&style=flat)

[![Walkthrough Video](./images/users-mongodb.jpg)](https://drive.google.com/file/d/1KgUFJaIFQwq7oTKNgLmNJPKYjCshC0k4/view)

## Table of Contents 
* [Description](#Description) 

* [Installation](#Installation) 

* [Usage](#Usage) 

* [License](#License) 

* [Contributing](#Contributing) 

* [Testing](#Testing) 

* [Questions](#Questions) 

* [Screenshots](#Screenshots) 

### Description
MongoDB backend using mongoose ODM, to be paired with a social networking front end. Provides full CRUD functionality with multiple api endpoints which pull dynamic content from within a mongo database.

### Installation
1. Ensure MongoDB daemon is running. For detailed information, please reference MongoDB documentation via <a href="https://www.mongodb.com/">https://www.mongodb.com/</a>.
2. `npm install` into root directory, to install required application dependencies.
    - [optional] `npm run seed` to seed database with pre-supplied data.
3. `npm start` to start application.

### Usage
Available npm scripts:
- start
- watch
- seed

| Available /api routes | Request Types |
| :--- | :--- |
| /users <img width=300/> | .get <img width=200/> |
| | .post |
| /users:userId | .get |
| | .put |
| | .delete |
| /users/:userId/friends/:friendId | .post |
| | .delete |
| /thoughts | .get |
| | .post |
| /thoughts/:thoughtId | .get |
| | .put |
| | .delete |
| /thoughts/:thoughtId/reactions | .post |
| /thoughts/:thoughtId/reactions/:reactionId | .delete |

### License
Further information regarding this specific license can be found via: https://opensource.org/license/mit/. <br>
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

### Contributing
Open <a href="https://github.com/MisterBham/socialnetwork-api/issues">Issues</a> on the Github repo!

### Testing
No unit testing provided at this time

### Questions
Should you have any further questions, please reach the developer at: misterbham.dev@gmail.com. </br> 
GitHub: <a href="https://github.com/MisterBham">MisterBham</a>. </br> 

### Screenshots
<img src="./images/users-mongodb.jpg" width=75% height=75%> <br> 
<img src="./images/thoughts-mongodb.jpg" width=75% height=75%> <br> 
<img src="./images/users-friends.jpg" width=75% height=75%> <br> 
<img src="./images//thoughts-reaction.jpg" width=75% height=75%> <br> 

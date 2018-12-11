# Template Configure Engine

### What's included?

### Prerequisites
You need to have or install [Node.js and npm](https://nodejs.org/en/)
- Support Node v4 - latest
- Support npm v3 - latest
- Yarn (Optional) using npm install -g yarn
- MongoDb - (You may download and install it from here if it's not pre-installed in your system) https://www.mongodb.com/download-center/community

### Installation - Dev Setup

* Install Dependencies
    
    npm install or yarn install
    
* Start Mongo Db server
    
    mongod --dbpath=<path_to_your_database_folder> 
    
* Start DEV server
    
    npm start 
    

Open Application at Port:8080, i.e http://localhost:8080/

### Application Flow:-

1. Click Create Merge Tag and create merge tag with it's value.
2. Click Create Template.
3. Add content to template and add merge tag.
4. Once created, we need to enter Sender's Email Address as well as Receipient's Email Address in order to send email.


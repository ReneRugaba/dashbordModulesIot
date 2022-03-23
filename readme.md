![Sequence diagram](uml/../uploads/logoApp.jpg)


<h1 align="center">Welcome to Module IO management 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> dashboard module Io is an application that aims to give logic to Iot module monitoring. The purpose of this application is to test the different skills acquired since the beginning of the application designer training. We can therefore see the design part and the development part.

## On the command line

### 1️⃣ Project recovery
------
```sh
git@github.com:ReneRugaba/dashbordModulesIot.git
```
Enter the project folder : 
```sh
cd dashbordmoduleiot
```

### 2️⃣ Install missing dependencies
------
Those are the dependencies to note in file .gitignore

```sh
npm install
```

### 3️⃣ Create database 
------
You have to create the database on the command line so that the project can start

### 4️⃣ Create .env file in folder root of project and configure
------
It is necessary to create this file and to configure it in order to make the relation with the BDD otherwise the project will not work.
With file .env.example for make file .env

```sh
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=********************** (to note in file .env.example)
DRIVE_DISK=local
SESSION_DRIVER=cookie
CACHE_VIEWS=false

DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=userOfDatabase
PG_PASSWORD=**********
PG_DB_NAME=nameOfDatabaseCreateJustBefore
```



### 5️⃣ Make migrations 
------

This allows you to create tables and columns in the database

```sh
node ace migration:run

```
### 6️⃣ Run the seed command
------

This allows you to add the data in the correponding tables.
The data of the tables is in the file seed with the name of the table corresponding.
The file MainSeeder decides the order of launching the seeds files.
```sh
node ace db:seed
```
### 7️⃣ last etape
------

You can run the project with the next command :

```sh
npm run dev
```
then go to the following address in your browser :

```sh
localhost:3333
```
------



## Conception

  * Usecase diagram: 
  
  ![Usecase diagram](uml/../documents/uml/useCaseModule.png "Usecase diagram")

  * Class diagram:
  ![Class diagram](uml/../documents/uml/classDiagramModule.png "Class diagram")

  * Sequence diagram:
  ![Sequence diagram](uml/../documents/uml/createModulesequence.png "Sequence diagram")

  ![Sequence diagram](uml/../documents/uml/moduleDetailsSequenceDiagram.png "Sequence diagram")

  ![Sequence diagram](uml/../documents/uml/searchModuleSequenceDiagram.png "Sequence diagram")




  ## Wireframe

  ![Sequence diagram](uml/../documents/wireframe/Group%202.png )

  ![Sequence diagram](uml/../documents/wireframe/Group%204.png)

  ![Sequence diagram](uml/../documents/wireframe/Group%205.png)

  ![Sequence diagram](uml/../documents/wireframe/Group%206.png)

  ![Sequence diagram](uml/../documents/wireframe/Group%207.png)

  ![Sequence diagram](uml/../documents/wireframe/Group%208.png)


  8️⃣ The project is run 🆗 ⭐, good fun 👍 .


## Authors

👤 [ **ReneRugaba**](https://github.com/ReneRugaba)



## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
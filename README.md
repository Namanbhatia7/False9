The Site is under process of migrating from ejs templating to React front-end.

# False9 (WORK IN PROGRESS)

# About
Latest football Score Updates, Competitions and Player Stats, League Standings and much more.False9 fetches data from [Football-data.org](https://www.football-data.org/) API


## How to Run
- You need to have a node.js installed in your system to run this project. Follow [this link](https://nodejs.org/en/download/) to download node.js
After installing node.js, run following commands -
```
git clone https://github.com/Namanbhatia7/False9
```
**and then** 
```
cd False9
```

- Now terminal will be inside False9 directory. Run the following commands to install prerequisites:
```
npm install
```

- After succesfully installing required modules in above command, run 
```
node app.js
```

- Now open your web browser and type **http://localhost:3000/**

## How to get API key and run it

- Before you run the server, it's important you get your API key. To do that, go to **football-data.org** and get your **free API key**. 
- Now create a file named **.env** in your folder. Inside the file, insert the following code

```
API_KEY = <your API key>
```
Doing this will fetch you all the data from the source and you'll be able to explore the full functionality. 

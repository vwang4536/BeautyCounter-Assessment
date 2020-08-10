# BeautyCounter-Assessment
Fruit Dictionary is an application to check the weight and image of fruits. This application is created with Create-React-App and contains REST API to obtain information on fruit to be displayed on the client. MongoDB is implemented to save the data for the fruits.

Possible fruits to search up are:
   - Strawberry
   - Blueberry
   - Mango
   - Orange

Note: .env is currently not tracked by Git as it is implemented in .gitignore. In order to connect to the database, the .env file must be added into the server folder. I will send the .env file to Lisa along with the link to this repo. 

Thank you for this opportunity! :)

# How To Install
- Git Clone this repository (https://github.com/vwang4536/BeautyCounter-Assessment.git)
```
git clone https://github.com/vwang4536/BeautyCounter-Assessment.git
```

- Copy .env file that will be given into the server folder
   - Note: If the .env file cannot be sent, please email me at vwang4536@gmail.com and I will implement the authentication info into the URI connection string.

- Open application directory
```
cd BeautyCounter-Assessment
```

- Open client directory and install packages
```
cd src/client
npm install
```
- Redirect into server directory and install packages
``` 
cd ../server
npm install
```
- Run npm run start-application which will start both client and server concurrently
```
npm run start-application
```

# How To Use
- Type in a fruit name from the list of fruits above into the input box and click the 'Get Fruit!' button to view weight and image of that fruit
- Click on 'Get All Fruits!' to view all fruits that are saved
- Application also handles errors when fruits that are inputted are not saved
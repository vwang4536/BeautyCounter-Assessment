# BeautyCounter-Assessment
Fruit Dictionary is an application to check the weight and image of fruits. This application is created with Create-React-App and contains REST API to obtain information on fruit to be displayed on the client. MongoDB is implemented to save the data for the fruits.

Note: In order to connect to the database, .env file must be added. I will send the .env file to Lisa along with the link to this repo. 

Thank you for this opportunity!

# How To Use
- Git Clone this repository (git@github.com:vwang4536/BeautyCounter-Assessment.git)
```
git clone git@github.com:vwang4536/BeautyCounter-Assessment.git
```

- Copy .env file that will be given into the server folder
   - Note: If .env file was not given, please email me at vwang4536@gmail.com
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
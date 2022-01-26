# Project Countries APP

### What is it?

With the ***countries APP*** you can search for any country in the world and get information about them. Also you can create tourist activities and specify the countries where it will be developed.

### Which tecnologies did I use?

It's a ***Single Page Application*** that consumes data from restcountries API to get information about countries of the world and it's copied in the ***database***.
The ***back-end***it's made with **NodeJS, Express and Sequelize.**
The ***front-end*** i've used **ReactJS, Redux andd CSS** without the use of any style framework.

### Some of it's features:
##### Landing Page
    
It's the first screen you see when you get in the app. You can access to the app's main page through a button.

##### Home Page
    
 In the home page you can **search by** the country name dynamically. If it isn't a valid name you will get an alert.
 Also **filter** by the differents continents and tourist activities.
 **Order** them by number of pupolation or alphabetically.
    
##### Create activity

 Through a Redux controlled form, you can create many tourist activities. You need to complete every input or it will be not posted.
 If any of the countries you choose isn't right, you can delete it.
  
### Details page   

 If you click in any country name in the home page you will see more country **details.**
 Also, if the country you choose has any tourist activity associated, you will see those details.




## Notes
#### About
Application shows current weather data and 5 day forecast for a particular city. It mainly uses https://openweathermap.org/ endpoints to fetch the data. It asks for user location to show data on first load if user has not selected any city explicitly yet. 
#### Major APIs used
* ReactJS - as the frontend library
* Bootstrap - as the ui theme library
* Redux - to manage application state
* Axios - to call API endpoints
### Date
21st March 2021
### Location of deployed application
https://quirky-nightingale-95d904.netlify.app/
### Time spent
I completed the assignment in multiple breaks. In total approximately, it took me around 5-6 hours
### Assumptions made
I assumed that user should be see some data by default, so I asked for the user location and fetched the weather data using geo-coordinates. Moreover, I thought the city selection list should be provided to user from where they can select a city, instead of them typing in a plain text (which was prone to typos), so I used a third party api which allows me to search city using name of the city.
### Shortcuts/Compromises made
There is some redundancy in the way reducers and actions are created, we can improve them by instantiating them instead of creating separate files for each of them. All the reducers share a similar structure the type of the data property is the one thing which varies, for that we can instantiate them based on type as a deciding parameter.
There is only one .env file, which is also commited as this was a demo project, definitely in real application it will be handled in a different way.
### Stretch goals attempted
For the users to select city, I could have included the list in the bundle, but bundle size will increase a lot by doing so (even with the minified version). I opted to go for city listing API where users can search city by the city name. So instead of going for shortcut of using bundled data, I thought it was more appropriate to go for a better solution of using API to fetch list of cities in small chunks.
### Instructions to run assignment locally
install the node modules using ```npm install``` and run the project using ```npm start```
### What did you not include in your solution that you want us to know about?
For me it is the presentation of data, I designed it so it can be a bit presentable. Better design and layout is definitely the improvement area. For e.g. showing graphs the hourly tempratures of the was a better idea in my opinion; and improvements like that are not included in the project.
### Other information about your submission that you feel it's important that we know if applicable.
To save time, I have used some prebuilt components and APIs, for the UI theme, I am using bootstrap, and for typeahead textbox I am using an npm package based on react and bootstrap.

### Your feedback on this technical challenge

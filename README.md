# workout-app-MERN
App made with MongoDB, Express, React and Node where you can update your everyday routine in the gym.

### Setup and running
Go through each folder and `npm install` to install all dependencies

To start server: `npm run dev` --> will start nodemon server which updates on every change you make
To start react: `npm start` --> will open up a window where the frontend is

**Remember to move to /backend folder for server, and /frontend folder for react**

### Intro
To run this app you will need a [free MongoDB Account](https://www.example.com) and save the connection link on a .env file, also you can save there the PORT where your server will be running. e.g. PORT=4000

On the backend side you can CRUD workout routines by a custom API.

On the frontend side, React will provide all the data through fetching that API. Created a context where the state will be updated usign a dispatch reducer. You are able to read all your routines, fill a form to create a new one, and delete them.
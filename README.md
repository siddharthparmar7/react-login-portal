# React Login Portal

Complete the given React application that models a simple login portal that allows a user to login only if the user is registered. The necessary functionality should be achived using the concept of  React-Router, React-Redux, and Javascript's localStorage API.
Certain core React functionalities have already been implemented. Complete thr React application in order to pass all the unit tests.


# Demo
[Link to the demo (video)](https://www.loom.com/share/773b71edcb214116bc8fac0bce1de756)

# Specifications
A fake/dummy API backend has been provided to interact with the model. Use these API specifications in the controllers and services to add/create and authenticate a user.
- POST - /users/{userJSON} where userJSON comprises of the username and password.
  - Adds a user to the model. Returns the status code 200 on success.
- POST - / authenticate/{userJSON} where userJSON comprises of the user and password.
  - Checks whether the user exists in the model. Returns the username of tthe user on success.

Component flow diagram of the application is as follows:

![(http://react-login-portal-img.surge.sh/react-login-portal.png)](http://react-login-portal-img.surge.sh/react-login-portal.png)

# Framework Specific Instructions
- The project uses React 16 by default. Changing the React version may interfere with test anb is strictly discouraged.
- The project uses created-react-app and react-scripts to automate serving and testing of the application.
- The project uses enzyme as a testing framework. Please refrain from changing the test framework or the test themselves.  

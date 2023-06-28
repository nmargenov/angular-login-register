# angular-login-register

# Basic explanation of the site
- The purpose of the site is to implement login/register/logout functionality, where the back-end server returns a JWT and the front-end stores it in the localStorage. It has path guards and interceptor for the requests to the back-end server.

# login,register and logout
- Login and logout will send requests to the back-end server containing all the necessery data to login or create a new user. The server will return a JWT in both cases. The front-end will then store the JWT in the localStorage as 'authToken'. The logout will simply remove the 'authToken' from the localStorage.

# JWT from the back-end
- The JWT returned from the back-end will contain all of the user's information, excluding the password for safety reasons. It will return the user's ID,username,email,first name,last name and the age.

# How the front-end gets the information like the user's username from the JWT
- The front-end uses the jwt-decode package to decode the token. Then the front-end will implement the logic needed from there. It uses it only in the header component to get the user's username and display it when the user is logged-in.

# interceptor
- The auth interceptor will check if the request is sent a url which includes 'api',if so it will check if the token exists and will both cases are true it will set the 'x-authorization' in the headers to be the token and send the req with the token to the back-end. If one of the 2 cases is not true it will just send the request without modifying it.

# guards
## Back-end guards
### auth middleware
-The back-end has the auth middleware that checks if the request has the 'x-authorization' in its headers. If it doesn't it will simply call next(). If the token exists the middleware will decode it using the SECRET, then if the token is invalid it will return status 409 and block return a message 'Invalid authorization token!' to the front-end.If the token is good it will set the req.user = decodedToken.
### mustBeAuth
- mustBeAuth is a middleware used in case of back-end path protection. It will check if the req.user exists,previously set by the auth middleware(The auth middleware will be executed first always), if the req.user exists it will grand access, otherwise will return 'Unauthorized' to the front-end.
### mustBeGuest
- mustBeGuest is a middleware that does the opposite of mustBeAuth. It will check if req.user exists and if so it will return 'Forbidden' to the front-end;
## Front-end guards
### must-be-logged-in
- must-be-logged-in guard will check if the localStorage 'authToken' is set. If so it will grand access otherwise will navigate to /login.
### must-be-logged-out
- must-be-logged-out guard will check if the localStorage 'authToken' is set. If it's missing it will grand access otherwise will navigate to /.

# Minuses of the application
- Sadly the only way of veryfing if the token is 100% valid is by sending a request to the back-end server. If the user navigates in the application's routing system and uses only the routes, which doesn't need information from the back-end server, the token will not be verified. In this case the 'authToken' in the localStorage can be modified by the user without the front-end knowing so. However if the user modifies it, by sending a request to the back-end server, the back-end server will catch the invalid token and return 409 'Invalid authorization token'.
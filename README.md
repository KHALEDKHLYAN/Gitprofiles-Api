# Gitprofiles-Api
The GitHub API provides various endpoints to access and interact with GitHub user profiles. 
To access user profile information, you can make HTTP requests to the API endpoints using your preferred programming language or a tool like cURL.

Here are some of the main endpoints you can use to access GitHub profiles:

1. User Info Endpoint: This endpoint returns basic information about a GitHub user, such as their username, name, email address, bio, and more.
  You can access this endpoint by sending an HTTP GET request to the following URL: 
  
   https://api.github.com/users/{username}
  
2. User Repos Endpoint: This endpoint returns a list of repositories owned by a GitHub user.
You can access this endpoint by sending an HTTP GET request to the following URL:

   https://api.github.com/users/{username}/repos.
   
 3. User Followers Endpoint: This endpoint returns a list of users who are following a GitHub user. 
 You can access this endpoint by sending an HTTP GET request to the following URL: 
   
    https://api.github.com/users/{username}/followers.
    
 4. User Following Endpoint: This endpoint returns a list of users who a GitHub user is following. 
 You can access this endpoint by sending an HTTP GET request to the following URL:
    
    https://api.github.com/users/{username}/following
 
5. User Organizations Endpoint: This endpoint returns a list of organizations that a GitHub user belongs to. 
You can access this endpoint by sending an HTTP GET request to the following URL: 

    https://api.github.com/users/{username}/orgs.
   
How the code will apper in a webpage

![image](https://user-images.githubusercontent.com/95699811/219865144-c4510152-5f7d-49b2-a0ec-9b5e76edbd77.png)






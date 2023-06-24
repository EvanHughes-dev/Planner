/*
pseudo code for connecting to database


love chat gpt https://chat.openai.com/share/a455b30c-0f44-4baa-8171-602699a0b4ca


use fetch api: https://www.w3schools.com/js/js_api_fetch.asp
c# backend https://dotnet.microsoft.com/en-us/apps/aspnet/apis
host web api on ak's dad's server?

for now, host web api on old laptop

ip address from a dns server routed from the local ip

example here

Make a GET request to fetch user data from the backend
fetch('https://example.com/api/users')
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

 Make a POST request to create a new user
fetch('https://example.com/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'johndoe@example.com'
  })
})
  .then(response => response.json())
  .then(data => {
    // Process the response from the backend
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });


  with this being the backend C# code 

Define a route to handle GET requests for fetching users
[HttpGet]
[Route("api/users")]
public IHttpActionResult GetUsers()
{
     Retrieve user data from a database or any other data source
    var users = ...; // Retrieve users from the backend

    // Return the user data as JSON response
    return Json(users);
}

Define a route to handle POST requests for creating a new user
[HttpPost]
[Route("api/users")]
public IHttpActionResult CreateUser(UserDto userDto)
{
    // Process the received user data and save it to the backend
    var user = ...; // Process and save the user to the backend

    // Return the created user as JSON response
    return Json(user);
}

*/
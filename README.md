# rust-my-budget
A personal budget and finance application used for managing and visualizing monthly trends in your personal expenses. 

# Pre-requisites
* Docker - To run the app
* Postman - To test the API

# Instructions to run 
- Backend rust application has been containerized using Docker. To run the app and spin up the postgres DB, run the following command 
from root i.e. `rust-my-budget`

`docker compose up`

- Once the server starts, open postman
- In the request type select POST and type the url "http://localhost:8080/api/rust/users"
- In the text pane below, enter a username and email id and click `Send`
- Receive response with status code 200 and the newly added details.

###### Note - This testing of backend API end points through postman is just a way to test the server. A front-end based on react is under construction which will let us test this API directly from the UI.
## React-Redux-Shoe-store

"email": "eve.holt@reqres.in",
"password": "cityslicka"

**_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Restart the react server
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url wherever you use `http://localhost:8080`

### Understanding Component Structure

- App
  - Navbar
  - MainRoutes
    - Path: “/”, Page: Shoes (Public Route)<br/> - Filter.jsx<br/> - ShoeCard.jsx
    - Path: “/login”, Page: Login (Public Route)
    - Path: “/shoes/:id”, Page: SingleShoe (Protected Route/Page, accessible after logging in)

### Redux

- Store
  - AppReducer (logic related to shoes data)
  - AuthReducer (logic related to user login/authentication)

**NOTE**: Redux is mandatory for this application

### Features to build:

1. The user should be able to fetch the shoes data from the db.json file (using JSON-server, axios, Redux-thunk) and display the data when the application loads.
2. The data received from API calls should be stored in the Redux store.
3. Use the shoes data from redux store to display in the Shoes component.
4. ‘/shoes/:id’ : “SingleShoe” is a protected route. Make sure that it is accessible only after logging in, when the user clicks on the ShoeCard. Use https://reqres.in for login API.
5. Post `login`, the user should be redirected to the page, he was initially present, i.e<br/> - If the user went to the login page, from homepage(Shoes), then after successful login he should be redirected to homepage(Shoes)<br/> - If the user went to the login page, trying to access `SingleShoe`, then after successful login he should be redirected to `SingleShoe`
6. The user should be able to implement the filter functionality, based on the shoes category.<br/> - The search params should be updated with change in filter category selection.<br/> - The data should reflect the selected filters. An API call with the filter/category params should be made to GET the shoes data from db.json, using JSON-server<br/> - Also, ensure the selected filter/category persists even with page refresh.

- ![](https://i.imgur.com/pgjp8sa.png)

# Cachier des charges pour le site social media

## Mardi 25
### p1 ( With anthonio )

- create back-end folder
- create front-end folder
- install sanity.io based config whitout shemas
- choose google authentification
- create user.js in shema folder
- add import user.js in shema folder and add user in database
- create pin.js in shema folder and inside fields
- create comment.js in shema folder
- create save.js in shema folder

### p2

- create posterBy.js in shema folder
- add import files what created before in shema folder
- inside front-end folder init react project
- init tailwind to build modern websites
- create src folder and create index.js, app.js 
- add import react and react-router-dom
- create index.css in src folder then add @tailwind inside

### p3

- add font-family in index.css
- add className in App.js an h1 tag inside
- in package.json add dependecies which needed
- run npm start for testing --> it is work
- add import BrowserRouter in index.js and inside Router tag and add App component inside
- in App.js import Routes, Route and useNavigate

### p4

- in return add Routes tag and inside this Route tag and add path='login'
- create components folder and inside Login.jsx
- create container folder and inside Home.jsx

### p5 ( With Marie )

- create branch Auth with git flow
- import GoogleLogin from react-google-login in Login.jsx 
- import useNavigate from react-router-dom in Login.jsx
- import FcGoogle from react-router-dom in Login.jsx 
- create assets folder in src folder
- add Logo.png and background image and share.mp4
- add import them in Login.jsx
- add tailwind css in div in Login.jsx

### p6

- add div in div Login.jsx and video tag and shareVideo in Login.jsx
- add type, loop, controls, muted, autoplay in video tag
- add div after video tag
- add divs after them
- add GoogleLogin tag after them

### p7
- add props clientId, render method 
- add renderProps in paramater insite method
- in render method add button and css style
- call function FcGoogle inside button
- add style in button inside render method
- add text for the button
- add onClick, disabled, onSuccess, onFailure, cookiePolicy method on the button

### p8

- create authentification and create idAuth() in google cloud

## Mercredi 26
### Martin (with Hamid)
- console.log for test response google
- in login, destructuring for collect user data
- save user in Sanity
- create file client in container, it’s link front with id of Sanity
- with Sanity manage, copy projet id, register that id in .env
- in Sanity manage, generated a token, register in .env
- add Id and token in client.js
- import client in login
- if client not exist, create new
- in Sanity manage, generated CORS
- in Sanity manage, generated new token with more permission
- Auth ok

- add import useState, useRef, useEffect from react; HiMenu, AiFillCloseCircle from icons; Link, Route, Routes from router
- new file in component : Sidebar, UserProfile; import in home
- create new file in components : index.js with export of Sidebar, Login, UserProfile
- change import, two in one
- import client, import logo
- create pins in container, import it in home
- add css in div home, put Sidebar in
- add new div with css, HiMenu in, with css and onClick 
- hooks toggleSidebar
- add Link after HiMenu, logo in
- duplicate link, with parameter who call user
- const userInfo

### Après-midi  (with Anthonio)
- new folder utils
- create file in utils : data.js, check user and userID
- import data in home
- function useEffect
- hooks user
- change second in second link, logo by user image
- config icon 'AiFillCloseCircle' for close burger menu with css
-

## Jeudi 27
### Matin (with Marie)
- stylization of the sideBar

- in the Home.jsx file
  - add const scrollReff in const home and assign it useRef(null) 
  - add a new div that contains a Routes tag
  - added Route component in Routes tags
  - move HiMenu tags to previous div
  - moving toggleSidebar tags to previous
  
- in the Sidebar.jsx file
  - import the NavLink and Link components
  - import RiHomeFill components (react icon library)
  - import the IoIosArrowForward component
  - import logo
  - add the use and closeToggle parameters to the Sidebar arrow function
  - styling the parent div in Tailwind
  - adding a child div
  - adding a Link tag with the to, className and onclick props
  - add an img tag in Link with in src logo
  - transformation of the Sidebar constant into an arrow function
  - declare a handleCloseSidebar constant inside braces
  - followed by an arrow function and a condition close toggle
  - add a div under the Link tag
  - add a div under the Link tag
  - have it master the to and className props with an Active function
  - have declared two constant isNotActiveStyle and isActiveStyle outside of Sidebar function
  - stylization of the two constants in Tailwind

- addition of the word Home in the Sidebar plus the icon and Categories
  - added RiHomeFill component in NavLink tag
  - write Home under the component
  - have added an H3 with Discover Category in it
  - make an Array containing the categories, except the Sidebar function
  - under the H3 have used the .map method to loop the Array containing the categories and display them in the Sidebar
  - add the onclick handleCloseSidebar props to the NavLink tag
  - add the props key categorie.name to the NavLink tag

- added user image and user name in Sidebar
  - added user image and user name in Sidebar

  - creation of the Pin.jsx file in component
  - rafce no longer import by default
  - creation of the NavLink.jsx file in component
  - rafce no longer import by default
  - creation of the Feed.jsx file in component
  - rafce no longer import by default
  - creation of the PinDetail.jsx file in component
  - rafce no longer import by default
  - creation of the CreatPin.jsx file in component
  - rafce no longer import by default
  - creation of the Search.jsx file in component
  - rafce no longer import by default

### Aprè-midi (with Hamid)

- editing the Pin.jsx file
  - import the jsx file created previously
  - have declared userStateSnnepet in the Pin constant
  - adding a div to the parent div
  - add the Navbar component in the div
  - have added a searchTerm prop to it
  - have declared five Route components in a div
  - have declared five Route components in a div with path and element props


- added search bar
- edit the Navbar.jsx file
  - import the Link and useNavigat components
  - import the IoMdAdd and IoMdsearch components
  - transformation of the constant into an arrow function
  - add the searchTerm, setSearchTerm and user parameters between brackets
  - declare a navigat constant
  - followed by an if user return null condition
  - styled the parent div with Tailwind
  - have called it IoSearch
  - have added a text type input
  - added an onchange prop to it and targeted the value
  - have styled the input
  - have declared the search bar in Pin.jsx
  - have added a new div in Navbar.jsx
  - in this div have added a Link tag
  - have an img tag with src user.image
  - have duplicated the Link tag
  - removed the img tag
  - and called the component IoMdAdd
  - then have the style

- edit Feed.jsx file
  - add useState and useEffect to react tax
  - import useParams
  - import customer
  - import MasonryLayout
  - creating the MasoneryLayout file
  - rafce no longer import by default
  - declare usesTate in Feed.jsx
  - then a condition to display the loading message

- added loading bar
  - edit spinner file
  - import Loader from react-loader-spinner library
  - attention Loader to change name in the library
  - adding a message as a parameter to the Spinner constant
  - add the Loader component in the parent div


## Vendredi 28
### Matin (with Marie)
  - fix bug avec Sanity (error space bofore '->')
  - adding image in section pin
  - adding mouse enter and leave for appear button (download, save)
  - adding button delete with condition, only the user can delete their images
  - adding destination link, with a limiter character visible

### Après-midi (with Hamid)
  - import in create
  - new content in data : categories with name and image
  - css upload location with icon
  - error message of bad type of image
  - loading icon
  - adding input with title of pin
  - condition to check the image type
  - location for sending image, css, onclick for sending
  - if image send, we display the image + a button to delete it
  - adding input for entrer name for pin
  - adding user name under input
  - adding input about
  - add input destination link
  - select with category

### Solo
  - adding a map for show all category from data
  - adding save pin
  - adding all necessary import in detailPin
  - adding pinDetail and pinMoreDetail in data
  - adding content in detail pin : image, css, destination, name, about the picture, the name of the poster, image profile user
  - adding comment
  - adding under pin detail, other pin with same category
  - adding new rule for lenght of destination

## Dimanche 30
### Solo
#### Profile
  - adding import in user profile file
  - create useState for user, pins, text and active button
  - adding condition different of user start loading
  - adding use effect for fetch data
  - adding image with random image for source (profile decoration) 
  - adding image user, name under image random
  - adding icon for logout
  - adding two button in profile : Created and saved
  - adding in profile, list of the pin add and list of the pin saved
  - adding condition, if no pin posted, message showing
  - changing list of the categories from data
  - adding image before the name category
  - adding message if no pin in category (bug need fix)

#### Search
  - adding import in search
  - adding use state : pins and loading
  - adding and testing (change loading in true) loading and the message
  - adding MasonryLayout
  - adding message if no pin found
  - adding use effect for fetch a search in data
  - changing favicon, name site
  - changing read me, with more content

#### Deployment
  - adding redirects file in public
  - in terminal command : npm run build
  - connecte to netlify
  - drop build folder in netlify
  - wait and rename the project
  - open Sanity manage
  - create new CORS origins
  - adding new url in google api
  - adding '?' before google id in pin.jsx, and for item posted by
  - adding a fetch of user in App.js
  - adding condition, if not a user, redirect login page
  - in terminal, npm run build
  - reload build folder in netlify

## Ending
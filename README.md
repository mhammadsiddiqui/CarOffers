# Sixt Car Offers App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Used Version

![version](https://img.shields.io/badge/node-%4014.18.1-green)
![version](https://img.shields.io/badge/react-%4017.0.2-blue)

## Solution

Solution|Author(s)
--------|---------
sixt.app.cars-offer | Author details (Hammad Siddiqui)

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder (i.e. cd Sixt.CarOffers)
- in the command-line run:
  - **npm install**
  - **npm start**

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Why ?

-`Axios`
  This package is used to make promise-based request. Although I got CORS errors on trying to fetch data. So I saved the data as a json file ‘carOffers.json’. 
  But I left the implementation as it is to show how I intended to get data.
-`sweetalert2`
  This package is used to show alert box in case of error on fetching data. So, user knows if network request was failed.
-`Bootstrap, reactstrap`
  This packages are used for styling of navigation tabs and layout.


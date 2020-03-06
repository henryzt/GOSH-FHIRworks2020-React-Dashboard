# FHIR Responsive React Dashboard

## Screenshots

### Overview
![img](screenshots/demo.gif)

### FHIR Data Viewer (With Raw Json viewer)
The patient list can be viewed by a choice of table or card layout. In the table layout, the user can easily sort the entire database by clicking the table head, and view full patient observation in a popup drawer. 

For each observation entry, more advanced user can even view the raw FHIR json for more detailed info.

![img](screenshots/list.gif)

### Search
Due to the extensiveness of FHIR data structure, each search rule has to be carefully written, thus it is quite difficult to write an advanced search function with these many data inputs. However, with the help of the antd library, quite promising results can still be acheived.

![img](screenshots/search.gif)

### Statistics
Although this is not required in project (No.6) description, I would love to learn and utilizing chart.js with React to visiualize dataset like FHIR. A filter and restructure function has been written to manipulate the raw FHIR data and making it easier to be analyzied in the app.

![img](screenshots/stats.gif)

### Responsive Design
The web app is fully responsive, down to every smaller detail. This is quite hard, as the ant design library doesn't came with responsive design. In addition, I have chosen a separate menu component for mobile and desktop (bottom tabbar and side menu), which will be enabled and disabled programmatically. By doing this, it will also make the process to migrate the app to a React native app much easier, which can be installed on native smart phone and tablets.

![img](screenshots/responsive1.gif)

![img](screenshots/responsive2.gif)

![img](screenshots/responsive3.gif)

### Other Details

![img](screenshots/details.gif)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


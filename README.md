<div id="top"></div>

<h1 align="center">KonimBo Electronics Store Assignment Client Vue JavaScript</h1>

<div align="center">
  <p align="center">
    This client-side application is part of the KonimBo Electronics Store assingment built with Vue and JavaScript. 
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-application">About The Application</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#how-to-install">How To Install</a></li>
    <li><a href="#available-scripts">Available Scripts</a></li>
  </ol>
</details>

<!-- ABOUT THE APPLICATION -->

## About The Application

This client-side application is part of the KonimBo Electronics Store assingment.

It is built with the Vue library to build a single page application uses mock data served with json-server library.

Additionally, in order to send data from the contact form, we use [Webhook](https://webhook.site/#!/ec733de4-d38e-443c-9fde-0065a3484ff1).

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Vue](https://vuejs.org/)
-   [VueX](https://vuex.vuejs.org/)
-   [Vue Router](https://router.vuejs.org/)
-   [Sass](https://sass-lang.com/)
-   [JSON-Server](https://www.npmjs.com/package/json-server)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION INSTRUCTIONS -->

## How To Install

**Git clone**

```
git clone https://github.com/almoggutin/Konimbo-Electronics-Store-Client-Vue-JS.git
```

**Instructions**

-   After cloning the the repository run `npm i` in order to install all the dependencies.
-   Create an env file in the root of the project named `.env` and fill in the follwing variables: VUE_APP_API_URL, VUE_APP_MAIL_API_URL.

<p align="right">(<a href="#top">back to top</a>)</p>

<!--  AVAILABLE SCRIPTS -->

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

This includes hot-reloads
You may also see any lint errors in the console.

### `npm run server`

Runs the json-server library with our mock-data in the `db.json` file. \
This allows us to mock a REST API server in order to make requests to get the data to the client.

### `npm run dev`

Runs both serve & server scripts simultaneously.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run lint`

Lints and fixes files.

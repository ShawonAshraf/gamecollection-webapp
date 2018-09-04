# gamecollection-webapp

> Front end for [gamecollection-api](https://github.com/ShawonAshraf/gamecollection-api)

> Live @ [https://rockash93-games.herokuapp.com](https://rockash93-games.herokuapp.com)

## Application Architecture
> Server side rendering

This web app runs on `express` and `handlebars`. The express backend fetches data from the API using `axios` and renders them to `handlebars` templates.

## Syntax
- Code-Style : Check [Airbnb's JS Style Guide](https://github.com/airbnb/javascript)
- `ES6`
- Transpiled using `Babel`

## Build and Run

Clone the repo and install the dependencies.
```bash
npm install
```

To run locally without transpiling,
```bash
npm run watch
```
To run the transpiled version
```bash
npm run build
npm start
```

**Make sure you've the API running somewhere! Else you'll get empty response pages which ain't so pleasing to look at.**

## CI/CD
You can use travis for CI/CD. Alternatively you can also use heroku to build + deploy the project on new commits.

**You can just push the button below if you have an account on herok ;)**

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Stylesheets
- Bootstrap 3
- I used [this](https://www.w3schools.com/w3css/tryw3css_templates_band.htm) theme from [w3schools](https://www.w3schools.com)
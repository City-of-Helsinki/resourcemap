# Oodi reservation map

This app displays Oodi 2nd floor map and interactively loads map status from Respa. This app is designed to be used with large touch screen display.

App uses Respa API:  
https://dev.hel.fi/apis/respa/

## Deployment

When pushed to master branch on BitBucket the project is automatically build by Pipelines. Manual trigger is required to deploy the project to S3.

## Installation

Run `npm install`

## Development

Run `npm start`

## Testing

Although the project supports Jest tests no tests has been written so far. Tests should be written for business critical functionality.

Run tests: `npm test`

## Requirements

- Node 8

## Using docker

If you don't want to install node you can run it inside Docker:
`docker run -it --network host -w /app -v $(pwd):/app -e HOST=0.0.0.0 -e PORT=80 node:8.11.4-jessie npm start`

## Technology stack

This app is built on top of React Boilerplate 3.6.0. Key tools & libraries:

Core

- React
- React Router
- Redux
- Redux Saga
- Reselect
- ImmutableJS
- Styled Components

Unit Testing

- Jest
- Enzyme

Linting

- ESLint
- Prettier
- stylelint

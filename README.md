### WebdriverIO-v8 boilerplate code with Cucumber BDD

Project to run WebdriverIO (v8) tests with [Cucumber](https://cucumber.io/) and brings **true** [BDD](http://en.wikipedia.org/wiki/Behavior-driven_development) to JavaScript. Instead of writing complicated test code that only developers can understand, Cucumber maps an ordinary language to code and allows to start with the test process in the early stages of your product development.

## Requirements

- Node version 16 or higher
- Chrome version 111.0

If you have another version of Chrome, you just have to update it in package.json/devDependencies/chromedriver

## Quick start

1. npm install
2. npm run wdio

## Structure

- The features in Gherkin are in `./features`.
- Steps are inside the `./features/step-definitions` folder.
- Page Object Models are inside the `./features/pageobjects` folder.

## API WebdriverIO

The WebdriverIO API documentation can be found at https://webdriver.io/docs/api

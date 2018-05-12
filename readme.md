Test case fo Jest module separation
===================================

When running the code in Jest it starts to fail with "MY_GLOBAL is not defined" and also with issues when using instanceof since objects have been created in different contexts.

## Setup

    yarn

## Reproduce error

    yarn test


## Expected behavior

    yarn start

## Passing tests
When the tests are run in a custom environment, they can be made to pass by manually setting globals.

    yarn test-passing


Custom environment code:

    const JsDomEnvironment = require('jest-environment-jsdom');

    class CustomEnvironment extends JsDomEnvironment {
      async setup() {
        await super.setup();
        global.MY_GLOBAL = 'I was set in the environment 2';
        global.document = this.global.document;
      }

      async teardown() {
        await super.teardown();
      }

      runScript(script) {
        return super.runScript(script);
      }
    }

    module.exports = CustomEnvironment;

Run with this commandline or specify in the config file:

    jest --testEnvironment ./CustomEnvironment.js

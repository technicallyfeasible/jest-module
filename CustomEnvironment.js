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

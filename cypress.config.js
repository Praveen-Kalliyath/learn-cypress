const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    watchForFileChanges: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      // PRAVEEN
    },
  },
});

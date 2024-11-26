module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      requestAnimationFrame('cypress-mochawesome-reporter/plugin')(on)// implement node event listeners here
    },
  },
};

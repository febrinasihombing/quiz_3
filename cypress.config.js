const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // Implementasikan event listener Node.js di sini jika diperlukan
      // Contoh: on('task', { customTask: () => 'Result' });
    },
  },
});
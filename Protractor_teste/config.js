exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'C:/Users/faria/Documents/S206_/Protractor_teste/*.js' // Inclui todos os arquivos .js na pasta
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    },
  },
};

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://diplomatiegouvfr.github.io',
      browser: 'chrome',
      waitForTimeout: 2000
    },
    CheckboxHelper: {
      require: './helpers/checkbox_helper.js',
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'codecept'
}
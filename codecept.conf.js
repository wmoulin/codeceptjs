exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://diplomatiegouvfr.github.io',
      browser: 'firefox',
      waitForTimeout: 2000,
      logLevel: "error"
    },
    CheckboxHelper: {
      require: './helpers/checkbox_helper.js',
    },
  },
  include: {},
  bootstrap: null,
  mocha: {
    "reporterOptions": {
        //"mochaFile": "reports/result.xml"
        "reportDir": "reports"
    }
  },
  name: 'codecept'
}
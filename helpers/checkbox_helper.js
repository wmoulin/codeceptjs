const output = require("codeceptjs/lib/output")

class MyHelper extends Helper {

  newCheckBoxHelperInstance(id) {

    return {
      /**
       * test si un champ checkbox/switch est coché ou non
       * @param checked {boolean} coché ou non
       */
      isChecked: async (checked) => {
        output.step({comment: `test checkbox with selector "${id}" is ${checked === true ? "checked" : "not checked"}` });
        await this.helpers['WebDriver'].waitForVisible(id + " + span");
        await this.helpers['WebDriver'].seeElementInDOM(id);
        if(checked) {
          await this.helpers['WebDriver'].seeCheckboxIsChecked(id);
        } else {
          await this.helpers['WebDriver'].dontSeeCheckboxIsChecked(id);
        }
      },
      check: async () => {
        output.step({comment: `check checkbox with selector "${id}"`});
        await this.helpers['WebDriver'].waitForVisible(id + " + span");
        await this.helpers['WebDriver'].seeElementInDOM(id);
        try {
          await this.helpers['WebDriver'].dontSeeCheckboxIsChecked(id);
        } catch(e) {return ;}
        await this.helpers['WebDriver'].checkOption(id);
      },
      uncheck: async () => {
        output.step({comment: `uncheck checkbox with selector "${id}"`});
        await this.helpers['WebDriver'].waitForVisible(id + " + span");
        await this.helpers['WebDriver'].seeElementInDOM(id);
        try {
          await this.helpers['WebDriver'].seeCheckboxIsChecked(id);
        } catch(e) {return ;}
        await this.helpers['WebDriver'].checkOption(id);
      }
    }
  }

  
}

module.exports = MyHelper;

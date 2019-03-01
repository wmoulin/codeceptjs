
Feature('checkbox');

Scenario('test something', async (I) => {

  let cbHelper = await I.newCheckBoxHelperInstance("#criteres\\.partenaire\\.vip");


  await I.amOnPage('/applitutoriel-online');
  I.wait(1);

  await I.waitForVisible('#dropdown-user-mock-drop > a > span.label.profil-label');
  await I.click("#dropdown-user-mock-drop > a > span.label.profil-label");
  await I.waitForVisible('#dropdown-user-mock-dropcontent > ul > li:nth-child(1) > a');
  await I.click("#dropdown-user-mock-dropcontent > ul > li:nth-child(1) > a");
  await I.waitForVisible("#menu-main > button");
  await I.click("#menu-main > button");
  await I.waitForVisible("#nav\\/0\\/0");
  await I.click("#nav\\/0\\/0");
  await I.waitForVisible("#criteres\\.partenaire\\.vip + span");

  
  await cbHelper.check();
  await cbHelper.isChecked(true);
  await cbHelper.check();
  await cbHelper.isChecked(true);
  await cbHelper.uncheck();
  await cbHelper.isChecked(false);
});

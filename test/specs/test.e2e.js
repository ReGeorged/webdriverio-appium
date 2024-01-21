import MenuNavigationBarScreen from "../../screens/MenuNavigationBarScreen.js";
import MenuScreen from "../../screens/MenuScreen.js";
import BottomNavigationScreen from "../../screens/bottomNavigationScreen.page.js";
import HomeScreen from "../../screens/HomeScreen.js"
import PopupOfferScreen from "../../screens/PopupOfferScreen.js"
import SettingsScreen from "../../screens/SettingsScreen.js"
import AlertScreen from "../../screens/AlertScreen.js";


describe('SHould Navigate To Settings > Restore Subscription and Validate Error Message ', () => {
  before(async () => {
    await PopupOfferScreen.declineOfferIfVisible();
  });

  it('Should Navigate to home page', async () => {
    expect(await HomeScreen.uniqueLocator).toBeDisplayed("Home page is not visible");
    expect(await BottomNavigationScreen.uniqueLocator).toBeDisplayed("Bottom navigation bar is not visible");
  });

  it("Should navigate to Menu screen", async () => {
    BottomNavigationScreen.menuBtn.click();
    expect(await MenuScreen.uniqueLocator).toBeDisplayed("Menu page is not visible");
    expect(await MenuNavigationBarScreen.uniqueElement).toBeDisplayed("Menu navigation bar is not visible");
  });

  it("Should navigate to Settings screen", async () => {
    await MenuNavigationBarScreen.settingsButton.click();
    expect(await SettingsScreen.uniqueLocator).toBeDisplayed("Settings page is not visible");
  });

  it("Should throw an error while trying to restore subscriptions", async () => {
    await SettingsScreen.restoreSubscriptionButton.click();
    expect(AlertScreen.uniqueLocator).toBeDisplayed("Alert is not visible");

  });

  it("Should validate Error Message", async () => {
    expect(await AlertScreen.getAlertText()).toEqual("Unable to restore subscription.", "Alert text is not correct");
  });

  it("Alert should disappear after accepting it", async () => {
    await AlertScreen.acceptAlert();
    expect(await AlertScreen.uniqueLocator).not.toBeDisplayed("Alert is still visible");
  });

});


describe('Navigate to home page and assert that topic is not empty', () => {
  before(async () => {
    await PopupOfferScreen.declineOfferIfVisible();
  });

  it('Should Navigate to home page', async () => {
    expect(await HomeScreen.uniqueLocator).toBeDisplayed("Home page is not visible");
  });

  it("Should assert first topic text", async () => {
    expect(await HomeScreen.getFirstTopicText()).not.toEqual("", "Topic text is empty");
  });



});
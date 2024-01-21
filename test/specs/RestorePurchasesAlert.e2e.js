import MenuNavigationBarScreen from "../../screens/MenuNavigationBarScreen.js";
import MenuScreen from "../../screens/MenuScreen.js";
import BottomNavigationScreen from "../../screens/BottomNavigationScreen.page.js";
import HomeScreen from "../../screens/HomeScreen.js"
import PopupOfferScreen from "../../screens/PopupOfferScreen.js"
import SettingsScreen from "../../screens/SettingsScreen.js"
import AlertScreen from "../../screens/AlertScreen.js";

describe('Should Navigate To Settings > Restore Subscription and Validate Error Message ', () => {
  before(async () => {
    await PopupOfferScreen.declineOfferIfVisible();
  });

  it('Should Navigate to home screen', async () => {
    expect(await HomeScreen.uniqueLocator).toBeDisplayed("Home screen is not visible");
    expect(await BottomNavigationScreen.uniqueLocator).toBeDisplayed("Bottom navigation bar is not visible");
  });

  it("Should navigate to Menu screen", async () => {
    await BottomNavigationScreen.menuBtn.click();
    expect(await MenuScreen.uniqueLocator).toBeDisplayed("Menu screen is not visible");
    expect(await MenuNavigationBarScreen.uniqueElement).toBeDisplayed("Menu navigation bar is not visible");
  });

  it("Should navigate to Settings screen", async () => {
    await MenuNavigationBarScreen.settingsButton.click();
    expect(await SettingsScreen.uniqueLocator).toBeDisplayed("Settings screen is not visible");
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



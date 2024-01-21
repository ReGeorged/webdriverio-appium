import fs from 'fs';
import MenuNavigationBarScreen from "../../screens/android/MenuNavigationBarScreen.js";
import MenuScreen from "../../screens/android/MenuScreen.js";
import BottomNavigationScreen from "../../screens/android/BottomNavigationScreen.page.js";
import HomeScreen from "../../screens/android/HomeScreen.js"
import PopupOfferScreen from "../../screens/android/PopupOfferScreen.js"
import SettingsScreen from "../../screens/android/SettingsScreen.js"
import AlertScreen from "../../screens/android/AlertScreen.js";

describe('Should Navigate To Settings > Restore Subscription and Validate Error Message ', () => {

  before(async () => {
    // Start recording before the scenario
    await driver.startRecordingScreen();
    await PopupOfferScreen.declineOfferIfVisible();
  });

  after(async function () {
    // Stop recording after the scenario
    let video = await driver.stopRecordingScreen();

    // Save the video to a file
    fs.writeFileSync(`./videos/${this.currentTest.title}.mp4`, Buffer.from(video, 'base64'));
    // comment above line and uncomment below to save video only if the scenario had a fail
    /*
    if (this.currentTest.state === 'failed') {
      fs.writeFileSync(`./videos/${this.currentTest.title}.mp4`, Buffer.from(video, 'base64'));
    }
    */

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



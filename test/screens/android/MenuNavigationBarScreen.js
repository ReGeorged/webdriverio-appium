class MenuNavigationBarScreen {

    get uniqueElement() {
        let uniqueElement = $('~SAVED, Button.');
        uniqueElement.waitForDisplayed();
        return uniqueElement;
    }

    get settingsButton() {
        let settingsButton = $('~SETTINGS, Button.');
        settingsButton.waitForDisplayed();
        return settingsButton;
    }
}

export default new MenuNavigationBarScreen();

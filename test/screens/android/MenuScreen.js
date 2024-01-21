class MenuScreen {
    
    get uniqueLocator() {
        let uniqueElement = $('//android.widget.TextView[@text="Home"]')
        uniqueElement.waitForDisplayed();
        return uniqueElement;
    }
}

export default new MenuScreen();


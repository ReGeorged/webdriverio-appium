class AlertScreen {

    get uniqueLocator() {
        let uniqueElement = $('//*[@resource-id="android:id/parentPanel"]');
        uniqueElement.waitForDisplayed();
        return uniqueElement;
    }

    async getAlertText() {
        return await $('//android.widget.TextView[@resource-id="android:id/message"]').getText()
    }

    async acceptAlert() {
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
    }
}
export default new AlertScreen();
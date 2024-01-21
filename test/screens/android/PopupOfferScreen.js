class PopupOfferScreen {

    get uniqueLocator() {
        let uniqueElement = $('//android.widget.TextView[contains(@text, "Special offer")]');
        uniqueElement.waitForDisplayed();
        return uniqueElement;
    }

    get closeButton() {
        let closeButton = $('~Close. Button.');
        closeButton.waitForDisplayed();
        return closeButton;
    }

    async declineOfferIfVisible() {
        try {
            await this.uniqueLocator.waitForDisplayed();
        } catch (error) {
            return;
        }
        const isPopupDisplayed = await this.uniqueLocator.isDisplayed();
        if (isPopupDisplayed) {
            await this.closeButton.click();
        }
    }
}

export default new PopupOfferScreen();
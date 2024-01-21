class SettingsScreen {

    get uniqueLocator() {
        return $('//android.widget.TextView[@text="Settings"]')
    }
    get restoreSubscriptionButton() {
        return $('~Restore Subscription, ')
    }
}

export default new SettingsScreen();
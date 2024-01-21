class HomeScreen {
    get uniqueLocator() {
        let uniqueElement = $('//android.widget.TextView[@text="News"]');
        uniqueElement.waitForDisplayed();
        return uniqueElement;
    }

    get firstTopic() {
        let firstTopic = $('//android.widget.ScrollView[@content-desc="newsfeed-container"]//*[@class="android.widget.Button" and @clickable="true"]')
        firstTopic.waitForDisplayed();
        return firstTopic;
    }

    async getFirstTopicText() {
        let firstTopic = await $('//android.widget.ScrollView[@content-desc="newsfeed-container"]//*[@class="android.widget.Button" and @clickable="true"]');
        firstTopic.waitForDisplayed();
        return firstTopic.getAttribute('content-desc');
    }
}

export default new HomeScreen();
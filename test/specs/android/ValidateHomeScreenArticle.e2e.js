import HomeScreen from "../../screens/android/HomeScreen.js"
import PopupOfferScreen from "../../screens/android/PopupOfferScreen.js"

describe('Navigate to home page and assert that Article/topic is not empty', () => {
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
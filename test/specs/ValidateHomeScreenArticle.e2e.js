import HomeScreen from "../../screens/HomeScreen.js"
import PopupOfferScreen from "../../screens/PopupOfferScreen.js"
import bottomNavigationScreenPage from "../../screens/BottomNavigationScreen.page.js";

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
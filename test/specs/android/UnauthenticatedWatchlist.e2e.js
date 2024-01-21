import HomeScreen from "../../screens/android/HomeScreen.js"
import PopupOfferScreen from "../../screens/android/PopupOfferScreen.js"
import BottomNavigationScreenPage from "../../screens/android/BottomNavigationScreen.page.js"
import WatchListScreen from "../../screens/android/WatchListScreen.js"
import SignUpScreen from "../../screens/android/SignUpScreen.js"
describe('Navigate to Watchlist and proceed to Sign Up Screen', () => {
    before(async () => {
        await PopupOfferScreen.declineOfferIfVisible();
    });

    it('Should Navigate to home page', async () => {
        expect(await HomeScreen.uniqueLocator).toBeDisplayed("Home screen is not visible");
    });

    it("Should navigate to watchlist", async () => {
        await BottomNavigationScreenPage.watchlistBtn.click();
        expect(await WatchListScreen.uniqueLocator).toBeDisplayed("Watchlist screen is not visible");
    });

    it("Register to create a new watchlist button should be visible", async () => {
        expect(await WatchListScreen.registerToUseWatchlistButton).toBeDisplayed("Register for watchlist button is not visible");
    });

    it("Should click on register button and open registration form", async () => {
        await WatchListScreen.registerToUseWatchlistButton.click();
        expect(await SignUpScreen.uniquerLocator).toBeDisplayed("Sign Up screen is not visible");
    });

});
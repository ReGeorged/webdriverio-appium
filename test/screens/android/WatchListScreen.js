class WatchListScreen {

    get uniqueElement() {
        let uniqueElement = $('//android.widget.TextView[@text="Watchlist"]');
        uniqueElement.waitForDisplayed();
        return uniqueElement;
    }

    get registerToUseWatchlistButton(){
        let registerToUseWatchlistButton = $('~REGISTER TO CREATE A WATCHLIST');
        registerToUseWatchlistButton.waitForDisplayed();
        return registerToUseWatchlistButton;
    }
}

export default new WatchListScreen();
class BottomNavigationScreen {

    get uniqueLocator() {
        let navbar = $("~nav-bar");
        navbar.waitForDisplayed();
        return navbar;
    }

    get menuBtn() {
        let menuBtn = $("~MENU tab");
        menuBtn.waitForDisplayed();
        return menuBtn;
    }

    get watchlistBtn() {
        let watchlistBtn = $("~WATCHLIST tab");
        watchlistBtn.waitForDisplayed();
        return watchlistBtn;
    }
}

export default new BottomNavigationScreen();
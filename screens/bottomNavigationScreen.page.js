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

}

export default new BottomNavigationScreen();
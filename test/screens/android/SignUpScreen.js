class SignUpScreen{
    
    get uniquerLocator(){  
        let uniqueElement = $('~Create an Account');
        uniqueElement.waitForDisplayed();
        return uniqueElement;
    }
}

export default new SignUpScreen();
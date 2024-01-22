# Project is using WebdriverIO framework with mocha in javascript and Appium 
 
# $ First Step is to configure environment (Java, Android Studio, Virtual devices etc..)

## To start appium server on default port: 4723 - run:
```
appium
```
## To run tests, run next command in root directory:
```
# first install dependnecies:
npm install
# then run tests
npx wdio
```


# Project is configured to automatically generate allure report for CI purposes, to serve it run:

```
npx allure open
```

# Or the full command to Generate Allure report and serve it 
```
npx allure generate allure-results && npx allure open
# OR run them separately
# --clean for overridign old reports
npx allure generate allure-results --clean
```
![Screenshot](allure.png)


### <i> P.S In this project i decided not to use typical POM design pattern as mocha assertions looked weird and the encapsulating functionality behind the pattern was not that much from this viewpoint </i>

## <b>For the test case documentation:
 the functional scenario approach is not BDD (like cucumber) but is still good of self documenting the test cases and scenarios </b>

## <u> WebdriverIO s VideoReporter did not work</u>
   so i wrote my own implementation in [RestorePurchasesAlert test](./test/specs/android/RestorePurchasesAlert.e2e.js)


# you can see the video here: [PathToTestRecording](./videos/Alert%20should%20disappear%20after%20accepting%20it.mp4)



# <b> Test description </b>
### Restore purchases
  unlogined user tries to restore purchases, should get error message, and should be able to close it

### ValidateHomeScreenArticle: 
  smoke test, validates that home page is working and articles are loading

### Watchlist
   if unloggined user goes to watchlist, should be met with an option (button) to sign up to use the watchlist, upon clicking on the button should be redirected to signup page


# <b> Project structure </b>
   the structure is pretty generic, as mentioned above decided  not to continue the suite with  POM approach (it is still in old commits) as assertions looked weird, and gave us little fucntionality.
   the /screens/android package is for android screens (as we may add ios screens in future) each screen (page/frame) is in its own class and has unuqueLocator element, which is first used to assert that the screen is open and then continue the logic
   the tests are structured in similar way, each it() block is small test case that in conclusion gives us functional scenarios.
    its apparent that project can be improved in many ways.


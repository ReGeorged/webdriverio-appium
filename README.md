# $First configure env

## To start appium server on default port: 4723 - run:
```
appium
```
## To run tests, run next coomand in root directory:
```
npx wdio
```
# Generate Allure report and serve it 
```
npx allure generate allure-results && npx allure open
# OR run them separately
# --clean for overridign old reports
npx allure generate allure-results --clean
npx allure open
```
![Screenshot](allure.png)


### In this project i decided not to use typical POM design pattern as mocha assertions looked weird and the encapsulating functionality behind the pattern was not that much from this viewpoint

# configure env
## run command "appium" to launch on default 4723 port
## run npx wdio to run tests


# Generate Allure report and serve it 
```
npx allure generate allure-results && npx allure open
# OR run them separately
# --clean for overridign old reports
npx allure generate allure-results --clean
npx allure open
```
# Cypress Dojo

This is a simple Website that you can practice setting up and writing 2e2 tests

## Installation

Fork or clone your own copy.

Setup Cypress for 2e2 testing

Install Cypress (desktop app and cli)
```bash
npm -D install cypress
```

Add this to your npm scripts in package.json
```json
"e2e-test-app":"cypress open",
"2e2-test-cli":"cypress run"
```
Run this command to run the tests
To see results in Cypress app
```bash
npm run e2e-test-app 
```
Or to see results in terminal
```bash
npm run e2e-test-cli 
```

## Usage

1. Open index.html in live server (to see how the website works)
2. Write e2e tests in Cypress for the practice test cases below
3. Make sure all tests pass and work correctly

## Practice test cases

These Cypress E2E tests will cover the simplified login/logout flow:

### 1. Test that the user can log in with valid credentials:
- Input valid username (`admin`) and password (`password123`) into the form.
- Submit the form.
- Verify that the task manager section is displayed.

### 2. Test that the user cannot submit the login form with invalid credentials and is shown a message:
- Input invalid credentials into the form.
- Submit the form.
- Verify that the error message is displayed.

### 3. Test that the user can log out and is returned to the login form:
- After logging in, click the logout button.
- Verify that the login form is shown again.

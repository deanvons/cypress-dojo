# Cypress Dojo

### 1. Test that the user can log in with valid credentials:
- Input valid username (`admin`) and password (`password123`) into the form.
- Submit the form.
- Verify that the task manager section is displayed.
- Verify that a welcome alert pops up

### 2. Test that the user cannot submit the login form with invalid credentials and is shown a message:
- Input invalid credentials into the form.
- Submit the form.
- Verify that the error message is displayed.

### 3. Test that the user can log out and is returned to the login form:
- After logging in, click the logout button.
- Verify that the login form is shown again.

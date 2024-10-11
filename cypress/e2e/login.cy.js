const url = "http://127.0.0.1:5501/"

describe('Login and Logout functionality', () => {
    beforeEach(() => {
        // Visit the login page before each test
        cy.visit(`${url}index.html`);
    });

    it('should allow the user to log in with valid credentials', () => {
        // Input valid credentials
        cy.get('#username').type('admin');
        cy.get('#password').type('password123');

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Verify that the task manager section is visible
        cy.get('#taskManagerSection').should('be.visible');
    });

    it('should not allow the user to log in with invalid credentials and display an error message', () => {
        // Input invalid credentials
        cy.get('#username').type('invalidUser');
        cy.get('#password').type('wrongPassword');

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Verify that the error message is displayed
        cy.get('#loginError').should('be.visible');
    });

    it('should allow the user to log out and return to the login form', () => {
        // Log in first
        cy.get('#username').type('admin');
        cy.get('#password').type('password123');
        cy.get('button[type="submit"]').click();

        // Verify that the task manager section is visible
        cy.get('#taskManagerSection').should('be.visible');

        // Log out
        cy.get('#logoutButton').click();

        // Verify that the login form is shown again
        cy.get('#loginSection').should('be.visible');
    });
});

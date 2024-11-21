describe('Site Tests', () => {
  it('Should show the homepage hero', () => {
    cy.visit('/');
  });

it('Should visit the login page', () => {
  cy.visit('/login');

  cy.get('')
})
//  Create a test that does the following:
  // - Visit the login page
  // - Fill out the email and password inputs
  // - Click the submit button
  // - Test that the 'Your Pets' header shows on the dashboard page
  
    it('Should login a user', () => {
      cy.visit('/login');
    });  
      // Fill out the email and password inputs
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
  
      // Click the submit button
      cy.get('form button').click();
  
      // Test that the 'Your Pets' header shows on the dashboard page
      cy.get('h3').contains('Your Pets');
    });
describe('my first set of tests', () => {
    it('my first test', () => {
      cy.visit('/');
      cy.contains('h1', /list/);
      cy.findByText(/todo/i);
      cy.get('.container').find('h1');
    });
  });
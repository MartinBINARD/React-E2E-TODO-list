/* eslint-disable no-undef */
describe('my first set of tests', () => {
  it('my first test', () => {
    cy.visit('/');
    cy.contains('h1', /list/);
    cy.findByText(/todo/i);
    cy.get('.container')
      .find('h1')
      .should('be.a', 'object')
      .and('have.class', 'mb-20')
      .and('have.css', 'backgroundColor', 'rgb(255, 0, 0)')
      .and('have.attr', 'id', 'unid');
  });
});

describe('Visitor can see functionality', () => {
  beforeEach(() => {
    cy.visit("/")
   
  });

  it('Visitor can see the header', () => {
    cy.get('[data-workshops]').should("contain", "Workshops")
    cy.get('[data-testing]').should("contain", "Testing")
    cy.get('[data-vue]').should("contain", "Vue")
    cy.get('[data-productivity]').should("contain", "Productivity")
    cy.get('[data-node]').should("contain", "Node")
    cy.get('[data-react]').should("contain", "React")
  });
  
  it('Visitor can see Workshops content', () => {
    cy.get('[data-workshops]').click()
    cy.get('[title]').should("contain", "Testing")
    cy.get('[category]').should("contain", "Vue")
    cy.get('[price]').should("contain", "Productivity")

  });
});
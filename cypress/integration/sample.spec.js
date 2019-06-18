describe('End-To-End Test', function() {
  it('Visits the application root', () => {
    cy.visit('/')
    cy.percySnapshot()
  })
})

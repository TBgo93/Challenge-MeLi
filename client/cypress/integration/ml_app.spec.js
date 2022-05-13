describe('E2E', () => {
  it('search and click a product', () => {
    cy.visit('http://localhost:4000')

    cy.get('input[name="q"]').type('televisores')
    cy.get('button.nav-search-btn').click()
    cy.get('a.results-item_link').first().click()
  })
})
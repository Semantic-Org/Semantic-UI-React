/// <reference types="cypress" />

describe('Sidebar: spec', () => {
  it('with a Modal', () => {
    cy.visit('/maximize/sidebar-and-modal/')

    cy.get('[data-tid="button-modal-open"]').click()
    cy.get('[data-tid="modal-content"]').should('be.visible')

    cy.get('[data-tid="button-modal-close"]').click()
    cy.get('[data-tid="modal-content"]').should('not.be.visible')

    cy.get('[data-tid="button-sidebar-toggle"]').click()
    cy.get('[data-tid="sidebar-home"]').click()
    cy.get('[data-tid="sidebar"]').should('be.visible')

    cy.get('[data-tid="button-sidebar-toggle"]').click()
    cy.get('[data-tid="sidebar"]').should('not.be.visible')
  })
})

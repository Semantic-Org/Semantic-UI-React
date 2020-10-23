/// <reference types="cypress" />

describe('Popup: visual', () => {
  it('inside a Modal', () => {
    cy.visit('/maximize/popup-visual-inside-modal/')

    cy.get('[data-tid="button-dialog"]').click()
    cy.get('[data-tid="button-popup"]').click()
    cy.get('[data-tid="popup-content"]').should('be.visible')

    cy.percySnapshot('Popup: inside a Modal')
  })

  it('floating Button', () => {
    cy.visit('/maximize/popup-visual-floating-button/')

    cy.get('[data-tid="button-popup"]').click()
    cy.get('[data-tid="popup-content"]').should('be.visible')

    cy.percySnapshot('Popup: floating Button')
  })
})

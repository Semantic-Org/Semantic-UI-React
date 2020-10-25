/// <reference types="cypress" />

describe('Popup: visual', () => {
  it('inside a Modal', () => {
    cy.visit('/maximize/popup-visual-inside-modal/')

    cy.get('[data-tid="button-dialog"]').click()
    cy.get('[data-tid="button-popup"]').click()
    cy.get('[data-tid="popup-content"]').should('be.visible')

    // This screenshot contains invalid position of an unknown reason
    cy.percySnapshot('Popup: inside a Modal')
  })

  it('floating Button', () => {
    cy.visit('/maximize/popup-visual-floating-button/')

    cy.get('[data-tid="button-popup"]').click()
    cy.get('[data-tid="popup-content"]').should('be.visible')

    cy.percySnapshot('Popup: floating Button')
  })

  it('flowing', () => {
    cy.visit('/maximize/popup-example-flowing')

    cy.get('.ui.button').click()
    cy.get('.ui.popup').should('be.visible')

    cy.percySnapshot('Popup: flowing')
  })

  it('positionFixed', () => {
    cy.visit('/maximize/popup-example-position-fixed')

    cy.get('.ui.button').click()
    cy.get('.ui.popup').should('be.visible')

    cy.percySnapshot('Popup: positionFixed')
  })
})

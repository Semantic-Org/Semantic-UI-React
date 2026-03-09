/// <reference types="cypress" />

const SELECTORS = {
  menu: '[data-tid="menu"]',
  menuItem: '[data-tid="menu-item"]',
  modalOpen: '[data-tid="button-modal-open"]',
  modalClose: '[data-tid="button-modal-close"]',
  modalContent: '[data-tid="modal-content"]',
  sidebarToggle: '[data-tid="button-sidebar-toggle"]',
  sidebarHome: '[data-tid="sidebar-home"]',
  sidebar: '[data-tid="sidebar"]',
};

const URLS = {
  sidebarMenu: '/maximize/sidebar-and-menu/',
  sidebarModal: '/maximize/sidebar-and-modal/',
};

describe('Sidebar', () => {
  describe('with a Menu', () => {
    beforeEach(() => cy.visit(URLS.sidebarMenu));

    it('renders menu and menu items', () => {
      cy.get(SELECTORS.menu).should('be.visible');
      cy.get(SELECTORS.menuItem).should('be.visible');
    });
  });

  describe('with a Modal', () => {
    beforeEach(() => cy.visit(URLS.sidebarModal));

    it('opens and closes the modal', () => {
      cy.get(SELECTORS.modalOpen).click();
      cy.get(SELECTORS.modalContent).should('be.visible');

      cy.get(SELECTORS.modalClose).click();
      cy.get(SELECTORS.modalContent).should('not.be.visible');
    });

    it('toggles the sidebar visibility', () => {
      cy.get(SELECTORS.sidebarToggle).click();
      cy.get(SELECTORS.sidebarHome).click();
      cy.get(SELECTORS.sidebar).should('be.visible');

      cy.get(SELECTORS.sidebarToggle).click();
      cy.get(SELECTORS.sidebar).should('not.be.visible');
    });
  });
});
/// <reference types="cypress" />

let user;

describe('My First Test', () => {
    before(function () {
        cy.visit('http://localhost:1667/#/');
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

    it('Sign up with faker', () => {
      cy.get(':nth-child(3) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type(user.username);
      cy.get(':nth-child(2) > .form-control').type(user.email);
      cy.get(':nth-child(3) > .form-control').type(user.password);
      cy.get('.btn').click();

      cy.get('.swal-text').should('contain', 'Your registration was successful!');

      cy.get('.swal-button').click();
      cy.get(':nth-child(4) > .nav-link').should('contain', user.username);

      cy.get(':nth-child(3) > .nav-link').click();
      cy.get('.btn-outline-danger').click();
    })

    it('Sign in with faker', () => {
      cy.get(':nth-child(2) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type(user.email);
      cy.get(':nth-child(2) > .form-control').type(user.password);
      cy.get('.btn').click();

      cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
   })
  })
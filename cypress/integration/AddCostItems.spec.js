/* global cy */

describe("add cost items", () => {
  it("should add a cost item FOOD", () => {
    cy.visit("/");

    cy.contains("add a cost").click();
    cy.get("#cost").type("10000");
    cy.get("#category").select("FOOD");
    cy.get("#comment").type("this is a comment");
    cy.contains("add cost").click();

    cy.contains("add a cost").click();
    cy.get("#cost").type("10000");
    cy.get("#category").select("CLOTHING");
    cy.get("#comment").type("this is a comment");
    cy.contains("add cost").click();

    cy.contains("add a cost").click();
    cy.get("#cost").type("10000");
    cy.get("#category").select("RENT");
    cy.get("#comment").type("this is a comment");
    cy.contains("add cost").click();

    cy.contains("add a cost").click();
    cy.get("#cost").type("10000");
    cy.get("#category").select("BILL");
    cy.get("#comment").type("this is a comment");
    cy.contains("add cost").click();

    cy.get(".TotalSum").contains("40000");
  });
});

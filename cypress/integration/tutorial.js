describe("book together first test", function() {
  it("visit our sites!", function() {
    cy.visit("http://localhost:3000/");
    cy.get(".sidebar > :nth-child(1) > .uk-button").click();
    cy.get(".nav_login").click();
    cy.get(".uk-offcanvas-close > svg").click();
    cy.get(":nth-child(1) > .uk-inline > .uk-input").type("mangtaob@gmail.com");
    cy.get(":nth-child(2) > .uk-inline > .uk-input").type("1234");
    cy.get("p > .uk-button").click();
  });
});

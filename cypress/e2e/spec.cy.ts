describe("test", () => {
  it("should visit /", () => {
    cy.visit("/");
    cy.contains("Bakhtiar");

    cy.contains("Home");
    cy.contains("Repository");
    cy.contains("Blog");
    cy.contains("Profile");
    cy.get("#menu-button").click();
  });
});

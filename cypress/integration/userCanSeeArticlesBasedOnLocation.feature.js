describe("visitor can view articles basen on location", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list_location.json",
    });
    cy.visit("/");
  });
  it("Local category shows only local news", () => {
    cy.get("#local").click();
    cy.get("#article-1").should("contain", "Title 1");
    cy.get("#article-2").should("contain", "Title 2");
  });
});

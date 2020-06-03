const stubLocation = require("../support/stubLocation");

describe("visitor can view articles basen on location", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list_location.json",
    });
    cy.visit(
      "/",
      stubLocation({latitude: 59.33, longitude: 45.06})
    );
  });

  xit("by visiting the 'local' category", () => {
    cy.get('#navbar').should('contain', 'Local')
  })

  it("Local category shows only local news", () => {
    cy.get("#local").click();
    cy.wait(10000)
    cy.get("#article-1").should("contain", "Title 1");
    cy.get("#article-2").should("contain", "Title 2");
  });

  xit("But without location a message is shown instead", () => {
    cy.get("#local").click();
    cy.get('')
  })
});
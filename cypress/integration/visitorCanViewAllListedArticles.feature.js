describe("visitor can view all listed articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articleList.json",
    });
    cy.visit("/");
  });
  it("header is shown", () => {
    cy.get("#header");
  });
  it("articles is shown", () => {
    cy.get("#article-1").should("contain", "title1");
    cy.get("#article-2").should("contain", "title2");
  });
  it("unsuccessfully", () => {
    
  })
});

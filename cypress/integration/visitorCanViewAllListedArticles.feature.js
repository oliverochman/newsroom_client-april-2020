describe("visitor can view all listed articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.visit("/");
  });
  it("articles is shown", () => {
    cy.get("#article-1").should("contain", "title 1");
    cy.get("#article-2").should("contain", "title 2");
  }); 
});

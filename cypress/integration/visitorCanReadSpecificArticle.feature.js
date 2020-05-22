describe("visitor can read a specific article", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/1",
      response: "fixture:article.json",
    });
    cy.visit("/");
  });

  it("article list is displayed", () => {
    cy.get("#article-1").should("contain", "title 1").click();
  });

  it("article is displayed", () => {
    cy.get("#article-1-title").should("contain", "Title 1");
    cy.get("#article-1-body").should("contain", "Lorem ipsum");
  });
});

describe('visitor can read a specific article', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:specific_article.json",
    });
    cy.visit("/article/");
  });
  it("article is displayed", () => {
    cy.get("#article-1").should("contain", "Title 1");
    cy.get("#article-1").should("contain", "Lorem ipsum")
   
  });
  
  
})

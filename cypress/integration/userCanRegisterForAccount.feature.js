describe("User can register for an account", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/articles",
      response: "fixture:article_list.json",
    });
  });

  describe("can sign up successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "**/auth",
        response: "fixture:successful_signup.json",
      });
      cy.visit("/");
      cy.get("button#login").click();
      cy.get("#signup").click();
    });

    it("can see sucessful signup message", () => {
      cy.get("#signup-form").within(() => {
        cy.get("#email").type("user@mail.com");
        cy.get("#password").type("password");
        cy.get("#passwordConfirmation").type("password");
        cy.get("Button#submit").contains("Submit").click();
      });
      cy.get("#login-form");
    });
  });
});

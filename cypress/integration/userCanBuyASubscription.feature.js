describe("User can purchase a subscription on the subscribe page", () => {
  beforeEach(() => {
    cy.server();

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_list.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/*",
      response: "fixture:successful_login.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/auth/*",
      response: "fixture:successful_login.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    cy.visit("/");
    cy.get("a > #login").click();
    cy.get("#login-form").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("Button").contains("Submit").click();
    });
    cy.get("#subscription-link").contains("Subscribe").click();
  });

  describe("Successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "**/subscriptions",
        response: { message: "Transaction was successful" },
      });
    });
    it("By filling up subscription and payment form", () => {
      cy.get("#payment-interface").should("be.visible");
      cy.wait(1000);
      cy.typeInStripeElement("cardnumber", "4242424242424242");
      cy.typeInStripeElement("exp-date", "12/21");
      cy.typeInStripeElement("cvc", "123");
      cy.get("button").contains("Confirm Payment").click();
      cy.get("#transaction-message").should(
        "contain",
        "Transaction was successful"
      );
      cy.wait(2000);
      cy.get("#transaction-message").should("not.be.visible");
      cy.get("#subscriber-message").should("contain", "You are a subscriber!");
    });
  });

  describe("Unsuccessfully", () => {
    it("Displays error messages arriving from back-end", () => {
      cy.route({
        method: "POST",
        url: "**/subscriptions",
        response: { message: "An error has occured!" },
        status: 400,
      });
      cy.wait(1000);
      cy.typeInStripeElement("cardnumber", "4242424242424242");
      cy.typeInStripeElement("exp-date", "12/21");
      cy.typeInStripeElement("cvc", "123");
      cy.get("button").contains("Confirm Payment").click();
      cy.get("#error-message").should("contain", "An error has occured!");
    });

    it('Displays error messages regarding filling out fields', () => {
      cy.wait(1000);
      cy.typeInStripeElement("cardnumber", "4242424242424242");
      cy.typeInStripeElement("exp-date", "12/10");
      cy.get("button").contains("Confirm Payment").click();
      cy.get("#error-message").should("contain", "Your card's expiration year is in the past.");
    })
  });
});

describe('user can change language', () =>  {
  it('by clicking button', () => {
    cy.visit("/");
    cy.get("Button").contains("EN/SV").click();
    cy.wait(2000);
    cy.get("Button#login").contains("Logga In");
  });
})
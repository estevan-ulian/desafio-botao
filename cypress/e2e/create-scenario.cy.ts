/// <reference types="cypress" />

describe("/cenario/criar", () => {
    beforeEach(() => {
        cy.visit("/cenario/criar");
    });
    describe("first step", () => {
        it("should show an error when trying to move forward without defining a question", () => {
            cy.get("button").contains("Avançar").click();
            cy.get("p")
                .contains("A pergunta deve ter no mínimo 10 caracteres")
                .wait(1000)
                .should("be.visible");
        });
    });

    it("should display the create scenario form", () => {
        // cy.visit("/cenario/criar");
    });
});

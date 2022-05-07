import { wait } from "@testing-library/user-event/dist/utils";

describe("Memory Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should open the home page", () => {
    cy.get("h1").contains("Splendex Memory Game");
  });
});

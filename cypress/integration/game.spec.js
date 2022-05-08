import { wait } from "@testing-library/react";

describe("Memory Game", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should open the home page", () => {
    cy.get("h1").contains("Splendex Memory Game");
  });

  it("should have all data on the home page", () => {
    cy.get("#root > div > home > header > img").should("have.attr", "alt");

    cy.get("div").contains("Deck Size");
    cy.get(
      "#root > div > home > div.deck-size-form > div > div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.deck-size-select.css-1ges8bc-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root"
    );
    cy.get("button").contains("Start New Game");
    cy.get("h2").contains("Game Rules");

    cy.get("div").contains(
      "Present the user with an even number of cards, “face down”."
    );
    cy.get("div").contains(
      "When the user clicks a card, “flip it over” and reveal the hidden image."
    );
    cy.get("div").contains("When two cards are revealed:");
    cy.get("div").contains(
      "When the user clicks a card, “flip it over” and reveal the hidden image."
    );
    cy.get("div").contains(
      "If the cards are identical, they are removed from play."
    );
    cy.get("div").contains("If they are not, they will flip back.");
  });

  it("should click onto the selector and check the values", () => {
    cy.get(
      "#root > div > home > div.deck-size-form > div > div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.deck-size-select.css-1ges8bc-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root"
    ).click();

    cy.contains(3);
    cy.contains(4);
    cy.contains(5);
    cy.contains(6);
    cy.contains(7);
    cy.contains(8);
    cy.contains(9);
    cy.contains(10);
  });

  it("should click onto a value and check number of cards", () => {
    cy.get(
      "#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiMenu-paper.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(3)"
    ).click();
    cy.get(
      "#root > div > home > div.deck-size-form > div > div.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.Mui-focused.MuiInputBase-formControl.deck-size-select.css-1ges8bc-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root > div"
    ).contains(5);
    cy.get("button").contains("Start New Game").click();
    cy.get("header").contains("Deck Size");
    cy.get("button").contains("Restart");
    cy.get("div").should("have.class", "data-container");
    cy.get("div").should("have.class", "card-container");
    cy.get("#root > div > div > div > div.card-container")
      .children("div")
      .should("have.length", 10);
  });

  it("should check the gameplay", () => {
    cy.get(
      "#root > div > div > div > div.card-container > div:nth-child(1) > div"
    ).click();
    cy.get(
      "#root > div > div > div > div.card-container > div:nth-child(2) > div"
    ).click();

    cy.get('img[alt="postcss"]').first().click({ force: true });
    cy.get('img[alt="postcss"]').last().click({ force: true });
    cy.get("span").contains(2);
    cy.get('img[alt="d3"]').first().click({ force: true });
    cy.get('img[alt="d3"]').last().click({ force: true });
    cy.get("span").contains(3);
    cy.get('img[alt="jenkins"]').first().click({ force: true });
    cy.get('img[alt="jenkins"]').last().click({ force: true });
    cy.get("span").contains(4);
    cy.get('img[alt="angular"]').first().click({ force: true });
    cy.get('img[alt="angular"]').last().click({ force: true });
    cy.get("span").contains(5);
    cy.get('img[alt="evista"]').first().click({ force: true });
    cy.get('img[alt="evista"]').last().click({ force: true });
    cy.get(
      "body > div.MuiModal-root.css-79ws1d-MuiModal-root > div.MuiBox-root.css-12bhh9a"
    ).should("include.text", "Your score is 6 in this round.");
  });
});

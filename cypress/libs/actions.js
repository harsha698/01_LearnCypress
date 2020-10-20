/// <reference types="Cypress"/>

function getWebElement(locator) {
    const locatorType = locator.substring(0, locator.indexOf(":"));
    const locatorText = locator.substring(locator.indexOf(":") + 1, locator.length);

    switch (locatorType) {
        case "css":
            return cy.get(locatorText.trim());
        case "id":
            return cy.get('#' + locatorText.trim());
        case "class":
            return cy.get('.' + locatorText.trim());
        case "text":
            return cy.contains(locatorText.trim());
        default:
            throw new Error("Locator is incorrect" + locator);
    }
}

function clickElement(locator) {
    getWebElement(locator).click({force: true});
}

function enterText(locator, textToEnter) {
    getWebElement(locator).type(textToEnter);
}

module.exports = {
    getWebElement,
    clickElement,
    enterText
}


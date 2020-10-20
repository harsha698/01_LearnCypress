import {getWebElement} from "./actions"

function ifElementExist(locator) {
    getWebElement(locator).should('exist');
}

function ifElementContainsText(locator, textToTest) {
    getWebElement(locator).should("contain.text", textToTest);
}

module.exports = {
    ifElementExist,
    ifElementContainsText
}
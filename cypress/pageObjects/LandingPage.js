/// <reference types="Cypress"/>

import {actions} from "../libs/getAllLibs";

const locatorsList = {
    LOGIN: "text:Login"
}

function visitLandingPage(){
    cy.visit('https://spree-vapasi.herokuapp.com/');
}

function clickLogin(){
    actions.clickElement(locatorsList.LOGIN);
}

module.exports = {
    visitLandingPage,
    clickLogin
}
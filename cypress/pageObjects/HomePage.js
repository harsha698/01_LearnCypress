/// <reference types="Cypress"/>

import {actions, verifyers} from '../libs/getAllLibs';

const LOCATORS = {
    myAccount: "text:My Account"
}

function ifMyAccountExists() {
    verifyers.ifElementExist(LOCATORS.myAccount);
}

function selectCategory(categoryName){
    actions.clickElement("text:"+categoryName);
}

function selectBrand(brandName){
    actions.clickElement("text:"+brandName);
}

module.exports = {
    ifMyAccountExists
}
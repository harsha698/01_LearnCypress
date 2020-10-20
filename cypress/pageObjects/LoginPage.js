/// <reference types="Cypress"/>

import {actions, verifyers} from "../libs/getAllLibs";
import {clickLogin} from "./LandingPage";

const locators = {
    user_email: "id:spree_user_email",
    user_password: "id:spree_user_password",
    submit: "css:[name='commit']",
    invalidLoginError: "css:[class*='alert-error']"
}

function doSuccessfulLogin() {
    clickLogin();
    actions.enterText(locators.user_email, 'harsha69@gnew.com')
    actions.enterText(locators.user_password, 'Password1')
    clickSubmit();
}

function doFailedLogin() {
    clickLogin();
    actions.enterText(locators.user_email, 'harsha69@gnmail.com')
    actions.enterText(locators.user_password, 'Welcome@123')
    clickSubmit();
    verifyers.ifElementContainsText(locators.invalidLoginError, 'Invalid email or password.')
}

function clickSubmit() {
    actions.clickElement(locators.submit);
}

module.exports = {
    doSuccessfulLogin,
    doFailedLogin
}


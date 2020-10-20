/// <reference types="Cypress"/>

import {LandingPage, LoginPage, HomePage} from "../../pageObjects/allPages";

describe('Validate Login feature of Spree Vapasi Site', function () {

    beforeEach('Navigate to login page of Spree Vapasi Site', function () {
        LandingPage.visitLandingPage();
        LandingPage.clickLogin();
    })

    it('Validate successful login', function () {
        LoginPage.doSuccessfulLogin();
        HomePage.ifMyAccountExists();
    })

    it('Validate failed login', function () {
        LoginPage.doFailedLogin();
    })
})
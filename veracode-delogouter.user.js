// ==UserScript==
// @name         Veracode Delogouter
// @namespace    http://tampermonkey.net/
// @version      2025-05-14
// @description  Click on the session continue button when it appears.
// @author       Joshua Brule
// @match        https://*.analysiscenter.veracode.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //If browser supports checkVisiblity() continue. Only run for top window
    if("checkVisibility" in document.body && window.self == window.top){
        console.log("TamperMonkey Veracode Delogouter is running on window ",window.location);
        let timer = window.setInterval(function(){

            let sessionContinueBtn = document.querySelector("#session-timeout-ok");

            if(sessionContinueBtn && sessionContinueBtn.checkVisibility()){
                sessionContinueBtn.click();
                console.log("TamperMonkey Veracode Delogouter clicked on the Continue Button");
            }
        },30000);
    }
    else{
        console.log("TamperMonkey Veracode Delogouter cannot run as checkVisibility() is not supported in this browser or window is not top");
    }
})();

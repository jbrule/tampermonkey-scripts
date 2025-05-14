// ==UserScript==
// @name         Veracode Delogouter
// @namespace    http://tampermonkey.net/
// @version      2025-05-14
// @description  Click on the session continue button when it appears.
// @author       Joshua Brule
// @match        https://analysiscenter.veracode.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.setInterval(function(){
    let sessionContinueBtn = document.querySelector("#session-timeout-ok");

    if(sessionContinueBtn != null){
        sessionContinueBtn.click();
    }
    },30000);
})();

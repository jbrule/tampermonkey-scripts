// ==UserScript==
// @name         Veracode Application Profile Detruncator
// @namespace    http://tampermonkey.net/
// @version      2025-05-14
// @description  Fix Veracode's dumb truncation of the application profile name in the UI
// @author       Joshua Brule
// @match        https://analysiscenter.veracode.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.setInterval(function(){
    let contextHeader = document.querySelector("#ContextHeader");

    if(contextHeader != null){
        let originalTitle = contextHeader.attributes["data-original-title"];
        if(contextHeader.innerText != originalTitle.textContent){
            contextHeader.innerText = originalTitle.textContent;
        }
    }
    },5000);
})();

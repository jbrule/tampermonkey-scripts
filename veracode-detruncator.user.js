// ==UserScript==
// @name         Veracode Application Profile Detruncator
// @namespace    http://tampermonkey.net/
// @version      2025-05-14
// @description  Fix Veracode's dumb truncation of the application profile name in the UI
// @author       Joshua Brule
// @match        https://analysiscenter.veracode.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.setInterval(() => {
        let contextHeader = document.querySelector("#ContextHeader");

        if(contextHeader){
            try{
                let originalTitle = contextHeader.attributes["data-original-title"];

                if(originalTitle && contextHeader.innerText != originalTitle.textContent){
                    contextHeader.innerText = originalTitle.textContent;
                    contextHeader.style.maxWidth = "none";
                    console.log("TamperMonkey Veracode Application Profile Detruncator detruncated the application name");
                }
            }
            catch(e){
                console.error(e);
            }
        }
    },5000);
})();

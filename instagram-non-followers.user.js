// ==UserScript==
// @name        Instagram Non-Followers Finder
// @namespace   https://github.com/yourusername/Instagram-Non-Followers-Finder
// @version     1.3.0
// @description Find users who don't follow you back on Instagram with a beautiful interface
// @author      @faizmuhhh
// @match       https://*.instagram.com/*
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @icon        https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png
// @license     MIT
// ==/UserScript==

(function() {
    'use strict';

    // Main script code will go here
    console.log('Instagram Non-Followers Finder loaded');
    
    // Add eye icon to the bottom right corner
    const addIcon = () => {
        const iconContainer = document.createElement('div');
        iconContainer.style.position = 'fixed';
        iconContainer.style.bottom = '20px';
        iconContainer.style.right = '20px';
        iconContainer.style.zIndex = '9999';
        iconContainer.style.cursor = 'pointer';
        iconContainer.style.background = 'linear-gradient(90deg, #4ac29a, #bdfff3)';
        iconContainer.style.borderRadius = '50%';
        iconContainer.style.width = '40px';
        iconContainer.style.height = '40px';
        iconContainer.style.display = 'flex';
        iconContainer.style.justifyContent = 'center';
        iconContainer.style.alignItems = 'center';
        iconContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        
        iconContainer.innerHTML = '👁️';
        iconContainer.title = 'Find Non-Followers';
        
        iconContainer.addEventListener('click', openNonFollowersUI);
        
        document.body.appendChild(iconContainer);
    };
    
    // Function to open the Non-Followers UI
    const openNonFollowersUI = () => {
        // UI implementation will go here
        alert('Non-Followers Finder UI will open here!');
        // Future implementation will include:
        // - Scanning followers and following lists
        // - Comparing to find non-followers
        // - Displaying results with unfollow options
        // - Saving results between sessions
    };
    
    // Wait for page to fully load before adding the icon
    window.addEventListener('load', () => {
        setTimeout(addIcon, 2000);
    });
})(); 
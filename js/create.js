window.fbAsyncInit = function() {
        FB.init({
            appId: '314624048924884',
            xfbml: true,
            version: 'v2.8'
        });
    };

smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});

var textcolor;
var backgroundcolor;
var profileName;
var artWork;
var biography;
var profilePicture;






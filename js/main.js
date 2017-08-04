window.fbAsyncInit = function() {
    FB.init({
        appId: 314624048924884, // my app ID
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView(); // for accurate visitor metrics 
};


var loginButton = document.getElementById("fb-login");
loginButton.addEventListener("click", function() {
    // Documentation page on the login command:
    // 	https://developers.facebook.com/docs/reference/javascript/FB.login/v2.8
    // For a list of scopes that can be requested, see:
    // 	https://developers.facebook.com/docs/facebook-login/permissions
    FB.login(onFbLogin, { scope: "public_profile,user_about_me,email,user_website,user_photos,user_location" });
    // FB.login runs asynchronously. This means that it goes off and does its 
    // own thing, and when it's done, it will call the onFbLogin function.
});


//this function below calls the info that shows on build-bg-2: name, current city, and profile picture
//the function onGetInfo should only apply to 

function onFbLogin(response) {
    if (response.authResponse) {
        FB.api("/me", { fields: "name,location,picture,website" }, onGetInfo1);
        // document.getElementById("np-2").style.display = "";


    } else {
        alert("Error on login!");
    }



}

var userName;
var userLocation;
var userPicture;
var userAbout;
var userWebsite;


function onGetInfo1(response) {
    if (response && !response.error) {
        console.log(response);

        userName = response.name;
        userLocation = response.location.name;
        userPicture = response.picture.data.url;


        document.getElementById("user-info").style.display = "";
        document.getElementById("user-name").textContent = response.name;
        document.getElementById("user-location").textContent = response.location.name;
        document.getElementById("user-picture").src = response.picture.data.url;
    }
}

//second button calling on facebook api to grab photos and display them so we can choose what photos to use

// var image1;
// var image2;
// var image3;
// var image4;
// var image5;
// var image6;
// var image7;
// var image8;


var photosButton = document.getElementById("photos-show");
photosButton.addEventListener("click", function() {
    FB.api("/me/photos/uploaded", onGetInfo2);

});




function onGetInfo2(response) {
    if (response && !response.error) {
        console.log(response);


        // var imageOneData = response.data[0].id;
        // FB.api("/" + imageOneData + "?fields=images", addImageToPage);


        for(i=0; i < 8; i++){
        	var imgId = response.data[i].id;
        	FB.api("/" + imgId + "?fields=images", addImageToPage);
        }



        // image2 = response.data[1].id;
        // FB.api("/" + image2 + "?fields=images", onGetInfo3);

        // image3 = response.data[2].id;
        // FB.api("/" + image3 + "?fields=images", onGetInfo3);

        // image4 = response.data[3].id;
        // FB.api("/" + image4 + "?fields=images", onGetInfo3);

        // image5 = response.data[4].id;
        // FB.api("/" + image5 + "?fields=images", onGetInfo3);

        // image6 = response.data[5].id;
        // FB.api("/" + image6 + "?fields=images", onGetInfo3);

        // image7 = response.data[6].id;
        // FB.api("/" + image7 + "?fields=images", onGetInfo3);

        // image8 = response.data[7].id;
        // FB.api("/" + image8 + "?fields=images", onGetInfo3);






    }
}

var firstImage;
var secondImage;

function addImageToPage(imageResponse) {


	var div = document.querySelector(".user-photos-div");
	div.style.display = "";
	var img = document.createElement("img");
	img.className = "user-photo";
	// img.id = "user-photo-1";
    img.src = imageResponse.images[0].source;
    img.style.width = "auto";
    img.style.height = "200px";
    img.style.margin = "5px";
    img.style.border = "2px solid black";
    div.appendChild(img);

    if (firstImage === undefined){
    	firstImage = imageResponse.images[0].source;
    }

    if (secondImage === undefined){
    	secondImage = imageResponse.images[0].source;
    }

    


    // for(i=0; i < imageResponse.images.length; i++){
    // 	var img = document.createElement("img");
    // 	img.className = "user-photos-div";
    // 	img.src = imageResponse.images[i].data[1].source;
    // 	img.style.width = "auto";
    // 	img.style.height = "300px";
    // 	document.body.appendChild(img);
    // }



    // if (response && !response.error){
    // 	console.log(response);
    // document.getElementById("user-photos-div").style.display = "";
    // 	var imageOneData = response.data[0].id;
    // 	FB.api("/" + imageOneData + "?fields=images");
    // 	var imageOne = document.getElementById("user-photo-1");
    // 	imageOne.src = data.images[0].source;
    // document.getElementById("user-photos-div").style.display = "";
    // document.getElementById("user-photo-1").src = data.images[0].source;
    // document.getElementById("user-photo-2").src = image2.response.data.images[1].source;
    // document.getElementById("user-photo-3").src = response.data.images[2].source;
    // document.getElementById("user-photo-4").src = response.data.images[3].source;
    // document.getElementById("user-photo-5").src = response.data.images[4].source;
    // document.getElementById("user-photo-6").src = response.data.images[5].source;
    // document.getElementById("user-photo-7").src = response.data.images[6].source;
    // document.getElementById("user-photo-8").src = response.data.images[7].source;

// }
}

var colorSubmitForm = document.querySelector("#form-3");
var bgColorInput = document.querySelector("#background-color");
var txtColorInput = document.querySelector("#text-color");
var hdrColorInput = document.querySelector("#header-color");
var hvrColorInput = document.querySelector("#hover-color");
var fontStyleInput = document.querySelector("#font-style");




colorSubmitForm.addEventListener("submit", function(event) {

    event.preventDefault();

    var home = document.getElementById("home-page");
    home.style.display = "";
    var work = document.getElementById("work-page");
    work.style.display = "";
    var about = document.getElementById("about-page");
    about.style.display = "";

    var bgColor = bgColorInput.options[bgColorInput.selectedIndex].value;
    var txtColor = txtColorInput.options[txtColorInput.selectedIndex].value;
    var hdrColor = hdrColorInput.options[hdrColorInput.selectedIndex].value;
    var hvrColor = hvrColorInput.options[hvrColorInput.selectedIndex].value;
    var fontStyle = fontStyleInput.options[fontStyleInput.selectedIndex].value;


    var finalBackground1 = document.querySelector("#build-bg-6");
    var finalBackground2 = document.querySelector("#build-bg-7");
    var finalBackground3 = document.querySelector("#build-bg-8");

    var finalPage = document.querySelector(".final-page");
    finalPage.style.fontFamily = fontStyle;
    finalPage.style.color = txtColor;

    finalBackground1.style.background = bgColor;
    finalBackground2.style.background = bgColor;
    finalBackground3.style.background = bgColor;

    finalBackground1.style.zIndex = "1";
    finalBackground2.style.zIndex = "1";
    finalBackground3.style.zIndex = "1";

    var headerHome = document.querySelector("#home-h");
    headerHome.style.color = hdrColor;
    headerHome.id = "home-h";
    headerHome.style.fontSize = "32px";
    headerHome.className = "header";
    headerHome.style.fontFamily = fontStyle;
    headerHome.textContent = userName;
    headerHome.style.zIndex = "20";

    var headerWork = document.querySelector("#work-h");
    headerWork.style.color = hdrColor;
    headerWork.id = "work-h";
    headerWork.style.fontSize = "32px";
    headerWork.className = "header";
    headerWork.style.fontFamily = fontStyle;
    headerWork.textContent = userName;
    headerWork.style.zIndex = "20";

    var headerAbout = document.querySelector("#about-h");
    headerAbout.style.color = hdrColor;
    headerAbout.id = "about-h";
    headerAbout.style.fontSize = "32px";
    headerAbout.className = "header";
    headerAbout.style.fontFamily = fontStyle;
    headerAbout.textContent = userName;
    headerAbout.style.zIndex = "20";

    var navHome = document.querySelector("#home-nav");
    navHome.style.color = txtColor;
    navHome.id = "home-nav";
    navHome.className = "final-nav";
    navHome.style.fontSize = "18px";
    navHome.style.zIndex = "20";

    var navWork = document.querySelector("#work-nav");
    navWork.style.color = txtColor;
    navWork.id = "work-nav";
    navWork.className = "final-nav";
    navWork.style.fontSize = "18px";
    navWork.style.zIndex = "20";

    var navAbout = document.querySelector("#about-nav");
    navAbout.style.color = txtColor;
    navAbout.id = "about-nav";
    navAbout.className = "final-nav";
    navAbout.style.fontSize = "18px";
    navAbout.style.zIndex = "20";

    var homeImage = document.createElement("img");
    homeImage.src = firstImage;
    homeImage.id = "home-image";
    homeImage.style.height = "400px";
    homeImage.style.width = "auto";
    homeImage.style.zIndex = "20";
    home.appendChild(homeImage);

    var workImageOne = document.createElement("img");
    workImageOne.src = secondImage;
    workImageOne.id = "work-image";
    workImageOne.style.height = "200px";
    workImageOne.style.width = "auto";
    workImageOne.style.zIndex = "20";
    work.appendChild(workImageOne);



    var aboutPicture = document.querySelector("#about-picture");
    aboutPicture.src = userPicture;
    aboutPicture.style.zIndex = "20";

    // var aboutText = document.querySelector("#about");
    // aboutText.textContent = userAbout;



    // var homeImage = document.querySelector("#home-image");
    // homeImage.src = firstImage;

});

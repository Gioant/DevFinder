// theme check on initial load
document.addEventListener("DOMContentLoaded", () => {
    themeCheck();
});


const body = document.getElementById('body');

//icons
const moonIcon = document.getElementById('dark-theme-toggle');
const sunIcon = document.getElementById('light-theme-toggle');
const themeColortxt = document.getElementById('color-theme');


//user preferences
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//icon toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
}

// theme checker
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        themeColortxt.innerHTML = "LIGHT";
    } else {
        sunIcon.classList.add("display-none");
        themeColortxt.innerHTML = "DARK";
    }
}

//manual theme changer
const switchTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        themeColortxt.innerHTML = "DARK";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconToggle();
        themeColortxt.innerHTML = "LIGHT";
    }
}


/* 
1) get username value from input

2) send a request to github api

3) if/else condition to check status of response... if it's good, read json object. else return error

4) replace html elements (followers, following, repos, avatar & links);

*/

//logic for submit form
function formSubmit(e) {
    e.preventDefault();

    //TO DO: check for errors (NULL)

    let username = document.getElementById('username-search').value;

    let trimmedUsername = username.trim();

    // if (trimmedUsername === ""){
    //     //display error
    // }

    //fetch user by github API
    getUser(trimmedUsername)
}

// function to fetch user by username
async function getUser(username) {
    try {
        //wait for entire response from api
        let response = await fetch(`https://api.github.com/users/${username}`);

        let responseObject = await response.json();

        if (response.status === 200) {
            return updateUser(responseObject);
        } else {
            //response failed to do: show error
        }
    } catch (error) {
        //to change later
        return console.log(error);
    }
}

//get info from user & update page
function updateUser(user) {

    const dateProperty = user.created_at.substring(0, 10);

    const formatDate = luxon.DateTime.fromISO(dateProperty).toFormat("d MMM yyyy");

    const joinedAt = `Joined ${formatDate}`;


    //get remaining elements to change
    const userImg = document.getElementById('user-pic');
    const userImgMobile = document.getElementById('user-pic-mobile');

    const userFullName = document.getElementById('fullName');

    const userJoinedAt = document.getElementById('date-joined');
    const userName = document.getElementById('username');
    const userName2 = document.getElementById('username2');

    const userBio = document.getElementById('bio');

    const userRepos = document.getElementById('repo-info');
    const userFollowers = document.getElementById('followers-info');
    const usersFollowing = document.getElementById('following-info');

    //icons
    const locationIcon = document.getElementById('loc-icon');
    const twitterIcon = document.getElementById('twitter-icon');
    const websiteIcon = document.getElementById('site-icon');
    const companyIcon = document.getElementById('company-icon');

    const userLocation = document.getElementById('user-location');
    const userTwitter = document.getElementById('user-twitter');
    const userWebsite = document.getElementById('user-site');
    const userCompany = document.getElementById('user-company');

    //replace img source from avatar_url property from api object
    userImg.src = user.avatar_url;
    userImgMobile.src = user.avatar_url;

    //replace date element with formatted date
    userJoinedAt.innerText = joinedAt;

    //verify if user object has a value for name
    if (user.name === null) {
        //use their login name as fullname
        userFullName.innerText = user.login;
    } else {
        if (user.name.length >= 14) {
            userFullName.classList.remove('md:text-3xl');
            userFullName.classList.add('md:text-2xl');
            userFullName.innerText = user.name;
        } else {
            //else use their name
            userFullName.classList.remove('md:text-2xl');
            userFullName.classList.add('md:text-3xl');
            userFullName.innerText = user.name;
        }
    }

    //code to update Username
    userName.innerText = `@${user.login}`;
    userName2.innerText = `@${user.login}`;

    // if user has no bio
    if (user.bio === null) {
        userBio.innerText = "This profile has no bio";
        bio.classList.add("opacity-75");
    } else {
        bio.classList.remove("opacity-75");
        bio.innerText = user.bio;
    }

    //replace github stats
    userRepos.innerText = user.public_repos;
    userFollowers.innerText = user.followers;
    usersFollowing.innerText = user.following;

    //if user has no location
    if (user.location === null) {
        locationIcon.classList.add('opacity-50');
        userLocation.classList.add('opacity-50');
        userLocation.innerText = "Not Available";
    } else {
        locationIcon.classList.remove('opacity-50');
        userLocation.classList.remove('opacity-50');
        userLocation.innerText = user.location;
    }

    //if user has no twitter
    if (user.twitter_username === null) {
        twitterIcon.classList.add('opacity-50');
        userTwitter.classList.add('opacity-50');
        userTwitter.innerText = "Not Available";
    } else {
        twitterIcon.classList.remove('opacity-50');
        userTwitter.classList.remove('opacity-50');
        userTwitter.innerText = user.twitter_username;
    }

    //if user has no website
    if (user.blog === null || user.blog === "") {
        websiteIcon.classList.add('opacity-50');
        userWebsite.classList.add('opacity-50');
        userWebsite.innerText = "Not Available";
    } else {
        websiteIcon.classList.remove('opacity-50');
        userWebsite.classList.remove('opacity-50');
        userWebsite.innerText = user.blog;
    }

    //if user has no company
    if (user.company === null) {
        companyIcon.classList.add('opacity-50');
        userCompany.classList.add('opacity-50');
        userCompany.innerText = "Not Available";
        userCompany.href = "";
    } else {
        companyIcon.classList.remove('opacity-50');
        userCompany.classList.remove('opacity-50');
        userCompany.href = user.company;
        userCompany.innerText = user.company;
    }
}


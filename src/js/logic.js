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

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
    } else {
        sunIcon.classList.add("display-none");
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

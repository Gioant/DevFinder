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
function formSubmit(e){
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
async function getUser(username){
    try {
        //wait for entire response from api
        let response = await fetch(`https://api.github.com/users/${username}`);

        let responseObject = await response.json();

        if(response.status === 200){
            return updateUser(responseObject);
        } else {
            //response failed to do: show error
        }
    } catch (error) {
        //to change later
        return console.log(err);
    }
}

//get info from user & update page
function updateUser(user){
    const dateProperty = user.created_at.substring(0,10);

    const formatDate = luxon.DateTime.fromISO(dateProperty).toFormat("d MMM yyyy");

    const joinedAt = `Joined ${formatDate}`;

}


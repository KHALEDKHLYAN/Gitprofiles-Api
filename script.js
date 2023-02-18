// Define the URL of the GitHub API
const APIURL = "https://api.github.com/users/";

// Select the HTML elements that we will use
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Display the user information and repositories for a given username
getUser("KHALEDKHLYAN");

async function getUser(username) {
    // Fetch the user information from the GitHub API
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    // Create an HTML card to display the user information
    createUserCard(respData);

    // Fetch the user's repositories from the GitHub API
    getRepos(username);
}

async function getRepos(username) {
    // Fetch the user's repositories from the GitHub API
    const resp = await fetch(APIURL + username + "/repos");
    const respData = await resp.json();

    // Display the top 10 repositories in the HTML card
    addReposToCard(respData);
}

function createUserCard(user) {
    // Create an HTML card to display the user information
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;

    // Display the HTML card in the 'main' element of the HTML page
    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    // Select the HTML element where the repositories will be displayed
    const reposEl = document.getElementById("repos");

    // Sort the repositories based on the number of stars, and display the top 10
    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");

            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}

// Listen for the form submission event, and display the user information and repositories for the submitted username
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});


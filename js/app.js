//* https://api.github.com/users/[USERNAME]

const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-button")
const userCard = document.querySelector("#user-card")


const searchUser = () => {
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then(response => response.json())
    .then(gitHubUser =>{

    })
  
}

searchBtn.addEventListener("click", searchUser)
//* https://api.github.com/users/[USERNAME]

const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-button")
const userCard = document.querySelector("#user-card")


const searchUser = () => {
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then(response => response.json())
    .then(gitHubUser =>{

      userCard.innerHTML = `
      <div class="card-header flex items-center gap-3">
          <img
            src=${gitHubUser.avatar_url}
            id="user-img"
            class="size-[96px] rounded-full"
            alt=""
          />
          <div>
            <p class="font-bold text-2xl font-[Poppins]" id="user-fullname">
            ${gitHubUser.name}
            </p>
            <p
              id="username"
              class="font-[Poppins] text-zinc-500 font-medium mt-1 text-sm"
            >
            @${gitHubUser.login}
            </p>
          </div>
        </div>
        <div
          class="mt-6 mb-8 font-[Poppins] text-zinc-700 font-normal w-full text-sm"
        >
          <p id="caption">${gitHubUser.bio}</p>
        </div>
        <div
          class="grid grid-cols-2 child:flex child:w-full child:items-center gap-5 child:gap-2 font-[Poppins]"
        >
          <div>
            <span class="text-xl text-zinc-400">
              <i class="fas fa-location-dot"></i>
            </span>
            <span id="#location"> ${gitHubUser.location} </span>
          </div>
          <div>
            <span class="text-xl text-zinc-400">
              <i class="fas fa-link"></i>
            </span>
            <span id="link">
              <a id="website link" href="#" class="github-url" target="_blank"
                >User Repositor</a
              >
            </span>
          </div>
        </div>
        <div
          class="my-4 w-full rounded-md bg-zinc-100 h-20 grid grid-cols-3 child:w-full child:flex child:flex-col child:gap-1 child:items-center child:justify-center"
        >
          <article>
            <p id="repositories" class="font-[Poppins] text-2xl font-extrabold">
            ${gitHubUser.public_repos}
            </p>
            <p class="text-zinc-500 font-[Sans-Medium,_Poppins] text-sm">
              مخازن (Repositories)
            </p>
          </article>
          <article>
            <p id="followers" class="font-[Poppins] text-2xl font-extrabold">
            ${gitHubUser.followers}
            </p>
            <p class="text-zinc-500 font-[Sans-Medium,_Poppins] text-sm">
              دنبال‌کنندگان
            </p>
          </article>
          <article>
            <p id="following" class="font-[Poppins] text-2xl font-extrabold">
            ${gitHubUser.following}
            </p>
            <p class="text-zinc-500 font-[Sans-Medium,_Poppins] text-sm">
              دنبال شده‌ها
            </p>
          </article>
        </div>
        <div class="mt-10" dir="rtl">
          <a
            href="${gitHubUser.html_url}"
            target="_blank"
            class="flex justify-center items-center font-Sans-DemiBold text-sm text-zinc-700 gap-2"
          >
            مشاهده کامل در گیت‌هاب
            <i
              class="fa-solid fa-arrow-up-right-from-square text-zinc-500 text-sm"
            ></i>
          </a>
        </div>
      `
    })
  
}

searchBtn.addEventListener("click", searchUser)
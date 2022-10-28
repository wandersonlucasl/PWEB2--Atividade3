const botaoPost = document.querySelector(".tweetBox__tweetButton")
const text = document.querySelector("#textpostInput")
const main = document.querySelector("#newPost")

botaoPost.addEventListener("click", (event) => {
    event.preventDefault()
    const divPost = document.createElement("div")
    divPost.setAttribute("class","post")


    divPost.innerHTML = `<div class="post__avatar">
    <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
    </div>

    <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"> <span class="material-icons post__badge"> verified 
                </span>@somanathg</span>
              </h3>
            </div>
            <div class="post__headerDescription">
            <p>${text.value}</p>
            </div>
          </div>
          <div class="post__footer">
          <span class="material-icons"> repeat </span>
          <span class="material-icons"> favorite_border </span>
          <span class="material-icons"> publish </span>
        </div>
      </div>`

      main.insertAdjacentElement("afterbegin", divPost)
      text.value = "" 

})


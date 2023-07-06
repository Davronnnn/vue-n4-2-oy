const toggle = document.querySelector(".header__toggle")
const mobile = document.querySelector(".mobile")
const closeBtn = document.querySelector(".header__close");


toggle.addEventListener("click", () => {

    mobile.className += " mobile--active" 
    closeBtn.className += " open"
    toggle.className += " close"
})


closeBtn.addEventListener("click", () => {
    mobile.className = " mobile" 
    closeBtn.className = "header__close"
    toggle.className = "header__toggle"
})

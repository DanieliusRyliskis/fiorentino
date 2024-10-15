const image = document.querySelectorAll("#imageContainer img")
const body = document.querySelector("body")
const modal = document.querySelector("#modal")
const close = document.querySelector("#close")

image.forEach((i) => {
    i.addEventListener("click", function() {
        // Get Name Of The Image
        console.log(this.getAttribute("data-name"))
        // Add Modal Window
        body.classList.add("stop-scrolling")
        modal.classList.remove("hidden")
        })
})


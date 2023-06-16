let input = document.querySelector("#id_password")
let hide = document.querySelector(".hide")
let show = document.querySelector(".show")
let view = document.querySelector("#pass-view")

view.onclick = function() {
    if (input.type === 'password') {
        input.setAttribute('type', 'text') 
        hide.classList.remove("block")
        show.classList.add("block")  
    }
    else {
        input.setAttribute('type', 'password')
        hide.classList.add("block")
        show.classList.remove("block")
    }
}

let pass_inp = document.querySelector("#id_password");
let hide = document.querySelector(".hide");
let show = document.querySelector(".show");
let view = document.querySelector(".pass-view");

view.onclick = function() {
    if (pass_inp.type === 'password') {
        pass_inp.setAttribute('type', 'text');
        hide.classList.remove("block");
        show.classList.add("block");
    } else {
        pass_inp.setAttribute('type', 'password');
        hide.classList.add("block");
        show.classList.remove("block");
    }
}
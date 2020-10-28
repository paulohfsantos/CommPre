//método para o menu hamburguer mobile
var menuMobile = document.getElementById("menuMobile");
//previne o menu de vir aberto
menuMobile.style.maxHeight = "0px";

menuToggle = () => {
    if(menuMobile.style.maxHeight == "0px") {
        menuMobile.style.maxHeight = "200px";
    } else {
        menuMobile.style.maxHeight = "0px";
    }
}

//método para o botão go to top
var button = document.getElementById("goTop");

window.onscroll = () => {
    scrollFunction();
}
scrollFunction = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
button.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})
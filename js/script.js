let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}





let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none" ;
})

document.getElementById("register").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none" ;
})

document.getElementById("register").addEventListener("click", function(){
    document.querySelector(".popup1").style.display = "flex" ;
})

document.getElementById("close1").addEventListener("click", function() {
    document.querySelector(".popup1").style.display = "none" ;
})

// document.getElementById("buynow").addEventListener("click", function(){
//     document.querySelector(".popup2").style.display = "flex" ;
// })

document.getElementById("close2").addEventListener("click", function() {
    document.querySelector(".popup2").style.display = "none" ;
})


function buynow(){
    document.querySelector(".popup2").style.display = "flex" ;
}
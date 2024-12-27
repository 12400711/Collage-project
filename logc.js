// SEARCH
const searchButton = document.getElementById('search_button'),
    searchClose = document.getElementById('search_close'),
    searchContent = document.getElementById('search-content') 





if(searchButton){
    searchButton.addEventListener('click',()=>{
       searchContent.classList.add('show_search')
    })
}




if(searchClose){
    searchClose.addEventListener('click',()=>{
        searchContent.classList.remove('show_search')
    })
}



// LOGIN
const loginButton = document.getElementById('user_button'),
    loginClose = document.getElementById('login_close'),
    loginContent = document.getElementById('login_content') 





if(loginButton){
    loginButton.addEventListener('click',()=>{
       loginContent.classList.add('show_login')
    })
}




if(loginClose){
    loginClose.addEventListener('click',()=>{
        loginContent.classList.remove('show_login')
    })
}

// ABOUT
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

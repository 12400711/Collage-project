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




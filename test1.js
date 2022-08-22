const navlogo = document.getElementsByClassName('nav-logo')[0]
const navbarlink = document.getElementsByClassName('navbar-link')[0]

navlogo.addEventListener('click', () =>{
    navbarlink.classList.toggle('active')
})

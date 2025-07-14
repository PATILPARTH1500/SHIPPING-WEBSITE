// navbar scroll
window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

//navbar toggle

const menuBtn = document.getElementById('menu_btn')
const navLinks = document.getElementById('nav_links')
const menuIcon = document.querySelector('i')
const btn = document.querySelector('.nav_btns')

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle('open')
    btn.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open')
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})

// scroll to top
// const scrollToTopBtn = document.getElementById('scrollToTopBtn');
// scrollToTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const btn1 = document.getElementById("btn1-link");
  const btn2 = document.getElementById("btn2-link");

  if (btn1 && btn2) {
    if (window.innerWidth <= 768) {
      btn1.innerText = "Sign Up";
      btn1.setAttribute("href", "registration.html");

      btn2.innerText = "Sign In";
      btn2.setAttribute("href", "login.html");
    }
  } else {
    console.error("❌ btn1-link or btn2-link not found in DOM");
  }
});

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

window.addEventListener("resize", () => {
  const btn1 = document.getElementById("btn1-link");
  const btn2 = document.getElementById("btn2-link");

  if (!btn1 || !btn2) return;

  const isMobile = window.innerWidth <= 820;

  if (isMobile) {
    btn1.textContent = "Sign Up";
    btn1.setAttribute("href", "registration.html");

    btn2.textContent = "Sign In";
    btn2.setAttribute("href", "login.html");
  } else {
    btn1.textContent = "Explore More";
    btn1.setAttribute("href", "#services");

    btn2.textContent = "Contact Us";
    btn2.setAttribute("href", "#contact");
  }
});





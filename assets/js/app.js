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

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const username = localStorage.getItem('username');

const authButtons = document.querySelector('.nav_btns');
const navbar = document.querySelector('.navbar');

if (isLoggedIn && username) {
  // Hide Sign In / Sign Up
  if (authButtons) authButtons.style.display = 'none';

  // Create display element
  const userDisplay = document.createElement('div');
  userDisplay.className = 'user_display';
  userDisplay.style.display = 'flex';
  userDisplay.style.alignItems = 'center';
  userDisplay.style.gap = '10px';

  userDisplay.innerHTML = `
    <span style="font-weight:600;">Hi, ${username}</span>
    <button class="btn btn2" id="logout_btn">Logout</button>
  `;

  navbar.appendChild(userDisplay);

  // Logout
  document.getElementById('logout_btn').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.reload();
  });
}




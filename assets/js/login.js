// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0tezSlzLgeU_SRhiEQmdak7SV4kUM0Yc",
  authDomain: "axiom-logistics-login.firebaseapp.com",
  projectId: "axiom-logistics-login",
  storageBucket: "axiom-logistics-login.appspot.com",
  messagingSenderId: "584488049748",
  appId: "1:584488049748:web:d742fadfbc327ece0661c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login
const loginButton = document.querySelector('.login__button');
loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-pass').value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      document.getElementById("popup").classList.add("popup-show");

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    })
    .catch((error) => {
      console.error("Login error:", error.code, error.message);
      alert("Login failed: " + error.message);
    });
});


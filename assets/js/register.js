// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your web app's Firebase configuration
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

// Form submission
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const cpassword = document.getElementById('register-cpassword').value.trim();

  if (password !== cpassword) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      const user = userCredential.user;
      document.getElementById("popup").classList.add("popup-show"); // Show the popup
    })
    .catch((error) => {
      console.error("Error during registration:", error.code, error.message);
      alert("Registration failed: " + error.message);
    });
});

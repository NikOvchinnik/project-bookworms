
const modalBackdrop = document.getElementById('modalBackdrop');
const modalContent = document.getElementById('modalContent');
const btnRegisterModal = document.querySelector('.btn-register-modal');


btnRegisterModal.addEventListener('click', toggleModal);


function toggleModal() {
  if (modalBackdrop.style.display === 'flex') {
    closeModal();
  } else {
    openModal();
  }
}

function openModal() {
  modalBackdrop.style.display = 'flex';
  setTimeout(() => {
    modalBackdrop.style.opacity = 1;
    modalBackdrop.style.transform = 'translateY(0)';
  }, 10);
}

function closeModal() {
  modalBackdrop.style.opacity = 0;
  modalBackdrop.style.transform = 'translateY(20px)';
  setTimeout(() => {
    modalBackdrop.style.display = 'none';
  }, 300);
}


//При натисканні на Log out в модалці

document.addEventListener("DOMContentLoaded", function () {
  const registerLoginBtn = document.querySelector(".btn-register-mob");
  const registerModalBtn = document.querySelector(".btn-sign-in");
  const btnRegisterLogout = document.querySelector(".btn-sign-logout");

  btnRegisterLogout.addEventListener("click", function () {
 
    btnRegisterLogout.style.display = "none";

   
    registerModalBtn.style.display = "none";

      registerLoginBtn.style.display = "block";
   
  });
});

// При кліку Log in відкривається вікно Артема вмодалці

document.addEventListener("DOMContentLoaded", function () {
  const registerMobBtn = document.querySelector(".btn-register-mob");
  const authModal = document.querySelector(".auth-modal");

  registerMobBtn.addEventListener("click", function () {
    
    authModal.style.display = "block";
  });
});


//Імʼя user которий увійшов в систему

document.addEventListener("DOMContentLoaded", function () {
  const usernameDisplay = document.getElementById("usernameDisplay");


  const AUTH_KEY_LS = 'user-data';


  const userData = getFromLS(AUTH_KEY_LS);
  const authUser = userData && userData.name ? userData.name : '';

  const isSignedIn = authUser ? true : false;


  if (isSignedIn) {
    usernameDisplay.textContent = authUser;
  }
});
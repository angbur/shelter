const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const trigger1 = document.getElementById('btnMod1');
const trigger2 = document.getElementById('btnMod2');
const trigger3 = document.getElementById('btnMod3');
const closeButton1 = document.getElementById('close-button1');
const closeButton2 = document.getElementById('close-button2');
const closeButton3 = document.getElementById('close-button3');
const burgerMenu= document.querySelector(".burger-menu");
const menu = document.querySelector(".navbar");

let pets = [];
  
  async function loadPets() {
    const response = await fetch('https://angbur.github.io/shelter/assets/data/pets.json');
    pets = await response.json();
    console.log(pets)
  }

  loadPets();
  console.log(pets)


function toggleModal1() {
    modal1.classList.toggle("show-modal");
}

function toggleModal2() {
    modal2.classList.toggle("show-modal");
}

function toggleModal3() {
    modal3.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal1) {
        toggleModal1();
    } else if (event.target === modal2) {
        toggleModal2();
    } else if (event.target === modal3) {
        toggleModal3();
    }
}

trigger1.addEventListener("click", toggleModal1);
trigger2.addEventListener("click", toggleModal2);
trigger3.addEventListener("click", toggleModal3);

closeButton1.addEventListener("click", toggleModal1);
closeButton2.addEventListener("click", toggleModal2);
closeButton3.addEventListener("click", toggleModal3);

window.addEventListener("click", windowOnClick); 

const toggleMenu = () => {
    if (burgerMenu.classList.contains("showMenu")) {
        burgerMenu.classList.remove("showMenu");
        menu.classList.remove("navbar-mobile");
    } else {
        burgerMenu.classList.add("showMenu");
        menu.classList.add("navbar-mobile");
    }
}
  
  burgerMenu.addEventListener("click", toggleMenu);


  const ourFriendsContainerCards = document.querySelector('#container-class');
  

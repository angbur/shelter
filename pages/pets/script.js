const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const modal5 = document.getElementById('modal5');
const modal6 = document.getElementById('modal6');
const modal7 = document.getElementById('modal7');
const modal8 = document.getElementById('modal8');
const trigger1 = document.getElementById('btnMod1');
const trigger2 = document.getElementById('btnMod2');
const trigger3 = document.getElementById('btnMod3');
const trigger4 = document.getElementById('btnMod4');
const trigger5 = document.getElementById('btnMod5');
const trigger6 = document.getElementById('btnMod6');
const trigger7 = document.getElementById('btnMod7');
const trigger8 = document.getElementById('btnMod8');
const closeButton1 = document.getElementById('close-button1');
const closeButton2 = document.getElementById('close-button2');
const closeButton3 = document.getElementById('close-button3');
const closeButton4 = document.getElementById('close-button4');
const closeButton5 = document.getElementById('close-button5');
const closeButton6 = document.getElementById('close-button6');
const closeButton7 = document.getElementById('close-button7');
const closeButton8 = document.getElementById('close-button8');
const burgerMenu= document.querySelector(".burger-menu");
const menu = document.querySelector(".navbar");

function toggleModal1() {
    modal1.classList.toggle("show-modal");
}

function toggleModal2() {
    modal2.classList.toggle("show-modal");
}

function toggleModal3() {
    modal3.classList.toggle("show-modal");
}

function toggleModal4() {
    modal4.classList.toggle("show-modal");
}

function toggleModal5() {
    modal5.classList.toggle("show-modal");
}

function toggleModal6() {
    modal6.classList.toggle("show-modal");
}

function toggleModal7() {
    modal7.classList.toggle("show-modal");
}

function toggleModal8() {
    modal8.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal1) {
        toggleModal1();
    } else if (event.target === modal2) {
        toggleModal2();
    } else if (event.target === modal3) {
        toggleModal3();
    } else if (event.target === modal4) {
        toggleModal4();
    } else if (event.target === modal5) {
        toggleModal5();
    } else if (event.target === modal6) {
        toggleModal6();
    } else if (event.target === modal7) {
        toggleModal7();
    } else if (event.target === modal8) {
        toggleModal8();
    }
}

trigger1.addEventListener("click", toggleModal1);
trigger2.addEventListener("click", toggleModal2);
trigger3.addEventListener("click", toggleModal3);
trigger4.addEventListener("click", toggleModal4);
trigger5.addEventListener("click", toggleModal5);
trigger6.addEventListener("click", toggleModal6);
trigger7.addEventListener("click", toggleModal7);
trigger8.addEventListener("click", toggleModal8);

closeButton1.addEventListener("click", toggleModal1);
closeButton2.addEventListener("click", toggleModal2);
closeButton3.addEventListener("click", toggleModal3);
closeButton4.addEventListener("click", toggleModal4);
closeButton5.addEventListener("click", toggleModal5);
closeButton6.addEventListener("click", toggleModal6);
closeButton7.addEventListener("click", toggleModal7);
closeButton8.addEventListener("click", toggleModal8);

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
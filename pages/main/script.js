const modal = document.getElementById("myModal");
const btn = document.querySelectorAll(".btnMod");

btn.onclick = function() {
  modal.style.display = "block";
  console.log(haha)
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
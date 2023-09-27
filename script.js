let expanded = false;

function toggleContent() {
  const content = document.querySelector('.content p');
  const button = document.getElementById('expandButton');

  expanded = !expanded;

  if (expanded) {
    window.location.href='baoluc.html';
  } 
}
document.addEventListener("DOMContentLoaded", function() {
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("header").innerHTML = data;
      });

  fetch("footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer").innerHTML = data;
      });
});
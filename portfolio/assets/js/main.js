// Animation to make object appear when scrolling through the page.
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// Responsive nav when screen size shrinks.
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const items = document.querySelectorAll(".item");
  
  /* Toggle mobile menu */
  function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
  }
  
  /* Event Listeners */
  toggle.addEventListener("click", toggleMenu, false);
  for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggle.Item, false);
    }
    item.addEventListener("keypress", toggle.Item, false);
  }
  
  document.addEventListener("click", close.Submenu, false); 

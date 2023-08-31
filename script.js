function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  
   // Close the menu after a menu item is clicked
   document.addEventListener("click", function(event) {
      if (event.target.closest(".nav li a")) {
        document.getElementById("menu-bar").classList.remove("change");
        document.getElementById("nav").classList.remove("change");
        document.getElementById("menu-bg").classList.remove("change-bg");
      }
    });
  }
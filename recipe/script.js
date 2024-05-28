function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
  }
  
  //search bar
  
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm === "adobong manok") {
      window.location.href = "adobo.html"; 
    } else if (searchTerm === "bicol express") {
      window.location.href = "bicol.html"; 
    } else if (searchTerm === "monggo") {
      window.location.href = "monggo.html"; 
    } else if (searchTerm === "sinigang na baboy") {
      window.location.href = "sinigang.html"; 
    } else if (searchTerm === "kare-kare") {
      window.location.href = "karekare.html"; 
    } else if (searchTerm === "kaldereta") {
      window.location.href = "kaldereta.html"; 
    } else if (searchTerm === "kalderetang manok") {
      window.location.href = "kalmanok.html"; 
    } else if (searchTerm === "embutido") {
      window.location.href = "embutido.html"; 
    } else if (searchTerm === "ginataang hipon") {
      window.location.href = "hipon.html"; 
    } else if (searchTerm === "shawarma") {
      window.location.href = "shawarma.html"; 
    } else {
      alert("Recipe not found. Try searching for another recipe.");
    }
  });
  

  // disable right click

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

  
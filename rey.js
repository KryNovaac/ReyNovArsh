var dropdown = document.querySelector('.dropdown');


var dropdownContent = document.querySelector('.dropdown-content');


dropdown.addEventListener('click', function(event) {
  
  event.stopPropagation();

  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});


document.addEventListener('click', function() {
 
  dropdownContent.style.display = 'none';
});

document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    var href = this.getAttribute('href');

    
    if (href.startsWith('#') && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
    
  });
});
var hamburgerMenu = document.querySelector('.hamburger-menu');
var navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', function() {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
var hamburgerMenu = document.querySelector('.hamburger-menu');
var sidebar = document.querySelector('.sidebar');

hamburgerMenu.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});

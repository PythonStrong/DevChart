// Script.js — optional JS
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('mouseover', () => {
      const dropdownContent = item.querySelector('.dropdown-content');
      dropdownContent.style.display = 'block';
    });
    
    item.addEventListener('mouseout', () => {
      const dropdownContent = item.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    });
  });
  
  // script.js
document.getElementById('menuIcon').addEventListener('click', function () {
    const navbarMenu = document.getElementById('navbarMenu');
    if (navbarMenu.style.display === 'flex') {
      navbarMenu.style.display = 'none';
    } else {
      navbarMenu.style.display = 'flex';
    }
  });
  
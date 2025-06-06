// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  for (let anchor of anchorLinks) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  }
});
function activateNavItem(element) {
    var span = element.querySelector('span');
    
    // Hide all name spans
    document.querySelectorAll('.nav-item span').forEach(function(span) {
      span.style.display = "none";
    });
    
    // Remove 'active' class from all nav-items
    document.querySelectorAll('.nav-item').forEach(function(el) {
      el.classList.remove('active');
    });
    
    // Add 'active' class to the parent of the clicked item
    element.parentNode.classList.add('active');
  
    // Show the name span of the clicked item
    span.style.display = "block";
  }
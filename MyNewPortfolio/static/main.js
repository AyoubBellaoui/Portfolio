function toggleMenu() {
    const menu = document.querySelector('.navbar-links');
    const icon = document.querySelector('.burger i');
    
    menu.classList.toggle('active');
    
    // Toggle icon between bars and X
    if (menu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Close menu when any nav link or Download CV button is clicked
document.querySelectorAll('.nav-center a, .nav-btn').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.navbar-links');
        const icon = document.querySelector('.burger i');
        
        // Hide menu and reset icon
        menu.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Debug: Confirm script runs on load
console.log('main.js loaded. Burger should be visible on screens <= 1024px.');
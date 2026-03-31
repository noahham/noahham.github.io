// Scrolls to the contact section when button is clicked
document.querySelector('#contact').addEventListener('click', function () {
    sessionStorage.setItem('scrollToAbout', '1');
    window.location.href = '../../index.html';
});
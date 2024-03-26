document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById('menuButton');
    var dropdownMenu = document.getElementById('dropdownMenu');

    menuButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && event.target !== menuButton) {
            dropdownMenu.classList.remove('show');
        }
    });
});
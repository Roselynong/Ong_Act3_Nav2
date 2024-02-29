document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var dropdown = this.querySelector('.dropdown');
            dropdown.classList.toggle('show');
        });
    });
});
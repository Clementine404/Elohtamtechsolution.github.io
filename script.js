var sideMenu = document.querySelector('.side-menu');

function toggleMenu() {
    sideMenu.classList.toggle('open');
}

function closeMenu() {
    sideMenu.classList.remove('open');
}

window.addEventListener('click', function(event) {
    if (sideMenu.classList.contains('open') && !event.target.closest('.side-menu') && !event.target.closest('.burger-menu')) {
        closeMenu();
    }
});

function submitForm() {
    var modal = document.getElementById('myModal');
    var popupMessage = document.getElementById('popup-message');
    popupMessage.innerHTML = "Your message has been submitted!";
    modal.style.display = 'block';

    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        clearForm(); 
        return true;
    }
    return false;
}
function clearForm() {
    document.getElementById('visitor-name').value = '';
    document.getElementById('visitor-email').value = '';
    document.getElementById('visitor-message').value = 'Message';
}
var questions = document.querySelectorAll('.question');

        questions.forEach(function(question) {
            question.addEventListener('click', function() {
                var answer = this.nextElementSibling;
                answer.classList.toggle('show');
            });
        });
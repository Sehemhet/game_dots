//попапы
function openPopup() {
    var popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

function closePopup() {
    var popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

function openRaiting() {
    var winnForm = document.querySelector('.winn_form');
    var loseForm = document.querySelector('.lose_form');
    var raitingForm = document.querySelector('.raiting_form');

    if (winnForm.classList.contains('ACTIVE')) {
        winnForm.classList.remove('ACTIVE');
    } else if (loseForm.classList.contains('ACTIVE')) {
        loseForm.classList.remove('ACTIVE');
    }
    raitingForm.classList.add('ACTIVE');
}
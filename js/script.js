// Функция для переключения темы
function toggleTheme() {
    var parentElement = document.querySelector('.parent');
    var switchElement = document.getElementById('theme_switch');

    // Если чекбокс отмечен, применяем черную тему
    if (switchElement.checked) {
        parentElement.classList.remove('white_theme');
        parentElement.classList.add('black_theme');
        // Сохраняем текущую тему в localStorage
        localStorage.setItem('theme', 'black');
    } else {
        // В противном случае возвращаем белую тему по умолчанию
        parentElement.classList.remove('black_theme');
        parentElement.classList.add('white_theme');
        // Сохраняем текущую тему в localStorage
        localStorage.setItem('theme', 'white');
    }
}

// Проверяем, была ли сохранена тема в localStorage
var savedTheme = localStorage.getItem('theme');

// Если тема сохранена, применяем её
if (savedTheme === 'black') {
    document.getElementById('theme_switch').checked = true;
    toggleTheme();
}

// Добавляем обработчик события изменения состояния чекбокса
document.getElementById('theme_switch').addEventListener('change', toggleTheme);





// Функция выбора сложности
function showTab(tabId, button) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tabs__block');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');

    // Сохраняем выбранный таб в localStorage
    localStorage.setItem('selectedTabId', tabId);

    // Удалить класс активной кнопки у всех кнопок
    var buttons = document.querySelectorAll('#level_form button');
    buttons.forEach(function(btn) {
        btn.classList.remove('level_active');
    });

    // Добавить класс активной кнопки к нажатой кнопке
    button.classList.add('level_active');

}

document.addEventListener('DOMContentLoaded', function() {
    // Получаем идентификатор выбранного таба из localStorage
    var selectedTabId = localStorage.getItem('selectedTabId');

    // Если выбранный таб не сохранен, открываем первый таб
    if (!selectedTabId) {
        selectedTabId = 'tab_1';
        localStorage.setItem('selectedTabId', selectedTabId); // Сохраняем выбранный таб
    }

    // Показать выбранную сложность при загрузке страницы
    var selectedButton = document.querySelector('#level_form button[data-tab="' + selectedTabId + '"]');
    showTab(selectedTabId, selectedButton);
});


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


function setDotName() {
    var wrapDots = document.querySelectorAll('.wrap_dot_beginner');
    wrapDots.forEach(function(wrapDot) {
        var child = wrapDot.querySelector('.wrap_dot_beginner > div');
        if (child.classList.contains('d_red')) {
            wrapDot.dataset.name = "RED";
        } else if (child.classList.contains('d_green')) {
            wrapDot.dataset.name = "GREEN";
        } else if (child.classList.contains('d_yellow')) {
            wrapDot.dataset.name = "YELLOW";
        } else if (child.classList.contains('d_blue')) {
            wrapDot.dataset.name = "BLUE";
        } else if (child.classList.contains('d_purple')) {
            wrapDot.dataset.name = "PURPLE";
        }
    });
}

// Вызов функции
setDotName();



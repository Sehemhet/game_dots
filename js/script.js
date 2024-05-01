document.getElementById('login').addEventListener('click', function() {
    var emailField = document.getElementById('user_email');
    var repeatPasswordField = document.getElementById('user_repeat_password');
    var loginButton = document.getElementById('login');

    if (loginButton.innerText === 'Log in') {
        emailField.style.display = 'none';
        repeatPasswordField.style.display = 'none';
        loginButton.innerText = 'Registration';
    } else {
        emailField.style.display = '';
        repeatPasswordField.style.display = '';
        loginButton.innerText = 'Log in';
    }
});


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
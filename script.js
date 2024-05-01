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




// выбор сложности
function showTab(tabId) {
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
}



// функция выбраного таба
function clickButtonTab () {
    for (var i = 1; i <= 3; i++) {
        var buttonId = 'tab_' + i + '_button';
        var button = document.getElementById(buttonId);
        button.addEventListener('click', function() {
            setActiveButton();
        });
    }
}

//добавляение активной кнопки от активного контейнера
function setActiveButton() {
    // Перебираем все табы
    for (var i = 1; i <= 3; i++) {
        var tabId = 'tab_' + i;
        var buttonId = tabId + '_button';
        var tab = document.getElementById(tabId);
        var button = document.getElementById(buttonId);

        // Если таб имеет класс active-tab, добавляем класс btn_tab_active кнопке
        if (tab.classList.contains('active-tab')) {
            button.classList.add('level_active');
        } else {
            button.classList.remove('level_active');
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {

    // Получаем идентификатор выбранного таба из localStorage
    var selectedTabId = localStorage.getItem('selectedTabId');

    // Если выбранный таб не сохранен, открываем первый таб
    if (!selectedTabId) {
        selectedTabId = 'tab_1';
        localStorage.setItem('selectedTabId', selectedTabId); // Сохраняем выбранный таб
    }

    // Показать выбранный таб при загрузке страницы
    showTab(selectedTabId);

});




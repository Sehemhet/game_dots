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

    // Добавить обработчик события клика на кнопки выбора сложности
    var levelButtons = document.querySelectorAll('#level_form button');
    levelButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var tabId = this.getAttribute('data-tab');
            var confirmMsg = "Are you sure you want to change the difficulty level?";
            if (confirm(confirmMsg)) {
                // Если пользователь подтвердил смену уровня, выполнить перезагрузку страницы
                window.location.reload();
            }
        });
    });
});

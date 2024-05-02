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



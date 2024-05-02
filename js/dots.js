function setDotName(dotClass) {
    var wrapDots = document.querySelectorAll('.' + dotClass);
    wrapDots.forEach(function(wrapDot) {
        var child = wrapDot.querySelector('.' + dotClass + ' > div');
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

// Вызов функции для каждого уровня
setDotName('wrap_dot_beginner');
setDotName('wrap_dot_medium');
setDotName('wrap_dot_hard');





// маркер кликнутой точки
var firstColor = null;
var selectedDots = '';

function toggleDotClick(dotClass) {
    var wrapDots = document.querySelectorAll('.' + dotClass);

    wrapDots.forEach(function(wrapDot) {
        wrapDot.addEventListener('click', function() {
            var currentColor = this.dataset.name;
            var currentDotId = this.id;

            // Если это первый клик или цвет текущего элемента совпадает с цветом первого выбранного,
            // то применяем/удаляем класс dot_click
            if (!firstColor || currentColor === firstColor) {
                this.classList.toggle('dot_click');

                // Если применили класс dot_click, сохраняем цвет текущего элемента
                if (this.classList.contains('dot_click')) {
                    firstColor = currentColor;
                    selectedDots += currentDotId + ',';
                } else {
                    // Если удалили класс dot_click, удаляем точку и цвет из сохраненных
                    var dotIndex = selectedDots.indexOf(currentDotId);
                    selectedDots = selectedDots.substring(0, dotIndex) + selectedDots.substring(dotIndex + currentDotId.length + 1);
                }
            } else {
                // Если цвет текущего элемента не совпадает с цветом первого выбранного, удаляем класс dot_click
                this.classList.remove('dot_click');

                // Удаляем точку и цвет из сохраненных
                var dotIndex = selectedDots.indexOf(currentDotId);
                selectedDots = selectedDots.substring(0, dotIndex) + selectedDots.substring(dotIndex + currentDotId.length + 1);

                // Добавляем класс dot_wrong на полсекунды, если цвет не совпадает
                this.classList.add('dot_wrong');
                setTimeout(() => {
                    this.classList.remove('dot_wrong');
                }, 500);
            }

            // Если ни у одного элемента не присутствует класс dot_click, сбрасываем firstColor и selectedDots
            var allDots = document.querySelectorAll('.' + dotClass);
            var noDotClick = true;
            allDots.forEach(function(dot) {
                if (dot.classList.contains('dot_click')) {
                    noDotClick = false;
                }
            });
            if (noDotClick) {
                firstColor = null;
                selectedDots = '';
            }
        });
    });
}

// Вызов функции для каждого уровня
toggleDotClick('wrap_dot_beginner');
toggleDotClick('wrap_dot_medium');
toggleDotClick('wrap_dot_hard');



//кнопка сохрарнения выбраных точек и цвета
function sendDots() {
    // Определяем активный таб и соответствующий ему класс уровня сложности
    var activeTabId = localStorage.getItem('selectedTabId');
    var levelClass = '';
    switch(activeTabId) {
        case 'tab_1':
            levelClass = 'wrap_dot_beginner';
            break;
        case 'tab_2':
            levelClass = 'wrap_dot_medium';
            break;
        case 'tab_3':
            levelClass = 'wrap_dot_hard';
            break;
        default:
            console.log("Активный таб не найден.");
            return;
    }

    // Получаем выбранные точки в активном контейнере
    var dots = document.querySelectorAll('.' + levelClass + '.dot_click');

    // Если выбрано меньше двух точек, применяем стиль .dot_wrong к кнопке send_result на секунду и выходим из функции
    if (dots.length < 2) {
        var sendResultButton = document.getElementById('send_result');
        sendResultButton.classList.add('dot_wrong');
        setTimeout(function() {
            sendResultButton.classList.remove('dot_wrong');
        }, 500);
        console.log("Выберите не менее двух точек.");
        return;
    }

    // Записываем значения выбранных точек и их цвета в соответствующие переменные
    var selectedDots = Array.from(dots).map(dot => dot.id).join(',');
    var selectedColor = dots.length > 0 ? dots[0].dataset.name : '';

    // Удаляем дочерние классы соответствующего цвета у выбранных точек
    dots.forEach(function(dot) {
        var child = dot.querySelector('div');
        switch(selectedColor) {
            case 'RED':
                child.classList.remove('d_red');
                break;
            case 'GREEN':
                child.classList.remove('d_green');
                break;
            case 'YELLOW':
                child.classList.remove('d_yellow');
                break;
            case 'BLUE':
                child.classList.remove('d_blue');
                break;
            case 'PURPLE':
                child.classList.remove('d_purple');
                break;
        }

        // Удаляем класс dot_click
        dot.classList.remove('dot_click');
    });

   // Сбрасываем переменную firstColor
    firstColor = null;

    console.log(selectedDots);
    console.log(selectedColor);

    // Добавляем класс dot_click к кнопке send_result на полсекунды
    var sendResultButton = document.getElementById('send_result');
    sendResultButton.classList.add('dot_click');
    setTimeout(function() {
        sendResultButton.classList.remove('dot_click');
    }, 500);
}

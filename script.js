//Делаем answers глобальной переменной, чтобы иметь доступ к массиву из других функций        
let answers = {'test1':['11', '3', '4', '81', '496', '65536', '81', '3', '1050', '360'],
                'test2':['4', '2', '1', '2', '4', '2', '2', '1', '2', '3'],
                'test3':['1281', 'А216', '5128', '404', '155', '1875', '8', 'А20', '200', '805'],
                'test4':['2', '2', '18', '16', '2', '46', '3', '1', '5', '13'],
                'test5':['2', '1', '2 4 5 8 10 20 40', '120', '7', '6', '19', '9', '2', '2', '4', '3 7 21'],
                'test6':['2 буквы А', 'РРРРО', 'ИИИИА', 'да 1 буква К', '72', 'ККККК', 'ВСААВА', '311211', '64', '67'],
                'test7':['4', '2', '2', '4', '4', '2', '2', '8', '30', '1111'],
                'test8':['9', '30', '28', '27', '2'],
                'test9':['3', '2', '3', '1', '1'],
                'test10':['3', '44', '2', '2', '3'],
                'test11':['7', '7', '11211', '21211', '1212', '1432', 'ЖСК', '21221', '17', '24'],
                'test12':['3', '1', '4', '3', '2', '1', '4', '2'],
                'test13':['2', '3', '2', '1', '3'],
                'test14':['БАГВ', 'ДБГЖАВЕ', '2046', 'ЕFВА', 'ВGFC'],
                'test15':['3', '2', '4', '2', '18Кц', '4', '1', '1', '2', 'Да'],
                'test16':['4', '3', '4', '2', '1', '4', '2', '4', '2', '3'],
                'test17':['7', '5', '3', '19', '-10'],
                'test18':['4', '2', '1', '3', '1'],
                'test19':['4321', '2134', '3124', '9600', '3270'],
                'test20':['4', '2', '3', '2'],
                'test21':['2', '2', '511', '7', '6'],
                'test22':['11357', '600000', '123', '1003', '13531'],
};//массив с ответами


//Имя для локального хранилища
let nameLocalStorage = 'localStorageSoloveykinaMilena'
//Проверка ответов
function Check(testName) {


    let score = 0;
    //создаем цикл от 1 до длины массива answers. Переменная i-будет счетчиком цикла(1,2,3)
    for (let i = 1; i <= answers[testName].length; i++) {
        //получаем ссылку на объект table с вопросом
        let q = document.getElementById('q' + i);
        //получаем ссылку на объект input с ответом пользователя
        let a = document.getElementById('a' + i);
        //если ответ совпадает с правильным ответом
        if (a.value == answers[testName][i - 1]) {
            //окрашиваем табличку с вопросом в зеленый цвет
            q.style.background = 'green';
            //увеличиваем количество правильных ответов
            score++;
        }
        else {
            //если ответ не совпадает, то окрашиваем табличку в красный цвет
            q.style.background = 'red';
        }
    }


    //находим элемент с id score и меняем его внутреннее содержимое на score
    document.getElementById('score').innerHTML = score;
}
// Сохранение и загрузка




function Save() {
    if (typeof (Storage) !== "undefined") {
        console.log("Local Storage доступен.");
    } else {


        alert("Local Storage не поддерживается.")
        return;
    }



    //Создаем  объект в котором соберем ответы пользователя и сохраним время сохранения
    let object = {
        userAnswers: [],
        savedTime: null
    };
    //собирает текущие ответы
    for (let i = 0; i < answers.length; i++)
        //получаем ссылку на объект input с ответом пользователя
        object.userAnswers[i] = document.getElementById('a' + (i + 1)).value;


    //в свойство объекта savedTime сохраняем текущее время
    object.savedTime = new Date();
    console.log(object)
    //сохраняем объект в ввиде JSON строки в локальном хранилище браузера
    localStorage.setItem(nameLocalStorage, JSON.stringify(object));
    alert('Данные сохранены')
}




function Load() {
    if (typeof (Storage) !== "undefined") {
        console.log("Local Storage доступен.");
    } else {


        alert("Local Storage не поддерживается.")
        return;
    }


    //получение JSON данных из хранилища браузера
    const temp = localStorage.getItem(nameLocalStorage);
    console.log(temp);
    //если в переменной temp null, это означает что в хранилище нет данных с таким ключом
    if (temp != null) {
        //включаем обработку исключительной ситуации
        let object;
        try {
            //преобразование JSON данных в объект
            object = JSON.parse(temp);
            //вывод данных в консоль (для проверки работоспособности программы)
            console.log(object);
        }
        catch {
            console.error('Ошибка парсирования JSON');
            return;
        }
        //заполнение полей веб-старницы данными из массива
        for (let i = 0; i < object.userAnswers.length; i++) {
            document.getElementById('a' + (i + 1)).value = object.userAnswers[i];
        }
    }
    else alert('Нет сохранений с таким именем')
}



   let timeLeft = 3600; // Время в секундах (1 час)
        const timerElement = document.getElementById('time');

        const timer = setInterval(() => {
            timeLeft--;
            
            // Вычисляем часы, минуты и секунды
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            // Форматируем время с ведущими нулями
            timerElement.textContent = 
                String(hours).padStart(2, '0') + ':' + 
                String(minutes).padStart(2, '0') + ':' + 
                String(seconds).padStart(2, '0');

            if (timeLeft <= 0) {
                clearInterval(timer);
                alert('Время вышло!');
                // Здесь можно добавить логику для завершения теста
            }
        }, 1000);

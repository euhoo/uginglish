# uginglish
studying English with cards

done 1 итерация: нициализировать проект,
done 2 итерация: определить основные библиотеки на фронте:
    react, redux, axios, redux-connect, thunk, react-router, material, scss,
done 3 итерация: настроить сборку,
fail     3.1: настроить eslint, husky ... не стал делать: пока лишнее
done 4 итерация: продумать архитектуру приложения
    4.1 реакт с router(вообще роутер тут не нужен, но пусть будет для пробы) и redux на фронте
    4.2 node на express на бэке
    4.3 бд postgresql
    4.4 для каждого класса задач своя фабрика. 
        У каждой фабрики только своя зона ответственности:
        Положить их в src/factories/.
        4.4.1 для запросов requests
        4.4.2 для конструирования url - urls
        4.4.3 для обработки ошибок errors
        4.4.4 для всплывающих подсказок toast
        4.4.5 для 
    4.5 для redux стандартный способ подключения. отдельные папки actions, reducers и пр
    4.6 строение store redux. продумать отдельно состав. продумать способ его инициализации.
        как вариант - при логине - запрос, который возвращает состав полей.
    4.7 таблички в БД. продумать какие. как реализовать статистику для многих пользователей?
        как вариант 
            1 табличка users с полями id(хэш логина), credentials(хэш логина+пароля), last_login_date, reg_date,
             name, email, surname
            2 табличка words с полями id(хэш слова по английски), english(английское значение), russian(русское значение),
                add_date(дата добавления)
            3 табличка categories с полями id(id записи), name(название),
            4 табличка statistics c полями id(id записи), user_id(id юзера), word_id(id слова),
             move_from(из какой категории переместили) move_to(в какую категорию переместили),
              move_date(дата перемещения)
done 5 итерация: продумать бизнес-логику приложения
        5.1 самая простая 1 страница. на ней отображается одна карточка. на карточке слово на Английском и картинка,
        нужно ввести перевод. Далее проверить правильность введенного(в нижнем регистре) и если
        правильно переносим слово в следующую категорию.неправильно - оставляем в категории "каждый день"
        5.2 добавить страницу с добавлением новых слов.
        5.3 добавить так же возможность отображения на русском и перевода на английский.
        5.4 добавить категорию "каждая неделя" - туда попадают правильно угаданные слова из категории "каждый день"
        5.5 "каждыя неделя" -> "каждый месяц". если неправильно в "каждый день"
        5.6 "каждые полгода". если неправильно -> "каждый день"
        5.7 "каждый год".
        5.8 страница профиля с статистикой. можно посмотреть статистику правильных и неправильных слов,
            выбрать слова, которые тяжелее всех запоминаются
        
done 6 итерация: сверстать первый самый просто рабочий образец без доступа к остальным данным
done 7 итерация: расписать остальные структурные компоненты системы.
    7.1 База данных.
    7.2 Апи получения перевода русского и английского слов
    7.3 апи получения картинки слова
    7.4 бэкэнд
8 итерация: подключить перевод вводимого слова
done 9 итерация: настроить и подключить простой сервер + бэк
10 итерация: обдумать авторизацию. задаю хэш-функцию, размерность взять 64кб, больше не надо.
    10.1регистрация: имя хэширую -> на сервер -> смотрю в бд/ если есть - с ним нельзя регистрироваться
    10.2авторизация: логин+пароль в одну строку без пробелов, хэширую -> а бэк->кладу в бд:
        ключ(хэшированное имя)-значение(хэшированное логин + пароль)
    10.3 запомнить юзера: захэшированный логин+пароль пишу в куку и это явяется фактором запоминания юзера
11 итерация: реализовать авторизацию через куку без бд
12 итерация: добавить бд
13 итерация: продумать и добавить плоские таблицы в бд
14 итерация: реализовать авторизацию с помощью бд
15 итерация: реализовать вторую часть веб приложения(добавить месячные карточки, годовые)
16 итерация: настроить скрипты gulp(gulpToDo.md)

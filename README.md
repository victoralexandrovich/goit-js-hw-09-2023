# GoIT JS Homework 9 - Promises, Timers, and Async UI (JS)
JavaScript homework assignment for the GoIT course (Module 9). Topic: asynchronous JavaScript, timers (`setInterval`, `setTimeout`), Promises, and external UI libraries (`flatpickr`, `Notiflix`).
**What was done:**
- Set up the project using `parcel-project-template` and replaced the `src` folder with the task files
- **Color Switcher (Task 1):** Built a dynamic background color switcher using random HEX color generation, implemented `Start`/`Stop` interval control, and added button state disabling to prevent multiple intervals from overlapping
- **Countdown Timer (Task 2):** Integrated the `flatpickr` library with custom options to cross-browser select target dates and times, adding validation for past dates
- Implemented time calculation logic (`convertMs`) and formatting (`addLeadingZero`) to update days, hours, minutes, and seconds dynamically every second
- **Promise Generator (Task 3):** Created a promise-based generator form handling inputs for initial delay, delay step, and promise amount
- Asynchronous promise execution with sequential delays and `.then()` / `.catch()` logging alongside `Notiflix` notifications

============================================================================

# Домашнє завдання 9 GoIT JS — Проміси, таймери та асинхронний інтерфейс (JS)
Практичне завдання з курсу JavaScript від GoIT (Модуль 9). Тема: асинхронний JavaScript, таймери (`setInterval`, `setTimeout`), проміси та робота з бібліотеками інтерфейсу (`flatpickr`, `Notiflix`).
**Що зроблено:**
- Налаштовано проєкт на основі `parcel-project-template` з повною заміною папки `src` на файли завдання
- **Перемикач кольорів (Завдання 1):** Створено скрипт зміни кольору фону `<body>` за допомогою генератора випадкових HEX-кольорів, реалізовано управління кнопками `Start`/`Stop` та блокування кнопки запуску під час роботи таймера
- **Таймер зворотного відліку (Завдання 2):** Підключено бібліотеку `flatpickr` для вибору кінцевої дати і часу, додано перевірку на вибір дати у майбутньому та валідацію кнопки запуску
- Реалізовано конвертацію мілісекунд (`convertMs`) та форматування часу з додаванням провідних нулів (`addLeadingZero`) для оновлення інтерфейсу таймера щомиті
- **Генератор промісів (Завдання 3):** Створено форму для генерації послідовності промісів на основі початкової затримки, кроку та загальної кількості
- Налаштовано створення та обробку промісів за допомогою методів `.then()` і `.catch()`, а також інтегровано бібліотеку сповіщень `Notiflix`

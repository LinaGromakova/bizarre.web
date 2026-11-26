# Разработка сайта для художника-комиксиста с галереей комиксов и возможностью заказа персонального комикса

Выпускная квалификационная работа по специальности 09.02.07 «Информационные системы и программирование».

**Опубликованная версия веб-ресурса:** [https://vercel.app](https://bizarre-web.vercel.app/)

---

## 1. Назначение и функциональность

Проект представляет собой клиентскую часть адаптивного представительского веб-ресурса мангаки Хирохико Араки, реализованного как одностраничное приложение (SPA).

Основные функциональные модули:
* **Главная страница:** пошаговая вертикальная навигация по тематическим секциям, биографическая справка и интерактивная хронология эволюции графического стиля автора.
* **Галерея произведений:** интерактивный каталог работ с получением метаданных через внешний программный интерфейс (Shikimori GraphQL API) и механизмом отказоустойчивости (резервный локальный массив).
* **Модуль обратной связи:** демонстрационная форма оформления заказа персонального комикса с клиентской валидацией полей и отправкой уведомлений через облачный почтовый шлюз EmailJS.
* **Обработка ошибочных маршрутов:** пользовательская страница ошибки 404 с интерактивным параллакс-эффектом.

---

## 2. Технологический стек

| Назначение | Используемые технологии и инструменты |
| :--- | :--- |
| **Базовые технологии и сборка** | HTML5, CSS3, TypeScript, React, Vite, Node.js, npm |
| **Стилизация и графика** | Tailwind CSS v4, clsx, vite-plugin-svgr, форматы AVIF и SVG |
| **Маршрутизация и анимация** | React Router, Framer Motion, Swiper |
| **Внешние программные интерфейсы** | Shikimori GraphQL API, EmailJS REST API (нативный метод `fetch`) |
| **Контроль качества и развертывание** | ESLint, Prettier, Git, GitHub, облачная платформа Vercel |

---

## 3. Архитектура проекта

Исходный код в директории `src/` организован по пятислойной модульной структуре со строгой однонаправленностью зависимостей и реэкспортами через индексные файлы (`index.ts`):

```
src/
├── app/       # Инициализация приложения, провайдеры, общая обертка и конфигурация маршрутов
├── pages/     # Компоненты страниц (главная, галерея, контакты, страница ошибки 404)
├── slides/    # Изолированные секции пошагового слайдера главной страницы
├── modules/   # Независимые функциональные модули (навигация, форма заказа, карточки галереи)
└── shared/    # Переиспользуемые компоненты интерфейса, пользовательские хуки, векторная графика, константы
```

---

## 4. Установка и локальный запуск

1. **Клонирование репозитория и установка зависимостей:**
   ```bash
   git clone https://github.com
   cd bizarre.web
   npm install
   ```

2. **Настройка переменных окружения:**
   Создайте файл `.env` в корневой директории проекта и укажите идентификаторы сервиса EmailJS:
   ```env
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_USER_ID=your_user_id
   ```
   
3. **Запуск локального сервера разработки:**
   ```bash
   npm run dev
   ```
   После запуска проект доступен по адресу `http://localhost:5173`.

4. **Сборка оптимизированной версии:**
   ```bash
   npm run build
   ```

---

## 5. Внешний вид интерфейса

| Секция/Страница | Десктоп | Мобильная версия |
| :---: | :---: | :---: |
| **1. Приветственная секция** | <img src="https://github.com/user-attachments/assets/4d9a0acb-dc7e-4fcf-8c1f-67d25ec63cd8" width="380"> | <img src="https://github.com/user-attachments/assets/2fbd0c8d-bfeb-4651-9e13-649055dc4837" width="130"> |
| **2. О мангаке** | <img src="https://github.com/user-attachments/assets/7f81b20e-3b49-4a7f-89a3-40e49933de71" width="380"> | <img src="https://github.com/user-attachments/assets/45670444-0f2f-45b4-b518-2345e26dcad4" width="130"> |
| **3. О «JoJo's Bizarre Adventure»** | <img src="https://github.com/user-attachments/assets/52f0c297-c142-4d6b-bd9d-0d807c2f7b1c" width="380"> | <img src="https://github.com/user-attachments/assets/080366f7-cb1e-474e-978d-740f21e9a662" width="130"> |
| **4. Эволюция стиля художника** | <img src="https://github.com/user-attachments/assets/b660d31e-3bc9-4730-8b6c-8bfe53ad83c6" width="380"> | <img src="https://github.com/user-attachments/assets/74e7a26a-e764-42a9-9d91-1fe004831a12" width="130"> |
| **5. Вдохновение высокой модой** | <img src="https://github.com/user-attachments/assets/cc33a451-a31a-454f-91c2-62d7f5d4a78c" width="380"> | <img src="https://github.com/user-attachments/assets/723ed162-a9d0-4f86-999c-a63f5596d9ad" width="130"> |
| **Страница галереи** | <img src="https://github.com/user-attachments/assets/a77414d0-b365-4cac-9efb-b8d9d68daf5f" width="380"> | <img src="https://github.com/user-attachments/assets/8a2dac18-1e64-4811-adae-24dfc58459c4" width="130"> |
| **Страница заказа персонального комикса** | <img src="https://github.com/user-attachments/assets/be6c8c9a-68ee-48a1-b125-f8793098a4dc" width="380"> | <img src="https://github.com/user-attachments/assets/8d6aa31e-4ce9-44cf-b4c8-26d0b77f19b7" width="130"> |
| **Страница ошибки 404** | <img src="https://github.com/user-attachments/assets/74146de9-ed75-4604-bc6d-d8a0d5c45bc2" width="380"> | <img src="https://github.com/user-attachments/assets/3875a749-edd7-428c-9532-6753970871f9" width="130"> |

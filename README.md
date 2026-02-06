# Smile Dentistry Landing
Одностраничный сайт стоматологии с лид-формой и небольшой API-частью.

**Стек**
- React + TypeScript + Vite
- SCSS (BEM-подобные классы)
- Express + CORS (мини-API)

**Что показывает проект**
- Маркетинговая структура лендинга (hero, pain, services, proof, reviews, CTA)
- Адаптивная сетка и анимации появления карточек
- Форма записи с валидацией и статусами
- Мини-сервер для приема лидов

**Запуск**
1. `npm install`
2. `npm run build`
3. `npm run server`
4. Откройте `http://localhost:3001`

**API**
- `GET /api/health` — проверка сервера
- `POST /api/lead` — создать заявку `{ name, phone }`
- `GET /api/leads` — список заявок (в памяти, без БД)

**Структура**
- `src/components` — блоки лендинга
- `src/styles` — токены и миксины
- `server/index.js` — API для формы

**Сборка**
- Сборка идет через `scripts/build.mjs` (TypeScript + Sass).
- Для запуска в браузере используется import map с CDN-версией React.

**Netlify**
- Форма настроена как Netlify Forms (`appointment`).
- В `netlify.toml` указан `publish = "dist"` и `command = "npm run build"`.

**Примечания**
- Заявки хранятся в памяти процесса. Для продакшена нужна БД или внешний сервис.

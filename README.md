# Vanilla TS Component System

Простий вебзастосунок, написаний на чистому TypeScript без використання фреймворків (React/Angular). Демонструє власну реалізацію компонентно-орієнтованої архітектури.
* **Кастомна система компонентів:** Власна архітектура на базі абстрактного класу `Component` для інкапсуляції логіки, розмітки та стилів.
* **Клієнтська маршрутизація (Router):** Навігація між сторінками (`/list`, `/images`) без перезавантаження сторінки завдяки `History API` (`pushState` та `popstate`).
* **Збереження стану:** Роутер запам'ятовує останній відкритий маршрут у `localStorage` і автоматично відновлює його при наступному відкритті або оновленні сторінки.

## Installation
1. **Встановіть залежності:**
```bash
npm install
```
2. **Скомпілюйте TypeScript у JavaScript:**
```bash
npx tsc
```
3. **Запустіть локальний сервер (в режимі SPA):**
```bash
npx serve -s .
```
4. **Відкрийте у браузері:**
```bash
http://localhost:3000
```
# Structure
* src/Router.ts - ядро клієнтського роутера та робота з історією/локальним сховищем.
* src/core/Component.ts - базовий абстрактний клас для всіх компонентів.
* src/components/ - конкретні реалізації UI-компонентів (Header, List, Image).
* src/index.ts - головний файл: точка входу, ініціалізація роутера та реєстрація маршрутів.
* dist/ - автоматично згенерований скомпільований JavaScript-код.

# Screenshot
<img width="958" height="480" alt="image" src="https://github.com/user-attachments/assets/c2395562-6418-4fc1-a09d-30a053d7ab36" />
<img width="959" height="688" alt="image" src="https://github.com/user-attachments/assets/ad0ba03a-ae88-42fb-a00b-207e8619a523" />


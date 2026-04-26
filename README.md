# Vanilla TS Component System

Простий вебзастосунок, написаний на чистому TypeScript без використання фреймворків (React/Angular). Демонструє власну реалізацію компонентно-орієнтованої архітектури.

## Installation
1. **Встановіть залежності:**
```bash
npm install
```
2. **Скомпілюйте TypeScript у JavaScript:**
```bash
npx tsc
```
3. **Запустіть локальний сервер:**
```bash
npx serve .
```
4. **Відкрийте у браузері:**
```bash
http://localhost:3000
```
# Structure
* src/core/ - базовий абстрактний клас Component.

* src/components/ - реалізації конкретних компонентів (Header, List, Image).

* src/index.ts - точка входу та збирання застосунку.

* dist/ - скомпільований код (генерується після npx tsc).
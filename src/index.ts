// src/index.ts
import { Router } from "./Router.js";
import { ListComponent } from "./components/ListComponent.js";
import { ImageComponent } from "./components/ImageComponent.js";
import { HeaderComponent } from "./components/HeaderComponent.js";

const router = new Router("content");

// 1. Кнопки навігації
document.getElementById("btn-list")?.addEventListener("click", () => {
  router.navigate("/list");
});

document.getElementById("btn-image")?.addEventListener("click", () => {
  router.navigate("/images");
});

// 2. Реєстрація маршруту /list
router.register("/list", () => {
  const content = document.getElementById("content")!;
  content.innerHTML = ""; // Очищаємо контейнер
  
  const header = new HeaderComponent("Список елементів");
  const list = new ListComponent(["Перший", "Другий", "Третій", "Четвертий"]);
  
  header.mount(content);
  list.mount(content);
});

// 3. Реєстрація маршруту /images
router.register("/images", () => {
  const content = document.getElementById("content")!;
  content.innerHTML = ""; // Очищаємо контейнер
  
  const header = new HeaderComponent("Галерея");
  const img = new ImageComponent(
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop", 
    "Фото"
  );
  
  header.mount(content);
  img.mount(content);
});

// 4. Запуск роутера
router.start();
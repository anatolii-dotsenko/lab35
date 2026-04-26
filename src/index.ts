import { Component } from "./core/Component.js";
import { HeaderComponent } from "./components/HeaderComponent.js";
import { ListComponent } from "./components/ListComponent.js";
import { ImageComponent } from "./components/ImageComponent.js";

// Головний компонент-контейнер
class App extends Component {
  constructor() {
    super("div");
  }

  render(): void {
    this.element.style.fontFamily = "Arial, sans-serif";
    this.element.style.maxWidth = "800px";
    this.element.style.margin = "0 auto";
    this.element.style.padding = "20px";
  }
}

// 1. Створюємо екземпляр застосунку
const app = new App();

// 2. Створюємо дочірні компоненти
const header = new HeaderComponent("Власна система компонентів на TS");
const list = new ListComponent(["Яблуко", "Банан", "Манго", "Апельсин"]);
const image = new ImageComponent(
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop", 
  "Свіжі фрукти"
);

// 3. Додаємо компоненти до головного контейнера
app.addChild(header);
app.addChild(list);
app.addChild(image);

// 4. Монтуємо застосунок у DOM
const rootElement = document.getElementById("app");
if (rootElement) {
  app.mount(rootElement);
} else {
  console.error("Елемент #app не знайдено на сторінці!");
}
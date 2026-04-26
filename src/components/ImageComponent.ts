import { Component } from "../core/Component.js";

export class ImageComponent extends Component {
  private src: string;
  private alt: string;

  constructor(src: string, alt: string) {
    super("div"); // Використовуємо div як контейнер для картинки
    this.src = src;
    this.alt = alt;
  }

  render(): void {
    this.element.innerHTML = `<img src="${this.src}" alt="${this.alt}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" />`;
    this.element.style.textAlign = "center";
  }
}
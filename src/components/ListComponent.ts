import { Component } from "../core/Component.js";

export class ListComponent extends Component {
  private items: string[];

  constructor(items: string[]) {
    super("ul");
    this.items = items;
  }

  render(): void {
    this.element.innerHTML = ""; // Очищаємо перед рендером
    this.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      li.style.padding = "10px";
      li.style.borderBottom = "1px solid #ddd";
      this.element.appendChild(li);
    });

    this.element.style.listStyleType = "none";
    this.element.style.padding = "0";
    this.element.style.maxWidth = "400px";
    this.element.style.margin = "0 auto 20px auto";
  }
}
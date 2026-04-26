import { Component } from "../core/Component.js";

export class HeaderComponent extends Component {
  private title: string;

  constructor(title: string) {
    super("header");
    this.title = title;
  }

  render(): void {
    this.element.innerHTML = `<h1>${this.title}</h1>`;
    this.element.style.textAlign = "center";
    this.element.style.color = "#2c3e50";
    this.element.style.padding = "20px";
    this.element.style.backgroundColor = "#ecf0f1";
    this.element.style.borderRadius = "8px";
    this.element.style.marginBottom = "20px";
  }
}
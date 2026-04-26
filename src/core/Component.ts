export abstract class Component {
  protected element: HTMLElement;
  private children: Component[] = [];

  constructor(tag: string) {
    this.element = document.createElement(tag);
  }

  abstract render(): void;

  addChild(child: Component): void {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    child.render();
  }

  getElement(): HTMLElement {
    return this.element;
  }

  mount(parent: HTMLElement): void {
    this.render();
    parent.appendChild(this.element);
  }
}
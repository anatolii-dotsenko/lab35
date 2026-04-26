// src/Router.ts
type RouteHandler = () => void;

export class Router {
  private routes = new Map<string, RouteHandler>();
  private container: HTMLElement;
  private STORAGE_KEY = "last_route";

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)!;
    
    // Відстежуємо навігацію браузера (кнопки назад/вперед)
    window.addEventListener("popstate", () => {
      this.handleRoute(location.pathname);
    });
  }

  register(path: string, handler: RouteHandler): void {
    this.routes.set(path, handler);
  }

  navigate(path: string): void {
    history.pushState(null, "", path);
    localStorage.setItem(this.STORAGE_KEY, path);
    this.handleRoute(path);
  }

  start(): void {
    const current = location.pathname;
    
    if (current === "/") {
      // Перевіряємо збережену локацію
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved && saved !== "/" && this.routes.has(saved)) {
        this.navigate(saved);
        return;
      }
      this.navigate("/list");
      return;
    }
    
    this.handleRoute(current);
  }

  private handleRoute(path: string): void {
    const handler = this.routes.get(path);
    if (handler) {
      handler();
    } else {
      this.navigate("/list");
    }
  }

  setContent(html: string): void {
    this.container.innerHTML = html;
  }
}
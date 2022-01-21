class Todo {
  el = null;
  list = [];

  constructor() {
    this.el = document.createElement("ul");
    document.body.appendChild(this.el);
  }

  add(todo) {
    const newLength = this.list.push(todo);
    const labelEl = document.createElement("label");
    const inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    const textEl = document.createElement("p");
    textEl.textContent = todo;
    labelEl.appendChild(inputEl);
    labelEl.appendChild(textEl);
    this.el.appendChild(labelEl);
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Remove";
    buttonEl.onclick = () => {
      this.remove(newLength - 1);
    };
    this.el.appendChild(buttonEl);
  }

  remove(index) {
    this.list = this.list.filter((todo, todoIndex) => index !== todoIndex);
  }
}

const todoList = new Todo();

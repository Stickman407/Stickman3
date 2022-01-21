// class User {
//   el = null;
//   name = null;
//   email = null;

//   // Dont Repeat Yourself
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.el = document.createElement("div");
//     this.updateText();
//     document.body.appendChild(this.el);
//   }

//   setName(name) {
//     this.name = name;
//     this.updateText();
//   }

//   updateText() {
//     this.el.textContent = "";
//     const nameEl = document.createElement("h2");
//     nameEl.textContent = this.name || "No Name";
//     const emailEl = document.createElement("p");
//     emailEl.textContent = this.email || "Email Not Given";
//     this.el.appendChild(nameEl);
//     this.el.appendChild(emailEl);
//   }

//   setEmail(email) {
//     this.email = email;
//     this.updateText();
//   }
// }

// const cj = new User("cj", "myemail@me.com");
// setTimeout(() => {
//   cj.setEmail("cdasd@madnesslabs.net");
// }, 5000);
// console.log(cj);

// class cjTodo {
//   text = null;
//   checked = false;
//   el = null;

//   constructor(text) {
//     this.el = document.createElement("label");
//     const inputEl = document.createElement("input");
//     inputEl.type = "checkbox";
//     this.text = text;
//     this.el.textContent = text;
//     this.el.appendChild(inputEl);
//     document.body.appendChild(this.el);
//     inputEl.oninput = (event) => {
//       this.check(event.target.checked);
//       console.log(event);
//     };
//   }

//   check(checked) {
//     this.checked = checked;
//     if (this.checked) {
//       this.el.classList.add("checked");
//     } else {
//       this.el.classList.remove("checked");
//     }
//   }
// }
// todos.push(new cjTodo("wipe"));

const items = ["phone", { name: "sam" }, "monster", "viper"];
for (thing of items) {
  if (typeof thing === "object" && thing.name) {
    console.log(thing.name);
  }
}

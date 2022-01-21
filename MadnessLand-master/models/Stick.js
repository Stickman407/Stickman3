// TODOS
//const todos = [];
// class Stick {
//   el = null;
//   shape = "square";

//   constructor() {
//     this.el = document.createElement("Hello");
//     this.el.disabled = true;
//     this.el.style.display = "block";
//     this.el.style.height = "100px";
//     this.el.style.width = "100px";
//     this.el.style.background = "green";
//     this.el.style.transition = "1s ease all";

//     this.el.addEventListener("click", (eventdata) => {
//       console.log(eventdata);
//       if (this.shape === "square") {
//         this.shape = "circle";
//         this.el.style.borderRadius = "100%";
//       } else {
//         this.shape = "square";
//         this.el.style.borderRadius = "0%";
//       }
//     });
//     document.body.appendChild(this.el);
//   }
// }
// new Stick();

// class Stick {
//   el = null;
//   name = null;
//   email = null;

//   constructor(name, email) {
//     this.el = document.createElement("div");
//     this.name = name;
//     this.email = email;
//     this.el.textContent = `${this.name || "No Name"} - ${
//       this.email || "No Email"
//     }`;
//     document.body.appendChild(this.el);
//   }

//   updateText() {
//     this.el.textContent = `${this.name || "No Name"} : ${
//       this.email || "No Email"
//     }`;
//   }

//   setName(name) {
//     this.name = name;
//     this.updateText();
//   }

//   setEmail(email)
//     this.email = email;
//     this.updateText();
//   }
// }

// const yo = new Stick("Stickman", "email@email.com");
// setTimeout(() => {
//   yo.setEmail("booby@madnesslabs.net");
// }, 5000);
// console.log(yo);

// class stickToDo {
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
//       console.log(event.target.checked);
//       this.check(event.target.checked);
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
// todos.push(new stickToDo("flush"));
// 7 Primitives

// if (A === B && C === D) {// TRUE}
// A !== B
// A > B
// A < B
const something = [
  {
    username: "Stacy",
    email: "stacy@fuck.me",
    address: {
      street1: "520 Hannah way",
      stree2: null,
      city: "Arnold",
      state: "MO",
      zip: 63366,
    },
  },
  { username: "Steve", email: "steve@fuck.me" },
  { username: "Susan" },
];

for ([i, thing] of something.entries()) {
  if (typeof thing === `object` && thing.username) {
    const state = thing?.address?.state || "MT";
    console.log(thing.username, thing.email, state);
  }
}
const myPeople = "dog,cat,mouse,eggs,cheese";
const poeple = myPeople.split(",");
const humanCentiStr = poeple
  .filter((person) => person !== "eggs")
  .sort((a, b) => a < b)
  .join("8==>");

// if (typeof bobby === `undefined`) {
//   throw new Error("inform the government");
// }

import "./styles.css";

export class List {
  render(...items) {
    let parent = document.createElement("ul");
    items.forEach((elm) => {
      let child = document.createElement("li");
      child.innerText = elm;
      parent.append(child);
      document.body.append(parent);
    });

    const parentElm = document.querySelector("ul");
    const childElm = document.querySelectorAll("li");

    parentElm.addEventListener("click", function (evt) {
      if (evt.target.closest("li") && evt.target.classList.contains("active")) {
        evt.target.classList.remove("active");
      } else if (evt.target.closest("li")) {
        childElm.forEach((elm) => {
          elm.classList.remove("active");
        });
        evt.target.classList.toggle("active");
      }
    });
  }
}

import './styles.css';
export class List {
  render(...items){
    let parent = document.createElement('ul');
    items.forEach(elm => {
      let child = document.createElement('li');
      child.addEventListener('click', function () {
        this.classList.toggle("active");
      });
      child.innerText = elm;
      parent.append(child);
    });
    document.body.append(parent);
  }
}